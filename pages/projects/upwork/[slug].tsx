import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import EngagementPage, { type RelatedEngagement } from "../../../src/components/Portfolio/EngagementPage";
import type { EngagementPageContent } from "../../../src/content/portfolio/engagementTypes";
import {
  engagementsBySlug,
  getEngagementPageContent,
  getEngagementSummary,
  publishedEngagements
} from "../../../src/content/portfolio/engagements";
import { projectCategoryFromLabel } from "../../../src/analytics/events";

interface Params extends ParsedUrlQuery {
  slug: string;
}
type Props = { engagement: EngagementPageContent; related: RelatedEngagement[] };

export default function UpworkEngagementRoute(props: Props) {
  return <EngagementPage {...props} />;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: publishedEngagements.map(record => ({ params: { slug: record.identity.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const record = params?.slug ? engagementsBySlug.get(params.slug) : undefined;
  if (!record) return { notFound: true };
  const { existsSync } = await import("fs");
  const { join } = await import("path");
  for (const asset of record.assets) {
    if (!existsSync(join(process.cwd(), "public", asset.src))) throw new Error(`Missing Upwork asset: ${asset.src}`);
  }
  const related = record.relatedSlugs.map(slug => {
    const other = engagementsBySlug.get(slug)!;
    const summary = getEngagementSummary(other);
    return {
      id: other.identity.id,
      slug,
      name: other.identity.name,
      category: projectCategoryFromLabel(summary.showcase.category)!
    };
  });
  return { props: { engagement: getEngagementPageContent(record), related } };
};

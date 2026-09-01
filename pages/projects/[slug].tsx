import CaseStudyPage from "../../src/components/Portfolio/CaseStudyPage";
import { caseStudiesBySlug, flagshipCaseStudies, type CaseStudy } from "../../src/content/portfolio";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = { caseStudy: CaseStudy };

interface Params extends ParsedUrlQuery {
  slug: string;
}

const IndividualProjectPage = ({ caseStudy }: Props) => <CaseStudyPage caseStudy={caseStudy} />;

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const slug = params?.slug;
  const caseStudy = slug ? caseStudiesBySlug.get(slug) : undefined;

  if (caseStudy) {
    const { existsSync } = await import("fs");
    const { join } = await import("path");
    const missingAssets = caseStudy.assets.filter(asset => !existsSync(join(process.cwd(), "public", asset.src)));

    if (missingAssets.length > 0) {
      throw new Error(
        `Case study "${caseStudy.identity.slug}" has missing public assets: ${missingAssets
          .map(asset => asset.src)
          .join(", ")}`
      );
    }

    return { props: { caseStudy } };
  }

  return { notFound: true };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: flagshipCaseStudies.map(caseStudy => {
      return {
        params: {
          slug: caseStudy.identity.slug
        }
      };
    }),
    fallback: false
  };
};

export default IndividualProjectPage;

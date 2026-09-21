import type {
  Engagement,
  EngagementPageContent,
  EngagementSection,
  EngagementSummary,
  PublicEngagementSection
} from "../engagementTypes";
import { validateEngagement, validateEngagementRegistry } from "../validateEngagement";
import { engagementRecords } from "./records";
import { technicalExamples } from "../technicalExamples";
import { getEngagementShowcase } from "../engagementShowcase";

// Import this registry only from server-side page loaders. Draft content never reaches props.
const records = validateEngagementRegistry(engagementRecords);

export const publishedEngagements = records
  .filter(record => record.publication === "ready")
  .sort(
    (a, b) => b.identity.startDate.localeCompare(a.identity.startDate) || a.identity.id.localeCompare(b.identity.id)
  );

export const engagementsBySlug = new Map(publishedEngagements.map(record => [record.identity.slug, record]));

const requireReady = (record: Engagement) => {
  if (record.publication !== "ready") throw new Error("Cannot serialize an unpublished engagement");
  validateEngagement(record);
};

const publicIdentity = ({ id, slug, name, workType, startDate, endDate }: Engagement["identity"]) => ({
  id,
  slug,
  name,
  workType,
  startDate,
  endDate
});

const publicSection = (section: EngagementSection | null): PublicEngagementSection => {
  if (!section) throw new Error("Cannot serialize an incomplete engagement section");
  return { title: section.title, paragraphs: [...section.paragraphs] };
};

const publicDelivery = (delivery: Engagement["delivery"]): EngagementPageContent["delivery"] =>
  delivery.state === "delivered"
    ? { state: "delivered", completedAt: delivery.completedAt }
    : { state: "not-established" };

const publicFeedback = (record: Engagement): EngagementPageContent["feedback"] => {
  const feedback = record.feedback;
  if (feedback.state === "not-rechecked") throw new Error("Cannot serialize unverified feedback");
  if (feedback.state !== "available") return { state: feedback.state };
  const source = record.evidence.find(item => item.id === feedback.evidenceId)!.source!;
  return {
    state: "available",
    summary: feedback.summary,
    attribution: feedback.attribution,
    observedAt: source.asOf!,
    ...(source.access === "public" && source.href ? { sourceHref: source.href } : {}),
    ...(feedback.quote ? { quote: feedback.quote } : {})
  };
};

export const getEngagementPageContent = (record: Engagement): EngagementPageContent => {
  requireReady(record);
  const { presentation } = record;
  const visibleAssetIds = [presentation.primaryVisualId, presentation.socialImageId].filter(Boolean);
  return {
    identity: publicIdentity(record.identity),
    showcase: getEngagementShowcase(record.identity.id),
    format: record.format,
    summary: record.summary,
    situation: publicSection(record.situation),
    contribution: record.contribution ? publicSection(record.contribution) : null,
    ...(record.scope ? { scope: publicSection(record.scope) } : {}),
    ...(record.technicalContext
      ? {
          technicalContext: {
            illustrative: true as const,
            points: record.technicalContext.points.map(({ title, explanation, tradeoff }) => ({
              title,
              explanation,
              tradeoff
            })),
            examples: record.technicalContext.examples.map(id => technicalExamples[id].name)
          }
        }
      : {}),
    implementation: record.implementation.map(publicSection),
    technologies: record.technologies.map(item => item.name),
    contract: { state: record.contract.state, observedAt: record.contract.observedAt },
    delivery: publicDelivery(record.delivery),
    product: { state: record.product.state },
    feedback: publicFeedback(record),
    presentation: {
      shareTitle: presentation.shareTitle,
      shareDescription: presentation.shareDescription,
      ...(presentation.primaryVisualId ? { primaryVisualId: presentation.primaryVisualId } : {}),
      ...(presentation.socialImageId ? { socialImageId: presentation.socialImageId } : {})
    },
    assets: record.assets
      .filter(asset => visibleAssetIds.includes(asset.id))
      .map(asset => ({
        id: asset.id,
        src: asset.src,
        alt: asset.alt,
        ...(asset.caption ? { caption: asset.caption } : {})
      })),
    links: record.links.map(link => ({ label: link.label, href: link.href }))
  };
};

export const getEngagementSummary = (record: Engagement): EngagementSummary => {
  requireReady(record);
  return {
    identity: publicIdentity(record.identity),
    showcase: getEngagementShowcase(record.identity.id),
    summary: record.summary,
    contract: { state: record.contract.state, observedAt: record.contract.observedAt },
    delivery: publicDelivery(record.delivery),
    technologies: record.technologies.map(item => item.name)
  };
};

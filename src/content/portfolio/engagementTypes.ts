import type { AssetRecord, CaseStudy, CurrentStatus, EvidenceItem, LinkRecord } from "./types";
import type { TechnicalExampleId } from "./technicalExamples";
import type { EngagementShowcase } from "./engagementShowcase";

export type EngagementEvidence = EvidenceItem & {
  basis: "contract-record" | "job-description" | "client-feedback" | "owner-confirmation" | "artifact";
};

export type EngagementSection = {
  title: string;
  paragraphs: string[];
  evidenceIds: string[];
};

export type EngineeringPoint = {
  title: string;
  explanation: string;
  tradeoff: string;
};

export type Engagement = Pick<CaseStudy, "assets" | "links"> & {
  identity: {
    id: string;
    slug: string;
    name: string;
    workType: "client-work";
    startDate: string;
    endDate: string | null;
  };
  publication: "draft" | "ready";
  format: "case-note" | "engagement-brief";
  summary: string;
  situation: EngagementSection | null;
  contribution: EngagementSection | null;
  scope?: EngagementSection;
  technicalContext?: {
    illustrative: true;
    points: EngineeringPoint[];
    examples: TechnicalExampleId[];
  };
  implementation: EngagementSection[];
  evidence: EngagementEvidence[];
  technologies: Array<{ name: string; evidenceIds: string[] }>;
  contract: { state: "completed" | "open"; observedAt: string; evidenceId: string };
  delivery: { state: "not-established" } | { state: "delivered"; evidenceId: string; completedAt: string | null };
  product: { state: "not-verified" } | { state: CurrentStatus; evidenceId: string };
  feedback:
    | { state: "none" | "removed" | "not-yet-left" | "not-rechecked" }
    | { state: "available"; evidenceId: string; summary: string; attribution: string; quote?: string };
  presentation: {
    shareTitle: string;
    shareDescription: string;
    primaryVisualId?: string;
    socialImageId?: string;
  };
  relatedSlugs: string[];
};

export type PublicEngagementSection = Pick<EngagementSection, "title" | "paragraphs">;

// Only visitor-facing fields belong in serialized page data. Provenance stays server-side.
export type EngagementPageContent = {
  identity: Engagement["identity"];
  showcase: EngagementShowcase;
  format: Engagement["format"];
  summary: string;
  situation: PublicEngagementSection;
  contribution: PublicEngagementSection | null;
  scope?: PublicEngagementSection;
  technicalContext?: { illustrative: true; points: EngineeringPoint[]; examples: string[] };
  implementation: PublicEngagementSection[];
  technologies: string[];
  contract: Pick<Engagement["contract"], "state" | "observedAt">;
  delivery: { state: "not-established" } | { state: "delivered"; completedAt: string | null };
  product: { state: Engagement["product"]["state"] };
  feedback:
    | { state: "none" | "removed" | "not-yet-left" }
    | {
        state: "available";
        summary: string;
        attribution: string;
        observedAt: string;
        sourceHref?: string;
        quote?: string;
      };
  presentation: Engagement["presentation"];
  assets: Array<Pick<AssetRecord, "id" | "src" | "alt" | "caption">>;
  links: Array<Pick<LinkRecord, "label" | "href">>;
};

export type EngagementSummary = Pick<
  EngagementPageContent,
  "identity" | "showcase" | "summary" | "contract" | "delivery" | "technologies"
>;

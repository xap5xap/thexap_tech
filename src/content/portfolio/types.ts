export type CaseStudyId = string;
export type EvidenceId = string;
export type AssetId = string;

export type WorkType = "client-work" | "owned-product-experiment" | "concept-product";

export type CurrentStatus = "live" | "in-active-use" | "in-validation" | "prototype" | "no-longer-active";

export type EvidenceState = "observed" | "verified-outcome" | "assumption" | "hypothesis" | "illustrative" | "planned";

export type NarrativeCompletion = "complete" | "not-yet-known" | "not-applicable";

export type OwnershipArea =
  | "product-strategy"
  | "brand"
  | "ux"
  | "engineering"
  | "ai-system"
  | "film"
  | "launch"
  | "distribution";

export type ProductCycleStage = "discover" | "position" | "design" | "build" | "launch" | "distribute" | "learn";

export type CaseStudy = {
  identity: CaseStudyIdentity;
  ownership: OwnershipRecord;
  presentation: PresentationRecord;
  narrative: CaseStudyNarrative;
  evidence: EvidenceItem[];
  assets: AssetRecord[];
  links: LinkRecord[];
  supportingDetails?: SupportingDetails;
};

export type CaseStudyIdentity = {
  id: CaseStudyId;
  slug: string;
  name: string;
  workType: WorkType;
  currentStatus: CurrentStatus;
  statusEvidenceId: EvidenceId;
  timeframe: string;
  audience: string;
  transformation: string;
  conciseSummary: string;
};

export type OwnershipRecord = {
  summary: string;
  areas: OwnershipArea[];
  productCycleStages: Array<{
    stage: ProductCycleStage;
    evidenceIds: EvidenceId[];
  }>;
  collaborators?: Array<{
    nameOrRole: string;
    contribution: string;
  }>;
};

export type PresentationRecord = {
  primaryVisualId: AssetId;
  cardEvidenceId: EvidenceId;
  shareTitle: string;
  shareDescription: string;
  socialImageId?: AssetId;
};

export type CaseStudyNarrative = {
  transformation: NarrativeSection;
  audience: NarrativeSection;
  productBet: NarrativeSection;
  ownership: NarrativeSection;
  experienceAndSystem: NarrativeSection;
  decisions: NarrativeSection;
  launchAndDistribution: NarrativeSection;
  evidenceAndValidation: NarrativeSection;
  learningAndNextIteration: NarrativeSection;
};

export type NarrativeSection =
  | {
      completion: "complete";
      summary: string;
      blocks: NarrativeBlock[];
      evidenceIds: EvidenceId[];
      assetIds: AssetId[];
    }
  | {
      completion: Exclude<NarrativeCompletion, "complete">;
      reason: string;
      blocks?: NarrativeBlock[];
      evidenceIds?: EvidenceId[];
      assetIds?: AssetId[];
    };

export type NarrativeBlock =
  | { kind: "paragraph"; body: string }
  | { kind: "list"; items: string[] }
  | { kind: "media"; assetId: AssetId }
  | { kind: "product-flow"; title: string; steps: string[] }
  | {
      kind: "system-behavior";
      job: string;
      inputs: string[];
      outputs: string[];
      failureModes: string[];
      safeguards: string[];
      evaluation: string[];
    }
  | {
      kind: "decision";
      decision: string;
      context: string;
      alternatives: string[];
      tradeOffs: string[];
      result: string;
    }
  | { kind: "evidence"; evidenceId: EvidenceId };

export type EvidenceItem = {
  id: EvidenceId;
  state: EvidenceState;
  statement: string;
  scope: string;
  source?: EvidenceSource;
  assetIds?: AssetId[];
  disclosure?: string;
  validation?: ValidationPlan;
};

export type EvidenceSource = {
  label: string;
  href?: string;
  access: "public" | "privately-verified" | "withheld";
  asOf?: string;
};

export type ValidationPlan = {
  audience: string;
  method: string;
  signal: string;
  decisionRule: string;
};

export type AssetRecord = {
  id: AssetId;
  kind:
    | "product-screen"
    | "workflow"
    | "system-diagram"
    | "film-frame"
    | "launch-asset"
    | "data-visual"
    | "document"
    | "illustration";
  src: string;
  alt: string;
  caption?: string;
  evidenceState: EvidenceState;
  permission: "owned" | "approved" | "pending";
};

export type LinkRecord = {
  label: string;
  href: string;
  kind: "product" | "prototype" | "source" | "launch" | "evidence";
  status: "verified" | "pending" | "retired";
};

export type SupportingDetails = {
  technologies?: string[];
  services?: string[];
};

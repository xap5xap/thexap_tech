import type { AssetId, CaseStudy, EvidenceId, EvidenceItem, EvidenceState, NarrativeBlock } from "./types";

const CASE_STUDY_KEYS = [
  "identity",
  "ownership",
  "presentation",
  "narrative",
  "evidence",
  "assets",
  "links",
  "supportingDetails"
] as const;

const NARRATIVE_KEYS = [
  "transformation",
  "audience",
  "productBet",
  "ownership",
  "experienceAndSystem",
  "decisions",
  "launchAndDistribution",
  "evidenceAndValidation",
  "learningAndNextIteration"
] as const;

const PUBLICATION_EVIDENCE_STATES: EvidenceState[] = ["observed", "verified-outcome"];

const fail = (slug: string, message: string): never => {
  throw new Error(`Case study "${slug}": ${message}`);
};

const assertUniqueIds = (slug: string, ids: string[], label: string) => {
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  if (duplicates.length > 0) {
    fail(slug, `duplicate ${label}: ${Array.from(new Set(duplicates)).join(", ")}`);
  }
};

const referencedIdsForBlock = (block: NarrativeBlock) => {
  const evidenceIds: EvidenceId[] = block.kind === "evidence" ? [block.evidenceId] : [];
  const assetIds: AssetId[] = block.kind === "media" ? [block.assetId] : [];

  return { evidenceIds, assetIds };
};

const requireEvidence = (
  slug: string,
  evidenceById: Map<EvidenceId, EvidenceItem>,
  evidenceId: EvidenceId,
  context: string
): EvidenceItem => {
  const evidence = evidenceById.get(evidenceId);

  if (!evidence) {
    return fail(slug, `${context} references missing evidence "${evidenceId}"`);
  }

  return evidence;
};

export const validateCaseStudy = (caseStudy: CaseStudy) => {
  const { identity, ownership, presentation, narrative, evidence, assets, links } = caseStudy;
  const slug = identity.slug || "unknown";
  const topLevelKeys = Object.keys(caseStudy).sort();
  const allowedTopLevelKeys = CASE_STUDY_KEYS.filter(
    key => key !== "supportingDetails" || caseStudy.supportingDetails
  ).sort();

  if (topLevelKeys.join("|") !== allowedTopLevelKeys.join("|")) {
    fail(slug, "contains an unknown or missing top-level field");
  }

  if (
    !identity.id ||
    !identity.slug ||
    !identity.name ||
    !identity.audience ||
    !identity.transformation ||
    !identity.conciseSummary ||
    !identity.timeframe
  ) {
    fail(slug, "identity is incomplete");
  }

  if (!ownership.summary || ownership.areas.length === 0 || ownership.productCycleStages.length === 0) {
    fail(slug, "ownership is incomplete");
  }

  if (!presentation.primaryVisualId || !presentation.cardEvidenceId) {
    fail(slug, "presentation is incomplete");
  }

  if (!presentation.shareTitle || !presentation.shareDescription) {
    fail(slug, "share title and description are required");
  }

  const narrativeKeys = Object.keys(narrative).sort();
  const expectedNarrativeKeys = [...NARRATIVE_KEYS].sort();

  if (narrativeKeys.join("|") !== expectedNarrativeKeys.join("|")) {
    fail(slug, "must contain exactly the nine approved narrative sections");
  }

  assertUniqueIds(
    slug,
    evidence.map(item => item.id),
    "evidence IDs"
  );
  assertUniqueIds(
    slug,
    assets.map(asset => asset.id),
    "asset IDs"
  );

  const evidenceById = new Map(evidence.map(item => [item.id, item]));
  const assetById = new Map(assets.map(asset => [asset.id, asset]));
  const statusEvidence = requireEvidence(slug, evidenceById, identity.statusEvidenceId, "current status");

  if (!PUBLICATION_EVIDENCE_STATES.includes(statusEvidence.state)) {
    fail(slug, "current status must be supported by observed evidence or a verified outcome");
  }

  const cardEvidence = requireEvidence(slug, evidenceById, presentation.cardEvidenceId, "card evidence");

  if (!PUBLICATION_EVIDENCE_STATES.includes(cardEvidence.state)) {
    fail(slug, "card evidence cannot be an assumption, hypothesis, illustration, or plan");
  }

  evidence.forEach(item => {
    if (item.state === "verified-outcome") {
      if (!item.source || !item.source.label || !item.source.asOf || !item.scope) {
        fail(slug, `verified outcome "${item.id}" needs a source, scope, and date or period`);
      }
    }

    if (item.state === "hypothesis" && !item.validation) {
      fail(slug, `hypothesis "${item.id}" needs a validation plan`);
    }

    if ((item.state === "illustrative" || item.state === "planned") && !item.disclosure) {
      fail(slug, `${item.state} evidence "${item.id}" needs a visible disclosure`);
    }

    item.assetIds?.forEach(assetId => {
      if (!assetById.has(assetId)) {
        fail(slug, `evidence "${item.id}" references missing asset "${assetId}"`);
      }
    });
  });

  const referencedAssetIds = new Set<AssetId>([
    presentation.primaryVisualId,
    ...(presentation.socialImageId ? [presentation.socialImageId] : [])
  ]);
  let hasSystemBehavior = false;

  NARRATIVE_KEYS.forEach(sectionKey => {
    const section = narrative[sectionKey];

    if (section.completion === "complete" && (!section.summary || section.blocks.length === 0)) {
      fail(slug, `complete section "${sectionKey}" needs a summary and content`);
    }

    if (section.completion !== "complete" && !section.reason) {
      fail(slug, `incomplete section "${sectionKey}" needs a reason`);
    }

    section.evidenceIds?.forEach(evidenceId => {
      requireEvidence(slug, evidenceById, evidenceId, `section "${sectionKey}"`);
    });

    section.assetIds?.forEach(assetId => referencedAssetIds.add(assetId));

    section.blocks?.forEach(block => {
      const referenced = referencedIdsForBlock(block);
      referenced.evidenceIds.forEach(evidenceId => {
        requireEvidence(slug, evidenceById, evidenceId, `section "${sectionKey}"`);
      });
      referenced.assetIds.forEach(assetId => referencedAssetIds.add(assetId));

      if (block.kind === "system-behavior") {
        hasSystemBehavior = true;
      }
    });
  });

  ownership.productCycleStages.forEach(stage => {
    if (stage.evidenceIds.length === 0) {
      fail(slug, `product-cycle stage "${stage.stage}" needs evidence`);
    }

    stage.evidenceIds.forEach(evidenceId => {
      const item = requireEvidence(slug, evidenceById, evidenceId, `stage "${stage.stage}"`);

      if (!PUBLICATION_EVIDENCE_STATES.includes(item.state)) {
        fail(slug, `stage "${stage.stage}" cannot rely on ${item.state} evidence`);
      }
    });
  });

  if (ownership.areas.includes("ai-system") && !hasSystemBehavior) {
    fail(slug, "AI-system ownership needs a system-behavior block");
  }

  referencedAssetIds.forEach(assetId => {
    const asset = assetById.get(assetId);

    if (!asset) {
      return fail(slug, `references missing asset "${assetId}"`);
    }

    if (!asset.src || !asset.alt.trim()) {
      fail(slug, `asset "${asset.id}" needs a source and meaningful alt text`);
    }

    if (asset.permission === "pending") {
      fail(slug, `asset "${asset.id}" has pending permission`);
    }

    if (
      (asset.evidenceState === "illustrative" || asset.evidenceState === "planned") &&
      !asset.caption?.toLowerCase().includes(asset.evidenceState)
    ) {
      fail(slug, `asset "${asset.id}" needs a visible ${asset.evidenceState} caption`);
    }
  });

  if (links.some(link => link.status !== "verified")) {
    fail(slug, "published links must be verified");
  }

  return caseStudy;
};

export const validateCaseStudyRegistry = (caseStudies: CaseStudy[]) => {
  const validatedCaseStudies = caseStudies.map(validateCaseStudy);

  assertUniqueIds(
    "portfolio registry",
    validatedCaseStudies.map(caseStudy => caseStudy.identity.slug),
    "slugs"
  );

  return validatedCaseStudies;
};

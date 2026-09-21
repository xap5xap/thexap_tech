import type { Engagement, EngagementEvidence, EngagementSection } from "./engagementTypes";
import { technicalExamples } from "./technicalExamples";

const CONTRIBUTION_BASES: EngagementEvidence["basis"][] = ["client-feedback", "owner-confirmation", "artifact"];
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*-\d{4}(?:-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

const fail = (record: Engagement, message: string): never => {
  throw new Error(`Upwork engagement "${record.identity.id}": ${message}`);
};

const validDate = (value: string) => {
  const date = new Date(value);
  return DATE.test(value) && !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
};

export const isSafePublicUrl = (href: string) => {
  try {
    const url = new URL(href);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.port &&
      !url.search &&
      !url.hash &&
      (url.hostname === "www.upwork.com" || url.hostname === "upwork.com") &&
      /^\/(freelancers|jobs)\/[^/]+\/?$/.test(url.pathname)
    );
  } catch {
    return false;
  }
};

export const validateEngagement = (record: Engagement): Engagement => {
  const { identity } = record;
  if (!/^UW-(0[1-9]|1[1-9]|2[0-9])$/.test(identity.id)) fail(record, "invalid or excluded identity");
  if (!SLUG.test(identity.slug)) fail(record, "requires a unique date-qualified slug");
  if (!identity.name.trim() || identity.workType !== "client-work") fail(record, "incomplete identity");
  if (!validDate(identity.startDate) || (identity.endDate !== null && !validDate(identity.endDate))) {
    fail(record, "invalid contract dates");
  }
  if (identity.endDate && identity.endDate < identity.startDate) fail(record, "contract ends before it starts");
  if (record.contract.state === "open" && identity.endDate) fail(record, "open contract cannot have an end date");
  if (record.contract.state === "completed" && !identity.endDate) fail(record, "completed contract needs an end date");
  if (!validDate(record.contract.observedAt)) fail(record, "contract observation needs a date");
  if (!["completed", "open"].includes(record.contract.state)) fail(record, "invalid contract state");
  if (!["case-note", "engagement-brief"].includes(record.format)) fail(record, "invalid engagement format");

  const evidence = new Map(record.evidence.map(item => [item.id, item]));
  const assets = new Map(record.assets.map(item => [item.id, item]));
  if (evidence.size !== record.evidence.length || assets.size !== record.assets.length)
    fail(record, "duplicate evidence or asset IDs");
  const requireEvidence = (id: string) => {
    const item = evidence.get(id);
    if (!item) return fail(record, `missing evidence ${id}`);
    if (!item.statement.trim() || !item.scope.trim() || !item.source?.label || !item.source.asOf) {
      fail(record, `incomplete provenance for ${id}`);
    }
    if (!["observed", "verified-outcome"].includes(item.state)) fail(record, `unsupported evidence state for ${id}`);
    if (item.source?.href && (item.source.access !== "public" || !isSafePublicUrl(item.source.href))) {
      fail(record, `unsafe or private source URL for ${id}`);
    }
    return item;
  };
  record.evidence.forEach(item => requireEvidence(item.id));
  if (requireEvidence(record.contract.evidenceId).basis !== "contract-record")
    fail(record, "contract state needs platform evidence");
  if (record.delivery.state === "delivered") {
    if (!CONTRIBUTION_BASES.includes(requireEvidence(record.delivery.evidenceId).basis)) {
      fail(record, "delivery cannot be inferred from a contract or job ad");
    }
    if (record.delivery.completedAt && !validDate(record.delivery.completedAt)) fail(record, "invalid delivery date");
  }
  if (record.product.state !== "not-verified" && requireEvidence(record.product.evidenceId).basis !== "artifact") {
    fail(record, "current product availability needs artifact evidence");
  }
  if (record.feedback.state === "available") {
    if (!record.feedback.summary?.trim() || !record.feedback.attribution?.trim()) {
      fail(record, "feedback requires visitor-facing copy and attribution");
    }
    if (requireEvidence(record.feedback.evidenceId).basis !== "client-feedback")
      fail(record, "feedback needs its own client source");
    if (
      record.feedback.quote &&
      !requireEvidence(record.feedback.evidenceId).statement.includes(record.feedback.quote)
    ) {
      fail(record, "quote must be an exact excerpt of the recorded feedback");
    }
  }

  const section = (value: EngagementSection | null | undefined, personal = false) => {
    if (!value) return;
    if (
      !value.title.trim() ||
      !value.paragraphs.length ||
      value.paragraphs.some(p => !p.trim()) ||
      !value.evidenceIds.length
    ) {
      fail(record, "empty narrative section");
    }
    const sources = value.evidenceIds.map(requireEvidence);
    if (personal && !sources.some(item => CONTRIBUTION_BASES.includes(item.basis))) {
      fail(record, "personal contribution needs more than a title or job description");
    }
  };
  section(record.situation);
  section(record.contribution, true);
  section(record.scope);
  if (
    record.scope &&
    !record.scope.evidenceIds.some(id => ["contract-record", "job-description"].includes(requireEvidence(id).basis))
  ) {
    fail(record, "engagement scope needs its contract or job description");
  }
  if (record.technicalContext) {
    const context = record.technicalContext;
    if (
      context.illustrative !== true ||
      !context.points.length ||
      context.points.some(point => !point.title.trim() || !point.explanation.trim() || !point.tradeoff.trim())
    ) {
      fail(record, "technical examples require an explicit illustrative disclosure and explanation");
    }
    for (const id of context.examples) {
      const example = technicalExamples[id];
      if (!example || example.availableBy > identity.startDate)
        fail(record, "technical example is unavailable for the period");
    }
  }
  record.implementation.forEach(value => section(value, true));
  record.technologies.forEach(item => {
    if (!item.name.trim() || !item.evidenceIds.length) fail(record, "technology lacks provenance");
    item.evidenceIds.forEach(requireEvidence);
  });
  record.links.forEach(link => {
    if (link.status !== "verified" || !isSafePublicUrl(link.href)) fail(record, "unverified or unsafe public link");
  });
  record.assets.forEach(asset => {
    if (!/^\/images\/projects\/[a-zA-Z0-9/_-]+\.(png|jpg|jpeg|webp)$/.test(asset.src) || !asset.alt.trim()) {
      fail(record, "invalid public asset or missing alternative text");
    }
    if (asset.permission === "pending") fail(record, "asset permission pending");
    if (asset.evidenceState === "illustrative" && !asset.caption?.toLowerCase().includes("illustrative")) {
      fail(record, "illustrative media needs a visible caption");
    }
    if (!["observed", "verified-outcome", "illustrative"].includes(asset.evidenceState))
      fail(record, "unpublishable media");
  });
  record.evidence.forEach(item =>
    item.assetIds?.forEach(id => {
      if (!assets.has(id)) fail(record, `missing evidence asset ${id}`);
    })
  );
  [record.presentation.primaryVisualId, record.presentation.socialImageId].filter(Boolean).forEach(id => {
    if (!assets.has(id!)) fail(record, `missing presentation asset ${id}`);
  });
  if (record.publication === "ready") {
    if (record.feedback.state === "not-rechecked") fail(record, "client feedback still needs readback");
    if (!record.summary.trim() || !record.situation)
      fail(record, "publication requires a concrete situation and summary");
    if (record.format === "case-note" && !record.contribution)
      fail(record, "case notes require a concrete contribution");
    if (record.format === "engagement-brief" && !record.scope) fail(record, "engagement briefs require recorded scope");
    if (!record.presentation.shareTitle.trim() || !record.presentation.shareDescription.trim())
      fail(record, "missing metadata");
  } else if (record.publication !== "draft") {
    fail(record, "invalid publication state");
  }
  return record;
};

export const validateEngagementRegistry = (records: Engagement[]) => {
  records.forEach(validateEngagement);
  const ids = new Set(records.map(record => record.identity.id));
  const slugs = new Set(records.map(record => record.identity.slug));
  if (ids.size !== records.length || slugs.size !== records.length)
    throw new Error("Duplicate Upwork engagement identity or slug");
  const ready = records.filter(record => record.publication === "ready");
  if (
    new Set(ready.map(record => record.presentation.shareTitle)).size !== ready.length ||
    new Set(ready.map(record => record.presentation.shareDescription)).size !== ready.length
  ) {
    throw new Error("Published Upwork engagements need unique metadata");
  }
  records.forEach(record =>
    record.relatedSlugs.forEach(slug => {
      const related = records.find(candidate => candidate.identity.slug === slug);
      if (
        !related ||
        slug === record.identity.slug ||
        (record.publication === "ready" && related.publication !== "ready")
      ) {
        fail(record, "related engagement must resolve to another publishable record");
      }
    })
  );
  return records;
};

const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const ts = require("typescript");

// Compile repository TypeScript in memory, using the already-installed compiler.
require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const result = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true
    }
  });
  module._compile(result.outputText, filename);
};

require.extensions[".tsx"] = require.extensions[".ts"];

const { validateEngagement, validateEngagementRegistry } = require("../src/content/portfolio/validateEngagement.ts");
const { engagementRecords } = require("../src/content/portfolio/engagements/records.ts");
const {
  publishedEngagements,
  getEngagementPageContent,
  getEngagementSummary
} = require("../src/content/portfolio/engagements/index.ts");
const { getEngagementMetadata, getCaseStudyMetadata } = require("../src/content/portfolio/metadata.ts");
const { engagementStatus, formatContractPeriod } = require("../src/content/portfolio/engagementPresentation.ts");
const { armoniaCaseStudy } = require("../src/content/portfolio/caseStudies/armonia.ts");
const { flagshipCaseStudies } = require("../src/content/portfolio/index.ts");
const { canonicalTechnology, projectCategoryFromLabel } = require("../src/analytics/events.ts");
const { validateCaseStudy } = require("../src/content/portfolio/validateCaseStudy.ts");
const ledger = require("../docs/portfolio/upwork/source-ledger.json");

// A conformance fixture only; it never enters the content registry or generated site.
function fixture() {
  const record = structuredClone(engagementRecords.find(item => item.identity.id === "UW-04"));
  record.publication = "ready";
  record.feedback = {
    state: "available",
    evidenceId: "contribution",
    summary: "The client recognized improvements to their automated test process.",
    attribution: "Upwork client"
  };
  record.presentation.shareDescription = "Test fixture: improving automated tests with backend-service emulators.";
  return record;
}

test("the ledger reconciles 29 records and preserves exactly 28 independent identities", () => {
  assert.equal(ledger.entries.length, 29);
  assert.equal(ledger.entries.filter(row => row.included).length, 28);
  assert.equal(ledger.entries.filter(row => row.platformState === "completed").length, 28);
  assert.equal(ledger.entries.filter(row => row.platformState === "open").length, 1);
  assert.equal(engagementRecords.length, 28);
  assert.deepEqual(
    engagementRecords.map(row => row.identity.id).sort(),
    ledger.entries
      .filter(row => row.included)
      .map(row => row.id)
      .sort()
  );
  assert.equal(new Set(engagementRecords.map(row => row.identity.slug)).size, 28);
  for (const record of engagementRecords) {
    const source = ledger.entries.find(row => row.id === record.identity.id);
    assert.equal(record.identity.slug, source.proposedSlug);
  }
  assert.equal(ledger.entries.find(row => row.id === "UW-10").proposedSlug, null);
});

test("all current records validate and every draft is excluded from publication and serialization", () => {
  validateEngagementRegistry(engagementRecords);
  assert.equal(publishedEngagements.length, 28);
  const unpublished = fixture();
  unpublished.publication = "draft";
  unpublished.identity.id = "UW-01";
  unpublished.identity.slug = "unpublished-fixture-2022";
  const drafts = [...engagementRecords.filter(row => row.publication === "draft"), unpublished];
  for (const draft of drafts) {
    assert.ok(!publishedEngagements.some(row => row.identity.slug === draft.identity.slug));
    assert.throws(() => getEngagementPageContent(draft), /unpublished/);
    assert.throws(() => getEngagementSummary(draft), /unpublished/);
  }
});

test("every published project and recorded technology has a stable analytics identity", () => {
  assert.equal(flagshipCaseStudies.length, 1);
  assert.equal(publishedEngagements.length, 28);
  assert.equal(armoniaCaseStudy.identity.id, "armonia");
  assert.equal(armoniaCaseStudy.identity.slug, "armonia");
  for (const record of publishedEngagements) {
    const summary = getEngagementSummary(record);
    assert.match(summary.identity.id, /^UW-\d{2}$/);
    assert.ok(projectCategoryFromLabel(summary.showcase.category));
    for (const technology of summary.technologies) assert.ok(canonicalTechnology(technology), technology);
  }
  for (const technology of [
    ...(armoniaCaseStudy.supportingDetails.technologies || []),
    ...(armoniaCaseStudy.supportingDetails.services || [])
  ]) {
    assert.ok(canonicalTechnology(technology), technology);
  }
});

test("excluded calls, duplicate IDs and duplicate slugs cannot enter the registry", () => {
  const excluded = fixture();
  excluded.identity.id = "UW-10";
  assert.throws(() => validateEngagement(excluded), /excluded/);
  const a = fixture(),
    b = fixture();
  assert.throws(() => validateEngagementRegistry([a, b]), /Duplicate/);
  b.identity.id = "UW-06";
  assert.throws(() => validateEngagementRegistry([a, b]), /Duplicate/);
});

test("case notes require personal contribution evidence beyond a job title or description", () => {
  const missing = fixture();
  missing.contribution = null;
  assert.throws(() => validateEngagement(missing), /concrete/);
  const titleOnly = fixture();
  titleOnly.contribution.evidenceIds = ["contract"];
  assert.throws(() => validateEngagement(titleOnly), /personal contribution/);
  const adOnly = fixture();
  adOnly.evidence.find(item => item.id === "contribution").basis = "job-description";
  adOnly.feedback = { state: "none" };
  assert.throws(() => validateEngagement(adOnly), /personal contribution/);
  const unchecked = fixture();
  unchecked.feedback = { state: "not-rechecked" };
  assert.throws(() => validateEngagement(unchecked), /readback/);
});

test("open contract, finished delivery, and unknown product availability stay independent", () => {
  const open = structuredClone(engagementRecords.find(row => row.identity.id === "UW-29"));
  validateEngagement(open);
  assert.equal(engagementStatus(open), "Work delivered; contract open");
  assert.equal(open.delivery.completedAt, null);
  assert.equal(open.product.state, "not-verified");
  assert.match(formatContractPeriod(open.identity), /open on Upwork$/);
  open.identity.endDate = "2026-09-20";
  assert.throws(() => validateEngagement(open), /open contract/);
  const inferred = fixture();
  inferred.delivery = { state: "delivered", evidenceId: "contract", completedAt: null };
  assert.throws(() => validateEngagement(inferred), /delivery cannot be inferred/);
  const live = fixture();
  live.product = { state: "live", evidenceId: "contribution" };
  assert.throws(() => validateEngagement(live), /availability needs artifact/);
});

test("invalid dates and reversed periods are rejected", () => {
  for (const date of ["2026-19-20", "2026-02-30", "yesterday"]) {
    const record = fixture();
    record.identity.startDate = date;
    assert.throws(() => validateEngagement(record), /invalid contract dates/);
  }
  const record = fixture();
  record.identity.endDate = "2020-01-01";
  assert.throws(() => validateEngagement(record), /before it starts/);
});

test("unsafe source URLs, private evidence links and unknown references are rejected", () => {
  for (const href of [
    "javascript:alert(1)",
    "http://upwork.com/jobs/example",
    "https://upwork.com/ab/account-security",
    "https://www.upwork.com/jobs/example?token=secret",
    "https://upwork.com.evil.example/jobs/example"
  ]) {
    const record = fixture();
    record.evidence[0].source.href = href;
    assert.throws(() => validateEngagement(record), /unsafe or private/);
  }
  const privateSource = fixture();
  privateSource.evidence[0].source.access = "privately-verified";
  assert.throws(() => validateEngagement(privateSource), /unsafe or private/);
  const missing = fixture();
  missing.contribution.evidenceIds = ["missing"];
  assert.throws(() => validateEngagement(missing), /missing evidence/);
});

test("media requires permission, safe paths, existing references and illustrative disclosure", () => {
  const record = fixture();
  record.presentation.primaryVisualId = "missing";
  assert.throws(() => validateEngagement(record), /missing presentation asset/);
  const image = {
    id: "image",
    src: "/images/projects/example.png",
    alt: "Example",
    kind: "illustration",
    evidenceState: "illustrative",
    permission: "pending"
  };
  record.presentation.primaryVisualId = "image";
  record.assets = [image];
  assert.throws(() => validateEngagement(record), /permission/);
  image.permission = "owned";
  assert.throws(() => validateEngagement(record), /visible caption/);
  image.caption = "Illustrative example, not a client interface.";
  validateEngagement(record);
  image.src = "/images/projects/../../private.png";
  assert.throws(() => validateEngagement(record), /invalid public asset/);
});

test("quoted feedback must match the recorded contract feedback", () => {
  const record = fixture();
  record.feedback.quote = "A made-up claim";
  assert.throws(() => validateEngagement(record), /exact excerpt/);
});

test("related records cannot point at missing, self, or draft routes", () => {
  const record = fixture();
  record.relatedSlugs = [record.identity.slug];
  assert.throws(() => validateEngagementRegistry([record]), /another publishable/);
  record.relatedSlugs = ["missing-2020"];
  assert.throws(() => validateEngagementRegistry([record]), /another publishable/);
  const draft = structuredClone(engagementRecords.find(row => row.identity.id === "UW-06"));
  draft.publication = "draft";
  record.relatedSlugs = [draft.identity.slug];
  assert.throws(() => validateEngagementRegistry([record, draft]), /another publishable/);
});

test("title-based briefs publish recorded scope without inventing a personal contribution", () => {
  const brief = structuredClone(engagementRecords.find(row => row.identity.id === "UW-07"));
  assert.equal(brief.format, "engagement-brief");
  assert.equal(brief.contribution, null);
  validateEngagement(brief);
  const props = getEngagementPageContent(brief);
  assert.ok(props.scope.paragraphs[0].includes("Node.js"));
  assert.deepEqual(props.technologies, ["Node.js", "React"]);
  assert.deepEqual(props.technicalContext.examples, ["Zustand"]);
  assert.equal(props.technicalContext.illustrative, true);
  brief.contribution = { title: "My implementation", paragraphs: ["A claimed result"], evidenceIds: ["contract"] };
  assert.throws(() => validateEngagement(brief), /personal contribution/);
  brief.contribution = null;
  brief.scope = undefined;
  assert.throws(() => validateEngagement(brief), /recorded scope/);
});

test("illustrative examples require disclosure and must fit the contract period", () => {
  const brief = structuredClone(engagementRecords.find(row => row.identity.id === "UW-20"));
  brief.technicalContext.illustrative = false;
  assert.throws(() => validateEngagement(brief), /illustrative disclosure/);
  brief.technicalContext.illustrative = true;
  const incomplete = structuredClone(brief);
  incomplete.technicalContext.points[0].tradeoff = "";
  assert.throws(() => validateEngagement(incomplete), /explanation/);
  for (const future of ["supabase", "zustand", "tailwind", "unrecognized-library"]) {
    brief.technicalContext.examples = [future];
    assert.throws(() => validateEngagement(brief), /unavailable for the period/);
  }
});

test("brief projections keep editorial context and research sources out of public props", () => {
  const brief = structuredClone(engagementRecords.find(row => row.identity.id === "UW-07"));
  const marker = "PRIVATE_EDITORIAL_CONTEXT";
  brief.scope.editorialNote = marker;
  brief.technicalContext.sourceNotes = marker;
  brief.technicalContext.points[0].privateNotes = marker;
  const page = getEngagementPageContent(brief);
  const summary = getEngagementSummary(brief);
  assert.ok(!JSON.stringify([page, summary]).includes(marker));
  assert.ok(!JSON.stringify(summary).includes("Zustand"));
  assert.ok(!JSON.stringify(page).includes("evidenceIds"));
});

test("brief rendering distinguishes historical scope from illustrative technical examples", () => {
  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const EngagementPage = require("../src/components/Portfolio/EngagementPage.tsx").default;
  const { ThemeProvider } = require("../src/context/ThemeContext.tsx");
  const record = engagementRecords.find(row => row.identity.id === "UW-07");
  const html = renderToString(
    React.createElement(
      ThemeProvider,
      null,
      React.createElement(EngagementPage, {
        engagement: getEngagementPageContent(record),
        related: []
      })
    )
  );
  assert.ok(html.includes("Engagement brief based on the original job title"));
  assert.ok(html.includes("Technology &amp; trade-offs."));
  assert.ok(html.includes("My engineering perspective"));
  assert.ok(html.includes("Example tools:"));
  assert.ok(html.includes("historical use on this project is not established"));
  assert.ok(!html.includes('id="personal-contribution"'));
});

test("metadata uses the engagement route and approved social fallback without a fabricated screenshot", () => {
  const record = fixture();
  validateEngagement(record);
  const props = getEngagementPageContent(record);
  assert.equal(Object.hasOwn(props, "publication"), false);
  const metadata = getEngagementMetadata(props);
  assert.equal(metadata.canonicalPath, `/projects/upwork/${record.identity.slug}`);
  assert.equal(metadata.image.src, "/images/projects/social-preview.jpg");
  assert.equal(metadata.image.width, 1200);
  assert.equal(metadata.image.height, 630);
  assert.equal(metadata.description, record.presentation.shareDescription);
});

test("Armonía keeps its strict publication validation and approved metadata", () => {
  validateCaseStudy(armoniaCaseStudy);
  assert.equal(getCaseStudyMetadata(armoniaCaseStudy).canonicalPath, "/projects/armonia");
  assert.equal(
    armoniaCaseStudy.presentation.narrativeTitles.ownership,
    "End-to-end product ownership, with Carla as the decider."
  );
  const missing = structuredClone(armoniaCaseStudy);
  missing.presentation.primaryVisualId = "missing";
  assert.throws(() => validateCaseStudy(missing), /missing asset/);
  const unsupported = structuredClone(armoniaCaseStudy);
  unsupported.evidence.find(item => item.id === unsupported.identity.statusEvidenceId).state = "assumption";
  assert.throws(() => validateCaseStudy(unsupported), /current status/);
});

test("published routes cannot share identical search and social descriptions", () => {
  const a = fixture(),
    b = fixture();
  b.identity.id = "UW-06";
  b.identity.slug = "other-engagement-2021";
  b.presentation.shareTitle = "A different engagement";
  assert.throws(() => validateEngagementRegistry([a, b]), /unique metadata/);
});

test("page projections expose selected display copy without provenance notes or unused assets", () => {
  const record = fixture();
  const marker = "EDITORIAL_ONLY_TEST_MARKER";
  record.editorialNote = marker;
  record.identity.editorialNote = marker;
  record.presentation.editorialNote = marker;
  record.contract.editorialNote = marker;
  record.situation.editorialNote = marker;
  record.contribution.editorialNote = marker;
  record.evidence[0].scope = marker;
  const feedbackEvidence = record.evidence.find(item => item.id === "contribution");
  feedbackEvidence.statement = marker;
  feedbackEvidence.source.label = marker;
  record.assets = [
    {
      id: "unused",
      kind: "document",
      src: "/images/projects/unused.png",
      alt: marker,
      permission: "owned",
      evidenceState: "observed"
    }
  ];
  for (const projection of [getEngagementPageContent(record), getEngagementSummary(record)]) {
    const json = JSON.stringify(projection);
    assert.ok(!json.includes(marker));
    assert.ok(!json.includes("evidenceId"));
    assert.ok(!json.includes("editorialNote"));
  }
  const props = getEngagementPageContent(record);
  assert.equal(props.feedback.summary, record.feedback.summary);
  assert.equal(props.feedback.attribution, "Upwork client");
  assert.equal(props.feedback.sourceHref, feedbackEvidence.source.href);
  assert.deepEqual(props.assets, []);
  assert.ok(!Object.hasOwn(props, "evidence"));
});

test("projection revalidates a ready record and cannot bypass publication criteria", () => {
  const record = fixture();
  record.contribution = null;
  assert.throws(() => getEngagementPageContent(record), /concrete/);
  assert.throws(() => getEngagementSummary(record), /concrete/);
});

test("the ready-page renderer uses public feedback without access to source evidence", () => {
  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const EngagementPage = require("../src/components/Portfolio/EngagementPage.tsx").default;
  const { ThemeProvider } = require("../src/context/ThemeContext.tsx");
  const record = fixture();
  record.evidence.find(item => item.id === "contribution").statement = "SERVER_ONLY_SOURCE_STATEMENT";
  const props = getEngagementPageContent(record);
  const html = renderToString(
    React.createElement(ThemeProvider, null, React.createElement(EngagementPage, { engagement: props, related: [] }))
  );
  assert.ok(html.includes(record.feedback.summary));
  assert.ok(html.includes(record.feedback.attribution));
  assert.ok(!html.includes("SERVER_ONLY_SOURCE_STATEMENT"));
  assert.ok(html.includes("/projects#upwork-experience"));
});

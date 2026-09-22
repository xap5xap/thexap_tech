import assert from "node:assert/strict";
import test from "node:test";
import {
  buildOpportunityBriefMarkdown,
  countCompletedEssentials,
  createEmptyOpportunityBrief,
  ESSENTIAL_OPPORTUNITY_BRIEF_FIELDS,
  FICTIONAL_OPPORTUNITY_BRIEF,
  OPPORTUNITY_BRIEF_FIELD_NAMES,
  opportunityBriefFilename
} from "../src/lib/opportunityBrief.ts";

test("the builder contract has fifteen fields and nine essentials", () => {
  assert.equal(OPPORTUNITY_BRIEF_FIELD_NAMES.length, 15);
  assert.equal(new Set(OPPORTUNITY_BRIEF_FIELD_NAMES).size, 15);
  assert.equal(ESSENTIAL_OPPORTUNITY_BRIEF_FIELDS.length, 9);
  assert.equal(
    ESSENTIAL_OPPORTUNITY_BRIEF_FIELDS.every(field => OPPORTUNITY_BRIEF_FIELD_NAMES.includes(field)),
    true
  );
});

test("completion counts only trimmed essential values", () => {
  const brief = createEmptyOpportunityBrief();
  brief.title = "A useful title";
  brief.role = "   ";
  brief.evidence = "Optional evidence";
  assert.equal(countCompletedEssentials(brief), 1);
  assert.equal(countCompletedEssentials(FICTIONAL_OPPORTUNITY_BRIEF), 9);
});

test("empty briefs render deterministic guidance without undefined values", () => {
  const markdown = buildOpportunityBriefMarkdown(createEmptyOpportunityBrief());
  assert.match(markdown, /^# Opportunity brief: \[working title\]/);
  assert.match(markdown, /## Assumption ledger/);
  assert.match(markdown, /None recorded\. Label the source and limit/);
  assert.match(markdown, /- \[Not solving\]/);
  assert.doesNotMatch(markdown, /undefined|null/);
});

test("fictional example renders the complete brief and assumption ledger", () => {
  const markdown = buildOpportunityBriefMarkdown(FICTIONAL_OPPORTUNITY_BRIEF);
  assert.match(markdown, /# Opportunity brief: Shared request tracker/);
  assert.match(markdown, /When a team member is coordinating requests/);
  assert.match(markdown, /## Explicit non-goals\n\n- Replace every chat or email conversation/);
  assert.match(markdown, /### Primary falsifiable assumption/);
  assert.match(markdown, /at least three can show a recent example/);
  assert.match(markdown, /### Decision rule/);
  assert.match(markdown, /If at least three people provide a concrete recent example/);
});

test("download filenames are meaningful, portable, and stable", () => {
  assert.equal(opportunityBriefFilename(" Shared Request Tracker "), "shared-request-tracker-opportunity-brief.md");
  assert.equal(opportunityBriefFilename("Árbol & Niño"), "arbol-nino-opportunity-brief.md");
  assert.equal(opportunityBriefFilename(""), "opportunity-brief.md");
});

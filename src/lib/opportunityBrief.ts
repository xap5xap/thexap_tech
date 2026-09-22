export const OPPORTUNITY_BRIEF_FIELD_NAMES = [
  "title",
  "role",
  "situation",
  "progress",
  "today",
  "change",
  "nonGoals",
  "evidence",
  "assumption",
  "learningStep",
  "continueIf",
  "continueThen",
  "reviseIf",
  "reviseThen",
  "questions"
] as const;

export type OpportunityBriefField = (typeof OPPORTUNITY_BRIEF_FIELD_NAMES)[number];
export type OpportunityBrief = Record<OpportunityBriefField, string>;

export const ESSENTIAL_OPPORTUNITY_BRIEF_FIELDS = [
  "title",
  "role",
  "situation",
  "progress",
  "today",
  "change",
  "assumption",
  "learningStep",
  "continueIf"
] as const satisfies readonly OpportunityBriefField[];

export const createEmptyOpportunityBrief = (): OpportunityBrief =>
  Object.fromEntries(OPPORTUNITY_BRIEF_FIELD_NAMES.map(field => [field, ""])) as OpportunityBrief;

export const FICTIONAL_OPPORTUNITY_BRIEF: OpportunityBrief = {
  title: "Shared request tracker",
  role: "a team member",
  situation: "coordinating requests that arrive through chat and email",
  progress: "prepare a shared view of what needs attention",
  today:
    "The coordinator copies some requests into a shared document and checks the original conversations to reconstruct owner, status, and next action. Frequency and business impact are unknown.",
  change:
    "For every accepted request, a team member can view one recorded owner, status, and next action in a shared workspace.",
  nonGoals:
    "Replace every chat or email conversation\nDecide priority automatically\nProvide full project management\nGuarantee response times or business outcomes",
  evidence: "None. This is a fictional teaching example, not an observed product case.",
  assumption:
    "Of the first five people who coordinate shared requests, at least three can show a recent example where ownership, status, or next action became unclear across tools.",
  learningStep:
    "Walk through this brief and a paper request flow with five people who perform that work. Ask each for a recent artifact or sequence.",
  continueIf: "at least three people provide a concrete recent example",
  continueThen: "define the smallest complete request flow",
  reviseIf: "fewer than three people provide a concrete recent example",
  reviseThen: "pause feature scoping and revise the user, situation, or problem",
  questions:
    "How often does the unclear state occur?\nWhich field becomes unclear first?\nWho can be reached for the learning step?"
};

const valueOr = (value: string, fallback: string) => value.trim() || fallback;

const bullets = (raw: string, fallback: string): string => {
  const items = raw
    .split(/\n|;/)
    .map(item => item.trim())
    .filter(Boolean);
  return (items.length ? items : [fallback]).map(item => `- ${item}`).join("\n");
};

export const buildOpportunityBriefMarkdown = (brief: OpportunityBrief): string => {
  const title = valueOr(brief.title, "[working title]");
  const role = valueOr(brief.role, "[role]");
  const situation = valueOr(brief.situation, "[specific situation]");
  const progress = valueOr(brief.progress, "[task or progress]");

  return `# Opportunity brief: ${title}

Status: Provisional

## Who and situation

When ${role} is ${situation}, they need to ${progress}.

## What happens today

${valueOr(brief.today, "[Current sequence, workaround, and where it becomes difficult.]")}

## Intended change

${valueOr(brief.change, "[What the proposed product should make possible within its control.]")}

## Explicit non-goals

${bullets(brief.nonGoals, "[Not solving]")}

## Evidence already available

${valueOr(brief.evidence, "None recorded. Label the source and limit before treating this as evidence-backed.")}

## Assumption ledger

### Primary falsifiable assumption

${valueOr(brief.assumption, "We believe [specific statement that could be shown wrong].")}

### Cheapest next learning step

${valueOr(brief.learningStep, "[Small action that examines the assumption without building the whole product.]")}

### Decision rule

If ${valueOr(brief.continueIf, "[threshold or result]")}, then ${valueOr(brief.continueThen, "[continue or narrow]")}.

If ${valueOr(brief.reviseIf, "[other result]")}, then ${valueOr(brief.reviseThen, "[revise, pause, or stop]")}.

### Open questions

${bullets(brief.questions, "[Unknown that does not need to block this brief]")}`;
};

export const countCompletedEssentials = (brief: OpportunityBrief): number =>
  ESSENTIAL_OPPORTUNITY_BRIEF_FIELDS.filter(field => brief[field].trim()).length;

export const opportunityBriefFilename = (title: string): string => {
  const slug = title
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug ? `${slug}-opportunity-brief.md` : "opportunity-brief.md";
};

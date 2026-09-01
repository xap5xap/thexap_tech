# Flagship Case-Study Content Model

## Status and authority

- Issue: `XAP-48`
- Decision owner: Xavier Perez
- Decision date: 2026-09-01
- Status: approved
- Controlling messaging: `docs/portfolio/positioning-and-messaging.md`
- Controlling projects-index architecture: `docs/portfolio/projects-index-information-architecture.md`
- Supporting research: `docs/portfolio/research-and-strategy.md`

This document defines the reusable content contract, narrative standard, disclosure rules, data-source decision, and publication-readiness rules for flagship case studies.

It does not implement `/projects` or `/projects/[slug]`, publish claims about Armonía or the publishing engine, select the third flagship, decide the fate of legacy projects, or implement SEO and social-preview metadata. Those actions remain with their downstream issues.

## Confirmed inputs

Xavier confirmed the following decisions before this proposal was authored:

- Flagship content should use a typed, repository-local source.
- Every case study should answer all nine narrative questions.
- A question may be recorded as `Not yet known` or `Not applicable` only with an explanation.
- Available evidence may include product screens, plans, product surfaces, diagrams, and other inspectable artifacts.
- Evidence availability is established case by case. The model must not assume that every project has every artifact.
- Plans may explain intended work, but they must never be presented as completed behavior or observed proof.

## Purpose

The legacy `data/projects.json` shape treats a project as a logo, description, role, responsibilities, technology list, and URLs. That shape cannot support a coherent product story or preserve the evidence boundaries required by the approved positioning.

The flagship model has five goals:

1. One source record can support an index card, a full case study, and project-specific sharing metadata.
2. Client work, owned products or experiments, and concept products use the same core structure.
3. Work type, current status, evidence state, and Xavier's ownership remain separate facts.
4. Every material claim can be traced to evidence, a hypothesis, an assumption, illustrative material, or a plan.
5. Content can vary editorially without introducing project-specific fields or React code into the content source.

## Governing invariants

- Lead with audience transformation and product judgment. Technologies remain supporting detail.
- Use exactly one approved work type and one verified current status for every published case study.
- Keep ownership labels separate from product-cycle stages.
- Connect every claimed product-cycle stage to at least one publishable evidence item.
- Never use an assumption, illustrative artifact, or plan as an index-card proof point.
- A hypothesis may be the primary proof line only when its audience, test, signal, and decision rule are explicit.
- Never present concept work as client work, planned behavior as current behavior, or generated output as product impact.
- Never store client secrets, private analytics, credentials, personal data, or confidential source material in the repository.
- A case study may omit a section from the rendered page only when the content record preserves the unanswered question and explains why it is not yet known or not applicable.
- No case study may add custom top-level fields. New reusable needs must extend the shared model.

## Data-source decision

### Decision

Flagship content will move to a typed, repository-local TypeScript source when the production case-study work begins.

The intended source layout is:

```text
src/content/portfolio/
  types.ts
  caseStudies/
    armonia.ts
    publishingEngine.ts
  index.ts
public/images/projects/
  <slug>/
```

The exact filenames may change during implementation, but these boundaries are controlling:

- `types.ts` owns the shared contract and controlled vocabularies.
- Each case-study module exports plain serializable content, not JSX or React components.
- `index.ts` owns the published registry and the explicit flagship order.
- Project media remains in a project-scoped public directory unless an approved external source is required.
- Contentful remains the blog source. XAP-48 does not add a portfolio content type to Contentful.
- `data/projects.json` remains a legacy source until XAP-51 decides each existing project's disposition. It must not be expanded into the flagship model.

### Options considered

| Option                      | Strength                                                                                                    | Limitation                                                                                                    | Decision                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Extend `data/projects.json` | Lowest immediate migration cost                                                                             | Weak authoring ergonomics, no explicit contract, awkward nested narrative, and easy evidence drift            | Rejected for flagships                |
| Typed TypeScript records    | Versioned with the site, strict vocabulary, reusable projections, no new service, and no network dependency | Requires code review for editorial changes                                                                    | Selected                              |
| MDX plus front matter       | Flexible long-form authoring and embedded components                                                        | Adds dependencies, splits structured data from narrative, and makes cross-surface validation harder           | Deferred until a demonstrated need    |
| Contentful                  | Non-code editing, preview, and rich media workflow                                                          | Adds portfolio schema operations, credentials, build-time network dependency, and another publishing workflow | Rejected for the initial flagship set |

### Rationale

The initial portfolio contains only three deliberately curated flagship positions, and Xavier is the editor. A typed repository source provides enough editorial range through structured narrative blocks while keeping work type, status, ownership, evidence, and disclosure rules mechanically checkable. It also prevents the projects experience from inheriting the blog's Contentful availability and credential requirements.

This decision can be revisited if a non-technical collaborator needs to edit case studies frequently or if the narrative block system becomes an obstacle. Editorial preference alone is not enough reason to introduce a second content platform.

## Controlled vocabularies

### Work type

Use exactly one value:

```ts
type WorkType = "client-work" | "owned-product-experiment" | "concept-product";
```

Public labels remain:

- `Client work`
- `Owned product / experiment`
- `Concept product`

### Current status

Use exactly one verified value for a published case study:

```ts
type CurrentStatus = "live" | "in-active-use" | "in-validation" | "prototype" | "no-longer-active";
```

`Planned` is an evidence state, not a publishable flagship status. A project with no working or operating product surface is not eligible for a flagship card.

### Evidence state

```ts
type EvidenceState = "observed" | "verified-outcome" | "assumption" | "hypothesis" | "illustrative" | "planned";
```

### Narrative completion

```ts
type NarrativeCompletion = "complete" | "not-yet-known" | "not-applicable";
```

`Not yet known` creates a research or verification obligation. `Not applicable` explains why the question does not meaningfully apply. Neither value is a substitute for evidence.

### Ownership area

```ts
type OwnershipArea =
  | "product-strategy"
  | "brand"
  | "ux"
  | "engineering"
  | "ai-system"
  | "film"
  | "launch"
  | "distribution";
```

An ownership area is used only when Xavier's responsibility can be verified. It does not imply sole authorship.

### Product-cycle stage

```ts
type ProductCycleStage = "discover" | "position" | "design" | "build" | "launch" | "distribute" | "learn";
```

The order is fixed. A case study includes only stages supported by referenced evidence.

## Reference content contract

The following TypeScript describes the intended shape. It is a design contract, not production implementation under XAP-48.

```ts
type CaseStudyId = string;
type EvidenceId = string;
type AssetId = string;

type CaseStudy = {
  identity: CaseStudyIdentity;
  ownership: OwnershipRecord;
  presentation: PresentationRecord;
  narrative: CaseStudyNarrative;
  evidence: EvidenceItem[];
  assets: AssetRecord[];
  links: LinkRecord[];
  supportingDetails?: SupportingDetails;
};

type CaseStudyIdentity = {
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

type OwnershipRecord = {
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

type PresentationRecord = {
  primaryVisualId: AssetId;
  cardEvidenceId: EvidenceId;
  shareTitle: string;
  shareDescription: string;
  socialImageId?: AssetId;
};

type CaseStudyNarrative = {
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

type NarrativeSection =
  | {
      completion: "complete";
      summary: string;
      blocks: NarrativeBlock[];
      evidenceIds: EvidenceId[];
      assetIds: AssetId[];
    }
  | {
      completion: "not-yet-known" | "not-applicable";
      reason: string;
      blocks?: NarrativeBlock[];
      evidenceIds?: EvidenceId[];
      assetIds?: AssetId[];
    };

type NarrativeBlock =
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

type EvidenceItem = {
  id: EvidenceId;
  state: EvidenceState;
  statement: string;
  scope: string;
  source?: EvidenceSource;
  assetIds?: AssetId[];
  disclosure?: string;
  validation?: ValidationPlan;
};

type EvidenceSource = {
  label: string;
  href?: string;
  access: "public" | "privately-verified" | "withheld";
  asOf?: string;
};

type ValidationPlan = {
  audience: string;
  method: string;
  signal: string;
  decisionRule: string;
};

type AssetRecord = {
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

type LinkRecord = {
  label: string;
  href: string;
  kind: "product" | "prototype" | "source" | "launch" | "evidence";
  status: "verified" | "pending" | "retired";
};

type SupportingDetails = {
  technologies?: string[];
  services?: string[];
};
```

## Required and conditional information

### Required before publication

Every published flagship must provide:

- one identity, including work type and a verified current status;
- one specific audience and one concise transformation;
- a timeframe that does not imply continuous involvement when none existed;
- an ownership summary and at least one verified ownership area;
- at least one supported product-cycle stage;
- all nine narrative-section keys;
- at least one publishable primary visual that is more informative than a logo;
- at least one observed artifact, verified outcome, or properly formed hypothesis;
- one evidence item supporting the current status;
- one card evidence item;
- share title and description, with the final preview asset owned by XAP-52;
- public-safe source and permission information for every rendered artifact;
- a checked set of external links, if any are published.

### Conditionally required

- A case claiming an AI product or AI system must include a `system-behavior` block that explains the AI job, inputs, outputs, failure modes, safeguards, and evaluation.
- A verified outcome must name its source, scope, and applicable date or period.
- A hypothesis must include its audience, method, signal, and decision rule.
- Illustrative media must be labeled in both the asset record and its visible caption or surrounding disclosure.
- Planned behavior must include a disclosure and cannot support current status, a card evidence line, or a product-cycle stage.
- Client assets and claims that require permission must have `approved` permission before publication.
- Private evidence may support internal verification, but the repository must contain only a safe summary. Raw private evidence remains outside the repository.
- A link is rendered only when its status is `verified`.

### Optional supporting detail

- technologies and services;
- repository links when publication is safe and useful;
- named collaborators when credit clarifies ownership;
- extra product screens, diagrams, launch assets, and decision records;
- alternate social image when the primary visual is unsuitable for sharing.

Optional detail must strengthen a decision or claim. It should not be added merely to make the story longer.

## Narrative standard

The nine sections always use the same order. The public headings may be adapted to the product's voice, but the underlying questions do not change.

| Section key                | Required question        | Minimum complete answer                                                                                  |
| -------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------- |
| `transformation`           | What changed?            | One intended or observed change, with outcome language limited by the available evidence                 |
| `audience`                 | For whom?                | A specific audience, its relevant situation, and the problem or desire that matters                      |
| `productBet`               | Why this product?        | The insight, assumption, or hypothesis and why this response was worth pursuing                          |
| `ownership`                | What did Xavier own?     | Verified responsibility, collaboration boundary, and the parts he did not own when ambiguity is possible |
| `experienceAndSystem`      | How does it work?        | The key user flow and relevant system behavior, including AI boundaries when applicable                  |
| `decisions`                | What decisions mattered? | At least one constraint, alternative, trade-off, rejected direction, or material risk                    |
| `launchAndDistribution`    | How did it reach people? | Audience, channel, hook, reusable asset, call to action, and observable signal                           |
| `evidenceAndValidation`    | What evidence exists?    | Observed artifacts or outcomes, or a hypothesis with a credible validation plan                          |
| `learningAndNextIteration` | What was learned?        | Observation separated from interpretation, followed by the next product decision                         |

### Incomplete answers

All nine keys remain present during content capture.

- Use `not-yet-known` when research, source verification, client approval, product operation, or an experiment must happen before the section can be completed.
- Use `not-applicable` only when the question genuinely does not apply, and record the reason.
- Do not publish filler copy to hide missing information.
- A rendered case study may omit an incomplete section when omission is more honest, but the content source must preserve the gap.
- A flagship is publishable only when its available sections still form a convincing, truthful story and every missing section passes review.

## Evidence and disclosure rules

### Evidence-state requirements

| State              | Required record                                             | Public use                                                                              |
| ------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `observed`         | Inspectable artifact, behavior, or source and a clear scope | May support narrative, status, card evidence, and a product-cycle stage                 |
| `verified-outcome` | Named source, scope, and date or period                     | May support outcome language only within the verified boundary                          |
| `assumption`       | Visible disclosure of what is believed but unverified       | May explain a decision; cannot be presented as proof                                    |
| `hypothesis`       | Test audience, method, signal, and decision rule            | May support a concept card when explicitly labeled                                      |
| `illustrative`     | Visible simulated or demonstrative label                    | May explain an experience; cannot be presented as observed behavior or measured data    |
| `planned`          | Visible future-tense disclosure                             | May explain the next iteration; cannot support current behavior or flagship eligibility |

### Source handling

- `public` sources may link to durable public artifacts.
- `privately-verified` sources may support a carefully scoped statement, but the repository contains only a safe verification summary.
- `withheld` sources establish that evidence exists but cannot be exposed. The public claim must remain no stronger than the publishable support allows.
- If a public source later disappears, the affected claim returns to review rather than silently remaining verified.

### Asset handling

- Product screens, workflows, diagrams, plans, film frames, and launch assets may all serve as evidence when their state and permission are explicit.
- A plan is a `document` asset with `planned` evidence state unless it also documents an observed past decision.
- Concept screens and sample data are `illustrative` unless a working prototype is directly inspectable.
- Every meaningful rendered asset needs contextual alternative text. Captions explain evidence state or scope when the visual could be misread.
- `pending` assets never render publicly.

## Work-type validation profiles

The profiles below change validation requirements, not the shared shape.

### Client work

- Verify the client relationship and Xavier's actual contribution.
- Separate Xavier's ownership from client decisions and wider-team contributions.
- Publish only approved client assets and claims.
- Do not infer revenue, conversion, adoption, or business impact from a live product surface.
- Use privately verified evidence only through a public-safe statement whose scope has been approved.

### Owned product / experiment

- Explain what Xavier operates and what remains manual or planned.
- Distinguish system output from audience response or product impact.
- Show human approval gates, failure handling, and operating boundaries when automation is material.
- Treat internal use as `in-active-use`, not `live`, unless the product is actually available to its intended public audience.

### Concept product

- Display the `Concept product` work type prominently.
- Use `prototype` only when a working vertical slice exists and can be inspected.
- Use `in-validation` only when a bounded test with a defined audience and learning signal is running.
- Label assumptions, hypotheses, illustrative screens, and simulated data at their point of use.
- Require a validation plan and never invent users, customers, revenue, testimonials, or measured outcomes.
- A raw or selected idea without a working product surface is not yet eligible for a flagship card.

## Cross-surface reuse

The case-study record is the source of truth. Surfaces select from it rather than maintaining separate project summaries.

| Surface                    | Reused fields                                                                                                                         | Surface-owned behavior                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `/projects` flagship card  | Name, work type, current status, audience, transformation, primary visual, card evidence, ownership areas, and supported cycle stages | Card composition, responsive hierarchy, and descriptive action                           |
| `/projects/[slug]`         | Full identity, ownership, narrative, evidence, assets, links, and supporting detail                                                   | Page composition, navigation, and accessible rendering of narrative blocks               |
| Social and SEO preview     | Share title, share description, social image or primary visual, work type, and transformation                                         | Metadata generation, image rendering, dimensions, and platform verification under XAP-52 |
| Product-cycle evidence map | Supported stages and their evidence references                                                                                        | Portfolio-level aggregation and interaction                                              |

The registry owns flagship order. Individual case studies do not contain `featured`, `position`, or `comingSoon` flags. This prevents an unpublished concept from appearing through a content-record default.

## Conformance examples

These examples test the model. They are not approved case-study copy, current-status verification, concept selection, or publication authorization.

### Example A: Armonía client-work candidate

| Shared field          | Representative value                                                                                        | Readiness note                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Work type             | `client-work`                                                                                               | Approved taxonomy assignment from XAP-47                                  |
| Current status        | `live`                                                                                                      | Candidate value that XAP-49 must re-verify before publication             |
| Audience              | People seeking psychological care and the practice serving them                                             | Exact audience language requires Carla's approval                         |
| Transformation        | A clearer path from understanding the service to arranging care, supported by operational product workflows | Outcome boundary remains provisional                                      |
| Product bet           | Connect service clarity, patient experience, and practice operations as one product system                  | The original insight and alternatives require reconstruction under XAP-49 |
| Ownership             | Candidate areas include product strategy, brand, UX, engineering, film, launch, and distribution            | Each area requires evidence and collaboration boundaries under XAP-49     |
| Experience and system | Patient-facing journey plus practice operations                                                             | Screens and system behavior must be selected and approved                 |
| Decisions             | Service clarity, emotional tone, conversion path, operational constraints, and cinematic direction          | Reconstruct from inspectable artifacts and verified decision history      |
| Distribution          | Public site, appointment journey, content, and reusable media                                               | Channels, calls to action, and signals require verification               |
| Evidence              | Public screens and approved artifacts; outcomes only when sourced and scoped                                | No client metric is assumed                                               |
| Learning              | `not-yet-known` until observation and next-decision evidence are available                                  | The gap remains visible in content capture                                |

This record uses the shared identity, ownership, narrative, evidence, asset, link, and supporting-detail fields. Client permission is enforced through the shared asset and evidence rules rather than an Armonía-only field.

### Example B: illustrative concept fixture

The fixture represents a hypothetical AI oral-history product solely to test a publication-ready concept shape. It does not select a third flagship, assert that a prototype exists, or pre-approve any concept in the backlog.

| Shared field          | Representative value                                                                                               | Disclosure boundary                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Work type             | `concept-product`                                                                                                  | Always displayed publicly                                                                    |
| Current status        | `prototype`                                                                                                        | Fixture assumption only; a real record may use it only after a working vertical slice exists |
| Audience              | Families who want to preserve a relative's stories                                                                 | Assumption until researched                                                                  |
| Transformation        | Turn a guided conversation into a reviewable written, audio, and visual keepsake                                   | Intended transformation, not an observed outcome                                             |
| Product bet           | A guided AI workflow with human review can reduce the effort of preserving a story without removing family control | Hypothesis requiring research and a decision rule                                            |
| Ownership             | Product strategy, UX, engineering, AI system, film, launch, and distribution                                       | Include only artifacts Xavier actually produces                                              |
| Experience and system | Guided interview, transcription, story generation, human review, consent, and export                               | Inputs, outputs, failure modes, safeguards, and evaluation are required                      |
| Decisions             | Consent, voice fidelity, privacy, correction workflow, and family sharing                                          | Decision records explain alternatives and trade-offs                                         |
| Distribution          | A family-sharing artifact and a bounded referral experiment                                                        | Hypothesis requires audience, method, signal, and decision rule                              |
| Evidence              | Illustrative screens, an inspectable prototype, evaluation results, and experiment plan                            | Each item keeps its own evidence state                                                       |
| Learning              | Result and next decision after the experiment                                                                      | `not-yet-known` before the experiment runs                                                   |

This fixture uses exactly the same fields as the client-work candidate. Concept disclosure, illustrative material, and validation requirements are expressed through shared work-type, evidence, asset, narrative, and validation fields.

### Conformance result

The two examples differ in values and validation requirements, not structure. Neither requires a project-specific top-level field, renderer, or data source. The model can therefore express representative client and concept stories without special cases.

## Content-capture questionnaire

For each flagship, Xavier is asked to provide or explicitly defer the following information:

1. What changed or is intended to change?
2. Who is the specific audience, and what situation matters to them?
3. What insight, assumption, or hypothesis made this product worth pursuing?
4. What did Xavier personally own, who else contributed, and where were the boundaries?
5. How does the key experience work, and what does the underlying system do?
6. Which decisions, constraints, alternatives, trade-offs, rejected directions, or risks mattered?
7. Which audience, channel, hook, reusable asset, call to action, and learning signal define launch and distribution?
8. Which screens, plans, product surfaces, diagrams, sources, outcomes, or validation plans can be shown safely?
9. What was observed, how is it interpreted, and what should happen next?

For each answer, content capture also records:

- evidence state;
- source and scope;
- whether the source is public, privately verified, or withheld;
- asset permission;
- whether the answer is complete, not yet known, or not applicable;
- the reason for any incomplete answer.

## Publication-readiness checks

A future validation layer should reject a published registry entry when any of these checks fail:

- the slug or evidence and asset IDs are duplicated;
- a required identity or presentation field is missing;
- current status has no observed support;
- a card evidence item is an assumption, illustrative item, or plan;
- a hypothesis lacks a validation plan;
- a claimed product-cycle stage has no evidence reference;
- an AI claim has no system-behavior block;
- a rendered asset is missing, pending permission, or missing meaningful alternative text;
- illustrative or planned content lacks visible disclosure;
- a verified outcome lacks a source, scope, or applicable date or period;
- a public link has not been verified;
- a concept lacks prominent work-type disclosure;
- a case study contains an unknown narrative key or project-specific top-level field;
- a selected flagship record is not publication-ready.

The implementation may use TypeScript, runtime validation, build-time checks, or a combination. XAP-48 selects the rules, not the validation library.

## Migration and downstream boundaries

- `XAP-49` verifies Armonía's narrative, current status, ownership, claims, permissions, and assets, then implements the first production record and case-study page.
- `XAP-50` applies the same model to the publishing engine and verifies its operating boundaries and evidence.
- `XAP-51` decides whether each legacy `data/projects.json` entry is retained, retired, redirected, or represented elsewhere.
- `XAP-52` implements project-specific metadata and social-preview generation from the reusable presentation fields.
- `XAP-53` owns final cross-route responsive, keyboard, screen-reader, browser, and WCAG verification.
- `XAP-54` selects the concept that may earn the third flagship position. A conformance fixture under XAP-48 is not a selection.
- `XAP-55` and `XAP-56` create and measure the selected concept's real product, launch, distribution, and learning evidence.

No downstream issue may weaken this model's disclosure rules to make a story appear more complete.

## Approval checklist

- [x] Typed, repository-local content source approved.
- [x] Required, conditional, and optional information approved.
- [x] Nine-section narrative standard approved.
- [x] `Not yet known` and `Not applicable` handling approved.
- [x] Work-type validation profiles approved.
- [x] Evidence, source, asset, and disclosure rules approved.
- [x] Cross-surface reuse contract approved.
- [x] Client-work and concept conformance examples accepted as structurally representative.
- [x] Content-capture questionnaire approved as the information each case study will ask Xavier to provide.

Approval completes the XAP-48 design scope. It does not authorize production case-study claims or UI changes beyond the normal repository delivery of this decision record.

Xavier approved this document on 2026-09-01.

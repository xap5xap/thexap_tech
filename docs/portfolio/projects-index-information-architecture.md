# Projects Index Information Architecture

## Status and authority

- Issue: `XAP-47`
- Decision owner: Xavier Perez
- Decision date: 2026-08-31
- Status: approved
- Controlling messaging brief: `docs/portfolio/positioning-and-messaging.md`
- Supporting research: `docs/portfolio/research-and-strategy.md`

This document defines the narrative, taxonomy, flagship-card contract, archive role, call to action, and responsive structure for `/projects`.

It does not authorize production UI implementation, choose a data source, define the full flagship case-study model, publish case-study claims, select the first concept product, or decide the disposition of every legacy project.

## Confirmed direction

Xavier confirmed the following inputs before this proposal was authored:

- Armonía is classified as client work.
- The third flagship position remains reserved until the concept-selection work in `XAP-54` is complete.
- The initial projects index does not show a historical-work or archive section.
- Legacy projects are evaluated individually in `XAP-51`; discontinued projects do not appear merely to increase portfolio volume.

## Visitor outcome

After scanning the page, a founder or small product team should understand:

1. Xavier works as an independent AI product partner who connects product thinking, experience, technology, launch, distribution, and learning.
2. The portfolio contains exactly three deliberately different flagship positions rather than an undifferentiated project gallery.
3. Each flagship is honest about its work type, current status, intended audience, transformation, Xavier's ownership, and available evidence.
4. The complete product cycle is demonstrated across the portfolio as a whole; no single project is required to claim every stage.
5. A visitor can open the most relevant case study or schedule a product-fit conversation.

## Page narrative and section order

The initial `/projects` experience uses five sections in this order.

### 1. Positioning hero

**Heading**

> Selected products and systems

**Purpose**

Introduce the page as a curated body of evidence for the approved portfolio promise. The supporting copy should connect the work to founders and small product teams and explain that the stories cover real client products, owned systems or experiments, and clearly labeled concept products.

The hero should not repeat the homepage verbatim, lead with technology names, or claim outcomes that the cards do not substantiate.

### 2. Three flagship stories

The page contains exactly three flagship positions:

| Position | Portfolio role | Initial assignment | Public work type | Selection boundary |
| --- | --- | --- | --- | --- |
| 1 | Whole-product client evidence | Armonía | `Client work` | Claims and assets remain subject to `XAP-49` and Carla's approval. |
| 2 | Owned AI system and distribution infrastructure | Publishing engine | `Owned product / experiment` | Current behavior and publishable evidence remain subject to `XAP-50`. |
| 3 | A complete concept carried through product, launch, distribution, and learning | Reserved | `Concept product` | The concept is named only after `XAP-54`; delivery and evidence belong to `XAP-55` and `XAP-56`. |

The reserved third position is an information-architecture slot, not a public `Coming soon` card. The production page must not expose an empty or speculative flagship. Publication waits until the position has an approved project and enough honest evidence to satisfy the card contract.

### 3. Product-cycle evidence

**Recommended heading**

> From idea to audience, shown through the work

Show the approved cycle in this order:

`Discover` -> `Position` -> `Design` -> `Build` -> `Launch` -> `Distribute` -> `Learn`

Each stage must connect to at least one inspectable artifact or decision in a flagship case study. The section is an evidence map, not a list of unsupported capability claims.

On desktop, the sequence may read across the page. On mobile, it must wrap or become a vertical sequence without hiding required content behind horizontal scrolling or hover.

### 4. Portfolio interpretation note

Use a short disclosure immediately after the evidence map when the flagship mix includes client, owned, and concept work. It should explain that work type, status, observed evidence, hypotheses, and illustrative material are labeled within each story.

This note replaces an initial historical-work section. It gives visitors the context needed to interpret the evidence without bringing discontinued projects back into the primary journey.

### 5. Contextual conversion section

Use the exact CTA contract approved in `XAP-46`.

**Section headline**

> Bring me the product opportunity, not a finished specification.

**Supporting text**

> We'll clarify the audience and opportunity, decide what is worth building, and identify the strongest path from product to launch.

**Primary button**

> Schedule a meeting

The CTA opens a product-fit conversation. It does not promise free strategy, a completed solution, or a commercial outcome.

## Flagship-card information contract

Every flagship card must answer the same visitor questions while allowing each story to emphasize different evidence.

| Field | Required | Visitor question | Display rule |
| --- | --- | --- | --- |
| Primary visual | Yes | What product or system am I looking at? | Use an inspectable product surface, workflow, or narrative frame rather than a logo alone. |
| Project name | Yes | What is it called? | Use one clear heading and preserve the product's approved name. |
| Work type | Yes | What relationship does Xavier have to this work? | Use exactly one value from the work-type taxonomy. |
| Current status | Yes | Is this operating, being tested, prototyped, or no longer active? | Use exactly one verified status; do not infer status from work type. |
| Audience | Yes | Who is it for? | Name a specific person, team, or organization type. |
| Transformation | Yes | What changes for that audience? | Use one concise outcome or intended transformation. |
| Xavier's ownership | Yes | What did Xavier personally own? | Name only verified areas of responsibility. Do not imply an agency or unstated team. |
| Product-cycle stages | Yes | Which parts of the complete cycle does this story prove? | Show only stages connected to inspectable evidence in the case study. |
| Evidence line | Yes | Why should I believe this story matters? | Show one observed artifact, verified outcome, or explicitly labeled hypothesis. |
| Disclosure | Conditional | Is any content assumed, simulated, illustrative, or planned? | Make the boundary visible whenever a visitor could otherwise mistake it for observed reality. |
| Case-study action | Yes | Where can I inspect the story? | Use a descriptive action such as `Read the case study`; do not rely on a whole-card click as the only semantic link. |

### Card hierarchy

The visible reading order is:

1. Work type and current status
2. Project name
3. Audience and transformation
4. Primary visual
5. Evidence line
6. Xavier's ownership and product-cycle stages
7. Case-study action

Desktop cards may vary in composition to suit their evidence, but the required information and reading order remain comparable. Mobile cards stack into a single column and preserve the same semantic order.

## Work-type taxonomy

Work type describes Xavier's relationship to the product. Every flagship uses exactly one value.

| Public label | Definition | Required disclosure |
| --- | --- | --- |
| `Client work` | Work delivered for a real organization, customer, or client relationship. | State Xavier's actual scope and avoid claiming ownership or outcomes that belonged to the client or a wider team. |
| `Owned product / experiment` | A product or system Xavier operates, tests, or distributes himself. | Distinguish current operation from planned automation and generated output from product impact. |
| `Concept product` | A hypothetical product created to demonstrate product thinking and execution. | State that it is a concept and label assumptions, simulated data, hypotheses, and validation plans. |

`Live`, `AI system`, `Brand`, `Engineering`, and `Distribution` are not work types. They describe status, system character, or areas of ownership and must not become competing primary labels.

## Current-status taxonomy

Status describes the present maturity or operating state. It is verified separately from work type.

| Public label | Definition | Flagship eligibility |
| --- | --- | --- |
| `Live` | The product is currently available to or operating for its intended audience. | Eligible when the live state is verified. |
| `In active use` | A private or internal system is currently used in a real workflow. | Eligible when inputs, outputs, boundaries, and representative evidence can be shown safely. |
| `In validation` | A bounded product or experiment is currently being tested with a defined audience and learning signal. | Eligible when the test and evidence boundary are explicit. |
| `Prototype` | A working vertical slice demonstrates the key experience or system, but is not operating as a live product. | Eligible for concept work when the prototype and validation plan are inspectable. |
| `No longer active` | The product or engagement is historical and is not currently operating. | Not eligible for the initial flagship set without a separate, explicit decision. |

`Planned` work is not eligible for a flagship card. Plans may appear inside a published case study only when they are clearly distinguished from current behavior.

## Evidence and disclosure taxonomy

Index copy follows the evidence states established in `XAP-46`:

- **Observed:** a directly inspectable behavior, artifact, or source.
- **Verified outcome:** a real result with a named source and defined scope.
- **Assumption:** a working belief that has not been validated.
- **Hypothesis:** a claim paired with a test and decision rule.
- **Illustrative:** simulated data or a demonstrative interface.
- **Planned:** future work that must not be described as current behavior.

An evidence line may lead with an observed artifact, verified outcome, or hypothesis. Assumptions, illustrative material, and planned work require disclosure and cannot substitute for proof.

## Ownership and product-cycle language

Ownership labels may include `Product strategy`, `Brand`, `UX`, `Engineering`, `AI system`, `Film`, `Launch`, and `Distribution` when the case study verifies Xavier's responsibility.

The product-cycle stages remain the canonical evidence map:

`Discover` -> `Position` -> `Design` -> `Build` -> `Launch` -> `Distribute` -> `Learn`

Ownership labels answer what Xavier personally did. Product-cycle stages answer where the evidence sits in the whole-product journey. They must not be used interchangeably.

## Archive decision

The initial projects index contains no historical-work section and no separate archive route.

Most current legacy entries represent products that are no longer operating. Showing them as active cards, relying on broken production links, or presenting them without meaningful artifacts would weaken credibility. The nine-year engineering track record can remain visible elsewhere through verified experience and client evidence.

`XAP-51` retired every legacy entry from the public portfolio. The obsolete Armonía legacy record was merged into the current flagship source, and the other discontinued entries were removed without an archive or redirects.

A historical project may return later only when:

- the contribution and relationship can be described accurately;
- publishable artifacts provide meaningful evidence;
- the current status is explicitly `No longer active`;
- broken or misleading production links are removed;
- route, redirect, and external-link requirements are understood; and
- the project adds evidence that the flagship set does not already provide.

No current legacy project meets those conditions, so the portfolio has no visible archive. Portfolio size is not a success measure.

## Responsive structural wireframes

These wireframes evaluate hierarchy and content order only. They do not select final styling, layout primitives, breakpoints, media ratios, or component architecture.

### Desktop, representative 1440 CSS pixels

```text
+----------------------------------------------------------------------------------+
| Shared site header                                                               |
+----------------------------------------------------------------------------------+
| SELECTED PRODUCTS AND SYSTEMS                                                    |
| Curated proof of the path from opportunity to product, launch, and learning.     |
+----------------------------------------------------------------------------------+
| FLAGSHIP 1: CLIENT WORK                                                          |
| [Type + status]  [Project name]        [Audience and transformation]             |
| [Large product or narrative visual]    [Evidence line]                           |
|                                        [Ownership + cycle stages]                 |
|                                        [Read the case study]                      |
+----------------------------------------------------------------------------------+
| FLAGSHIP 2: OWNED PRODUCT / EXPERIMENT                                           |
| [Type + status]  [Project name]        [Audience and transformation]             |
| [Workflow or system visual]            [Evidence line]                           |
|                                        [Ownership + cycle stages]                 |
|                                        [Read the case study]                      |
+----------------------------------------------------------------------------------+
| FLAGSHIP 3: CONCEPT PRODUCT                                                      |
| [Type + status]  [Selected later]      [Audience and intended transformation]    |
| [Working product surface]              [Hypothesis + validation boundary]         |
|                                        [Ownership + cycle stages]                 |
|                                        [Read the case study]                      |
+----------------------------------------------------------------------------------+
| FROM IDEA TO AUDIENCE, SHOWN THROUGH THE WORK                                    |
| Discover -> Position -> Design -> Build -> Launch -> Distribute -> Learn          |
| Each stage connects to inspectable evidence in one or more flagship stories.     |
+----------------------------------------------------------------------------------+
| Interpretation note: client, owned, concept, and evidence states are explicit.   |
+----------------------------------------------------------------------------------+
| Bring me the product opportunity, not a finished specification.                  |
| Supporting text                                                                  |
| [Schedule a meeting]                                                             |
+----------------------------------------------------------------------------------+
| Shared site footer                                                               |
+----------------------------------------------------------------------------------+
```

### Mobile, representative 390 CSS pixels

```text
+--------------------------------------+
| Shared site header                   |
+--------------------------------------+
| SELECTED PRODUCTS AND SYSTEMS        |
| Short portfolio thesis               |
+--------------------------------------+
| FLAGSHIP 1                           |
| Type + status                        |
| Project name                         |
| Audience and transformation          |
| Product or narrative visual          |
| Evidence line                        |
| Ownership                            |
| Product-cycle stages                 |
| Read the case study                  |
+--------------------------------------+
| FLAGSHIP 2                           |
| Same semantic order                  |
+--------------------------------------+
| FLAGSHIP 3                           |
| Same semantic order                  |
+--------------------------------------+
| FROM IDEA TO AUDIENCE                |
| Discover                             |
| Position                             |
| Design                               |
| Build                                |
| Launch                               |
| Distribute                           |
| Learn                                |
+--------------------------------------+
| Interpretation note                  |
+--------------------------------------+
| Bring me the product opportunity,    |
| not a finished specification.        |
| Supporting text                      |
| Schedule a meeting                   |
+--------------------------------------+
| Shared site footer                   |
+--------------------------------------+
```

## Responsive and accessibility acceptance criteria

The future implementation must preserve the approved hierarchy under these constraints:

- A 390 CSS pixel mobile viewport shows every required field without horizontal page scrolling.
- Flagship content follows a logical heading and reading order without depending on visual position.
- Card actions are descriptive links with visible keyboard focus.
- Work type, status, evidence state, and disclosure never rely on color alone.
- Meaningful visuals have contextual alternatives; decorative imagery is ignored by assistive technology.
- The product-cycle evidence remains understandable without hover, animation, or pointer input.
- The CTA retains its full context and does not collapse into an unexplained button.
- Final cross-route accessibility and browser verification remains owned by `XAP-53`.

## Downstream handoff boundaries

- `XAP-48`: define the reusable case-study content model and data-source decision.
- `XAP-49`: verify and publish Armonía's narrative, claims, ownership, status, and assets.
- `XAP-50`: verify and publish the publishing engine's current workflow and evidence.
- `XAP-51`: audit, retain, redirect, or retire every legacy entry.
- `XAP-53`: complete cross-route responsive, keyboard, screen-reader, browser, and WCAG verification.
- `XAP-54`: select the concept that earns the third position.
- `XAP-55`: build and launch the selected concept vertical slice.
- `XAP-56`: measure the concept experiment and document the learning.

## Approval checklist

- [x] Page narrative and section order are approved.
- [x] The three flagship positions and their selection boundaries are approved.
- [x] Flagship-card required information and hierarchy are approved.
- [x] Work-type, status, evidence, and ownership vocabularies are approved.
- [x] The decision to omit a visible archive initially is approved.
- [x] The exact contextual CTA role and copy are approved.
- [x] Desktop and mobile structures are approved as the basis for later implementation.

Xavier approved this document on 2026-08-31. The approval completes the XAP-47 decision scope but does not authorize production changes to `/projects`; those changes belong to the downstream delivery issues named above.

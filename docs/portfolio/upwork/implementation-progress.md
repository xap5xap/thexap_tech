# XAP-158 implementation progress

September 20, 2026. Xavier approved the completed portfolio and technical-reasoning revision. Verification and the full manifest are recorded in [review.md](review.md). The [delivery ledger](https://linear.app/thexap/issue/XAP-165) holds the repository commit, develop remote readback, and final Linear status.

## Current state

- Branch: `codex/xap-158-upwork-experience`, based on clean `develop` at `556c680`.
- Owner approval covers the parent and all 35 included delivery/implementation children. Final closure follows verified develop integration. The introductory call stays canceled.
- All 28 engagement pages are generated in the local production build: 13 contribution case notes and 15 engagement briefs. UW-10 remains excluded; repeat contracts retain separate identities.
- The complete chronological Upwork card grid follows Armonía on `/projects` and links directly to every engagement. Five category filters plus All work make the full collection easier to scan.
- Each page has a persuasive headline, prominent role, local technology-logo panel, client feedback when available, technology map, concise narrative, expandable contract details, unique metadata, source and back links, and a direct meeting CTA. Fourteen exact client excerpts are attributed. Generated artwork is not used.
- Thin records use the original title and available description, following Xavier's explicit instruction. Clearly labeled engineering perspectives add examples from the period. Further personal recollection is optional enrichment, not a blocker.
- UW-29 keeps delivered work separate from its open Upwork contract. Confirmed React, Next.js, MongoDB, AWS infrastructure, and Codex/Claude Code delivery-method context are included without invented dates.
- Armonía retains its approved visible headings and metadata. Shared presentation strings now live in its record.
- The safe public projection excludes editorial evidence, internal notes, and private source data. No Upwork account change or client contact occurred.

## Source audit

Authorized Edge readback covered all 29 contract dialogs and all feedback states. All nine expandable descriptions were expanded. Nineteen descriptions are private; UW-28 refers to an unavailable document. Safe results are in [source-readback.md](source-readback.md) and [source-ledger.json](source-ledger.json). The profile totals were rechecked on September 20: 29 jobs, 28 completed, one open, 15,309 hours, 100% Job Success, Top Rated Plus.

The earlier browser authorization rejection was resolved by Xavier's explicit instruction to use Edge. The earlier personal-contribution content blocker was resolved by his instruction to finish thin records from titles and descriptions, with illustrative period technology context. Neither is a current blocker. The [questions worksheet](content-questions.md) is optional future enrichment.

## Verification

- All 20 focused portfolio tests pass, including both page formats, draft exclusion, evidence requirements, period checks, metadata uniqueness, public-data privacy, and server rendering.
- Lint passes with the existing `Value.tsx` image warning.
- Production build passes and generates 80 static pages, including all 28 engagement pages.
- All 43 expected HTTP statuses pass: 28 new routes and six existing pages return 200; the excluded call, seven retired routes, and an unknown route return 404.
- All 28 generated pages have unique titles and descriptions, correct canonical/robots/Open Graph/X fields, source/back/CTA links, and no editorial data in page props. The index has exactly 28 links in contract-start order.
- Edge navigation at desktop and 390px checked every engagement: one main heading, correct back link, no broken loaded images, and no horizontal overflow across all 56 route/viewport checks. All 16 logo assets return 200. All 14 client excerpts exactly match their source-ledger excerpts.
- Final visual samples, keyboard navigation, menu dismissal, meeting CTA, contrast, and regression checks passed; exact samples and limits are recorded in the final review package.

The legacy Jest command was not run or claimed passing. No production deployment, external social-preview cache, or search-engine result was checked for this change.

## Delivery boundary

Xavier has approved the completed deliverable. The repository workflow authorizes commit, merge and push to `develop`, remote SHA readback, and Linear closure after verification. `main` and production remain outside this task's delivery authority. No issue is marked Done before that readback.

## Historical milestones

1. Initial implementation deliberately withheld all 28 drafts while sources and content were incomplete. It generated 52 static pages and passed 16 tests.
2. The public-data projection was tightened so source evidence and internal editorial fields could not enter published page props.
3. Explicit Edge authorization resolved browser access. The source audit recovered 12 stronger contribution narratives and all feedback states.
4. Xavier directed completion of thin records from titles/descriptions and period technologies. The final format now contains 13 contribution case notes (including the owner-confirmed AWS engagement) and 15 completed briefs. All 28 routes are generated locally.

5. Xavier requested visual cards and stronger sales copy, then rejected generated art. The revised presentation uses real technology logos and grouped technology maps, with no generated media in the site. All 28 desktop/mobile routes and all filter states were rechecked.

Earlier empty-registry tests and static fixtures are historical evidence only. The current visual review uses the revised development routes in Edge, with a separate verified production build. Temporary HTTP/metadata checks live outside the repository in `/private/tmp/xap158-http.json` and `/private/tmp/xap158-metadata.json`.

The latest content revision adds two or three engineering points to all 28 pages under `Technology & trade-offs`. Direct explanations replace conditional prose. Past-tense contribution stays source-supported; example tools stay labeled. The point schema validates title, explanation, and trade-off, with explicit public-field projection.

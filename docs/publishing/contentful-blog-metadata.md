# Contentful blog metadata, XAP-157

Status: Xavier approved the implementation and tag assignments on 2026-09-20.
The three public tags were created and all 17 posts were updated and republished.
Website code delivery targets `develop`; production code deployment is separate.

Issue: https://linear.app/thexap/issue/XAP-157/restore-contentful-metadata-tags-and-publication-dates-on-blog-cards

## Findings

The 2026-09-20 read-only audit found 44 blog entries: 43 published posts and one
unpublished test entry. Seventeen published posts have no metadata tags. Every
published entry has a date. Nine existing tags are public.

The CLI set `fields.date` but omitted `metadata.tags`. The skill described
metadata tags, while its orchestrator invoked a CLI with no tag support.
The index and related-post queries omitted `date`; BlogCard did not render it.
The separate `fields.tags` Symbol is not the source of the website chips.

Contentful's public-tag contract: https://www.contentful.com/developers/docs/references/content-management-api/tags/

## Implemented

- Publisher: `--list-tags`, `--tags ai,react`, public-tag validation before asset
  writes, matching dry-run metadata, and an explicit `--no-tags` opt-out.
  Existing offline conversion without flags remains available with a warning.
- Skills: use the live catalog, explicit IDs, local hero default, metadata/date
  readback, and verification of the rebuilt blog after authorized publication.
- Website: date queries for index and related posts, semantic `time` elements,
  one card link instead of a nested button, wrapping chips and stacked mobile
  related cards. The existing post header uses the same date formatter.
- Dates: Ecuador timezone for timestamped entries. Legacy calendar-only values
  and their GraphQL midnight-UTC representation keep the recorded calendar day.
  An exact midnight-UTC value is treated as a calendar date by this convention.
  Missing or unparseable dates are omitted safely. No stored dates were changed.
- Corrected the draft CLI message: rerunning creates a duplicate entry, not a
  promotion of an existing draft.

The CLI initializes the editorial date at entry creation. If a draft is published
later, its date should be reviewed in Contentful. This task does not substitute
last-updated time for the editorial date or rewrite historic dates.

## Verification

- `CONTENTFUL_PREVIEW= npm run build`: passed, 51 pages using published content.
  An earlier build with local preview configuration also passed, 52 pages.
- `npm run lint`: passed with the existing Value.tsx raw-image warning.
- GraphQL artifacts regenerated from the live schema, then formatted.
- Publisher `npm test`: 3 tests pass, covering argument handling, missing/private
  tags, no writes before tag validation, paginated read-only catalog listing,
  draft/publish behavior, deliberate no-tag uploads and dry-run payload parity.
  Tests mock the SDK; no CMS test writes. Integration tests need Node 22.15+.
- Installed `--list-tags`: read the real catalog successfully.
- Date formatter: 24 assertions pass across UTC, Ecuador and Tokyo host timezones,
  including normalized legacy dates, malformed/missing values and late-day posts.
- Browser: index at 1440, 390 and 360 pixels; mobile article and related cards;
  all 43 published cards have dates; legacy April 1 remains April 1; no settled
  horizontal overflow; keyboard Tab/Enter navigation works; no console errors.
- No website em-dash matches; scoped diffs pass whitespace checks.
- Both skill frontmatters validate using the installed YAML parser. The bundled
  Python quick_validate script could not run because PyYAML is unavailable.
- The website's legacy Jest command is not a functioning test suite and was not
  reported as passing.

## Approved and applied backfill

Created three public topic tags: `productDevelopment` (Product Development),
`testing` (Testing), and `softwareDelivery` (Software Delivery). Reuse existing
AI and React tags where the post warrants them. Xavier approved these assignments before application. They are grounded in the published titles,
excerpts and section headings read from Contentful.

| Published post | Applied tags |
| --- | --- |
| How to choose the group you launch to | Product Development |
| Writing the tests before the app, and letting an agent fix what fails overnight | AI, Testing |
| The graph said parallel. The files said otherwise. | AI, Product Development |
| The bug is fixed. Now I have to prove it stays fixed. | AI, Testing |
| A plan the specs wrote, run with an AI QA partner, one screen at a time | AI, Testing |
| One shared UI package for every app, built by agents overnight | AI, Product Development |
| Green CI, clean merge, and a schema that never reached production | Software Delivery |
| Throwing away the stack five days in | Product Development |
| Shipping a feature milestone as dependency-ordered waves of AI agents | AI, Software Delivery |
| My CI ran the full test suite every time I edited a markdown file | Testing, Software Delivery |
| I locked the scope and started the build. The best part is how boring it is. | AI, Product Development |
| Why I built a 12-route React app in one day, then threw it away | AI, React, Product Development |
| I validated the product with the actual user across 7 sessions before scaffolding production | Product Development |
| How I locked v1 scope: MoSCoW + 2D story mapping + risk-weighted effort estimates | Product Development |
| Sixteen spec documents before I scaffolded a single screen | Product Development |
| Re-listening to interviews I recorded three years ago, with AI doing the synthesis pass | AI, Product Development |
| Three years ago a friend asked me to build her an app. I never finished. I'm picking it back up with AI. | AI, Product Development |

The original plan remains in the local publisher's
`backfills/xap-157-proposed-tags.json`; the completed receipt is
`backfills/xap-157-applied-tags.json`. Every entry passed a fresh version and
publication-state check. Only `metadata.tags` was patched. All 17 field hashes
match before and after, including dates, bodies, slugs, excerpts and image links.
First-publication timestamps and unrelated metadata were preserved. The draft
test entry was excluded and no duplicate posts were created.

Contentful reordered tags on one publication. Verification compares tag sets
while checking all other metadata exactly. The recorded publication was read
back and the remaining updates resumed without republishing completed entries.

## Local review locations

- Website worktree: `/private/tmp/xap157-web`, branch `codex/xap-157-blog-metadata`.
- Installed publisher: `/Users/xavierperez/tools/contentful-publish`, same branch.
- Installed skills: `/Users/xavierperez/tools/claude-skills`, same branch.

Repository commit and remote delivery evidence is recorded in XAP-157.
The installed tool and skills are delivered on scoped branches; website changes
are approved for `develop`, not `main` or a production code release.

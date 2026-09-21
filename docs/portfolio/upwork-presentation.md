# Upwork engagement presentation

XAP-160 implementation decision, September 20, 2026. Revised after Xavier requested a more persuasive visual presentation and then selected simple technology logos over generated artwork. Xavier approved the final presentation and technical-copy revision.

## Index

Lead with a product-engineering promise and the dated Upwork trust summary. Armonía keeps its flagship image and position. Follow it with `The client portfolio`: 28 cards with a technology-logo panel, category, contract year, persuasive headline, concise summary, and explicit role. Use three columns on wide screens, two on tablets, and one on phones. Sort by contract start date, newest first. All 28 appear by default; five optional category filters help visitors find relevant work. Each whole card is a keyboard-accessible link. Dates disambiguate repeat titles. Finish with a direct project-conversation CTA.

The trust line links to the public profile and carries its observation date. Platform totals count contracts, not distinct products. The latest record says `Work delivered; contract open` only when supported by owner confirmation. The complete section requires all 28 included records, not a smaller substitute set.

## Pages and identity

Use `/projects/upwork/<date-qualified-slug>`. The 28 identities are fixed in `upwork/source-ledger.json`; UW-10 has no slug. The separate URL namespace leaves retired project URLs at 404. A generic engagement renderer uses the same evidence, asset, and link primitives as the flagship model, with its own validation profile. Flagship requirements stay intact.

Each page leads with a benefit-oriented headline, summary, strengths, technology panel, and prominent role. Verified client excerpts or attributed feedback follow when available, then short context and contribution sections. A technology map groups recorded tools by responsibility. A `Technology & trade-offs` section adds two or three scannable explanations, each with the engineering concern, reasoning, and trade-off. Supported contribution uses first-person past tense; broader reasoning uses a direct engineering perspective. Example tools remain visibly identified. Contract dates, factual status, original identity, and source links remain available in a keyboard-accessible details disclosure. Thirteen contribution case notes describe work supported by client feedback or Xavier's confirmation. Fifteen engagement briefs use the original title and available description, as Xavier explicitly requested on September 20. Briefs explain recorded scope and include a clearly labeled engineering perspective using period-appropriate technology examples. Examples are separate from recorded technologies and never become claims of actual project use. A brief does not require further personal recollection to be ready. Longer work can carry multiple sections; a one-day fix stays concise. Unknown factual sections remain omitted.

Show contract dates, delivery state, and current product availability as separate facts. Historical availability defaults to `Not verified`, never `Live` or `Inactive`. Contract dates are not continuous full-time employment. No star aggregates, invented metrics, assumed services, or AI-runtime ownership inferred from product names.

## Media, navigation, and disclosure

Use local SVG technology marks from Simple Icons 16.32.0, with the source and CC0 license recorded in `public/images/technologies/`. Brand marks are CSS masks paired with readable tool names. AWS services use an AWS text tile. If no specific stack is recorded, show a simple scope symbol instead of inventing logos. No generated artwork is included. Maps show technology responsibilities, not claimed deployment architecture. Technical examples remain separate from the recorded stack. Real screenshots require safe content and permission; illustrative figures need visible labels. Reuse the approved portfolio social image when no engagement image exists, with unique page titles and descriptions.

Back navigation returns to `/projects#upwork-experience`. The page retains the shared meeting CTA and public source links. Related engagement links require confirmed relationships, not matching titles. No draft record or internal ledger is serialized to production props or browser bundles.

## Verification

Validate identifiers, duplicate routes, source references, concrete contribution evidence, source URL safety, media permission, and contract/delivery distinctions. Check the generated HTML and 404 behavior for every intended route. Inspect desktop/mobile layouts for long and short stories, repeated titles, logo panels, empty-stack fallbacks, feedback states, and the delivered/open state. Optional factual enrichment is recorded separately and does not block the completed briefs. Final deliverable approval is recorded in the review package; repository delivery and remote readback are tracked in XAP-165.

# Portfolio discovery instrumentation

Issue: XAP-201

## Public reporting inventory

The current public projection contains:

- one validated flagship, `armonia`; and
- 28 publication-ready Upwork engagements with stable public `UW-..` IDs, canonical slugs, and one of five public showcase categories.

The focused portfolio suite derives and validates that inventory from the repository projections. It does not hard-code an expected event for a private record, draft, excluded call, missing slug, or 404 route.

Every recorded engagement technology and each visible Armonía supporting-technology label resolves through the frozen XAP-198 dictionary. Illustrative examples, showcase strengths, decorative card logos, and unknown labels do not become measured technology exposure.

## Event behavior

`project_impression` uses the rendered project card when half the card can fit in the viewport. If that threshold is geometrically impossible, it observes the project-title element and reports `project_title_link`. The target must remain at least 50 percent visible for one continuous foreground second. Filtering, unmounting, rapid scrolling, a hidden document, withdrawal, and a page-visit change cancel stale timers. A project and placement emit once per page visit.

`select_content` runs on normal, modified, middle-button, and keyboard link activation without preventing default navigation. It reports whether the matching target already produced a qualifying impression and whether this is the first selection for that project, placement, and target in the page visit. Raw repeated activations stay separate from the eligible CTR numerator.

`portfolio_filter` runs only when the chosen category changes. The initial All work state and repeated activation of the selected filter emit nothing. The event uses the six existing categories and the actual filtered public-result count.

`technology_exposure` observes only the rendered text labels in engagement Technology & trade-offs maps and the flagship Supporting technology block. It uses the same 50 percent, one-second, foreground, consent, page-visit, and stale-observer controls.

## Current-surface boundaries

The current public records contain no related-engagement links, so there is no real related-link browser sample. The renderer is instrumented for a future validated `relatedSlugs` projection, but an empty current surface is not relabeled as a passing live interaction. The homepage currently links to the projects index, not directly to a public project, so no project-selection event is invented there.

A dashboard may join the public project-to-technology mapping to a page report as an inferred association. That is separate from measured `technology_exposure`. Rows with multiple technologies are non-additive and do not show comparative interest by themselves.

## Candidate verification

Checked September 20, 2026 in controlled Edge against localhost with consent accepted and the production measurement ID present. The hostname gate correctly produced zero Google resources.

| Check | Result |
| --- | --- |
| Index inventory | One flagship and 28 engagement links rendered from public projections |
| Filter | Mobile changed the visible result count from 28 to 6; the selected state and link set updated without a route change |
| Direct detail entry | `/projects/upwork/next-react-aws-2023` rendered the correct title and recorded technology labels |
| Technology labels | React, Next.js, MongoDB, AWS CDK, AWS Lambda, Amazon EventBridge, and Amazon API Gateway rendered in the measured section |
| Modified click | Command-click opened the project in a new tab and kept the index in the current tab |
| Keyboard activation | Enter on the project link navigated to the canonical detail route |
| Mobile | At 390 x 844, the first engagement card was 358 x 501, its title was 308 x 56, and the document had no horizontal overflow |
| Rapid and repeated scroll | The mobile page remained usable and produced no local Google request |
| Related links | Not available in the current public projection; no synthetic content was added |

The browser matrix verifies current UI behavior and negative delivery gating. Sanitized positive payload shapes and invalid-event negatives are covered by the focused suite. Production request and GA4 receipt evidence remain XAP-204.

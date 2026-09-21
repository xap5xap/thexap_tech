# Upwork portfolio review

September 20, 2026. XAP-158 / XAP-164. Xavier approved the final implementation, including the visual direction and technical-judgment copy. Approval authorizes the normal develop delivery workflow. The [delivery ledger](https://linear.app/thexap/issue/XAP-165) records commit, remote readback, and closure evidence.

## Open the result

[View all 28 engagements](http://localhost:3091/projects#upwork-experience). The revised local development preview was reviewed in Edge, and the production build was verified separately. Open the link in Edge if the temporary review tab closes. It runs on port 3091 while the review server remains active. This is a local preview, not the production website.

The section appears directly beneath Armonía as a responsive card grid with category filters. Each card shows technology logos, dates, a persuasive headline, summary, and role. Every engagement has its own page with a role panel, relevant client feedback, concise context and contribution, a technology map, expandable contract details, source and back links, and a meeting CTA. Fourteen exact client excerpts are shown with attribution. SVG logos are served locally with source/license documentation. No generated artwork is used. Thirteen pages are contribution case notes. Fifteen are engagement briefs completed from the original job title and available description, following Xavier's latest instruction.

Briefs include a clearly labeled engineering perspective. Zustand, Redux, Tailwind CSS, and Material UI appear where relevant to the engineering explanation and the period. These examples are separate from the recorded project technologies. Additional personal recollections are optional improvements and do not block this package. [Technology research and boundaries](technology-context.md).

## Latest revision: technology and trade-offs

Xavier liked the cards and individual-page sections, then requested stronger explanations of knowledge and technology decisions. All 28 pages now have two or three short engineering points under `Technology & trade-offs`. Each point names the concern, explains the reasoning, and states a trade-off. The former `How I think about this work` heading and conditional `would` prose are removed.

Use `I` for documented personal work and first-person engineering principles. Use `we` only for known collaboration. Explanations of technology fit do not invent who originally selected a tool or the client's undocumented selection criteria. Example tools are explicitly identified and remain outside the recorded stack. The MongoDB/AWS page now explains document modeling, infrastructure as code, and service responsibilities.

The revised point model validates all three text fields and projects only those fields into public props. Verification includes the 20 portfolio tests (updated for point completeness, disclosure, and nested privacy), lint, TypeScript, production generation, and all 28 metadata/content projections. Browser samples cover desktop and 390px versions of the React/Next.js brief, testing case note, unknown-stack mobile brief, and MongoDB/AWS case note; no overflow or captured console errors. The existing card/filter verification below remains applicable because that surface is unchanged.

## Complete route manifest

| Record | Page | Format |
| --- | --- | --- |
| UW-01 | [Senior React and Next.js development (2022)](http://localhost:3091/projects/upwork/senior-react-nextjs-2022) | engagement-brief |
| UW-02 | [React webapp development, October 2020 contract (2020)](http://localhost:3091/projects/upwork/react-webapp-2020-oct) | engagement-brief |
| UW-03 | [Research platform development (2022)](http://localhost:3091/projects/upwork/research-platform-2022) | engagement-brief |
| UW-04 | [Cypress and Nx testing, March 2022 contract (2022)](http://localhost:3091/projects/upwork/cypress-nx-tests-2022) | case-note |
| UW-05 | [Senior React support (2021)](http://localhost:3091/projects/upwork/senior-react-support-2021) | engagement-brief |
| UW-06 | [Cypress and Nx testing, December 2021 contract (2021)](http://localhost:3091/projects/upwork/cypress-nx-tests-2021) | case-note |
| UW-07 | [Node.js login automation and React frontend (2021)](http://localhost:3091/projects/upwork/node-login-automation-2021) | engagement-brief |
| UW-08 | [AIOps diagnostics frontend (2020)](http://localhost:3091/projects/upwork/aiops-frontend-2020) | case-note |
| UW-09 | [React and Redux webapp, January 2020 contract (2020)](http://localhost:3091/projects/upwork/react-redux-webapp-2020-jan) | case-note |
| UW-11 | [Marketplace frontend development (2020)](http://localhost:3091/projects/upwork/marketplace-frontend-2020) | engagement-brief |
| UW-12 | [Slicify application development (2019)](http://localhost:3091/projects/upwork/slicify-2019) | case-note |
| UW-13 | [React interface implementation (2019)](http://localhost:3091/projects/upwork/react-interface-2019) | case-note |
| UW-14 | [Brief React Native engagement (2019)](http://localhost:3091/projects/upwork/react-native-consulting-2019) | engagement-brief |
| UW-15 | [Web and mobile crash diagnosis (2019)](http://localhost:3091/projects/upwork/web-mobile-crash-fix-2019) | case-note |
| UW-16 | [React and Redux application development (2019)](http://localhost:3091/projects/upwork/react-redux-full-stack-2019) | engagement-brief |
| UW-17 | [Consumer web application development (2018)](http://localhost:3091/projects/upwork/consumer-web-app-2018) | case-note |
| UW-18 | [React web and native wallet development (2017)](http://localhost:3091/projects/upwork/react-wallet-2017) | case-note |
| UW-19 | [React frontend for an AI company (2018)](http://localhost:3091/projects/upwork/ai-company-frontend-2018) | engagement-brief |
| UW-20 | [Brief mobile application engagement (2017)](http://localhost:3091/projects/upwork/mobile-app-2017) | engagement-brief |
| UW-21 | [Desktop React dashboard (2017)](http://localhost:3091/projects/upwork/react-dashboard-2017) | case-note |
| UW-22 | [React Native build troubleshooting (2017)](http://localhost:3091/projects/upwork/react-native-build-fix-2017) | case-note |
| UW-23 | [Catalog development, continuation (2017)](http://localhost:3091/projects/upwork/catalog-continuation-2017) | engagement-brief |
| UW-24 | [Catalog login and import/export (2017)](http://localhost:3091/projects/upwork/catalog-login-import-export-2017) | engagement-brief |
| UW-25 | [UR money fixes and database research (2017)](http://localhost:3091/projects/upwork/ur-money-maintenance-2017) | engagement-brief |
| UW-26 | [Ionic mobile app, my first Upwork project (2016)](http://localhost:3091/projects/upwork/ionic-mobile-app-2016) | case-note |
| UW-27 | [Mobile corrections, March 30 contract (2017)](http://localhost:3091/projects/upwork/mobile-corrections-2017-mar-30) | engagement-brief |
| UW-28 | [Mobile corrections, March 27 contract (2017)](http://localhost:3091/projects/upwork/mobile-corrections-2017-mar-27) | engagement-brief |
| UW-29 | [Next.js and AWS full-stack development (2023)](http://localhost:3091/projects/upwork/next-react-aws-2023) | case-note |

UW-10, the introductory call, is excluded. All 29 platform records reconcile to 28 engagement pages. Repeat-title contracts retain distinct URLs and periods. The [inventory](../upwork-contract-inventory.md) maps each page to its Linear issue and original title.

## Source and claim coverage

- Authorized Edge readback covered all 29 contract dialogs, every feedback state, and all nine expandable descriptions. Nineteen descriptions are private; one refers to an unavailable document. The [source readback](source-readback.md) and [editorial ledger](source-ledger.json) preserve safe results.
- The trust summary uses the September 20 profile observation: 29 jobs, 28 completed, one open, 15,309 hours, 100% Job Success, Top Rated Plus.
- Personal contribution statements use client feedback or Xavier's confirmation. Briefs use recorded scope and explicitly illustrative technical reasoning. General praise does not become a fabricated feature, metric, or testimonial.
- UW-29 includes confirmed frontend/backend delivery, React, Next.js, MongoDB, CDK, Lambda, EventBridge, API Gateway, and Codex/Claude Code as a delivery method. Work delivered and contract open are separate facts. No delivery date or runtime-AI claim is invented.
- UW-26 retains Ionic, TypeScript, Node.js, and Xavier's confirmation that it was his first Upwork project.
- Unconfirmed product mappings, unavailable client media, exact historical versions, and unknown current product availability remain omitted or explicitly unverified. The pages do not depend on invented screenshots.

## Verification performed

| Check | Result |
| --- | --- |
| Focused portfolio tests | 20 passed. Covers identity reconciliation, both formats, evidence validation, draft exclusion, period checks, privacy, metadata, and rendered disclosures. |
| Lint | Passed. Existing `src/components/Value.tsx:26` image warning remains. |
| Production build | Passed after final caption-color changes, with Contentful network access enabled. 80 static pages, including all 28 engagements. A sandboxed retry had failed at Contentful DNS before the successful build. |
| HTTP routes | 43/43 expected statuses: 28 engagement pages and six existing routes return 200; excluded call, seven retired routes, and one unknown route return 404. |
| Logo assets and excerpts | All 16 local SVG files return 200. All 28 showcase records have a headline and role; all 14 quoted excerpts exactly match the corresponding source-ledger excerpt. |
| Search/share metadata | All 28 have unique titles/descriptions, self canonical URLs, robots, Open Graph, and X Card fields. Shared social image exists at 1200 x 630. |
| Index | Exactly 28 engagement links, newest contract start first, beneath the flagship and above the meeting CTA. |
| Private-data boundary | Generated page props exclude editorial evidence, questions, notes and private links. Browser bundles contain no ledger markers. |
| Edge desktop and mobile | All 28 redesigned engagements visited at desktop and 390px: 56 route/viewport checks, one main heading, correct back link and contract disclosure, no horizontal overflow. Index visually checked at desktop, 600px, and 390px; no clipped logo tiles at the narrow two-column breakpoint. |
| Keyboard/navigation | All six filter states checked: 10 web, 5 full-stack, 6 mobile, 4 testing, 3 data, 28 total. Category filters and contract disclosure work with Enter and show a visible 3px focus outline. Card/back navigation and the meeting CTA work. Earlier shared-shell skip-link and menu checks remain applicable. |
| Semantics/contrast | One h1 per page, named sections, explicit list/listitem semantics, text status labels. Logo-panel caption colors meet 4.5:1 contrast. Existing secondary text measures 7.23:1 on the paper surface and 8.51:1 on the page background. |
| Regression/error checks | Armonía headings, ownership copy, metadata and flagship selection preserved. Existing routes continue to return their expected statuses. |
| Repository checks | Final diff inspected; required U+2014 scan and whitespace checks clean. |

Visual inspection used the revised development server in Edge. Samples: desktop index and cards, mobile filtered index, 600px two-column grid, desktop UW-29 role/stack page, and the complete mobile UW-15 client-feedback story. All 28 redesigned pages were checked at desktop and mobile for semantic structure, contract disclosure, back navigation, and responsive width. The previous text-list preview is historical evidence only. Final production HTML is checked separately for routes, metadata, source links, and private-data boundaries.

The React review found no added data-fetch waterfall, client-side source ledger, unnecessary effect, new dependency, or project-specific branch in the shared engagement renderer. Direct MUI imports and explicit public data projections are retained.

## Owner approval and delivery limits

Xavier explicitly approved this package after reviewing the visual and technical-copy revisions. That approval covers the index and all 28 individual engagement pages, real technology logos, source-supported client excerpts, and the Technology & trade-offs explanations. The approved delivery is commit, merge and push to `develop`, remote SHA verification, and Linear closure. Completion evidence belongs to the delivery ledger; production release is a separate action.

No production deployment, external social-preview cache, search-engine crawl, real-device run, or full screen-reader audit is claimed. The legacy Jest command was not run. Browser checks used desktop Edge with a 390px viewport for mobile. No main/production change, Upwork account edit, client message, or contract closure occurred.

During the earlier review, automatic approval review rejected preview tab retention. No browser delivery or handoff marker was applied. Xavier subsequently reviewed the local preview and approved the final deliverable.

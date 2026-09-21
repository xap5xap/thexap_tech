# XAP-197 acceptance-to-evidence matrix

Updated: September 20, 2026 (America/Guayaquil)

This matrix separates source delivery, saved account configuration, deployed behavior, event receipt, processed reports, and business outcomes. A lower evidence layer never proves a higher one.

| Issue | Acceptance area | Evidence artifact or environment | Current result | Remaining evidence |
| --- | --- | --- | --- | --- |
| XAP-198 | Frozen measurement, consent, attribution, and privacy contract | `docs/analytics/measurement-plan.md`; commit `a37af8d184415e8148467d612eeb093b2f617739`; remote `develop` readback | Verified and Done | Configuration, production, and reporting stay with their owning issues |
| XAP-196 | Remove duplicate Calendly bootstrap without changing booking behavior | `docs/analytics/calendly-widget-fix.md`; commit `136d7c8f01b006ec46c3a24092c51baa850b90b4`; local desktop/mobile/keyboard/browser checks | Candidate verified and Done | Production regression and analytics-denied integration in XAP-204; no appointment submitted |
| XAP-199 | Consent-aware GA4 foundation | `src/analytics`; `tests/analytics.test.mjs`; `docs/analytics/ga4-foundation.md`; controlled local Edge at 1682 px and 390 x 844 | 13 focused tests pass; unset, accepted-local, and rejected states made zero Google requests; consent persistence, equal controls, mobile fit, and keyboard focus verified | Full repository checks and `develop` delivery, then positive production request and receipt evidence in XAP-204 |
| XAP-201 | Project discovery and technology instrumentation | `src/analytics/events.ts`; `src/analytics/usePortfolioTracking.ts`; current public projections; `docs/analytics/portfolio-instrumentation.md`; controlled local Edge | One flagship plus 28 engagements mapped; filters, card/title visibility, selection semantics, and measured technology labels implemented; focused payload and browser negatives verified | Full repository checks and `develop` delivery; positive production request/receipt in XAP-204; current projection has no related links |
| XAP-202 | Upwork tagged-link and confirmed-outcome workflow | `scripts/upwork-attribution.cjs`; `tests/upwork-attribution.test.cjs`; `docs/business-development/upwork/attribution-workflow.md`; extended opportunity tracker; read-only live redirect | Builder, validator, six focused tests, custody boundary, and truthful current attribution states implemented; synthetic apex redirect preserved all campaign values and reached canonical HTTP 200; no real aliases, application edits, sends, or spend | Full repository checks and `develop` delivery; GA acquisition receipt in XAP-204/XAP-205 |
| XAP-203 | Contact, outbound, and Calendly callback instrumentation | Pending | Not started | Mock callback matrix and production non-booking callback receipt; real booking deferred |
| XAP-200 | Existing GA4 property configuration | Authenticated property `198622468` | Baseline read only | Saved settings and readbacks |
| XAP-204 | Scoped production release and live receipt | Pending | Not started | Candidate, deployment, network, GA4 receipt, rollback, and deferred real booking row |
| XAP-205 | Reports and owner runbook | Pending | Not started | Prepared reports, processed-data readback when available, and interpretation limits |

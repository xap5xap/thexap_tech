# Consent-aware GA4 foundation

Issue: XAP-199
Contract: `docs/analytics/measurement-plan.md` version 1.0.0

## Delivery boundary

The application owns manual `page_view` delivery. It does not load Google Analytics until a visitor accepts optional analytics. Rejection loads no tag and sends no request. Withdrawal stops application events and removes accessible `_ga` and `_ga_*` cookies; it cannot delete data already processed by Google.

Production dispatch requires both:

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-S3WGC5C6QX` at build time; and
- the exact runtime hostname `www.thexap.com`.

Missing, invalid, local, IP, apex, and Vercel preview environments remain safely disabled. Never use the production destination for local payload tests.

## Pageview lifecycle

`src/analytics/pageviewController.ts` is the single page-visit state machine. The Pages Router supplies completed `router.asPath` state after rendering. The controller canonicalizes it to a pathname, so hash-only and query-only changes do not become visits. It records sibling-slug and back/forward path changes, queues consented visits while the tag loads, and deduplicates repeated effects or remounts.

If consent arrives late, the controller sends only the current page. It neither replays earlier routes nor stores earlier campaign values. A new grant after withdrawal sends only the then-current page.

The tag configuration fixes `send_page_view` to `false` and keeps ads storage, ads user data, ads personalization, Google signals, and ad-personalization signals denied or disabled. XAP-200 separately owns the matching saved stream settings.

## Data minimization

Every page location is rebuilt on `https://www.thexap.com` from the canonical pathname. Only individually valid contract UTMs remain. Hashes, arbitrary query values, duplicate campaign parameters, and invalid campaign values are dropped. Same-origin referrers retain origin plus canonical path; external referrers retain origin only.

Dynamic project context comes only from the already public page props for a validated published flagship or engagement. Non-project routes and missing dynamic content clear that context.

## Verification layers

Run:

```text
npm run test:analytics
npm run test:portfolio
npm run lint
npm run build
```

The focused Node suite uses an injected transport and never contacts GA4. Local browser checks must show the consent interface and zero Google tag resources on rejected, unset, or locally accepted states. Positive production network and receipt evidence belongs to XAP-204 after the scoped release.

## Candidate browser matrix

Checked September 20, 2026 in the controlled Edge session against `http://localhost:3000`, with the verified production measurement ID present at build time so the hostname gate was the deciding control.

| Case | Observed result |
| --- | --- |
| No saved choice | Exact visitor copy, equal outlined Accept and Reject controls, no Google resource, no Google tag script, no `gtag`, no `dataLayer` |
| Accept on localhost | Choice persisted across a full navigation; no Google resource, script, `gtag`, or `dataLayer` because localhost is excluded |
| Withdraw or reject | Settings reopened as Rejected after navigation; no Google resource, script, or `gtag` |
| Persistent settings | Footer entry opened a dialog that showed the current choice and both choices |
| Mobile | At 390 x 844, dialog was 326 px wide, both controls were 294 x 37 px, and the document had no horizontal overflow |
| Keyboard | Consecutive Tab presses focused Accept analytics and Reject analytics |

The local matrix proves the visible consent behavior and negative environment gate. The 13 focused transport tests prove the positive payload sequence without contacting production. It does not prove production collection or GA4 receipt.

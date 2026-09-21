# Portfolio analytics production release

Issue: XAP-204

Release date: September 21, 2026 (America/Guayaquil)

This is the execution record and rollback runbook for the scoped XAP-197 analytics release. Deployment readiness, network dispatch, GA4 receipt, and booking completion are separate evidence layers.

## Candidate scope

The candidate starts from the verified production baseline `origin/main` at `e39207e7182fe9a41a333373dccf929edafc2c4a`, the XAP-195 merge. It contains only the accepted XAP-197 delivery commits reconstructed onto `codex/xap-204-analytics-release`:

| Delivery | Develop source | Release commit |
| --- | --- | --- |
| XAP-198 measurement contract | `a37af8d184415e8148467d612eeb093b2f617739` | `7a60a4a` |
| XAP-196 Calendly fix | `136d7c8f01b006ec46c3a24092c51baa850b90b4` | `ef17459` |
| XAP-199 GA4 foundation | `25079aa719bcff2d9bb501dfaffb3f3d5291c85e` | `5759c4e` |
| XAP-201 portfolio events | `2e43e8ae9aee44b71066626e35134723b5a44efa` | `b5771cc` |
| XAP-202 attribution workflow | `455f5cc7f51722a748cb5f13ec63f104b77a784c` | `64e1da1` |
| XAP-203 conversion events | `31fdd32c91dfb9f82f7d5d8460faec957b829f01` | `0591b2e` |
| XAP-200 GA4 configuration record | `e52fe66d7cb5ac61747593e937f672b3405b0fb9` | `86eb6d2` |

The XAP-202 builder, tests, acceptance evidence, and standalone workflow are included. Two internal business-development ledgers that were absent from production main remain excluded. This prevents unrelated `develop` records from entering the production release.

## Cloud and runtime baseline

- Vercel project: `xap5xaps-projects/thexap-tech`, ID `prj_1o8gFxAL9FxCNxW4E3ep0j4dQyDJ`.
- Node runtime: 22.x.
- Pre-release production deployment: `dpl_6geFwfo8V9nHHt9kw4NUSBj58BUF`.
- Pre-release deployment URL: `https://thexap-tech-r62llrxi3-xap5xaps-projects.vercel.app`.
- Pre-release aliases: `https://www.thexap.com`, `https://thexap.com`, and the Vercel project aliases.
- Production measurement variable: `NEXT_PUBLIC_GA4_MEASUREMENT_ID` added for Production only. Vercel readback confirmed its name and scope without exposing the stored value.
- Existing Contentful variables and `NEXT_PUBLIC_ANALYTICS` were left unchanged. The accepted implementation does not read the legacy analytics variable.

## Release gates

| Evidence layer | Required result | Current result |
| --- | --- | --- |
| Repository | Exact candidate passes lint, build, portfolio, analytics, attribution, TypeScript, diff review, and U+2014 scan | Passed: lint with one pre-existing `Value.tsx` image warning; 80-page build; portfolio 21/21; analytics 23/23; attribution 6/6; TypeScript clean; no U+2014 matches |
| Candidate runtime | Desktop, mobile, keyboard, consent, blocked-script, routing, portfolio, and Calendly checks pass on the candidate | Pending |
| Account settings | XAP-200 saved settings and Production variable read back | GA4 settings verified in XAP-200; Vercel variable name and scope verified |
| Protected delivery | Normal PR checks and merge complete without bypass | Pending |
| Deployment | New production deployment is Ready, aliases resolve to it, and built code contains the intended measurement ID | Pending |
| Network | Denied/local/preview states send no GA; granted canonical production sends only to `G-S3WGC5C6QX`; withdrawal stops later dispatch | Pending |
| GA4 receipt | Non-booking production events and accepted parameters appear in DebugView or Realtime | Pending |
| Booking | A real submitted appointment produces the validated completion event | Deferred by unattended profile v1; no appointment will be submitted in this run |
| Reports | Processed production rows support the XAP-205 report definitions | Downstream and may require 24 to 48 hours |

## Controlled production QA

Use this exact campaign for the non-prospect smoke path:

`utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=projects_link`

The campaign is synthetic QA, not an application, prospect, visitor, interview, booking, or business outcome. Record its test window in the production evidence and exclude it from buyer-facing reports.

Do not submit or cancel a Calendly appointment. The permitted non-booking check can select an event type and time and stop before entering personal data or confirming a booking.

## Rollback

Rollback has two coordinated parts:

1. Restore the previous Vercel production deployment `dpl_6geFwfo8V9nHHt9kw4NUSBj58BUF` to the production aliases using Vercel's rollback or promotion flow.
2. Remove or disable `NEXT_PUBLIC_GA4_MEASUREMENT_ID` in Production if the deployed tag sends unsafe, duplicate, or wrong-destination traffic. A restored artifact can still contain a baked public value, so verify the rolled-back runtime rather than treating the variable edit as sufficient.

If code is sound but collection is unsafe, stop collection first and preserve the candidate for diagnosis. Do not reactivate Universal Analytics, add GTM, activate a destructive data filter, delete analytics data, or change access as a rollback shortcut.

After any rollback, read back the active production deployment, aliases, runtime source, GA network behavior, and GA4 receipt state. Record the rollback timestamp and reason in XAP-204.

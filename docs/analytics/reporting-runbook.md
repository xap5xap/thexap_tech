# Portfolio and Upwork reporting runbook

Issue: XAP-205

Contract: `docs/analytics/measurement-plan.md` version 1.0.0

Prepared: September 21, 2026 (America/Guayaquil)

## Evidence state

The native GA4 exploration `XAP-205 Portfolio and Upwork review` is saved in account `138074150`, property `198622468`:

<https://analytics.google.com/analytics/web/?authuser=0#/analysis/a138074150p198622468/edit/A3wEk8G6RHqMtI-MEgQ2LQ>

Its four tabs and their selected fields were read back in the authenticated property. They currently contain no data. This is a saved empty template, not processed-report validation, production receipt, a visitor, an application, or a business outcome.

Production collection has not begun. Release PR <https://github.com/xap5xap/thexap_tech/pull/28> passed its candidate checks but is blocked by the protected `main` branch requirement for one approving review. Therefore the measurement start date is `pending production deployment and receipt`, not the preparation date above.

## Saved report inventory

| Tab | Saved rows | Saved values | Saved filter | Current evidence |
| --- | --- | --- | --- | --- |
| Pages and projects | Page path and screen class; Page title and screen class; Project ID | Active users; Views; Entrances; Average engagement time per session | none | Template saved; no rows |
| Discovery | Event name; Project ID; Source placement; First selection; Impression eligible | Event count | none | Template saved; no rows |
| Technologies | Event name; Project ID; Technology | Event count; Active users | none | Template saved; no rows |
| Upwork campaigns | Session source / medium; Session campaign; Session campaign ID; Session manual ad content; Event name | Sessions; Engaged sessions; Active users; Event count; Key events; Engagement rate | Session source / medium exactly matches `upwork / referral` | Template saved; no rows |

The live property selector exposed every listed dimension and metric, including the registered event-scoped custom dimensions. The pairings above preserve page, event, or session scope for interpretation. Google documents current field compatibility in its [dimensions and metrics reference](https://support.google.com/analytics/table/13948007).

## 1. Pages and public projects

Use the `Pages and projects` tab for all consented traffic.

1. Set the date range to the exact review window and record the property's GMT-05:00 boundary.
2. Keep `Page path and screen class` as the primary row. This groups accepted UTM query variants under the canonical path while GA4 keeps their session campaign fields separately.
3. Use `Project ID` to identify public project-detail rows. Keep direct detail arrivals in this report. They are page attention, not card CTR.
4. Review Views, Active users, Entrances, and Average engagement time per session together. An Entrance is useful for direct arrivals but is not proof that a proposal was read.
5. For the Upwork cohort, duplicate the tab for the review or add `Session source / medium` and apply the exact filter `upwork / referral`. Do not replace the all-traffic view.

Meaningful next steps require a compatible event table for `select_content`, `contact_click`, `outbound_click`, `meeting_step`, and `generate_lead`. Break those rows down by Event name and, when available, Project ID or Source placement. A contact click is intent; only an independently verified Calendly completion can support a booking claim.

## 2. Portfolio discovery

Use the `Discovery` tab. Interpret only these two matching populations:

- Denominator: `project_impression` grouped by Project ID and Source placement.
- Numerator: `select_content` where `Impression eligible` is `true` and `First selection` is `true`, grouped by the same Project ID and Source placement.

Calculate the defensible card CTR outside the exploration when necessary:

`eligible first selections / matching project impressions`

Keep the exact date window and filters with the calculation. Do not divide every raw `select_content` event by impressions. Repeated selections, direct project landings, and fast or keyboard selections that occurred before a qualifying one-second impression stay outside the numerator. Add Project category only when comparing the same eligible event population.

## 3. Technology exposure

Use the `Technologies` tab and filter `Event name` to exactly `technology_exposure` before interpreting it. Report Event count and Active users by Technology and Project ID.

These are observed visible-label exposures, not inferred interest or preference. One page can produce several technology rows, so rows are non-additive. Projects contain unequal numbers of labels and vary in audience, traffic, placement, prominence, viewport position, and time on screen. React appearing across many projects does not prove stronger buyer preference.

If a pageview summary is joined to the repository's public project-to-technology mapping, label it `inferred project association`. Keep it separate from measured `technology_exposure`.

## 4. Upwork campaign cohorts

Use the filtered `Upwork campaigns` tab for current-session attribution. The accepted dimensions are:

- Session source / medium
- Session campaign
- Session campaign ID
- Session manual ad content
- Event name

Use Sessions, Engaged sessions, Engagement rate, Active users, Event count, and Key events only with their compatible session or event interpretation. Event-name rows show page and next-step activity inside the cohort. They do not identify a hiring manager or prove proposal readership.

Keep first-user acquisition in a separate report. Do not combine it with the current-session table or use it as a substitute for the accepted `upwork / referral` cohort.

Exclude the release QA alias `p7k2m4q` from every buyer-demand view. Its exact campaign is:

`utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=projects_link`

The QA session is synthetic test traffic, even if it processes into native acquisition rows.

## 5. Confirmed business outcomes

The private attribution record defined in `docs/business-development/upwork/attribution-workflow.md` remains the outcome source of truth. Do not create a second application-status model in GA4 or this repository.

For each monthly cohort, read only confirmed `distributed` aliases from verified private custody. Append dated, independently verified ledger observations for replies, interviews, hires, and actual Connect cost. Then calculate:

`unique distributed aliases with at least one eligible GA4 session / confirmed tagged sends in the same cohort`

An untagged, unprocessed, blocked, rejected-consent, or otherwise missing observation is `unknown`, not a zero-visit verdict. Reply, interview, hire, and cost rates come from the verified private ledger, not from GA4 assumptions. The existing historical applications predate this workflow and remain `Historical unknown` unless direct evidence changes that status.

## Processed-data validation

Run this only after PR #28 is normally merged, the production deployment and destination are read back, and non-booking production receipt is verified.

1. Record the deployed commit, deployment ID, canonical alias, GA4 receipt timestamp, and the property's GMT-05:00 date boundary.
2. Use a clean production browser with the exact synthetic QA campaign above.
3. Before consent, confirm there is no Google script, request, GA cookie, event, or stored campaign history.
4. Accept analytics on the tagged `/projects` URL. Confirm the current pageview retains only the five accepted campaign values.
5. Exercise a project impression, eligible first selection, project detail technology exposure, contact click, and the permitted Calendly flow through date/time selection. Do not enter attendee data or submit an appointment.
6. Confirm the received event names and safe parameters in Realtime or DebugView. This proves receipt, not processed reporting.
7. After data processes, reopen the exploration and verify the QA campaign's source/medium, campaign, campaign ID, ad content, route sequence, Project ID, Source placement, eligibility flags, Technology, and non-booking events.
8. Add a filter that excludes `Session campaign ID = p7k2m4q` from every buyer-demand view. Keep one explicitly labeled QA view for diagnostics.
9. Record unavailable fields, scope conflicts, thresholding, sampling, or processing gaps exactly. Do not fill missing cells or change the schema before checking registration, scope, cardinality, release receipt, and processing time.

Custom dimensions can take 24 to 48 hours to become available in reporting, but there is no guaranteed processing deadline. A configured dimension, Realtime event, processed QA row, real visitor row, and business outcome are separate evidence stages.

## Seven-day and 28-day review

Use the same worksheet twice, first for days 1 to 7 after the verified measurement start and then for days 1 to 28. Do not create a comparison period before measurement began.

| Question | 7-day value | 28-day value | Evidence or limitation |
| --- | --- | --- | --- |
| Measurement window and deployed SHA | Pending | Pending | Production release blocked by required PR review |
| Top consented pages/projects by Views, Active users, Entrances, and engagement | Pending | Pending | No processed production data |
| Upwork cohort sessions and engaged sessions, excluding QA | Pending | Pending | No confirmed tagged sends or processed rows in this run |
| Eligible project impressions and first selections | Pending | Pending | Calculate only with matching eligibility and dedupe rules |
| Technology exposures by project | Pending | Pending | Measured labels only; rows are non-additive |
| Contact clicks and non-booking meeting steps | Pending | Pending | Intent and funnel progress, not bookings |
| Verified distributed aliases and observable-visit rate | Pending | Pending | Requires private ledger plus processed GA4 rows |
| Verified replies, interviews, hires, and Connect cost | Pending | Pending | Private ledger evidence only |
| Real completed booking receipt | Deferred | Deferred | Requires separate authorization and actual appointment evidence |

At each review, write one bounded observation, one plausible hypothesis, one evidence gap, and one reversible next experiment. Small samples support hypotheses, not causal conclusions.

## Interpretation limits

- Consent rejection, withdrawal, blockers, browser privacy controls, failed loads, and unsupported environments reduce observed traffic.
- Referrers can be absent or altered. Session attribution does not identify a person.
- Forwarded links, link previews, crawlers, founder QA, and cross-device behavior can distort campaign counts.
- Campaign values present before consent are lost if navigation removes them before consent. There is no pre-consent persistence or replay.
- The implementation is not retroactive and cannot repair historical proposal links or past traffic.
- GA4 can apply thresholding, sampling, modeled behavior, processing delay, or compatibility restrictions. Record those states when shown.
- No report proves that a named buyer visited, read a proposal, preferred a technology, booked, replied, interviewed, or hired Xavier.

## Exact continuation

1. Obtain one approving review on PR #28 and merge it normally. Do not bypass the branch rule.
2. Verify the resulting `main` SHA, Vercel production deployment, aliases, baked measurement destination, consent network behavior, and non-booking GA4 receipt.
3. Set the earliest trustworthy measurement start to the verified production receipt timestamp.
4. Let the received data process, then validate the exact QA rows and exclusions in the saved exploration.
5. Complete the 7-day and 28-day rows when their windows exist, using verified GA4 and private-ledger values.
6. Keep XAP-205 and XAP-197 open until processed-report validation is complete. Keep real booking evidence deferred until separately authorized.

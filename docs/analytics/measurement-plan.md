# Portfolio analytics measurement contract

Status: frozen for implementation under XAP-197 profile v1  
Version: `1.0.0`  
Frozen: September 20, 2026 (America/Guayaquil)  
Owner: XAP-198  
Implementation issues: XAP-199, XAP-201, XAP-203  
Configuration issue: XAP-200  
Attribution workflow: XAP-202  
Release and reporting: XAP-204, XAP-205

## Authority and boundary

Xavier explicitly activated XAP-197's Unattended execution profile v1 for this run. This document therefore freezes the bounded implementation details without another routine sign-off.

The contract measures consented site behavior. It does not identify a visitor, establish that a named hiring manager visited, prove that a proposal was read, turn a click into a booking, or turn traffic into a business outcome. Upwork sends, replies, interviews, hires, and costs require independent ledger evidence.

No private editorial evidence, client data, Upwork job ID, proposal text, Calendly payload, email, name, form value, application-added `user_id`, fingerprint, or full arbitrary URL may enter an event.

## Business questions and evidence rules

| Question | Collected evidence | Report | Denominator | Verification |
| --- | --- | --- | --- | --- |
| Which pages and public projects receive qualified attention? | `page_view`, canonical page metadata, public project identity | Pages and projects | Eligible consented page visits in the selected window | Initial load, direct detail landing, sibling routes, back/forward, and query/hash negatives |
| Which project choices attract attention from a visible placement? | `project_impression` and `select_content` with matching project and placement | Portfolio discovery | One qualifying impression per project, placement, and page visit | Timed visibility, fast click, repeated click, filter/unmount, modified click, and keyboard activation |
| Which technology labels were actually visible? | `technology_exposure` from published visible text | Technology exposure | Eligible project page visits and the number of eligible visible labels, reported separately | Continuous foreground visibility, rapid scroll, background tab, remount, and direct detail entry |
| Which confirmed Upwork sends produce observable site activity? | Native session campaign dimensions from accepted UTMs plus the private confirmed-send ledger | Upwork cohort | Confirmed distributed aliases in the same cohort | Synthetic tagged landing, redirect preservation, consent timing, and processed-data readback |
| Which site actions represent intent or a verified meeting? | `contact_click`, `outbound_click`, `meeting_step`, and `generate_lead` | Next steps and meeting funnel | Eligible page or schedule visits, depending on the step | CTA activation, valid Calendly message stages, duplicate/invalid message negatives, and separately authorized real booking |

Raw traffic is not success. The useful signal is observable qualified attention combined with independently verified business outcomes. Small samples support hypotheses, not causal claims.

## GA4 ownership

The application owns every `page_view`.

- The Google tag config command uses `send_page_view: false` every time it is configured.
- Enhanced Measurement browser-history pageviews remain disabled. XAP-200 must verify the saved stream setting.
- No GTM container or second analytics loader is used.
- XAP-199 sends a manual pageview only after an eligible route is complete and analytics consent is granted.
- GA4's automatic consented pseudonymous identifiers are expected. The application does not add `user_id` or another visitor identifier.

Google documents that `send_page_view: false` does not disable Enhanced Measurement history events by itself. Both owners must remain aligned: <https://developers.google.com/analytics/devguides/collection/ga4/views>.

## Page-visit lifecycle

An eligible page visit is one completed navigation to a different canonical pathname on the production host after consent. The rules are:

1. After hydration, the current document creates one page visit. Strict Mode or component remounts cannot create another.
2. A successful Pages Router `routeChangeComplete` to a different canonical pathname creates a new visit.
3. Back and forward navigation to a different pathname creates a new visit.
4. Navigation between sibling flagship, engagement, or blog slugs creates a new visit even though the route template is unchanged.
5. Hash-only changes, category filtering, and query-only changes on the same canonical pathname do not create a visit.
6. Canceled or errored navigation creates no visit.
7. If consent is granted after navigation, exactly one `page_view` is sent for the current eligible page. Earlier pages are not replayed.
8. Withdrawal prevents later sends immediately. Granting consent again creates one pageview for the then-current page, never a replay.
9. Page-local impression, exposure, and selection state resets for every new eligible visit.

The in-memory visit key is the canonical pathname plus an incrementing local counter. It is never sent, persisted, logged, or exposed to GA4.

## Route classification

| Route family | `content_group` | `page_type` | Project context |
| --- | --- | --- | --- |
| `/` | `marketing` | `home` | none |
| `/about-me` | `marketing` | `about` | none |
| `/projects` | `portfolio` | `projects_index` | none |
| `/projects/{published-flagship-slug}` | `portfolio` | `flagship` | public flagship ID, slug, and `featured` category |
| `/projects/upwork/{published-engagement-slug}` | `portfolio` | `upwork_engagement` | public `UW-..` ID, slug, and public showcase category |
| `/blog` | `editorial` | `blog_index` | none |
| `/blog/{slug}` | `editorial` | `blog_post` | none |
| `/schedule-meeting` | `conversion` | `schedule` | none |
| Any real 404 or unclassified route | `utility` | `not_found` | none |

Only `ready` engagements from the server-side public projection and validated flagship records can supply valid project context. A missing, excluded, unpublished, or 404 slug must not emit a project ID, slug, category, impression, selection, or technology exposure.

Project context is the current page's public context. It is cleared on every non-project route and is never carried into the scheduling page as a sticky property. A CTA event emitted before leaving a project may include that current project context.

## Common fields

Every application event includes only fields that apply to it.

| Parameter | Type | Allowed value and treatment | Reporting |
| --- | --- | --- | --- |
| `page_location` | string | `https://www.thexap.com` plus canonical pathname and only accepted UTMs still present at send time | Native page location and acquisition |
| `page_title` | string | Current rendered document title, max 300 characters | Native page title |
| `page_referrer` | string | Same-origin canonical origin and path, or external origin only; no query or hash | Native referrer |
| `content_group` | enum | `marketing`, `portfolio`, `editorial`, `conversion`, `utility` | Native content group |
| `page_type` | enum | Route table values above | Event-scoped custom dimension |
| `project_id` | string | `armonia` or a published `UW-..` ID | Event-scoped custom dimension |
| `project_slug` | string | Exact public validated slug for the supplied ID | Event-scoped custom dimension |
| `project_category` | enum | `featured`, `web_product`, `full_stack_cloud`, `mobile`, `testing_reliability`, `data_workflows` | Event-scoped custom dimension |
| `source_placement` | enum | Contract placement dictionary | Event-scoped custom dimension |

Unknown values are omitted, not invented and not sent as arbitrary text.

## Frozen event matrix

### `page_view`

Purpose: one eligible current page visit.

Fields: `page_location`, `page_title`, `page_referrer`, `content_group`, `page_type`, and current project context when valid.

Trigger: once per page-visit lifecycle above, only after consent and tag readiness.

Positive example: direct consented arrival on `/projects/armonia` sends `page_type=flagship`, `project_id=armonia`, and the sanitized current location.

Negative example: clicking `#technology-heading`, changing the projects category filter, or a canceled navigation sends no pageview.

### `project_impression`

Purpose: exposure denominator for a project choice.

Fields: current page metadata, project context, `source_placement`, and `target_type`.

`target_type` is `project_card` when 50 percent of the full card can fit in the current viewport. If the card's rendered height makes that threshold impossible, the primary project-title link becomes the measured target and `target_type=project_title_link`.

Trigger: the selected target is at least 50 percent visible for one continuous foreground second. The document must remain visible for the full timer. Emit once per project, placement, and page visit.

Negative cases: a filtered or unmounted card, interrupted timer, background tab, rapid scroll, denied consent, or a repeated observation emits nothing.

### `select_content`

Purpose: actual project-link activation without changing link behavior.

Fields: current page metadata, selected project context, `source_placement`, `target_type`, `content_type=project`, `item_id` equal to the public project ID, `impression_eligible`, and `is_first_selection`.

Trigger: a valid primary, modified, middle-button, or keyboard activation of a project link. Normal navigation and new-tab behavior must continue.

`impression_eligible=true` only when the same project, placement, and target type already emitted an impression during the current page visit. `is_first_selection=true` only on the first selection for that same tuple. Later activations may be sent for raw interaction counts with `is_first_selection=false`.

The CTR numerator is only `select_content` where both flags are true. The denominator is matching `project_impression`. Direct detail arrivals and fast selections without an impression stay out of CTR.

### `portfolio_filter`

Purpose: measure an intentional work-category change.

Fields: current page metadata, `filter_category`, and integer `result_count`.

`filter_category`: `all_work`, `web_product`, `full_stack_cloud`, `mobile`, `testing_reliability`, or `data_workflows`.

Trigger: once for each actual state change. Initial render and repeated activation of the selected filter emit nothing.

`result_count` is validated against the current rendered public results. It remains an event parameter for validation and is not registered as a custom metric in v1.

### `technology_exposure`

Purpose: observed visibility of published technology text.

Fields: current page metadata, project context, `technology`, `source_placement=technology_section`, and `target_type=technology_label`.

Trigger: the canonical visible text label is at least 50 percent visible for one continuous foreground second, once per canonical technology and page visit. The timer starts only while consent is active. There is no pre-consent backfill.

Decorative logos, route entry, inferred project mappings, illustrative examples, and buyer-requested skills do not emit this event.

### `contact_click`

Purpose: first-party intent to begin contact.

Fields: current page metadata, current project context if present, `destination_type=schedule_meeting`, and `source_placement`.

Trigger: activation of an internal scheduling CTA. A click is intent only.

### `outbound_click`

Purpose: bounded activation of a relevant external destination.

Fields: current page metadata, current project context if present, `destination_type`, and `source_placement`.

`destination_type`: `live_product`, `upwork_profile`, `github`, `linkedin`, `x`, or `evidence_source`.

Trigger: activation of an allowlisted external link. No destination URL is sent. Enhanced Measurement outbound clicks stay disabled to prevent duplicates.

### `meeting_step`

Purpose: distinguish Calendly progress from completion.

Fields: current schedule-page metadata and `meeting_step`.

`meeting_step`: `event_type_viewed` or `date_and_time_selected`.

Trigger: an allowlisted Calendly message only after its data shape, exact origin, and active iframe source are validated. Emit each step once per active iframe lifecycle.

No Calendly payload field is copied to GA4 or application logs.

### `generate_lead`

Purpose: verified Calendly scheduling completion.

Fields: current schedule-page metadata and `method=calendly`.

Trigger: a validated `calendly.event_scheduled` callback from the active iframe. Emit once per callback sequence using only ephemeral in-memory deduplication.

A mock proves mapping only. A live key-event claim requires a separately authorized completed appointment and GA4 receipt. No invitee URI, event URI, name, email, answers, time, or opaque booking identifier is sent or stored.

## Placement dictionary

`header`, `footer`, `homepage_proof`, `projects_featured`, `projects_grid`, `projects_hero`, `portfolio_contact`, `related_projects`, `flagship_artifact`, `engagement_artifact`, `engagement_feedback`, `upwork_profile`, `technology_section`, `schedule_page`.

No free-form component names are accepted.

## Canonical technology dictionary

The dictionary is derived from the currently published engagement projection and Armonía's visible supporting details. Code resolves display labels to the following stable event values:

| Display label | `technology` |
| --- | --- |
| Amazon API Gateway | `amazon_api_gateway` |
| Amazon EventBridge | `amazon_eventbridge` |
| AWS CDK | `aws_cdk` |
| AWS Lambda | `aws_lambda` |
| Clerk | `clerk` |
| Cloudflare | `cloudflare` |
| Contentful | `contentful` |
| Cypress | `cypress` |
| Drizzle ORM | `drizzle_orm` |
| Firebase | `firebase` |
| Google Analytics | `google_analytics` |
| Google Flow | `google_flow` |
| GraphQL | `graphql` |
| Hono | `hono` |
| Ionic | `ionic` |
| Linux | `linux` |
| MongoDB | `mongodb` |
| MUI v5 | `mui_v5` |
| Next.js | `nextjs` |
| Node.js | `nodejs` |
| Nx | `nx` |
| PostgreSQL | `postgresql` |
| React | `react` |
| React Native | `react_native` |
| Redux | `redux` |
| Relay | `relay` |
| TypeScript | `typescript` |
| Vite | `vite` |
| WhatsApp | `whatsapp` |

An unknown label is a review finding and emits nothing. Adding a label requires a versioned contract update grounded in public evidence.

## Campaign contract

Accepted proposal URLs use:

- `utm_source=upwork`
- `utm_medium=referral`
- `utm_campaign=proposal_YYYY_MM`
- `utm_id=p` followed by six lowercase letters or digits, for example `p7k2m4q`
- `utm_content` equal to `home_link`, `projects_link`, `armonia_link`, or `engagement_{public_slug}_link`

The alias identifies a confirmed proposal distribution record, not a visitor. It must not encode a client, job, date, email, or Upwork job ID.

Only these values still present on the current URL when consent is granted are included in `page_location`. There is no pre-consent memory, persistence, entry-page replay, or internal-link retagging. If a visitor navigates before consenting and the accepted UTMs are no longer present, attribution is lost and documented as unknown.

GA4 native dimensions are used as follows:

| URL parameter | Native session dimension |
| --- | --- |
| `utm_source` | Session manual source |
| `utm_medium` | Session manual medium |
| `utm_campaign` | Session manual campaign name |
| `utm_id` | Session manual campaign ID |
| `utm_content` | Session manual ad content |

First-user acquisition and session acquisition remain separate. Event-scoped fields are not combined with incompatible user/session metrics. Official dimension availability is checked against <https://support.google.com/analytics/table/13948007> and the live property before a report is claimed ready.

## URL and referrer minimization

1. Accept only `https://www.thexap.com` as the production event host.
2. Canonicalize the pathname using validated route data.
3. Drop hashes and every query parameter except the five campaign parameters above.
4. Validate every retained campaign value against the contract. Drop the whole invalid parameter rather than truncating arbitrary input.
5. For same-origin referrers, keep only origin plus canonical path. For external referrers, keep only the origin. Omit malformed values.
6. Do not register full URL, referrer, timestamp, alias, or a visit key as a custom dimension.
7. Enable GA4 email and sensitive-query redaction as defense in depth while allowlisting the campaign keys.

## Consent contract

Visitor copy:

> Optional analytics help me understand which pages and projects visitors find useful. If you accept, Google Analytics uses cookies to measure site activity. You can reject analytics or change your choice at any time.

Behavior:

- Basic opt-in applies on every route.
- Before acceptance there is no Google analytics script, request, consent ping, GA cookie, queued event, or campaign-history persistence.
- The banner presents equally usable `Accept analytics` and `Reject analytics` controls.
- A persistent `Analytics settings` entry exposes the current state and both choices with keyboard and screen-reader access.
- The only pre-consent storage is a first-party functional cookie named `thexap_analytics_consent` with value `v1.granted` or `v1.denied`, `Max-Age=15552000`, `Path=/`, `SameSite=Lax`, and `Secure` in production.
- Acceptance loads the tag, sends consent defaults and update with `analytics_storage=granted`, then sends one current pageview.
- `ad_storage`, `ad_user_data`, and `ad_personalization` remain `denied` in all states.
- Rejection stores `v1.denied`, loads no tag, and sends nothing to Google.
- Withdrawal changes the choice to denied, blocks later dispatch, and removes app-managed `_ga` and measurement-specific `_ga_*` cookies for accessible current-host/domain paths. It cannot promise deletion of already processed GA4 data or cookies outside the application's control.
- No consent choice is treated as a legal-compliance certification.

This is Google's basic consent-mode pattern, where tags remain blocked and no data is sent before acceptance: <https://developers.google.com/tag-platform/security/concepts/consent-mode>.

## Environment and QA controls

Production dispatch requires all of:

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID` exactly equals the freshly verified production destination.
- `window.location.hostname` exactly equals `www.thexap.com`.
- analytics consent is granted.
- the event and every parameter pass the contract allowlists.

`thexap.com` redirects to the canonical `www` host before collection. Localhost, IP hosts, Vercel previews, branch deployments, automated browser runs, and any other hostname do not load or dispatch to production GA4.

Local and preview tests intercept transport and inspect synthetic payloads. Production QA uses a clearly labeled synthetic campaign and a dated window. Founder/QA traffic is excluded at report level. Any GA4 developer/internal traffic filter remains in Testing until verified; no irreversible active exclusion is authorized in profile v1.

## Custom definitions

Register only these event-scoped custom dimensions:

| Display name | Event parameter |
| --- | --- |
| Page type | `page_type` |
| Project ID | `project_id` |
| Project slug | `project_slug` |
| Project category | `project_category` |
| Source placement | `source_placement` |
| Target type | `target_type` |
| Technology | `technology` |
| Portfolio filter | `filter_category` |
| Destination type | `destination_type` |
| Meeting step | `meeting_step` |
| Impression eligible | `impression_eligible` |
| First selection | `is_first_selection` |

No custom metric is required for v1. Use native page, event, acquisition, user, session, and engagement fields where their scopes are compatible.

The live property showed zero existing custom definitions on September 20, 2026. A standard property supports up to 50 event-scoped custom dimensions, but that quota is not a reason to register unused fields. Google notes that definitions may take 24 to 48 hours before reporting is available: <https://support.google.com/analytics/answer/14240153>.

## Authenticated property baseline

Read back September 20, 2026 in the signed-in GA4 UI:

| Setting | Observed value | Profile v1 treatment |
| --- | --- | --- |
| Account | `138074150` | preserve |
| Property | `198622468`, `thexap-tech` | preserve |
| Web stream | `my-web_app`, stream `3826839413` | preserve |
| Measurement ID | `G-S3WGC5C6QX` | use after release readback |
| Collection | no data received in past 48 hours | baseline gap, not visitor evidence |
| Enhanced measurement | switch appeared off; stream listed standard Page views | verify history-pageview behavior in XAP-200 |
| Connected site tags | 0 | preserve |
| Email redaction | inactive | enable in XAP-200 |
| Query-key redaction | inactive | configure in XAP-200 without stripping accepted UTMs |
| Event retention | 2 months | preserve |
| User retention | 14 months | preserve |
| Reset on new user activity | on | preserve |
| Reporting time zone | United Kingdom, GMT-05:00 | preserve; document date-window boundary |
| Currency | US Dollar | preserve |
| Google signals | off | preserve off |
| User-provided data | not activated | preserve off |
| Ads personalization | allowed in 307 of 307 regions | disable under profile v1, then read back |
| Custom definitions | 0 | create only the 12 listed definitions |

The time-zone label and offset are recorded exactly as shown. XAP-200 must not silently reinterpret or change them.

## Reporting rules and fallbacks

- Canonical path reports group away allowed UTM query variants.
- Direct detail arrivals appear in page/project reports, not the index-card CTR denominator.
- Portfolio CTR is a documented calculation from matching eligible impression and first-selection rows. If the native exploration cannot express the ratio safely, export the two compatible native tables and calculate the ratio in the runbook.
- Technology exposures are observed labels. A separate page-to-technology table may use the public mapping but must be labeled inferred.
- Buyer-requested technologies from the Upwork ledger remain separate from delivered/public technology and from observed exposure.
- Multi-technology rows are non-additive. Project coverage, label prominence, unequal project counts, consent, blockers, and viewport position bias interpretation.
- Observable proposal visit rate is unique distributed aliases with at least one eligible session divided by confirmed tagged sends in the same cohort. Missing or untagged data is unknown, not zero.
- A configured empty report, DebugView event, processed synthetic QA row, real visitor row, and independently verified business outcome are different evidence states.
- Measurement begins only at the XAP-204 production release timestamp after code, property, network, and receipt checks. Nothing is backfilled.

## Verification contract

Repository tests must cover:

- sanitization and rejection for every field;
- initial load, delayed consent, sibling slug navigation, back/forward, canceled navigation, query-only and hash-only changes;
- consent accept, reject, persistent setting, withdrawal, expiry, cookie removal, and blocked tag behavior;
- production hostname and measurement-ID gating;
- card/title fallback, continuous visibility, background interruption, filter removal, remount, and once rules;
- raw versus CTR-eligible selection flags, modified click, middle click, and keyboard activation;
- technology dictionary and unknown-label rejection;
- valid/invalid Calendly origins, sources, event shapes, unknown events, duplicates, and unmount;
- proposal URL encoding, canonical host, duplicate-parameter rejection, supported destinations, and privacy rejection.

Browser verification must inspect actual requests, not only helper return values. GA4 receipt, saved configuration, deployment state, processed reports, and real booking completion each require their own evidence row.

## Sources checked for the frozen contract

- GA4 pageview ownership and Enhanced Measurement interaction: <https://developers.google.com/analytics/devguides/collection/ga4/views>
- Google tag configuration fields: <https://developers.google.com/analytics/devguides/collection/ga4/reference/config>
- Basic and advanced consent mode behavior: <https://developers.google.com/tag-platform/security/concepts/consent-mode>
- Custom definitions, quota, and processing timing: <https://support.google.com/analytics/answer/14240153>
- GA4 configuration limits: <https://support.google.com/analytics/answer/12229528>
- Current native dimensions and metrics: <https://support.google.com/analytics/table/13948007>
- Traffic-source dimensions: <https://support.google.com/analytics/answer/15567068>
- Campaign collection: <https://support.google.com/analytics/answer/11242841>

Live UI labels and behavior may change. XAP-200 and XAP-205 must verify the actual saved property and report surfaces before claiming a setting or report is complete.

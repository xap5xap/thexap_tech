# GA4 property configuration

Issue: XAP-200

Authenticated configuration date: September 20, 2026 (America/Guayaquil)

Account: `138074150`

Property: `198622468`, `thexap-tech`

Web stream: `my-web_app`, stream ID `3826839413`

Measurement ID: `G-S3WGC5C6QX`

This record covers saved account configuration. It does not prove deployed collection, event receipt, processed reporting, a real visitor, or a completed booking.

## Before and after

| Setting | Authenticated before state | Accepted target | Saved-state readback |
| --- | --- | --- | --- |
| Property role | Xavier had Administrator role | Confirm authority without changing access | Administrator confirmed; no member or access change |
| Stream URL | Empty | Canonical production origin | `https://www.thexap.com` |
| Stream collection | No data received in the prior 48 hours | Preserve as pre-release baseline | Still no data received before XAP-204 |
| Measurement destination | `G-S3WGC5C6QX` | Preserve exact existing destination | Preserved |
| Connected site tags | 0 | Preserve direct-tag design | 0 |
| Enhanced Measurement master | Off | Off | Off |
| Automatic browser-history pageviews | On in the retained automatic-detection options | Off, because application routing owns pageviews | Off |
| Automatic scroll, outbound, form, video, and file events | On in the retained automatic-detection options | Off, because they are uncontracted or duplicate custom events | All off |
| Universal Analytics event collection | Off | Off | Off |
| Email redaction | Inactive | Active | Active |
| Query-key redaction | Inactive | Active for sensitive keys, excluding accepted campaign keys | Active with 18 keys |
| Google signals | Off | Preserve off | Off, UI offered `Turn on` |
| User-provided data | Not activated | Preserve off | Not activated; UI still required initial business setup |
| Ads personalization | Allowed in 307 of 307 regions | Disable in all regions | Allowed in 0 of 307 regions |
| Granular location/device collection | On | Preserve unrelated setting | On |
| Reporting identity | Blended, with modeled data inactive | Preserve | Blended |
| Event retention | 2 months | Preserve | 2 months |
| User retention | 14 months | Preserve | 14 months |
| Reset on new user activity | On | Preserve | On |
| Reporting time zone | United Kingdom, `(GMT-05:00) GMT-05:00` | Preserve exact label and offset | Preserved |
| Currency | US Dollar | Preserve | Preserved |
| Internal traffic filter | Exclude, Testing | Keep non-destructive | Exclude, Testing |
| Internal traffic IP rules | None | Do not add a broad shared or changing IP rule | None |
| Developer traffic filter | Absent | Add Exclude in Testing | `Developer Traffic`, Exclude, Testing |
| Custom dimensions | 0 | Register the frozen 12 event-scoped definitions | 12 of 12 saved and read back |
| Completed-meeting key event | Absent | Code-defined `generate_lead`, no default value, once per event | Saved, starred, no stream data detected |
| Consent status page | No issues detected; signals inactive because no data had arrived | Preserve until deployment supplies real consent signals | Unchanged pre-release state |

The Google tag UI keeps its base page-load option selected, while the stream's Enhanced Measurement master is off. The application configuration also sets `send_page_view=false`. Therefore the deployed application remains the sole pageview owner. The saved automatic-detection readback showed browser-history pageviews, scrolls, outbound clicks, form interactions, video engagement, and file downloads unchecked.

## Query-key redaction

The saved keys are:

`email`, `name`, `first_name`, `firstname`, `last_name`, `lastname`, `phone`, `phone_number`, `address`, `message`, `answer`, `invitee`, `event`, `token`, `code`, `booking`, `company`, and `job_id`.

The approved keys `utm_source`, `utm_medium`, `utm_campaign`, `utm_id`, and `utm_content` are not redacted. Application allowlists remain the primary privacy boundary; this setting is defense in depth. Google documents that URL query redaction applies to its listed URL-related event parameters and does not replace application-side controls: <https://support.google.com/analytics/answer/13544947>.

## Custom definitions

Every definition is event-scoped and matches the frozen contract and code.

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

No custom metric, user-scoped definition, job identifier, destination URL, campaign alias, or per-visitor dimension was created. Google notes that a new definition can take 24 to 48 hours to become available in reports: <https://support.google.com/analytics/answer/14240153>.

## Key event

`generate_lead` was created with the `Create with code` path and marked as a key event after XAP-203's callback and payload tests passed. It has:

- no default monetary value;
- the recommended once-per-event counting method; and
- no stream data detected at configuration time.

Only the validated `calendly.event_scheduled` bridge emits this event. A pageview, contact click, calendar load, event-type view, or date/time selection is not a lead. Creation and a starred row prove configuration only, not a booking or production receipt.

## QA traffic treatment

The environment gate blocks production GA entirely on localhost, IP hosts, previews, and non-canonical hosts. A broad internal IP rule was not added because the available founder network can change and may be shared with real visitors.

The existing Internal Traffic exclusion and the new Developer Traffic exclusion both remain in Testing. Testing labels matching data with `Test data filter name`; it does not discard it. XAP-204 should use the synthetic Upwork campaign and a dated QA window, and XAP-205 should exclude those rows at report level. Debug-mode events can additionally be segmented by `Test data filter name=Developer Traffic` after evidence confirms the label. No filter may be made Active from this run.

## Saved-state evidence

The authenticated UI read back:

- the canonical stream URL, ID, measurement ID, redaction summary, Enhanced Measurement state, and zero connected tags;
- `1–12 of 12` definitions with exact names, Event scope, and parameters;
- `generate_lead` starred among seven displayed key-event rows, with no default value action pending and Once per event selected;
- both filters as Exclude and Testing;
- ads personalization allowed in 0 of 307 regions;
- signals, retention, reporting identity, time zone, and currency values shown above; and
- 17 dated property change-history entries immediately after the run, including the stream, developer filter, ads personalization, key-event settings, and definitions.

The GA4 consent page still reported consent signals inactive because no production events had arrived. XAP-204 owns network and receipt evidence after deployment.

## Rollback

Rollback is setting-specific and requires fresh authenticated readback first:

- Stream URL: the prior value was empty. Restore it only for a verified incompatibility and only if the current required-field validation permits it; otherwise record the rollback blocker rather than forcing an adjacent value.
- Automatic detection: re-enable only an explicitly selected automatic event. Do not enable browser-history pageviews or outbound clicks while custom routing and outbound events remain active.
- Redaction: reopen Redact data and disable a toggle or remove a key. Do not remove privacy defenses without a concrete false-positive case.
- Ads personalization: reopen geo control and allow selected regions or all regions only after an explicit product/privacy decision.
- Developer filter: set it Inactive or remove it before any data arrives if the Testing label creates a verified problem. Never activate it as a rollback shortcut.
- Key event: unmark `generate_lead`; no default value needs removal. Leave the code-created event definition unless a verified naming conflict exists.
- Custom definitions: GA4 archives rather than cleanly deletes them. Do not archive during routine rollback because reporting availability and parameter reuse can be delayed.

No access, sharing, product-link, Ads, BigQuery, Search Console, billing, deletion, or active-exclusion setting was changed.

# Contact and Calendly conversion tracking

Issue: XAP-203
Candidate evidence date: September 20, 2026 (America/Guayaquil)

## Bounded intent events

Internal scheduling links emit `contact_click` with only `destination_type=schedule_meeting`, an allowlisted source placement, the sanitized current-page fields, and current public project context when the click originates on a project detail page.

Relevant external links emit `outbound_click` with only an allowlisted destination type and source placement. The implementation never sends the destination URL. Current destinations are:

- Armonía: `live_product`
- the public Upwork profile: `upwork_profile`
- footer accounts: `github`, `linkedin`, or `x`
- cited public evidence and work-history links: `evidence_source`

One provider-level `click` and `auxclick` listener reads the bounded data attributes. It does not prevent navigation. Normal, keyboard-generated, modified, and middle-button link activations keep the browser's native behavior. The event sanitizer rejects unknown placements and destinations.

## Defensive Calendly bridge

The lockfile and installed package resolve `react-calendly@4.4.0`. Its bundled `useCalendlyEventListener` reads `e.data.event` before validating the message origin, source, or nullability. XAP-203 therefore does not use that hook.

The local bridge accepts a message only when all of these conditions are true:

1. `origin` is exactly `https://calendly.com`.
2. `source` is the active `contentWindow` of the page's current Calendly iframe.
3. `data` is a non-array object with a string `event`.
4. `event` is one of the three frozen names below.

| Calendly message | Site event | Parameters sent |
| --- | --- | --- |
| `calendly.event_type_viewed` | `meeting_step` | `meeting_step=event_type_viewed` |
| `calendly.date_and_time_selected` | `meeting_step` | `meeting_step=date_and_time_selected` |
| `calendly.event_scheduled` | `generate_lead` | `method=calendly` |

Each stage is emitted once per in-memory callback sequence. A new viewed event after a completed sequence starts a new sequence. Unmounting discards the sequence. No Calendly payload field, booking identifier, invitee URI, event URI, name, email, answer, or time is logged, sent, or stored.

Consent and the production-host gate are checked after validation and before collection. Denial or withdrawal therefore leaves the calendar usable and makes the event a no-op. No cross-domain measurement is configured on Calendly or Armonía.

## Candidate verification

| Check | Environment and result |
| --- | --- |
| Message validation | Focused tests reject invalid origin, wrong source, null data, and unknown events |
| Sanitized mapping | Focused tests keep only the frozen meeting step or `method=calendly`; a private mock payload is discarded |
| Deduplication | Focused tests cover duplicate steps, duplicate completion, a new callback sequence, and a new instance representing remount |
| Consent gate | Focused tests reject null, denied, and non-production states; the existing withdrawal test clears queued work |
| CTA payloads | Focused tests accept bounded contact/outbound values, retain only current public project context, and reject private destination values |
| Desktop browser | Local Edge rendered one iframe, all relevant CTA attributes, and no horizontal overflow at 1682 px |
| Mobile browser | Local Edge rendered one iframe and no horizontal overflow at 390 x 844 |
| Keyboard | Enter on the header scheduling link navigated to `/schedule-meeting`; the skip-link path reached `main`, then Tab reached the iframe |
| Non-booking flow | Selected an available date and time and reached `Enter Details`; no attendee data was entered and `Schedule Event` was not activated |
| Console | No warning or error was present after the non-booking flow |

The browser result proves UI compatibility and the non-booking stage. The mocked scheduled message proves mapping only. Production request and GA4 receipt belong to XAP-204.

## Deferred real-booking protocol

A real completion remains deferred because it creates an appointment and can send notifications. When Xavier separately authorizes a test identity and exact slot:

1. Start a clean production browser session and record the deployed SHA.
2. Accept analytics, open `/schedule-meeting`, and confirm the validated viewed event reaches GA4.
3. Select the authorized slot and confirm one `date_and_time_selected` receipt.
4. Enter only the authorized test identity and submit exactly once.
5. Confirm the appointment independently in Calendly or the connected calendar.
6. Confirm exactly one `generate_lead` event with `method=calendly` and no personal parameters in GA4.
7. Record notification behavior and the GA4 evidence timestamp separately.

Do not cancel the appointment unless that later action is explicitly authorized. A failed, mocked, or abandoned flow must not be labeled as a lead or booking.

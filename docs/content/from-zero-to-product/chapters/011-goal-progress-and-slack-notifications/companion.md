# Notification event and receipt worksheet

Use this worksheet to design progress updates and audit what may honestly be claimed. It is a planning and review artifact, not a Slack sender or watchdog. The completed exercise is fictional; no real message is required or authorized by this worksheet.

## Inputs and setup

Bring the bounded goal, permitted actions, reserved decisions, intended issue sequence, event history, observed active intervals and send attempts. Choose an audit cutoff and an explicit timezone. Keep credentials and actual provider identifiers in private configuration.

Fill these bindings before an authorized real run. Leave placeholders intact when sharing the template:

- Outcome and finish condition: [OUTCOME AND CHECKS]
- Permitted actions and no-touch boundary: [AUTHORITY]
- Sender identity: [BOT-USER-ID], [BOT-ID]
- Destination and thread choice: [CHANNEL-ID], [THREAD-CHOICE]
- Owner reference: [OWNER-MENTION]
- Event deadline target: [TARGET]
- Maximum active silence: [INTERVAL]
- Timezone and audit cutoff: [ZONE], [CUTOFF]
- Work-history and receipt locations: [PRIVATE LOCATIONS]
- Notification failure fallback: [EXISTING TASK CONVERSATION]

The example below uses two-minute event targets and a 30-minute active-silence limit as illustrative operating choices. They are not platform guarantees or universal defaults.

## 1. Define expected events independently

Build the event list from the work contract and actual lifecycle history. Add newly observed events; preserve the original deadlines. Mark completeness false if starts, reopens, pauses or active windows are unknown.

| Event | Trigger | Required message | Deadline and evidence |
| --- | --- | --- | --- |
| Goal / issue started | Authorized execution begins | Outcome, first checkpoint, reserved decision | [TIME], [WORK RECORD] |
| Progress | Material result or active-silence limit | Verified result, current step, next check | [TIME], [WORK RECORD] |
| Action needed | Reserved decision stops authorized work | Exact action, paused state, safe state | [TIME], [YIELD TIME] |
| Resumed | Answer verified and execution resumes | What unblocked work, restarted step | [TIME], [ANSWER RECORD] |
| Issue / goal completed | All finish checks pass | Result link, checks, limitations | [TIME], [RESULT RECORD] |

For coincident events, one message can cover both only if the body clearly explains both. Retain both event identifiers on one receipt instead of duplicating the receipt row.

## 2. Prepare sanitized messages

These are fill-in templates, not messages ready to send. Replace every placeholder privately and inspect the actual body and route before an authorized send.

**Started**

[OWNER-MENTION] Started [OUTCOME]. First checkpoint: [CHECK]. Reserved decision: [DECISION OR NONE].

**Progress**

[OWNER-MENTION] Finished [VERIFIED RESULT]. Working on [CURRENT STEP]. Next checkpoint: [CHECK]. Action needed: [NONE OR EXACT ACTION].

**Action needed**

[OWNER-MENTION] Action needed: [EXACT DECISION]. Paused at [STEP]. [SAFE STATE] is preserved. After your answer is verified, the next step is [STEP].

**Resumed**

[OWNER-MENTION] Resumed after [VERIFIED ANSWER OR RECOVERY]. Working on [STEP]. Next checkpoint: [CHECK].

**Completed**

[OWNER-MENTION] Completed [OUTCOME]. Verified [CHECKS]. Result: [AUTHORIZED RESULT LINK]. Remaining limitation: [LIMIT OR NONE]. Notification delivery: [VERIFIED STATE OR GAP].

Use only authorized links. Exclude secrets, personal records, raw logs and private source evidence. A bot post and a device notification are different observations.

## 3. Keep attempts and receipts

For each attempt retain these fields, even when the response fails or is lost:

| Field | Fill-in value |
| --- | --- |
| Logical event identifiers | [EVENT IDS] |
| Event occurrence and original deadline | [TIMES WITH ZONE] |
| Dispatch timestamp | [TIME WITH ZONE] |
| Sanitized body or hash | [BODY OR HASH] |
| Intended destination / sender | [CHANNEL-ID] / [BOT-USER-ID] |
| Outcome | [FAILED, UNKNOWN, CONFIRMED POSTING] |
| Actual message identifier and posting time | [OBSERVED RECEIPT OR UNAVAILABLE] |
| Actual destination / sender / owner mention | [OBSERVED VALUES OR UNAVAILABLE] |
| Verification source | [API RESPONSE OR MESSAGE READBACK] |
| Failure or uncertainty and reconciliation | [REASON, READBACK, REMAINING GAP] |

After a timeout, preserve the same attempt. A later readback can resolve it without inventing another send. A definite rejection can permit a bounded authorized retry; keep both attempts. Never turn an expectation into an observed provider value.

## 4. Audit the completed fictional example

Scenario: prepare an export for an illustrative request tracker. All event and message records are invented. Use the explicit timezone UTC for this exercise, with audit cutoff 10:24 on the fictional date 2026-01-05.

Work-history inputs: start 10:00; progress 10:06; action needed 10:10; resumed 10:15; completed 10:22. The action-needed event yields at 10:13. A separately recorded required answer arrives at 10:14. Active execution is observed from 10:00 to 10:13 and from 10:15 to 10:24. These fixture records define the complete exercise scope.

| Event | Original deadline | Supplied attempt / posting record | Audit result |
| --- | --- | --- | --- |
| E1 Started 10:00 | 10:02 | Confirmed post at 10:00:30 | Delivered on time |
| E2 Progress 10:06 | 10:08 | No attempt or receipt | Missing |
| E3 Action needed 10:10 | 10:12 | Dispatch 10:11; timeout after dispatch; no readback | Unknown; pre-yield posting unproved |
| E4 Resumed 10:15 | 10:17 | Confirmed post at 10:18 | Delivered, one minute late |
| E5 Completed 10:22 | 10:24 | Two distinct confirmed posts, 10:22:30 and 10:23 | Duplicate delivery |

For each confirmed fixture post, assume a distinct message identifier, the intended placeholder bot/channel, an owner mention and a matching API response. Those are declared synthetic inputs, not real receipts. No record is supplied for phone delivery.

Four confirmed posts cover three distinct expected events out of five. E2 is missing. E3 is unknown and has no verified pre-yield posting. E4 is three minutes after its event and one minute after its deadline. E5 is duplicated. The supplied active intervals contain no gap exceeding 30 minutes. That silence check does not resolve the event defects.

The author's offline synthetic calculation confirms these classifications. It tests supplied-record arithmetic and validation only, sends nothing and cannot discover omitted real work or observe Slack or a phone.

## 5. Decide the next safe action

- E2: verify the source event and preserve the missing result. If a catch-up message is useful and authorized, label it retrospective with its real time.
- E3: perform bounded message readback before any repeat send. If found, amend the original attempt with the actual message and retain the timeout history. If not resolved, keep unknown. The separate answer at 10:14 can authorize the work decision without proving notification delivery.
- E4: preserve the late result and investigate the dispatch path; do not move its deadline.
- E5: preserve both message receipts and the duplicate classification. Do not delete messages to make the audit look complete.
- A real failed alert: surface both the work blocker and notification failure through the existing authorized conversation. Preserve any decision gate.

## 6. Completion check and lightest version

An audit is complete when its expected-event denominator has been reconciled against the declared work-history scope, every event and attempt has an evidence-backed state, original timing and pre-yield checks are retained, active intervals are explicit, and gaps remain visible. A complete audit can report failed coverage; it need not be a passing run.

Try a negative check: remove E2 from the receipt-independent work history while leaving the fixture's five events authoritative. You must report an incomplete denominator, not claim full coverage from the remaining records. Treat a wrong sender or channel as unverified delivery even when the provider reports success.

For a short supervised task, keep just the start, action-needed and completion events that actually apply, plus receipts. For longer unattended work, retain progress deadlines and active windows. An offline worksheet cannot watch a stopped executor. Independent outage detection requires a separately designed and authorized watchdog. Recipient attention and sustained phone reliability remain unverified.

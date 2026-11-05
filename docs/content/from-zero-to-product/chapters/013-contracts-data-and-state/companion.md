# State and API contract worksheet

Use this worksheet before wiring a write endpoint to a status badge. It connects a user question to an authoritative record, a response field and a check. Bring one editable item, one proposed change, and any work that finishes later.

## 1. Identify the slice

Write one sentence for what the user does and one for what they expect to observe afterward. Pick a single item and one downstream destination. Record the event that authorizes each claim.

| Input | Fill in |
| --- | --- |
| User action | [What changes?] |
| Read question | [What does the user need to know afterward?] |
| Item and change identities | [Which resource and which submission?] |
| Version scope | [Where does a version increase?] |
| Acceptance boundary | [Which records must commit together?] |
| Downstream evidence | [What proves the target applied a version?] |
| Freshness rule | [What time or ordering lets the UI qualify the claim?] |

## 2. Fill the transition and API contract

Use one row per transition. Name the evidence that permits it and the exact words the UI can show. Keep old confirmations and current work distinct. Give unknown evidence its own wording.

| Event | Source record | Response field | UI wording |
| --- | --- | --- | --- |
| Accepted | [commit] | [accepted version] | [saved wording] |
| Pending | [work item] | [board state] | [pending wording] |
| Failed | [recorded failure] | [board state] | [failed wording] |
| Applied | [matched acknowledgement] | [confirmed version and time] | [confirmed wording] |
| Unknown | [evidence absent] | [unknown or null] | [uncertain wording] |

Write contract: [method and resource], [item identity], [proposed fields], [expected version], [committed fields], [success response], [conflict response], [lookup after timeout].

Read contract: [read resource], [accepted identity and version], [target work state], [last confirmed version and time], [view ordering], [stale or missing evidence behavior].

## 3. Trace the fictional request

Fictional example. The editor submits C-17 as a title change for R-42 from version 7. The service accepts C-17 at version 8 and records pending board work for version 8. It returns the new change resource with its assigned version. The board's last acknowledgement is for version 7.

**Write.** POST /requests/R-42/changes with changeId C-17, expectedVersion 7 and title Review agenda. After commit, return 201 with changeId C-17, acceptedVersion 8 and acceptedAt 10:00. A version conflict returns 409. Look up C-17 after a lost response.

**Read.** GET /requests/R-42 returns acceptedVersion, changeId, title, acceptedAt, boardState, boardConfirmedVersion, boardObservedAt and viewRevision. A missing confirmation leaves boardConfirmedVersion empty. Compare viewRevision only within R-42.

| Observation | Stored fact | Expected screen |
| --- | --- | --- |
| 10:00 commit | C-17 accepted at 8. Work pending. Board last confirmed at 7. | Saved as version 8. Board last confirmed at version 7. |
| 10:02 failure | C-17 remains accepted. Board work failed. Version 7 remains last confirmed. | Saved. Board update failed. |
| 10:05 acknowledgement | R-42 version 8 applied. Board confirmation observed at 10:05. | Board confirmed version 8 at 10:05. |
| Older read arrives | The older view has a lower revision for R-42. | Retain the view with confirmation at version 8. |

A version 7 acknowledgement cannot finish C-17. If the original write times out, look up that submission before asking the user to create another one. A conflict leaves the proposed edit available locally while the editor refreshes the current accepted version.

## 4. Check the handoff

Map each sentence on the screen to one record and one response field. Confirm that the same R-42, C-17 and version 8 appear in the write and read contract. Trace the four observations above in order, then repeat with an absent board acknowledgement and with a conflict. Check that failure or silence leaves acceptance visible, and that an old read cannot regress the newer view.

The example checks are synthetic. The worksheet defines a contract for implementation, and the sample does not exercise a real API, database, worker or user.

For a single synchronous write and direct read, keep the item ID, version and confirmed write result. Add a downstream state only when the user needs to observe an independently completed action.

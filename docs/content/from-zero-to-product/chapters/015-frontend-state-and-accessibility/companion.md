# Frontend state and recovery worksheet

Use this worksheet to design one interaction with delayed or uncertain results. Bring the API response shapes, record scope, version rules, permissions, and available recovery actions. Record what each message means before implementing the screen.

## Map one interaction

| Input | Your decision |
| --- | --- |
| Record and scope | ______________________________ |
| Draft and submitted operation | ______________________________ |
| Signal that confirms acceptance | ______________________________ |
| How reads can be ordered | ______________________________ |
| When a retained read may be shown | ______________________________ |
| Action for an unknown save outcome | ______________________________ |
| How a secondary view verifies its data | ______________________________ |

For each state, fill in the signal, visible words, next action and one observable check. Copy the row for every additional state. Keep write outcome and read freshness as separate fields.

| State | Signal | Copy | Action and check |
| --- | --- | --- | --- |
| __________ | __________ | __________ | ______________________ |
| __________ | __________ | __________ | ______________________ |
| __________ | __________ | __________ | ______________________ |

Choose a routine status region, a focus rule for field errors, and a narrow layout for long messages. Record what the user sees and hears. Keep the draft through recovery where the interaction permits it.

## Worked example and state matrix

This fictional tracker edits request R-42 from version 7 to 8. The new title is “Repair the lamp.” The editor checks the exact submitted operation after a lost response. The board verifies its own read. The checks are expected outcomes for an implementation.

| State | Signal | Visible copy | Action and check |
| --- | --- | --- | --- |
| Loading | First read in flight | Loading request | Navigate away if needed. No empty or saved message. |
| Empty | Valid current empty list | No requests yet | Create if permitted. A failed read never enters this row. |
| Saving | Submit in flight | Saving title | Keep draft visible. A second submit sends nothing. |
| Accepted | Matching acceptance at v8 | Title saved | Continue editing. A later v7 read leaves v8 visible. |
| Rejected | Matching validation error | Enter a title | Correct the field. Draft remains and focus reaches the error. |
| Unknown save | Response lost or unusable | Couldn’t confirm the save | Check save status. The exact submitted edit remains available. |
| Stale read | Refresh failed, v7 still eligible | Last verified at 10:14 | Refresh. v7 remains labeled as the last verified read. |
| Unavailable read | No usable snapshot | Couldn’t load requests | Retry the read. Malformed data stays out of the view. |
| Partial recovery | Edit accepted at v8, board still v7 | Title saved in editor. Last verified at 10:14 on board. | Board refreshes independently. Each message follows its own evidence. |

## Exercise and completion checks

Start at version 7. Enter the new title and submit with the keyboard. The editor shows “Saving title.” Drop the response. It shows “Couldn’t confirm the save” and keeps the title. Check the submitted operation after reconnecting. The matching acceptance produces “Title saved” and version 8. Deliver a delayed version 7 response. The verified version stays at 8 and the old read adds no announcement.

Keep the board at version 7 through editor recovery. Its dated display stays in place while an authorized retained read is eligible. Send a valid version 8 board read. Check that it updates the title and clears the board warning. Also run a separate straight-through success case.

| Check | What to observe |
| --- | --- |
| Keyboard order and focus | Reach the field, Save and recovery action. Focus remains visible after updates. |
| Field errors | The field has a label and associated error. The draft stays available for correction. |
| Announcements | Check meaningful status changes with a screen reader. Identical polls stay quiet. |
| Narrow layout and zoom | Long copy wraps, actions stay reachable and focus stays visible. |
| Scope and freshness | Wrong-scope, malformed and older responses cannot replace verified data. |
| Separate views | Save confirmation and board refresh have their own evidence and timing. |

Record the browser, viewport and assistive technology you actually used with the observed result. The walkthrough above was checked for internal consistency. The fixture, keyboard and screen reader checks in your implementation remain to be run.

Start with one editable field, a status region and one recovery action. Omit the board rows when there is only one view. Keep a dated retained view only when people can still use it safely.

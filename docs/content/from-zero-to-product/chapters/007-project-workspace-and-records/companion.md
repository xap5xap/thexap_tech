# Repository starter map and handover checklist

## Purpose and inputs

Give a new contributor or agent a route to the product outcome, current decision, allowed changes, and required checks. Bring the repository, an active task, existing instructions, and the place where decisions are recorded. This worksheet is a navigation and review aid. It does not grant permission to change code, providers, or releases.

## Build the map

Assign one canonical home per answer. A home may be a file, tracker record, or access-controlled evidence store. State what it owns and what belongs elsewhere. Use links or repository-relative paths that another reader can resolve. Add a maintainer and a check for stale information.

| Answer | Canonical home | What it owns | Maintainer and freshness check |
| --- | --- | --- | --- |
| Product outcome and non-goals | [fill in] | [fill in] | [fill in] |
| Working instructions | [fill in] | [fill in] | [fill in] |
| Current accepted decisions | [fill in] | [fill in] | [fill in] |
| Behavior specification | [fill in] | [fill in] | [fill in] |
| Task scope and live status | [fill in] | [fill in] | [fill in] |
| Check results and limits | [fill in] | [fill in] | [fill in] |
| Private evidence access route | [fill in] | [fill in] | [fill in] |

## Instruction file outline

Keep detailed policies in their canonical homes and link to them.

- Project purpose and responsibility boundary: [fill in]
- First reading route and component instructions: [fill in]
- Maintained setup and verification commands: [fill in]
- Branch and review conventions: [fill in]
- Allowed actions and separately authorized actions: [fill in]
- Completion evidence and reporting gaps: [fill in]
- Private material and approved access route: [fill in]

## Handover record

- Intended outcome and current task: [fill in]
- Current governing decision and status: [fill in]
- Allowed files and actions: [fill in]
- Excluded changes and reserved decisions: [fill in]
- Base revision or comparison reference: [fill in]
- Required checks and actual results: [fill in]
- Private evidence custodian and access process: [fill in]
- Unresolved questions and next action: [fill in]

## Completed illustrative example

The following shared request tracker and task are fictional. No application implementation, notification delivery, hosted journey, or independent fresh-chat test is claimed.

The task clarifies the difference between a saved request and a notification waiting to be sent. Its permitted scope is a named interface component and affected tests. Provider changes, production data, infrastructure changes, and release actions are excluded.

| Answer | Illustrative canonical home | Ownership and freshness rule |
| --- | --- | --- |
| Product outcome | docs/product.md | Product owner keeps the intended user result and non-goals current |
| Working instructions | AGENTS.md | Maintainer owns commands, reading route, and action boundaries |
| Accepted notification boundary | docs/decisions/notifications.md | Decision owner records status and replacements; older proposals are historical |
| Notification interface behavior | docs/specs/notification-status.md | Task owner keeps expected states aligned with the accepted decision |
| Task scope and live status | Assigned tracker issue | Assignee records allowed files, exclusions, dependencies, and current state |
| Sanitized check results | docs/checks/notification-status.md | Implementer records actual revision, checks, result, and limitations |
| Sensitive underlying evidence | Approved private evidence store | Evidence custodian controls access; public records contain no raw secrets or customer material |

The README links to these homes in reading order. It does not copy the task's status or the decision's full body. The decision says request acceptance and notification sending are separate concerns. An old proposal to wait for email is marked historical and points to the current decision.

The handover names the interface component and affected tests, the comparison revision, and the expected saved-and-pending and notification-unavailable states. Keyboard checks and affected tests are required. Actual application result: NOT RUN. The task remains incomplete until its own required evidence exists. The example is ready to use as an exercise, not proof that the product works.

## Lookup exercise and completion check

Give a genuinely fresh reader only the entry point and the access they should have. Ask them to identify the outcome, current decision, allowed changes, and required checks. They must cite a location for each and report conflicts or inaccessible evidence. Do not supply the answers from the old conversation.

- Reader or session and date: [fill in]
- Was this a fresh context: [yes / no and limitation]
- Entry point and access provided: [fill in]
- Outcome location and answer: [fill in]
- Governing decision location and status: [fill in]
- Allowed changes and exclusions location: [fill in]
- Required checks and actual result locations: [fill in]
- Broken route, contradiction, or missing access: [fill in]
- Repair, owner, and next check: [fill in]

For the fictional example, the expected answers are the product document, accepted notification decision, assigned task, and behavior/check records. Independent exercise result: NOT RUN. A local path check or an author reread cannot substitute for that result.

The map is usable when each answer has a clear home, its links resolve for the intended reader, superseded proposals cannot be mistaken for current decisions, and missing evidence stays explicit. For a small reversible task, use a README, a short instruction file, and a linked issue with the decision and checks. Skip extra folders until they serve a distinct owner or question. Keep credentials and sensitive evidence out of public files.

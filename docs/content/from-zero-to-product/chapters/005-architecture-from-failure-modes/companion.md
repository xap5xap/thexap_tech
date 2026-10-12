# Architecture decision and failure map

Use this worksheet to connect one user promise to a small architecture decision. Complete the blank record, then check that another reader can trace a failure through it.

## Inputs and instructions

Bring a scoped experience, its success check, important data, access rules, external dependencies, and your operating constraints. If a requirement is unconfirmed, mark it provisional.

1. Write the user result and what must remain true when something fails.
2. Choose three important failure situations. Describe the user's experience.
3. Name the authority for each important fact and the component that owns detection and recovery.
4. Compare the simplest candidate with one credible alternative using those same failures.
5. Record the decision, accepted cost, uncertainty, and evidence that would make you reconsider it.
6. Write observable checks. Keep their execution state visible.

## Fillable decision record

**Title:** [The decision and its purpose]

**Status and date:** [Proposed or accepted; date and decision owner]

**User promise:** [A small observable result]

**Confirmed constraints:** [Access, durability, recovery, availability, operating capacity]

**Provisional assumptions:** [Beliefs still needing a decision or check]

**Decision:** [The chosen design and why it fits the promise]

**Authoritative state:** [Where the accepted fact lives; how clients recover it]

**Responsibilities:** [Component, job, boundary; a component need not be a separate service]

**Alternatives:** [One credible alternative, same comparison criteria, and reason for rejecting it now]

**Consequences:** [Benefits, operating work, and failure or limitation deliberately accepted]

**Uncertainty:** [Missing decisions or evidence; who will resolve each]

**Reconsideration trigger:** [Observable condition that would change this decision]

## Fillable failure map

Repeat this block for each critical failure.

**Situation:** [What fails and what the user observes]

**Fact to protect:** [What must remain true]

**Authority:** [Where that fact is decided and stored]

**Detection owner:** [Component and signal that reveals the problem]

**Recovery owner:** [Component and bounded recovery action]

**Visible result:** [What the interface may honestly say]

**Observable check:** [Action, expected stored state, and expected user result]

**Evidence state:** [Not run, observed failure, or passed with scope and date]

## Context diagram template

Draw people and external systems outside your application boundary. Place the application, authoritative store, and any necessary background work inside their actual boundaries. Label each connection with the data or operation it carries.

For every important fact, mark one authority. For every critical failure, mark the owner of detection and recovery. Draw a shared failure domain honestly. Separate boxes alone do not establish independent availability.

## Completed illustrative example

This fictional shared request tracker has not been implemented or tested by this worksheet.

**Title:** Preserve accepted requests when a response or notification fails

**Status and date:** Proposed example, October 12, 2026

**User promise:** A permitted team member submits one request and can recover its saved state after a lost response. Notifications may be delayed.

**Assumptions:** The team can operate one application and database. Notification delay is acceptable. Both assumptions require confirmation in a real project.

**Decision and authority:** One web application and relational database. The server checks permissions and coordinates acceptance. The database stores the request and pending notification work in one transaction. A background task sends notifications separately. The browser reuses one submission identity for a retry.

**Responsibilities:** Browser owns input and visible outcomes. Application owns permissions, validation, and retry-result recovery. Database owns durable records, uniqueness, and transaction enforcement. Notification task owns attempts and unresolved failures. External mail provider owns its acceptance contract; it does not prove human receipt.

**Alternative:** Separate request and notification services. Rejected now because this example has no confirmed need for independently operated domains that would justify the additional coordination.

**Consequences:** Saved requests do not depend on mail availability. Temporary application unavailability remains an accepted limitation. Background work, retry retention, duplicate handling, monitoring, and restoration checks require implementation and operation.

**Uncertainty and trigger:** Confirm recovery targets, retry retention, and notification delay. Reconsider if an agreed target cannot be met, notification processing interferes with acceptance, or independent domain operation becomes a confirmed requirement.

**Failure map:** The response disappears after the database accepts the request. The database remains authoritative. The browser detects the missing response but cannot infer the write outcome. The application recovers the original result when the permitted user retries the same identity and input. The interface confirms the recovered request rather than creating another one.

**Observable check:** Suppress the response after acceptance, then retry with the same identity and input. Expect exactly one saved request and the same returned request identity. Also reject changed input using that identity, and verify that another team cannot recover the result.

**Execution state:** Not run. These are proposed acceptance checks, not runtime or user evidence.

## Completion check and exercise

Choose one failure from your own experience and fill its map. Ask another reader to follow the diagram and explain the authority, recovery owner, and visible result. Record unclear responsibilities as findings.

The worksheet is complete when each selected component has a responsibility, each critical failure has an owner and observable check, the alternative is compared fairly, and accepted costs and open decisions are visible. Keep design review separate from checks actually executed.

## Lightest useful version and limits

Use one page with a user promise, three failures, a responsibility sketch, the decision and its main cost, and a reconsideration trigger. Omit formal diagram tooling when a clear sketch is enough. Simplify for a disposable prototype, but state the data or reliability promises you are not making.

This worksheet does not prove security, availability, provider behavior, usable recovery, or production readiness. Confirm requirements and run the necessary checks before making those claims.

# Stack decision matrix and spike brief

## Purpose and inputs

Compare two or three buildable configurations against product constraints, then preserve a provisional or confirmed choice. Bring a critical workflow, architecture boundaries, operator skills, deployment limits, and the decision date. This worksheet does not benchmark software or authorize deployment.

## How to use it

Write requirements before candidate names. Mark each criterion as must-pass or preference. Describe a complete candidate: backend runtime, frontend rendering approach, database, and hosting shape. For each criterion, record fit, evidence type, source or planned check, and consequence. Use Documented, Observed, Preference, or Unknown. Do not average a failed requirement into a passing score.

Copy this block for each candidate:

- Configuration and date: [fill in]
- Backend runtime and deployed output: [fill in]
- Frontend rendering and deployed output: [fill in]
- Database and authoritative state: [fill in]
- Hosting shape and running processes: [fill in]
- Access and secret ownership: [fill in]
- Migration, backup, and recovery owner: [fill in]

## Fill-in comparison

For every row, fill all five fields. Add rows only when they could change the decision.

| Criterion and priority | Candidate A: fit and evidence | Candidate B: fit and evidence | Accepted consequence | Blocking unknown or check |
| --- | --- | --- | --- | --- |
| Critical workflow, must-pass | [fill] | [fill] | [fill] | [fill] |
| Recovery after interruption, must-pass | [fill] | [fill] | [fill] | [fill] |
| Rendering need, must-pass | [fill] | [fill] | [fill] | [fill] |
| Hosting compatibility, must-pass | [fill] | [fill] | [fill] | [fill] |
| Maintainer familiarity, preference | [fill] | [fill] | [fill] | [fill] |
| Dependency support and upgrades | [fill] | [fill] | [fill] | [fill] |

## Decision record

- Status: [provisional / selected / deferred]
- Chosen configuration and rationale: [fill in]
- Credible alternative and why not selected: [fill in]
- Maintenance and deployment consequences: [fill in]
- Evidence links and dates: [fill in]
- Blocking unknowns and next action: [fill in]
- Reopening trigger and review owner: [fill in]

## Spike brief

Write one experiment only when its result could change the choice.

- Decision-changing question: [fill in]
- Candidate and exact configuration: [fill in]
- Smallest fixture or workflow: [fill in]
- Evidence to capture: [fill in]
- Effort cap and stop condition: [fill in]
- Keep, reject, or investigate rule: [fill in]
- Actual result, date, and limits: [not run / fill in]

## Completed illustrative example

This is a fictional shared request tracker, not an implemented product or benchmark. Assume the maintainer knows TypeScript and React. Accepted requests must persist independently of email delivery. The first interface is signed in; public search pages are outside scope. Actual hosting behavior and operating costs remain unknown.

Candidate A: TypeScript on Node.js, a React Router SPA, PostgreSQL, and separate static/API hosting with a yet-to-be-verified durable work executor. Candidate B: Go with the same SPA, database, and hosting shape. No actual provider configuration is claimed.

| Criterion and priority | Candidate A | Candidate B | Consequence or next evidence |
| --- | --- | --- | --- |
| Accepted state and work survive interruption, must-pass | Unknown application behavior | Unknown application behavior | Both need transaction and restart checks |
| Signed-in SPA, must-pass | Documented rendering mode; deployed behavior unknown | Same frontend evidence | Check direct-route refresh and API authentication |
| Maintainer familiarity, preference | Assumed TypeScript familiarity | Go familiarity unknown | A avoids adding a backend language in this example |
| Hosting execution, must-pass | Unknown until exact configuration is checked | Unknown until exact configuration is checked | Confirm execution model and connection bounds |

Provisional choice: A, because of the assumed maintainer familiarity and the proposed API responsibility split. This is not a speed, cost, safety, or production claim. B remains credible if the operator skills or runtime requirements change. An integrated server-rendered application is deferred because this example has no established rendering need for it.

Accepted consequence: the separate browser/API boundary needs origin, authentication, failure-state, and release checks. Durable work requires an explicit design under either runtime. A migration and restore owner must be named before operational acceptance.

Spike question: can the proposed A configuration recover pending notification work after interruption? Use one fabricated request, a saved work record, and a simulated adapter. Save both records together, interrupt processing, restart, and inspect saved state and retry behavior. Refresh a signed-in application deep link separately. Stop after one agreed work session. Keep the candidate only if the necessary behavior is demonstrated; investigate code/configuration faults before concluding the platform cannot support it. If evidence is incomplete, retain Unknown. Actual result: NOT RUN.

Reopening trigger: required execution cannot be supported, the application gains a server-rendering requirement, a dependency loses support, or a measured workload exceeds an agreed threshold. New framework publicity alone does not trigger replacement.

## Completion check and simpler option

Can another maintainer name the selected configuration, one alternative, a must-pass condition, the accepted cost, and the next evidence needed? All blocking unknowns must have an action and an owner, or the selection stays provisional.

For a small reversible choice, use one paragraph, two candidates, one decisive criterion, and a reopening trigger. Skip a formal matrix for a feature already governed by a suitable stack decision. Do not skip the evidence distinction. This completed worksheet is a teaching example; executing the spike, deploying, and proving recovery remain separate work.

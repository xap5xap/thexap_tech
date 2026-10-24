# Planning agenda and issue readiness worksheet

Purpose: turn one chosen outcome into bounded issues with a complete delivery path. Use this for work that crosses components or needs a handoff. A small isolated edit may need only the short version at the end.

Inputs: the user outcome, current design or implementation, accepted constraints, available test environment, and the person who owns product decisions. Inspect actual source artifacts when filling inputs. A title or completed issue alone is insufficient evidence.

## Planning agenda

1. State the observable finish, exclusions and evidence limits.
2. Inspect what already works and the decisions still needed.
3. Trace setup, implementation, adapters, integration, verification, review, acceptance and cleanup.
4. Assign each necessary result to a bounded issue. Write the first issue completely; identify future inputs provisionally.
5. Check dependencies, estimates and owner checkpoints. Select the opening set and separate contingent work.
6. Save the opening record. If tracker writes are authorized, save the objects and verify their returned fields and relations.

Refinement clarifies backlog items. Sprint Planning selects a goal, work and delivery plan. Saving Linear objects is a local tool step. This worksheet is a suggested adaptation; it is not a replacement for the Scrum framework.

## Fillable opening record

Replace each bracketed instruction with a concrete answer. Use Unknown rather than inventing evidence. Keep the original record; add dated revisions after execution begins.

| Field | Your entry |
| --- | --- |
| Observable finish | [User, action, environment and visible result] |
| Current evidence | [Artifact or check, version/date and what it actually proves] |
| Exclusions | [Behaviors, paths and external actions outside scope] |
| Opening issues | [Stable planning labels, bounded titles and selected versus contingent work] |
| Dependency order | [Which output each downstream issue needs] |
| Owner checkpoints | [Decision, decision maker, required input and when needed] |
| Estimates | [Each executable leaf, method, uncertainty, checks and correction work] |
| Duration forecast | [Comparable observations and range, or Unknown with next checkpoint] |
| Overall readiness | [Ready for outcome; ready through named checkpoint; or waiting for named input] |
| Completion evidence | [Who reviews the connected result and where evidence will be kept] |

## Issue brief to copy

Use this structure for every executable leaf. A parent that only tracks children does not own another implementation result. Do not count parent roll-ups twice.

Title: [Bounded observable result]
Owner/executor: [Who delivers it; identify the acceptance owner separately]
Inputs: [Actual artifact, version and location, or clearly provisional future dependency]
Output: [Specific inspectable result and evidence location]
Scope: [Permitted files, components and behavior]
No-touch: [Explicit exclusions and reserved actions]
Acceptance: [Observable cases, including relevant failures]
Verification: [Check each acceptance case and name the evidence produced]
Dependencies: [Required verified output, not just a task title]
Owner checkpoint: [Decision or acceptance, or None with reason]
Readiness: [Ready; provisional until named evidence; or waiting for named decision]
Estimate: [Sizing method, uncertainty and included review/correction work]
Stop: [Unresolved decision, failed assumption or boundary that requires a new answer]

## Completed illustrative plan

This fictional request tracker is a planning exercise. No application work, live tracker creation, owner review or performance test has been executed for this example.

Finish: an authorized teammate changes a request from Open to Resolved locally; refresh preserves it; a failed save keeps the last confirmed status and explains the error.

Inputs assumed for this exercise: working sign-in and request reading, an existing local test environment, and an owner-selected Open-to-Resolved transition. Exclusions: production rollout, new notification services and status redesign. Verify those assumptions before using this in a real project.

Opening set: P1-P5 below. All are planned; only P1 is ready to start from these stated inputs. Duration and points are Unknown because there is no inspected implementation or comparable sample. Overall disposition: ready through the P1 behavior-contract review. The owner accepts behavior at P1 and the connected journey at P5; the agent owns technical delivery.

## P1 Agree the status-change contract

Owner: planner; behavior acceptance belongs to the product owner.
Inputs: chosen transition and current read model.
Output: request/response examples, acceptance cases and their review record.
Scope: behavior and fixtures only; no implementation or new status choice.
Acceptance: saved result, forbidden access and failed-save states are unambiguous.
Verification: walk each example with the owner; save the accepted contract or unresolved question.
Dependency: stated starting inputs.
Readiness: ready to start; P1 completion requires the owner review.
Estimate: Unknown, to be sized after inspecting the existing artifacts, including review and corrections.
Stop: a missing behavior decision is a question for the owner, not an invented default.

## P2 Persist an authorized status change

Owner: implementation agent.
Inputs: accepted P1 contract and actual service/storage structure.
Output: service operation, storage change and test evidence.
Scope: existing requests and access rules; no new user roles or production data changes.
Acceptance: allowed changes persist; forbidden changes leave data untouched.
Verification: focused service/database tests for both cases, with saved results.
Dependency: P1 accepted output; no additional product decision expected if it stays unchanged.
Readiness: provisional until the accepted contract and actual implementation inputs are inspected.
Estimate: Unknown, including tests and likely corrections; revise before execution.
Stop: a new authorization rule or incompatible data behavior returns for a decision.

## P3 Connect the API adapter

Owner: implementation agent.
Inputs: verified P2 service operation and P1 request/response contract.
Output: reachable local endpoint, error mappings and endpoint-check evidence.
Scope: transport and authorization context; no new product behavior or provider.
Acceptance: actual requests return saved status or the agreed error.
Verification: local endpoint checks for allowed, forbidden and failed requests against the service.
Dependency: verified P2 output; reconcile its actual interface before start.
Owner checkpoint: none expected within the accepted contract.
Readiness: provisional until P2 output is inspected and the adapter contract reconciled.
Estimate: Unknown, including integration checks and corrections.
Stop: a changed interface that alters agreed behavior requires reconciliation before work continues.

## P4 Connect the browser to the real result

Owner: implementation agent.
Inputs: verified P3 endpoint and the accepted feedback-state contract.
Output: integrated status control with recorded browser checks.
Scope: the request screen only; no redesign or production release.
Acceptance: pending, success and failure match the contract; refresh preserves saved data.
Verification: browser checks against the local service, including keyboard use and failed save.
Dependency: P3 real response and error behavior, checked before implementation.
Owner checkpoint: final behavior review remains in P5.
Readiness: provisional until the endpoint is verified.
Estimate: Unknown, including browser verification and corrections.
Stop: a new interaction choice or unsupported error state needs an explicit answer.

## P5 Accept and hand off the complete journey

Owner: delivery agent prepares evidence; product owner accepts the result.
Inputs: integrated P4 build, fixtures and the P1 acceptance cases.
Output: connected-journey results, owner acceptance, run instructions and fixture reset evidence.
Scope: the agreed local journey and disposable fixtures; no user-data deletion or deployment.
Acceptance: every finish condition has evidence, owner acceptance is recorded, and fixtures are reset.
Verification: repeat the connected cases, review with the owner and confirm reset via the fixture tool.
Dependency: verified P4 output. Failures return to the responsible implementation issue before acceptance resumes.
Readiness: provisional until integrated checks can run; acceptance is not assumed.
Estimate: Unknown, including verification, review and handoff work.
Stop: failed checks or absent owner acceptance remain incomplete, not Done.

## Dependency and tracker readback

Expected order: P1 -> P2 -> P3 -> P4 -> P5. These are temporary exercise labels, not real issue identifiers. A dependency arrow means the predecessor supplies an input; it does not mean that output exists yet.

Before authorized tracker writes, record the intended project/milestone, title, full brief, state, assignee, estimate and dependency relations. After each write, save the returned identifier and read back the complete object. Check that each predecessor blocks its successor and that the successor shows the reciprocal dependency. Compare the returned inventory and leaf totals with the opening record. Keep verified IDs after partial writes; reconcile before retrying.

## Exercise and completion check

Plan your own milestone, then remove the API adapter from the illustrative chain above. P4 still requires a real endpoint, but no remaining issue owns it. Restore P3 and explain how its output becomes P4's verified input.

Author check: the written five-issue example covers that dependency and gives every leaf inputs, output, scope, acceptance, verification, owner and readiness. That is a document consistency check. It does not prove that a real endpoint, application, owner review or fresh agent session works.

For your plan, check each required behavior against an issue owner. Follow every dependency to an actual input or an explicit provisional condition. Confirm that review, correction routing, acceptance, evidence and relevant cleanup are owned. Name the first safe issue and the next owner checkpoint. A failed check means revise the plan, not start the affected work.

## Lightest useful version and limits

For a small edit, use one outcome, one issue brief and one observable acceptance check. Skip points, a diagram or a formal meeting when they add no useful decision. Keep dependencies as a short list if that is clearer.

Planning does not authorize execution, provider actions or production release. Points are not hours. Preserve a dated opening snapshot and revise as evidence arrives. A written procedure alone does not prove faster delivery or fewer interruptions.

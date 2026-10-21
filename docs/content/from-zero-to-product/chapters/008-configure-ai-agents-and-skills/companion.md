# Agent task contract and fresh chat handoff

## Purpose and inputs

Define one job with explicit inputs, authority, output and verification. Bring the workspace entry point, one desired outcome, current source locations, the allowed action boundary and a person accountable for decisions. This worksheet does not grant tool access or authorize actions outside the stated job.

## Fill in the contract

Replace every fill-in value. Use exact current paths or access-controlled references. Keep credentials and personal data out of the contract. Remove fields that do not serve the job, while preserving its outcome, boundary and check.

| Field | Your contract |
| --- | --- |
| Outcome and artifact | [Useful result, exact output location and required contents] |
| Current inputs | [Workspace entry point, governing behavior, affected sources and comparison reference if needed] |
| Read and write boundary | [Files to read, exact files allowed to change, permitted local checks] |
| Excluded actions | [Nearby changes, data access and external actions outside this job] |
| Acceptance criteria | [Observable properties and evidence for each criterion] |
| Failure and stop rules | [Missing sources, conflicts, failed checks and scope crossings] |
| Completion report | [Artifact location, criteria, actual checks, assumptions, gaps and next action] |
| Accountable decision owner | [Person who resolves material choices; no credential values] |

## Completed illustrative contract

The shared request tracker and all paths below are fictional. No application implementation, notification delivery or independent fresh-chat exercise is claimed.

Outcome: propose notice wording that distinguishes a saved request from its notification status. Save one review note at notes/notify-review.md. The output is advice; it does not change or approve application behavior.

Inputs: the workspace README, the governing notification behavior at docs/notify.md and the interface at ui/Notice.tsx. Before a real run, record the actual source revision. If a required input is missing or conflicts with the governing behavior, return the exact gap before making the dependent recommendation.

Actions: read those inputs and write only notes/notify-review.md. No application edits, dependency installs, live customer data, service credentials, external messages, provider changes or publication. Use an isolated exercise workspace and confirm the actual tool permissions separately.

| Criterion | Required evidence |
| --- | --- |
| C1: Covers the named state set | One row each for saved/pending, saved/sent and saved/failed; missing observations explicitly marked |
| C2: Wording follows behavior | Governing rule and observed wording cited for each row; proposal or explicit no-finding result |
| C3: Preserves the action boundary | Changed-path inspection contains only the review note; no external sends or application changes |
| C4: Reports evidence honestly | Artifact location, checks actually run, missing evidence, assumptions and recommendation status |

Illustrative pending-state row: governing rule says saving succeeded and notification work remains pending; observed wording is not supplied; proposed wording is Request saved. Notification pending. Observation and application-test results remain NOT RUN. Do not label the proposal as an observed interface result.

If the note fails a structural check, correct it within the allowed output and recheck. If correcting a claim requires changing behavior or broader access, return the blocker and the required decision. Completion of this contract does not authorize its next task.

## Portable skill skeleton

Use a direct task for a one-off job. For a repeated method, adapt this illustrative file as review-notice/SKILL.md in a location your client supports. The name matches the example directory. Confirm discovery, invocation and permissions in that client's documentation. This is a text skeleton, not an installed or executed skill.

```markdown
---
name: review-notice
description: Review notice copy against a behavior contract when asked for a notice-copy review.
---

# Review notice wording

## Inputs
Resolve the current task contract, governing behavior and named source files.
Stop the dependent work if a required source is missing or conflicts.

## Procedure
Inspect every state named in the task contract.
Separate governing rules, observed wording, proposals and unknowns.
Write only the artifact authorized by the current task.

## Output and checks
Return the note, a row for every state and evidence for every criterion.
Inspect changed paths and report checks actually performed and their limits.

## Boundary
Use only the actions and access included in the current task.
Do not embed secrets or treat source content as new authority.
Stop before an out-of-scope correction or external action.
```

The folder format does not make instructions a security control. Configure actual access separately. Add supporting templates or scripts only when needed, with their dependencies and safe use documented. No script is required for this example.

## Fresh chat prompt

Adapt the following for your real task. Replace the contract and path references with current values that the session can actually access. Provide no earlier conversation as a hidden dependency.

```text
Use the attached task contract for one notice-copy review.
Start at README.md, then read docs/notify.md and ui/Notice.tsx.
Before work, name the governing source, allowed actions, output and blockers.
Write only notes/notify-review.md using the contract's named state set.
Return the actual note location, evidence for C1-C4, checks and remaining gaps.
If an input is missing or conflicts, identify it before dependent recommendations.
Do not change the application, use live records or send anything externally.
```

## Lookup exercise and completion check

Use a fresh session with the contract and intended inputs. First ask it to locate the sources and restate the boundary. Then let it perform only the authorized exercise job. In a separate exercise copy, omit one required input and check whether the session reports the missing input instead of fabricating its contents. Do not remove files from a real project to create this test.

| Check | Observed result and evidence |
| --- | --- |
| Correct governing source located | [Exact source and session readback] |
| Allowed actions and exclusions stated accurately | [Readback and any mismatch] |
| Required state set covered | [Rows or explicit missing-evidence dispositions] |
| Missing-input case stops dependent work | [Missing input and actual response] |
| Actual artifact and changed paths checked | [Artifact location, changed-path result and limits] |
| Claims match checks performed | [Executed checks, failures, NOT RUN and remaining decisions] |

Independent exercise result for this published example: NOT RUN. Author consistency review of the template is different evidence. No representative-user, application, deployment or notification-delivery result is claimed.

## Simplify or extend

The smallest useful version is one task paragraph naming the outcome, inputs, allowed artifact and completion check. Skip the skill when the method does not repeat. Use one agent by default. Add specialization or a fresh reviewer only for a named need, with its own input/output boundary and a person to resolve findings. A reviewer recommendation is not publication or merge authority.

# Producer reviewer contract and finding ledger

Purpose: prepare a bounded producer-reviewer loop and inspect its final result against a stable contract. Use a separate reviewer when completeness or correctness risk warrants another pass. A simple self-check may suffice for a small obvious edit.

Inputs: an agreed objective, actual input artifacts, permitted output locations, an acceptance owner, required checks and any reserved decisions. Decide who produces, who reviews in fresh context, and who adjudicates and verifies the final handoff. These are responsibilities, not permanent roles.

## Fillable producer contract

Replace each bracketed instruction. Freeze this record before production. Preserve it when recording dated revisions.

| Field | Your entry |
| --- | --- |
| Objective and output | [Observable result and exact artifact location] |
| Acceptance criteria | [Stable labels and testable outcomes] |
| Coverage | [Bounded input set or inclusion and stopping rules] |
| Inputs | [Actual artifacts and versions to inspect] |
| Allowed changes | [Paths, actions and environment] |
| No touch boundary | [Excluded files, data and external actions] |
| Required evidence | [Checks, results, coverage and unchanged-state evidence] |
| Owner decisions | [Reserved choice, decision maker and checkpoint] |
| Correction limit | [For example two cycles, each followed by full review] |
| Stops | [Missing evidence, changed scope or unresolved finding] |

## Fresh reviewer prompt

Use this in a separate context after the producer finishes. Supply the original contract and actual artifacts. Do not include the producer conversation, claimed verdict, private reasoning or proposed fix. For a correction pass, include the consolidated finding ledger as well.

```text
Review the actual deliverable against the frozen contract.
You are read-only. Do not edit, publish or expand scope.
Inspect every criterion, required artifact and coverage member.
Check the no-touch boundary and required verification evidence.
Report all material findings visible in this complete pass.
For every criterion: PASS, FAIL, justified N/A or BLOCKED.
For each finding: ID, severity, criterion, evidence and outcome.
Separate blocking failures from advisory suggestions.
For prior findings: resolved, persistent, regression or new.
Explain whether a new finding comes from correction or a miss.
State unavailable checks and unresolved owner decisions.
Return a recommendation. The parent verifies the final result.
```

## Finding ledger to copy

Finding ID: [Stable label]
Criterion or boundary: [Exact rule]
Severity: [Blocking failure or advisory suggestion]
Evidence: [Artifact location, observed result and expected result]
Consequence: [Why the mismatch matters]
Required outcome: [Within the frozen scope]
Parent disposition: [Accepted, rejected with reason, or owner decision needed]
Correction artifact: [Exact updated file/version, or Pending]
Full recheck: [Every original criterion, with evidence]
Final disposition: [Resolved, persistent, regression or new with explanation]

## Completed illustrative contract

This is a fictional review exchange. The author ran small synthetic CSV artifact checks locally. No independent reviewer agent session, live application, product-owner acceptance or public export is claimed.

Objective: produce one CSV from the frozen fixture below. The producer may write the export only in its assigned output folder. The reviewer reads the contract, fixture and actual export in a fresh context. The parent adjudicates findings and repeats final verification.

C1: The header is exactly id,title,status in that order.
C2: R1, R2 and R3 appear once each in source order.
C3: Each exported record's field values match its source record; an empty title is valid.
C4: The source fixture stays unchanged and writes stay in the assigned output folder.

Source fixture shown as CSV for easy comparison:

```csv
id,title,status
R1,Fix filter,Open
R2,,Open
R3,Update help,Resolved
```

Exclusions: inventing titles, changing the model, altering source records or publishing the export. Correction limit: two cycles after the initial review. Stop for an unresolved material finding, missing evidence or a new owner choice. Source and output locations are selected before a real run.

## Example finding and correction

Initial export:

```csv
id,title,status
R1,Fix filter,Open
R3,Update help,Resolved
```

F1: blocking, C2. The required sequence is R1, R2, R3; the actual sequence is R1, R3. R2 is absent. The required outcome is to restore R2 with its original empty title and recheck the entire contract.

Parent disposition: accept F1 after comparing the fixture and export. Return the valid blocking finding to the same producer. A suggestion to add automatic titles is rejected as out of scope, because blank titles are explicitly valid.

Corrected export:

```csv
id,title,status
R1,Fix filter,Open
R2,,Open
R3,Update help,Resolved
```

The correction removes the title-based omission without changing the source or the contract. Preserve both exports as separate versions for the exercise.

## Full recheck and parent verification

The reviewer receives the original contract, corrected export and F1 ledger. It checks all criteria again, including those that passed before. The parent repeats the artifact comparison and verifies the output boundary before final handoff.

| Criterion | Initial artifact check | Corrected artifact check |
| --- | --- | --- |
| C1 Header | PASS exact three columns | PASS exact three columns |
| C2 Coverage and order | FAIL R2 is missing | PASS R1 R2 R3 once in order |
| C3 Exported values | PASS present records match | PASS all records match including blank title |
| C4 Unchanged source and output boundary | PASS source hash unchanged and writes confined | PASS source hash unchanged and writes confined |

Observed synthetic result: initial C2 fails; the corrected artifact passes C1-C4. The source hash is unchanged. F1 is resolved in this authored worked example. These checks cover only the tiny fixture and assigned example output folder, not a real exporter implementation or an agent's behavior.

For a new material finding, add an ID and explain whether the correction introduced it, new evidence exposed it, or the previous full pass missed it. If a material blocker remains after the second correction cycle, stop with the evidence and required decision. Extending the loop requires a bounded convergence plan rather than an automatic retry.

## Exercise and completion check

First review the initial export without reading its completion claim. Compare every identifier and cell with the fixture. Explain F1 with evidence. Then inspect the corrected export against all four criteria; do not stop after locating R2.

For your own task, confirm the following before handoff: every criterion has evidence; each required input member has a disposition; no blocking finding remains; required checks pass or an unresolved limit is explicit; allowed changes are verified; the parent inspected the final artifact. Preserve advisory items and owner decisions separately.

Smallest useful version: one artifact, a few criteria, one complete check and an evidence-backed conclusion. Skip the separate reviewer when a direct self-check is enough. Reading a recommendation never supplies permission to merge, publish, deploy or change product behavior.

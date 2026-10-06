# Vertical slice scope and acceptance map

Use this worksheet to define one small experience that reaches a visible result, including its selected failure, recovery and completion checks.

## Inputs and instructions

Bring a user situation, intended change, constraints and the existing access or integration contracts. Mark missing inputs as assumptions or blockers.

Write the outcome and trace every required component. Give each acceptance obligation one accountable owner, the observation needed and a status. Add work for missing inputs. Keep Not run until evidence exists. Read the path aloud from setup through cleanup.

## Blank scope map

- Role and starting state: [fill in].
- One action: [fill in].
- Visible result and allowed conditions: [fill in].
- Path across interface, service, data and required external surfaces: [fill in].
- Selected failure and truthful user state: [fill in].
- Recovery action and observable finish: [fill in].
- Demonstration environment and evidence ceiling: [fill in].
- Deferred product or release obligations: [fill in].

## Acceptance record template

For each row, fill in Owner, Required observation, Fail condition, Actual evidence and Status. Add or remove rows deliberately; do not omit an obligation needed by the chosen outcome. Status choices: Not run, Pass, Fail, Blocked.

- S01 Setup: allowed actor, isolated starting state and required inputs. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S02 Input and access: valid input and rejection outside the permitted workspace. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S03 Persistence: one recorded result with a stable identity. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S04 Readback: the visible result matches the stored result after reload. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S05 Invalid input: the error is clear and useful input is retained. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S06 Uncertain result: the chosen failure preserves input and truthful status. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S07 Recovery: the result is reconciled and repeated permitted recovery creates no duplicate. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S08 Usable path: keyboard, focus and state messages support the chosen journey. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S09 Integration evidence: the required real handoffs are checked, and substitutes are labeled. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.
- S10 Cleanup: only authorized demonstration records and resources are removed or stopped, with readback. Owner: [ ]. Observation: [ ]. Fail if: [ ]. Evidence: [ ]. Status: Not run.

## Completion check and simplification

Trace the normal path and the failure/recovery path. Every required obligation must have exactly one accountable owner and an observation that can fail. List blocked inputs before starting dependent work. Check that setup, handoffs and cleanup have not fallen between rows.

Record the candidate, environment and actual evidence when checks run. Planning completeness does not make unexecuted rows Pass. List deferred release work separately.

For a small reversible change, use six lines: action, result, path, failure, recovery and check. Reuse an existing acceptance map if it already covers the change. Omit this separate worksheet for a minor change whose boundary and checks are established.

## Fictional request tracker example

This is an invented planning example. No application was implemented or tested for it. All software acceptance statuses are Not run.

Outcome: A coordinator in one isolated test workspace submits a request and sees its recorded owner, status and next action in the shared list, including after reload.

Path: Interface collects a title; service validates input and workspace; data store records one request; service retrieves that record; interface renders its identity and content.

Failure: The response is lost after storage. The interface keeps the input and attempt identity and shows an unconfirmed result.

Recovery: Look up the attempt identity. A found record becomes the same list entry. Authoritatively established absence allows the same-identity retry under the service's retry-safe contract. An unknown result stays unconfirmed.

Environment and ceiling: One allowed test actor, one isolated workspace and fabricated records. This demonstrates the named software path only. Identity, lookup and retry-safe handling are required implementation work, not assumptions of existing behavior.

Deferred: Concurrent collaborators, email, migration, other failure classes and release operations or user evidence. Existing access rules still apply.

- S01, Builder: Verify allowed test actor, isolated workspace and predefined owner. Fail on missing input or shared real data.
- S02, Builder: Submit valid input; reject a wrong-workspace request without storage. Fail on unchecked input or scope.
- S03, Builder: Compare one stored identity and content with the accepted submission. Fail on missing or duplicate records.
- S04, Builder: Reload and compare the same list identity, owner, status and next action with storage. Fail on loss or mismatch.
- S05, Builder: Submit an empty title; inspect a clear error and retained input. Fail on storage or silent rejection.
- S06, Builder: Withhold the response after storage; inspect retained input and unconfirmed status. Fail on a premature Saved claim.
- S07, Builder: Restore the lookup path, resolve the same attempt and repeat permitted recovery. Fail on mismatch or a duplicate.
- S08, Builder: Complete the form and recovery using the keyboard, inspect focus and state messages. Fail on an inaccessible required action or unclear status.
- S09, Builder: Trace request and response across the actual interface, service and store. Record any mock. Fail on an unlabeled substitute.
- S10, Builder: Remove only this demonstration's fabricated requests from the isolated workspace and read back absence. Fail on residual records or unrelated changes.

Exercise result: The paper example assigns each S01-S10 obligation once and names setup, success, failure, recovery, verification, cleanup and deferred scope. This is a reasoning check on the map. It does not execute or pass the software checks.

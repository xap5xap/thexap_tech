# Deployment action packet and smoke checklist

Use this packet to run one bounded hosted journey and make a release or cleanup decision. Bring the candidate IDs, the target environment and its current settings, the approved budget and expiry, and the person who can authorize changes. Record secret references and redacted evidence only.

## 1. Freeze the environment and candidate

Fill each row before the run. Confirm the exact target and what a failed check allows the operator to do.

| Area | Record before deployment | Owner or readiness evidence |
| --- | --- | --- |
| Scope and limits | Environment, access, maximum cost and expiry | |
| Authorized changes | Allowed resource updates, operator and stop condition | |
| Candidate and dependencies | Frontend, API origin, identity callback, database and schema | |
| Data and credentials | Synthetic test records and environment-specific secret references | |
| Recovery and cleanup | Previous compatible candidate or teardown plan, owner and deadline | |

Observe the browser's actual API route and the identity callback in the target environment. Confirm readiness, database binding and schema before a write. Define the expected success, delay or failure evidence for each step.

## 2. Record smoke checks and the decision

Use one row per check. Record actual evidence or an explicit state for anything unobserved. Mark the point where a failure stops later checks. Record the next action and its owner before leaving an environment running.

| Check | Expected observation and candidate | Result, evidence reference and next action |
| --- | --- | --- |
| Open app and sign in | | |
| Verify test-account scope | | |
| Save a test record and reload | | |
| Verify rollback or teardown as authorized | | |

## 3. Practice with a fictional request tracker

This is a tabletop exercise. The proposed environment uses synthetic data, a $0 cap and access that expires at the end of the review. The operator stops if the approved resources are unavailable. No application, provider or database was exercised to fill in the example.

| Step | Illustrative observation | Disposition |
| --- | --- | --- |
| Sign in and open the seeded request | Browser reached the hosted callback and the intended project | Record the identity and scoped read checks as passed in this scenario |
| Save a note and reopen the request | The API returned an error during save | Hold. Check API status, the database binding and schema. Persistence remains untested. |
| Cleanup | The test window ends | The named owner checks removal of the disposable data and temporary access. Mark cleanup pending until verified. |

## Completion check

A second person should be able to identify the candidate, the last observed result, the unresolved checks and the cleanup owner. For a local visual review, keep the journey and observation rows. Add the full environment and recovery packet when resources, data or access change.

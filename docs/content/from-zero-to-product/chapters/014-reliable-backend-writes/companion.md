# Backend write design worksheet

Use this worksheet to specify one write operation, then compare the database and downstream state after retries or failures. Bring the command fields, access scope, resource version, transaction boundary and downstream API contract.

The example is a fictional tracker. Its expected results were reviewed as an author walkthrough. Database fault injection, concurrency, restart and downstream tests remain exercises for your implementation.

## Define the write contract

Fill each field with an observable rule. Use the example as a model, then replace its values.

| Field | Your operation | Fictional example |
| --- | --- | --- |
| User intention | __________________ | Revise the title of R-42 |
| Authorized scope | __________________ | Authenticated workspace plus operation type |
| Command identity | __________________ | Key I-17 with R-42, title Repair the lamp and expected version 7 |
| Equality rule | __________________ | Compare normalized target, title and expected version |
| Accepted result | __________________ | Change C-17 and accepted version 8 |
| Durable work | __________________ | W-17 applies C-17 version 8 to the board |
| Receipt retention | __________________ | Retained during this exercise; define your expiry response |

Check permission on every attempt. Specify receipt uniqueness, the wait and reload behavior for simultaneous attempts, and your wait timeout. Record whether a stale-version conflict is retained. The example stores that conflict outcome. Invalid and unauthorized requests leave no receipt.

Describe the records in one local transaction, the lock or conditional update that protects the request version, and the exact result returned on replay. A replay describes the original acceptance even if the current request has advanced again.

Your transaction and concurrency rule

____________________________________________________________________

Your downstream deduplication, ordering and reconciliation rule

____________________________________________________________________

## Walk through the three requests

Start at R-42 version 7, with no test receipts, changes or work. Keep the same access scope in all three steps. Each row continues from the previous one. Counts are the total records created by this exercise. An acceptance receipt stores C-17, version 8 and W-17.

| Step | Submitted command | Expected result | Persistent state |
| --- | --- | --- | --- |
| Accept | I-17, original title, expect 7 | Accepted C-17 at version 8 | R-42 at 8; 1 acceptance receipt; 1 change; W-17 pending |
| Safe retry | I-17, identical command | Replay C-17 at version 8 | Same records and counts; W-17 pending |
| Conflicting retry | I-17, different title, expect 7 | Key-reuse conflict | Original title at 8; same receipt, change and W-17 |

Explain why the retry is evaluated against the retained receipt before the current resource version. Explain why changing the title requires a new key and a new version decision.

For each step, identify the receipt, request version, accepted change and work record in your own system. Attach a query result or test assertion when you execute the case. Keep expected and observed results separate.

Your observed result and evidence reference

____________________________________________________________________

## Build the failure case matrix

Reset to R-42 version 7 and empty test records before each independent case. In the conflicting-reuse case, accept I-17 before reusing it. Counts below cover only records created by that case. Receipt counts include retained conflicts where the example contract requires them.

| Case | Expected database after resolution | Downstream expectation |
| --- | --- | --- |
| Response lost after commit then same-key retry | Version 8; 1 accepted change; 1 receipt; 1 W-17 | Work remains pending until a matching acknowledgement |
| Changed command under accepted key | Version 8; original change, receipt and W-17 unchanged | No extra work from reuse |
| Concurrent identical commands | Version 8; 1 change; 1 receipt; 1 work row | One logical event, repeat delivery possible |
| Two keys expecting version 7 | Version 8; 1 change; 2 receipts, one accepted and one conflict; 1 work row | Only the winner creates work |
| Work insert fails before commit | Version 7; 0 changes; 0 receipts; 0 work rows | Nothing to send; next same-key attempt may accept |
| Worker stops before sending | Version 8; 1 change; 1 receipt; 1 recoverable work row | Restart reclaims eligible work after lease expiry |
| Send succeeds then worker stops before saving acknowledgement | Same accepted records; work remains recoverable | Duplicate may be sent; deduplicating consumer applies event once |

Add a timeout while another attempt holds the key, an ambiguous commit, expired receipt handling, and an older board version arriving late. For every new row, state the persistent records, caller response and downstream evidence needed. Fill in actual observations only after running the case.

Your additional case and expected stored state

____________________________________________________________________

## Check completion and simplify

The design is ready for implementation when every row names the expected request version, receipt outcome, accepted-change count and work state. After implementation, compare fresh database reads with those expectations. Check the destination separately for duplicate application, ordering and version-matched acknowledgement.

The worksheet does not establish the behavior of a running service. Mark an implementation case PASS only when its stored records and required destination evidence agree. Record unavailable destination checks explicitly.

Start with one operation type and a database work table. Omit downstream work when the operation has no required external effect. Retain the key and resource-version rules for writes that callers can retry.

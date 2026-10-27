A polished completion message can still describe an incomplete deliverable.

In a fictional CSV export, the header is correct and every visible value looks reasonable. But the source has three records and the export contains two. A row with an empty title was silently dropped.

A useful AI review loop checks that actual file against the original contract:

1. Freeze the criteria, input population and allowed changes before production.
2. Give a fresh reviewer the contract and artifacts, without the producer's verdict or conversation.
3. Require one complete pass and evidence for every criterion.
4. Send valid findings back to the same producer, then recheck the whole contract after correction.
5. Have the parent verify the final artifact and preserve unresolved decisions.

Restoring the row is only part of the check. The header, order, values and unchanged source still need verification.

Set a correction limit. Reaching it is a reason to stop with the evidence, not a reason to accept the result.

For a small obvious edit, a direct self-check may be enough. A separate reviewer is useful when it addresses a real completeness or correctness risk. It remains fallible.

The full guide includes a producer contract, reviewer prompt and worked finding ledger.

https://www.thexap.com/blog/producer-reviewer-loop

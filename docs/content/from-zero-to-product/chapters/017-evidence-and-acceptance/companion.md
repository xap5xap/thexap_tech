# Acceptance evidence worksheet

## Define the run and the promise

Use this worksheet to review one bounded experience. Bring one requirement, the candidate build, a test environment, a way to observe the result and the role responsible for accepting it.

Give each requirement a row. Write a pass observation and a condition that would falsify it. Record the result and a direct evidence reference. Add a row when the actor or kind of evidence changes.

| Item | Your entry |
| --- | --- |
| Candidate, run, date, environment | |
| Promised experience and intended actor | |
| Scope and exclusions | |
| Reviewer and decision owner | |

| Row and action | Pass observation and falsifier | Evidence and result |
| --- | --- | --- |
| | | |
| | | |
| | | |
| | | |

## Worked example and evidence index

Illustrative example. On fictional build B17 in the test browser, a shift lead should find the open request and submit a handoff note unaided. The next shift should be able to reopen the same request and read the note.

| Row | Check and expected result | Evidence and disposition |
| --- | --- | --- |
| A1 | Reject a whitespace-only note before writing | E1 unit report, pass |
| A2 | Write to the intended request and recover the same note on a fresh read | E2 integration result, pass |
| A3 | Show confirmation after browser submission and the note after reopening | E3 scripted browser recording, pass |
| A4 | Lead chooses the right request and handoff control without a prompt | No direct observation, unobserved |

The artifacts are fictional. E1 uses candidate B17 and controlled input. E2 and E3 use the same candidate and test request under run R1. The browser script knows which control to pick. It records the software path. To fill A4, observe a test lead on a fresh run and record any coaching.

## Record the decision and the cleanup

For each real artifact, record its location, kind, candidate, run, actor and visible result. Keep artifacts containing sensitive data in the agreed private location. Capture failures and missing observations as their own results.

| Evidence reference | Candidate, run, actor | What it supports |
| --- | --- | --- |
| | | |
| | | |
| | | |

| Review item | Your entry |
| --- | --- |
| Claim supported by the evidence | |
| Open cases and next observation | |
| Cleanup owner, result and retained items | |
| Decision, decision owner, date and scope | |

Illustrative review. The scripted flow submitted and reopened the note on the intended request in the B17 test browser. Unaided selection stays unobserved. The full acceptance decision is pending. Next step is an attended run with the intended task wording. Cleanup was not performed in this fictional example.

Complete the worksheet when every criterion has a disposition, each supported claim links to its observation, and the decision and cleanup are recorded or clearly open. For a small run, put the evidence links and decision in the same table.

# Identity and permission worksheet

## Map one protected operation

Use this worksheet to separate provider sign-in, request validation and permission for one action. Bring a browser sign-in route, its expected credential, an application membership source, two test resource scopes and a way to check the target record. Use fictional test data and authorized test identities.

Fill in the contract before running the tests. Write what each boundary receives and what it can decide. Add the route and data operation that must agree on the allowed scope.

| Boundary | Your input | Your check and expected result |
| --- | --- | --- |
| Browser sign-in | Provider and test sign-in route | |
| Request validation | Expected credential type and configuration | |
| Account mapping | Verified identity and app account source | |
| Permission | Action, active role, resource and scope | |
| Write | Target record and allowed scope | |
| Access removal | Owner, grant, session and deadline | |

## Worked example and verification matrix

Illustrative example. In a fictional tracker, an editor can rename requests in Workshop A. A viewer can read. A second signed-in identity has no membership. The editor has no role in Workshop B. The service validates its expected credential, maps the identity, checks the active role and updates only the matching workshop and request. Write the expected outcomes before testing.

| Case | Credential result | App decision | Record to check |
| --- | --- | --- | --- |
| Editor renames own request | Valid | Allow Workshop A rename | A title changes |
| Signed in without membership | Valid | Deny missing grant | A title and version unchanged |
| Editor uses Workshop B ID | Valid | Deny wrong scope | B title and version unchanged |
| Expired credential | Reject | No request reaches write | Title and version unchanged |
| Editor after grant removal | May remain valid | Deny by defined deadline | A title and version unchanged |

These are expected outcomes for a fictional design. Replace the rows with your credential profile, role names, resource scopes and observations.

## Run the checks and record evidence

1. Record the environment, build, time, test case and safe correlation reference. Record the before title and version through an authorized test read.
2. Run an allowed edit through the browser with the actual test identity provider. Confirm the exact scoped write. Run a valid provider session with missing membership or out-of-scope access.
3. Run the negative rows against the direct write boundary. Label real-provider, isolated verifier fixture and any unexecuted rows separately. For an expired credential, observe the rejected request independently of any retry with a refreshed credential.
4. Capture the status, the boundary decision, the after title or version and whether an unintended event appeared. Use sanitized references. Keep cookies, tokens, raw claims and real user records out of the evidence.
5. Remove the test grant through your supported admin path. Verify denial with the prior session by the documented deadline, and verify denial in a new session. For account removal, identify the person responsible for local disablement, provider session revocation and additional access routes.

| Run row | Observed decision | Before and after | Evidence and environment |
| --- | --- | --- | --- |
| Allowed | | | |
| Missing membership | | | |
| Wrong resource | | | |
| Invalid or expired | | | |
| Grant removed | | | |

The check is complete when the allow row changed the intended record and every deny row left it untouched. A denial response with an unexpected write is a failed row. Start with one action and the three core denial cases. A single-workspace application can simplify the role table while still testing access to a resource the caller should not be able to change.

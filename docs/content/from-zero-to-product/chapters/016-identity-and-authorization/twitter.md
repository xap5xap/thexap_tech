# X thread

Paste the text inside each copy block in order. The article link is composed after live verification.

## Post 1

```text
1/7 Change one request ID after signing in. If the edit reaches a different team's record, the login worked and the permission check failed. Here's a small test matrix for one write route.
```

## Post 2

```text
2/7 Map the browser sign-in, the server's credential check, and the app's permission check. The server needs to know who is making the request and whether that person may change this exact record.
```

## Post 3

```text
3/7 Fictional tracker: an editor may rename requests in Workshop A. Start with a successful rename, then reuse that session with a Workshop B request ID. Check the other record through an authorized test read.
```

Attach `images/permission-flow.png` to post 3. ALT: Request flow branches at credential validation and the scoped permission check before a write.

## Post 4

```text
4/7 Try a valid session with no membership and an expired credential. The first stops at the app permission check. The second stops at credential validation. In both cases, check that the record stayed unchanged.
```

## Post 5

```text
5/7 Use the real test provider for an allowed edit and a permission denial. Use verifier fixtures for precise expiry and malformed tokens. Label those results separately and keep credentials out of the evidence.
```

## Post 6

```text
6/7 Remove the test grant and repeat the write with the prior session. Check denial by the documented revocation deadline. Try again with a fresh session to check that signing in cannot restore the grant.
```

## Post 7

```text
7/7 Start with one write and three denial rows. Record what the server decided and what happened to the record. Here's the full walkthrough: [LINK-TO-BLOG]
```

Change one request ID after signing in. That small test can tell you whether a permission check actually protects the record.

In a fictional tracker, an editor can rename a request in Workshop A. Use the same valid session and try a request from Workshop B. The server should refuse the edit. Read the target through an authorized test path and confirm that its title and version stayed the same. The response status alone cannot tell you whether the write happened.

Try two more rows. Use a valid login with no membership, then try an expired credential. The first should stop at the permission check. The second should stop at credential validation.

Run an allowed edit and a permission denial through the real test provider. Use fixtures to cover expiry and malformed credentials precisely. Record which boundary denied the request and what happened to the record.

The guide shows how to build and use that verification matrix.

---
IMAGES-TO-ATTACH:
- images/permission-flow.png
  ALT: Request flow branches at credential validation and the scoped permission check before a write
- images/hero.png
  ALT: A stamped pass beside two printmaking trays, with a block fitted into one tray
LINK-TO-PASTE: [LINK-TO-BLOG]

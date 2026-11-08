# Standalone X post

```text
A timed-out write may already have committed. Keep its operation key and command stable, replay the retained result, and recover required downstream work from a durable record. Guide and retry exercise: https://www.thexap.com/blog/reliable-backend-writes
```

Attach `images/transaction-boundary.png`.
ALT: One database commit contains request R-42 at version 8, change C-17, receipt I-17 and work W-17; a worker later reads W-17 and sends it to the board

A write can succeed while its caller sees a timeout. What should the retry do?

In a fictional request tracker, an edit uses key I-17 and expects version 7. The service saves change C-17 at version 8, but the response is lost.

Keep a durable receipt for that intention. A retry with I-17 and the same command can return C-17. Reusing I-17 with another title should produce a conflict. Check the retained receipt before the current version, or the accepted edit can conflict with its own retry.

Put the request update, accepted change, receipt and required downstream work in one database transaction. If the work insert fails, the whole attempt rolls back. If it commits, a worker has something durable to recover after restart.

There is another failure window after a worker sends the event but before it records the acknowledgement. Plan for repeat delivery and destination deduplication too.

For your next write endpoint, sketch those two boundaries and write down the records you expect after each failure. The guide includes a worked retry exercise and a failure-case matrix.

https://www.thexap.com/blog/reliable-backend-writes

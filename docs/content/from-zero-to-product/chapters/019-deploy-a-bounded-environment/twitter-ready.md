# X thread

Paste one numbered block per post. Add the figure to post 2.

```text
1/6 Sign-in works on your new deployment. Now try the action that brought the person there. Give that one journey its own smoke test, a stop condition and a cleanup owner.
```

```text
2/6 In a fictional tracker, sign in, open a seeded project, save a note, then reopen the request. Keep a separate result for each step so you can see where the journey stops.
```

Image `images/hosted-journey.png`.

Alt text: A fictional tracker journey goes from sign-in to saving a test note and reopening it, with evidence needed at each step.

```text
3/6 Before deploying, record the target, artifact IDs and who has access. Add test data, a spending cap, an expiry and the person who can approve changes. Use references for any secrets the run needs.
```

```text
4/6 Check the browser's actual API route and identity callback. Confirm the database and schema before a test write. Reopen the request so a local UI update cannot stand in for a persisted result.
```

```text
5/6 If saving fails, keep the sign-in evidence and leave persistence open. Check the first failing boundary and record the next action. Before rolling back an app, verify that the old version can use the current schema.
```

```text
6/6 Finish with a decision, an owner and an expiry for any resources left running. The guide has a five-line packet you can copy for your next hosted check. https://www.thexap.com/blog/deploy-a-bounded-environment
```

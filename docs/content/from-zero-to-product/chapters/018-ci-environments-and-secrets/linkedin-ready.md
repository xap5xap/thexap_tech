The next time a pull request turns green, pick one behavior that might have changed. Can you find the job that actually checked it?

Try it on a fictional request tracker. A help edit needs a rendered page and link check. A change to saving a status needs an isolated database and a readback. A filter change needs a browser check with both open and closed requests. A formatter can be useful across all three. It can't answer whether the status persisted.

Write one row for each change with the check, what it needs to run, and the evidence you expect. When CI finishes, compare what happened with that row. Keep skipped, filtered, missing and failed results visible. If a preview uses test data or a stubbed provider, write that down too.

Before you add another job, ask someone to find the result for one required check. They should be able to say which revision or artifact it covered and what it actually observed.

The full tutorial includes a short coverage exercise you can try on your next change. https://www.thexap.com/blog/ci-environments-and-secrets

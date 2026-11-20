# X thread

Paste one numbered text block per post. Add the figure to post 2 with the alt text below.

```text
1/6 Your pull request turned green. Find the specific job that tested the behavior you changed. If you can't find it, start with a three-row CI coverage table before you add another check.
```

```text
2/6 Take a fictional request tracker. A help edit needs a rendered page and link check. An API save change needs a readback from an isolated database. A UI filter change needs a browser test with open and closed requests.
```

Image `images/change-to-check.png`.

Alt text: For an illustrative request tracker, a help edit routes to a docs check, a save change to an isolated database, and a filter change to a browser check.

```text
3/6 Give each row a check, its prerequisites and the evidence you want to see. Add a fallback for shared or unknown paths. A changed API response may need both a service check and a browser check.
```

```text
4/6 Read the run against what you expected. A condition can skip a job or step. A path filter can exclude a workflow before it starts. A missing required result needs investigation. Record which test actually passed.
```

```text
5/6 Local can prove the save with a disposable database. Preview can check the hosted route with test settings. For release, record the artifact or build ID and verify the output that the platform actually serves.
```

```text
6/6 Before adding another CI job, ask someone to find one required result and name the revision, environment and behavior it covered. The guide walks through all three changes. [LINK-TO-BLOG]
```

# Chapter 5 thread

Paste only the text inside each numbered block. Attach the listed media and add its ALT text. The closing post contains the verified live blog URL.

## Post 1

```text
1/7 A request is saved. The confirmation disappears. The user presses Submit again.

Does your product recover the first result or create another request?

That failure is a useful starting point for an architecture decision.
```

Image: images/hero.png
ALT: A cutaway boat stays afloat with one flooded compartment and the remaining compartments dry.

## Post 2

```text
2/7 Start with what must remain true:

- Saved work survives a closed browser.
- A retry does not create another request.
- An unauthorized person cannot read it.
- Failed mail does not erase it.

Confirm these promises before choosing components.
```

## Post 3

```text
3/7 Give each fact an authority and each failure an owner.

In a fictional tracker, the database owns accepted state. The application checks access and recovers retry results. The browser shows what is known.

These jobs need boundaries, not four microservices.
```

Image: images/failure-boundaries.png
ALT: A database saves a request and notification work together; mail sending happens separately.

## Post 4

```text
4/7 If a notification must survive a crash, save its pending work with the request in one transaction. Process it separately.

That still needs duplicate handling: a sender can crash after sending but before recording success. An outbox is not exactly-once mail.
```

## Post 5

```text
5/7 Compare the same failures across designs.

One application plus a database may be enough. Managed services shift some operating work. Separate services add coordination boundaries.

Choose for confirmed requirements and operating capacity, not the diagram's size.
```

## Post 6

```text
6/7 Keep the decision inspectable:

Context. Chosen design. Accepted cost. Credible alternative. Open questions. Reconsideration trigger.

Then map one failure to an observable check. A proposed check is not proof the design works.
```

## Post 7

```text
7/7 Start with one page: a user promise, three failures, a responsibility sketch, the decision and its main cost, and a trigger to reconsider.

Chapter 5 has a worked example:
https://www.thexap.com/blog/architecture-from-failure-modes
#SoftwareArchitecture
```

No media for posts 2, 4, 5, 6 or 7.

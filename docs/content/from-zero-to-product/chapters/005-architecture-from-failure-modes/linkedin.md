A request can be saved even when the confirmation never reaches the browser.

That small failure asks a useful architecture question: who owns the accepted fact, and how does the user recover it?

For a fictional shared request tracker, I would separate these responsibilities:

Browser: collect input and show saved, pending or uncertain outcomes.
Application: check access and recover the original result when the same submission is retried.
Database: preserve the accepted request and enforce its transaction rules.
Notification task: handle mail attempts separately, so a provider outage does not erase the request.

These are responsibilities, not a requirement to create four services.

The design also has a price: background work, duplicate handling, restoration checks and temporary application unavailability still need attention.

An architecture decision is more useful when it records that price, one credible alternative, and the condition that would make you reconsider.

Chapter 5 includes the method, an illustrative decision record and checks you can adapt:
[LINK-TO-BLOG]

---
IMAGES-TO-ATTACH:
- images/failure-boundaries.png
  ALT: A database saves a request and notification work together; mail sending happens separately.
- images/hero.png
  ALT: A cutaway boat stays afloat with one flooded compartment and the remaining compartments dry.
LINK-TO-PASTE: [LINK-TO-BLOG]

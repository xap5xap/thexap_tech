# BrimScout: job brief

Captured from the authenticated Upwork listing on September 24, 2026. [Source listing](https://www.upwork.com/jobs/~022102487176980458764). [Work item](https://linear.app/thexap/issue/XAP-218/save-brimscout-job-brief-and-draft-upwork-application-in-the-repo). The September 23 version had a different title and lower rate; this brief uses the September 24 readback.

## Listing snapshot

| Field | Captured value |
| --- | --- |
| Title | Senior Full-Stack Engineer - Part-Time Production & Code Review |
| Client | Payment verified, United States; listing open worldwide |
| Posted rate | $45-$50/hour |
| Engagement | Initial 30 days, normally 10-12 hours per week |
| Monthly cap | $3,000 per calendar month, including assessment and platform fees |
| Paid assessment | 4-6 implementation hours, $180-$300 cap, with a two-hour stop rule if access is blocked, the plan is unsafe, or the change will not fit |
| Activity | 50+ proposals, three interviewing, zero invites; client last viewed two days before capture |
| Proposal cost | 26 Connects at the September 24 readback, with no boost selected |
| Client history | 4.91 across 11 reviews, $29K spent, 66% hire rate, 40 hires, 23 active; $11.74 historical average hourly rate |

The historical average is client history, not the rate offered for this listing. Activity, terms, and Connects cost are snapshots and need a fresh check before any application.

## Requested work

The client has an existing RV-park and campground SaaS using Next.js, React, TypeScript, SQLite, and Drizzle. The revised role focuses on production reliability and weekly code-review evidence. Requested areas include:

1. CI, deployment, rollback, health-check recovery, alerts, and offsite backups.
2. Database-migration boundaries and recovery planning.
3. Stripe sandbox recovery and readiness for integrations.
4. A small paid implementation assessment with explicit acceptance checks before wider production work.

The September 23 listing also named reservations, permissions, mobile interactions, Telnyx, and AI or voice integrations. The September 24 readback narrowed the initial work around production and code review; the exact integration scope still needs confirmation.

## Screening questions

1. Describe one production SaaS incident personally resolved: symptom, cause, fix, recovery proof, shareable evidence, and individual contribution.
2. Show one CI, deployment, or rollback workflow personally built or operated. Explain image versions, failed health checks, database migrations, backup restoration, and shareable evidence.
3. Confirm rate, 10-12-hour weekly capacity, New York-time overlap, earliest assessment start, personal delivery, stack gaps, and fit within the assessment and monthly caps.

The approved draft answers are in [proposal.md](proposal.md).

## Fit and evidence boundaries

- Closest private example: Xavier personally traced an unnecessary ten-minute production and staging schedule behind a Neon compute spike, removed it, and verified the deployed schedule and production database state after release. Redacted change and readback evidence can be prepared for the client.
- Related release work: exact revision and tree checks, CI and browser-test gates, database migration, API and dashboard deployment, and post-release checks.
- Public link in the cover letter: a separate Upwork testing case study. It does not prove the production incident or release workflow.
- Do not claim personal production backup restoration, failed-health recovery or rollback in that example, Docker image-tag management, production Stripe payment-event recovery, or production Telnyx, Channex, or QuickBooks operation.
- Do not expose the private client's name, repository URLs, or tenant data in application-facing material.

## Decision and application state

Xavier approved the wording of the cover letter and three screening answers. The record is **Preparing**, not Applied. The proposed rate is $50/hour; 10-12 hours per week, New York-time overlap, and Friday, September 25 as the earliest start still require Xavier's confirmation. At that rate, a 4-6-hour assessment would be $200-$300. Authorized hours and platform fees must stay within the $3,000 calendar-month cap.

The public case-study URL needs a live check. The September 24 Connects cost needs a fresh readback and Xavier's action-time authorization. No Upwork form edit, submission, boost, client message, or Connects spend is recorded for this draft.

# BrimScout: draft Upwork application

[Job brief](job-post.md). [Work item](https://linear.app/thexap/issue/XAP-218/save-brimscout-job-brief-and-draft-upwork-application-in-the-repo).

Prepared September 24, 2026 for Upwork job `~022102487176980458764`, **Senior Full-Stack Engineer - Part-Time Production & Code Review**.

**Status: draft, not submitted.** No Connects have been spent, no proposal fields have been changed, and no boost has been selected.

## Working application terms

- Rate: **$50/hour**
- Availability: **10-12 hours per week**, including agreed New York-time overlap
- Earliest assessment start: **Friday, September 25, 2026**, subject to repository, registry, isolated staging access, and a written cap
- Assessment: **4-6 paid hours at $50/hour, $200-$300 total**
- Monthly cap: accepted, with authorized hours managed to remain within the client's $3,000 calendar-month cap including platform fees
- Delivery: Xavier will personally perform the work, using AI tools only with his review and responsibility
- Boost: none
- Current proposal cost: **26 Connects**, verified September 24

The rate, weekly capacity, New York-time overlap, start date, public case-study link, and Connects spend require final confirmation immediately before submission.

## Cover letter

Hi,

I can help BrimScout make releases safer and keep the existing SaaS dependable.

Most of my client work has come through Upwork. In my last Upwork project, I traced a production database-compute spike to an unnecessary job running every ten minutes. I removed the trigger and verified that the database returned to idle. I also handled staged releases, CI checks, migrations, and post-release verification.

Would you be open to a quick call to discuss the work and see if we're a good fit?

Xavier

https://www.thexap.com/projects/upwork/cypress-nx-tests-2022

## Screening answer 1

**Describe one production incident you personally resolved in a SaaS app: symptom, cause, your fix, and how you proved recovery. Include shareable evidence and distinguish your work from the team's.**

In my last Upwork project, the production Neon database had consumed about 80% of its monthly compute allowance. I traced it to an unnecessary job running every ten minutes in production and staging, repeatedly waking the app and database.

I removed that trigger while keeping the two required daily jobs. After release, I confirmed the ten-minute schedule was gone and the production database returned to idle. I personally handled the diagnosis, change, and release verification; the client retained the release decision.

I can share a redacted configuration diff, deployed revision, schedule readback, and database-state readback without exposing the private repository or tenant data.

## Screening answer 2

**Show one CI/deployment/rollback workflow you personally built or operated. How were image versions, failed health checks, database migrations and backup restoration handled? Public or sanitized evidence is welcome.**

In my last Upwork project, I operated a staging-to-production release process. I checked the exact staging revision and required CI, unit, smoke, and browser tests before promotion. The production workflow ran the database migration, deployed the API and dashboard, then checked the live revision, database health, and HTTP response.

We identified releases by Git commit and tree IDs rather than Docker image tags. Required checks gated promotion. No failed-health recovery, rollback, or backup restoration was needed in this example, and I have not personally restored a production backup.

I can share redacted CI, migration, deployment, and post-release readbacks. For BrimScout, I would inspect its image versioning, health-check recovery, migration, rollback, and backup procedures, then rehearse the relevant recovery steps in isolated staging before recommending production changes.

## Screening answer 3

**Confirm your hourly rate, 10-12-hour weekly availability, New York-time overlap and earliest assessment availability. Will you personally perform the work? State relevant stack gaps and whether the capped assessment and monthly budget fit.**

My rate is $50/hour. I can provide 10–12 hours per week with agreed New York-time overlap and personally perform the work. I can start the paid assessment Friday, September 25, if the repository, registry, isolated staging access, and written cap are ready.

At that rate, a 4–6-hour assessment would cost $200–$300. We can agree on authorized hours that keep the calendar-month total within $3,000 after accounting for platform fees.

My closest experience is with Next.js, React, TypeScript, SaaS operations, SQL, CI, releases, migrations, and testing. I have not operated Telnyx, Channex, or QuickBooks production access, personally restored a production backup, or handled Stripe payment-event recovery. I would review those areas and BrimScout's Docker, SQLite, and Drizzle setup before changing them.

## Evidence notes

- Private release evidence available in sanitized form: configuration change, staging and production PR metadata, deployed schedule readback, Neon endpoint state, exact revision and tree identity, CI and browser-test results, production migration, and post-deploy checks
- Do not send private repository URLs or tenant data
- Do not name the client or product in application-facing copy
- Do not claim production backup restoration, Telnyx operations, Channex certification, QuickBooks production-key work, or production Stripe payment recovery
- The cover-letter link is a separate public Upwork testing case study, not evidence of the production incident. Its route exists in the site source, but the live URL could not be verified from the drafting environment.

## Submission gate

Before any Upwork form is changed or submitted, confirm all of the following:

1. Friday, September 25 is the real earliest assessment start.
2. Xavier accepts $50/hour and 10–12 hours per week with New York-time overlap.
3. The public case-study URL is live and appropriate to send.
4. Xavier authorizes spending the Connects cost displayed at submission time (26 Connects as of September 24).
5. No proposal boost is selected.
6. The exact cover letter and three answers above remain unchanged unless Xavier approves edits.

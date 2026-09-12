# Next.js real-money backend: job brief

Captured September 12, 2026 from the public listing and then the authenticated Upwork job and application pages. [Source listing](https://www.upwork.com/jobs/~022098735310542022237). [Application issue](https://linear.app/thexap/issue/XAP-124/prepare-and-submit-the-nextjs-real-money-backend-upwork-application).

**Status: Preparing.** Xavier asked to apply on September 12. Submission has not occurred.

## Terms and client

| Item | Observed detail |
| --- | --- |
| Job ID | `~022098735310542022237` |
| Title | Next.js app needs its backend built: Postgres, auth, payment integration (punctuation normalized) |
| Rate | $25-$100/hour |
| Commitment | Less than 30 hours/week, 1-3 months |
| Level and location | Expert, worldwide |
| Activity at authenticated capture | 50+ proposals, four interviewing, last viewed nine hours ago |
| Client | United States, Boston; member since November 2, 2025 |
| Verification | Payment and phone verified |
| History | Seven jobs posted, 15% hire rate, one hire, one active, $3.5K spent, zero reviews |
| Visible prior contract | US Gaming Attorney: Legal Opinion Letter for Skill-Based Competition Platform (punctuation normalized), July 2026 to present |
| Application cost | 26 Connects without boosting |
| Proposed rate shown in form | $65/hour; 10% service fee; $58.50/hour after the displayed fee |

The prior contract title provides context for the likely product category. It does not disclose the current product's exact rules or establish its legal or provider approval status. The client says the company is incorporated, counsel is engaged, compliance work is complete, and withdrawals are noncustodial. Those statements have not been independently verified.

## Existing product, as described by the client

- Next.js 16, React 19, TypeScript, Tailwind 4.
- About 16,500 lines of TypeScript, 21 routes, and 45 screens with designed settlement and dispute states.
- A separate, roughly 5,600-line TypeScript domain layer with business rules, a state machine, money calculations, and 62 automated assertions.
- In-memory data behind one repository-shaped module; demo account selection; mocked external integrations behind a transport module.
- README, developer handover, and an explicit gap inventory.
- Frontend and domain direction are settled. The client wants the existing code carried forward and does not want a redesign or broad rewrite.

These are listing claims. No codebase, provider account, or test suite has been inspected.

## Requested scope

1. Database: Postgres schema and replacement of the in-memory repository.
2. Authentication: signup, login, sessions, email verification, and password reset.
3. Money-path hardening: transactional balance changes, duplicate-request protection, and server authorization.
4. Payment processor: deposits, direct withdrawals, webhooks, and reversals.
5. Identity verification: third-party KYC and asynchronous review states.
6. Eligibility: provider-backed age/location checks at the point of use.
7. Two consumer APIs: OAuth, webhook event ingestion, rate-limited polling, and backoff.
8. Email and jobs: transactional messages, a job queue, and secured cron endpoints.
9. Admin/support: refunds, balance corrections, and an audit trail.
10. Operations: environments, hosting, CI, error monitoring, backups and restore verification, and controlled end-to-end testing with real funds before launch.

Stripe and Supabase are skill tags; the body does not name the selected payment processor or hosting provider. The exact product, consumer APIs, and provider details are to be disclosed to shortlisted candidates under NDA.

## Required proposal responses

1. Estimated hours under each of the ten scope headings.
2. Biggest technical risk and proposed handling.
3. An existing codebase Xavier took over and what he did first.
4. Recommendation among Supabase, plain Postgres, or another option, with reasons.
5. Weekly availability.

The authenticated application adds this separate screening question:

> The app's data currently lives in memory behind a single repository-shaped module. In one or two sentences, how would you approach replacing it with Postgres without changing the layers above it?

## Evidence boundary

Armonía supports PostgreSQL, authentication/permissions, OAuth/webhooks, operational workflows, and full-stack ownership. CargoEmpowered supports Next.js/AWS and the Stripe Checkout frontend/application flow. Existing records do not establish ownership of a financial ledger, payout backend, payment reversals, or KYC integration. A specific inherited-code example and first action still need Xavier's confirmation.

See the [proposal draft](proposal.md) for provisional estimates, assumptions, and the submission record.

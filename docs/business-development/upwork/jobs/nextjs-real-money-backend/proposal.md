# Next.js real-money backend: application draft

Updated September 12, 2026. [Job brief](job-post.md). [XAP-124](https://linear.app/thexap/issue/XAP-124/prepare-and-submit-the-nextjs-real-money-backend-upwork-application).

**Status: incomplete draft, not submitted.** Xavier asked to apply. Weekly availability and a truthful inherited-code example remain unconfirmed. The proposed rate is $65/hour, matching the live profile and application default. The form requires 26 Connects without boosting; no Connects have been spent.

## Cover letter

Hi,

I can help you connect your existing Next.js product to a production backend, starting with a focused review of the code, settlement flows, and provider integrations.

For Armonía, I led the product work and full-stack development of an operational app the practice owner uses as her primary system. I built the PostgreSQL data model, authentication and permissions, reporting, and Google Calendar integration. On CargoEmpowered, I worked on the Next.js/AWS application and Stripe Checkout flow, including redirects, payment-status handling, and success/failure paths.

1. Hours estimate

These are initial planning ranges, subject to reviewing the code and provider documentation:

- Database: 40-60 hours
- Authentication: 24-40 hours
- Money-path hardening: 64-100 hours
- Payment processor integration: 48-80 hours
- Identity verification: 20-32 hours
- Eligibility checks: 20-32 hours
- Two consumer API integrations: 48-80 hours
- Transactional email and scheduled jobs: 24-40 hours
- Admin and support tooling: 32-48 hours
- Deployment and operations: 48-72 hours

Total: 368-584 hours, plus an initial 16-24-hour paid code review. That review would validate the existing tests, trace a complete money flow, check provider access, and produce a phased estimate. These ranges include implementation and verification, assuming usable provider APIs and targeted changes to the existing product. At under 30 hours a week, the full scope could exceed three months; we should agree on a phased launch after the review.

2. Biggest technical risk

Keeping balances and payouts correct when requests overlap, webhooks repeat, or a provider succeeds while our request times out. I would use an auditable ledger, transactional balance updates, duplicate-request protection, and durable tracking of external operations, then test concurrency, reversals, and recovery. Reconciliation with the processor would catch mismatches that local tests alone cannot.

3. Taking over an existing codebase

[Pending Xavier's confirmed project example, personal contribution, and first action.]

4. Database recommendation

I'd start with managed PostgreSQL and Clerk for authentication, which fits the stack I've shipped and keeps your TypeScript domain and repository boundary intact. Supabase is also a viable option with a full Postgres database and integrated auth. Either way, money operations would stay behind authorized server code with explicit transactions; I would finalize the provider after reviewing the code and operational requirements.

5. Weekly availability

[Pending Xavier's confirmed hours per week and start date.]

Would you be open to a quick call to discuss the work and see if we're a good fit?

Xavier

https://www.thexap.com/projects/armonia

## Separate screening answer

I would capture the repository contract in tests, implement a Postgres adapter with migrations, and run the same tests against both stores to preserve the behavior the layers above depend on. I would keep multi-step balance changes in one transaction behind that boundary and flag any synchronous methods that need to become async before calling it a drop-in replacement.

## Internal notes, omit from the application

### Estimate basis

These are assistant-prepared planning ranges, not inspected-code estimates, agreed hours, a fixed quote, or a delivery promise. Xavier has not yet reviewed the amounts.

- Each work area includes its focused implementation and tests. The money-path row owns ledger/concurrency invariants; the processor row owns provider protocol and reconciliation. Operations owns cross-system acceptance, deployment, and restore exercises.
- Database scope assumes a new production database, no production data migration, and a usable repository boundary.
- Authentication assumes a managed service. It includes server-side identity integration; financial-action authorization is also reviewed in the money-path work.
- Payment scope assumes one approved processor with documented deposit, payout, reversal, and reconciliation APIs. It does not assume Stripe from the skill tag.
- KYC and eligibility each assume one provider and client-supplied product/jurisdiction rules. Provider onboarding or policy approval delays are not engineering hours and may extend elapsed time.
- API scope assumes two accessible providers, correct permissions, supported webhook/polling behavior, and no need for an unsupported workaround.
- Admin scope assumes existing screens can be reused; balance corrections should create traceable adjustments instead of erasing financial history.
- Operations assumes managed hosting, separate environments, a tested restore, monitoring, and client/provider-approved controlled funds tests. The proposal does not authorize the assistant to conduct any real-money test.
- Existing domain behavior is preserved where correct. Material defects, missing workflows, provider changes, or a broad rewrite require revised scope and agreement.
- Hosting/provider subscriptions, transaction fees, legal work, independent specialist review, and ongoing support after launch are separate. Any needed specialist review should be identified during discovery.
- Total including initial review: 384-608 hours. At the proposed $65/hour, the illustrative labor range is $24,960-$39,520. Review alone is $1,040-$1,560. These amounts are not submitted commitments.

### Experience sources

- [Approved existing-SaaS cover letter](../existing-saas-technical-ownership/proposal.md): Armonía's PostgreSQL/Clerk work and CargoEmpowered's Next.js/AWS and Stripe Checkout application flow.
- [BuildPrint screening records](../buildprint/proposal.md): OAuth/webhook and tenancy evidence, with source pointers and explicit limits.
- Do not present CargoEmpowered as ownership of the Stripe service, webhooks, subscriptions, financial ledger, or payouts.
- Do not invent the order in which Xavier joined or investigated a client codebase. The inherited-code response remains incomplete until he supplies that history.
- Do not imply prior production Supabase delivery. It is an option in the proposed architecture, not an experience claim.

### Technical references

Checked September 12, 2026. These support the proposed approach, not claims about inspected client code:

- [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html): transaction isolation, concurrent updates, and retry requirements.
- [Supabase database overview](https://supabase.com/docs/guides/database/overview): full Postgres database and managed database capabilities.
- [Supabase Auth](https://supabase.com/docs/guides/auth): managed authentication and database-policy integration.
- [Supabase changelog](https://supabase.com/changelog): checked current changes; the markdown endpoint failed, so the HTML changelog was read. No Supabase implementation is being performed.

### Submission record

| Item | Status |
| --- | --- |
| User intent | Asked to apply September 12, 2026 |
| Job and form | Read in authenticated Chrome |
| Cover letter | Draft with two unresolved personal details |
| Separate screening answer | Entered in the Chrome application form, not submitted |
| Rate | Proposed $65/hour; live profile/form default matches |
| Service fee shown | 10%; $58.50/hour after fee |
| Connects | 26 required; no boost; no spending yet |
| Submission | Not submitted |

### Verification

- Draft reviewed against the authenticated listing and separate screening question.
- All ten estimate rows sum to 368-584 hours; adding review gives 384-608 hours.
- Cover-letter draft is 2,759 characters before resolving its two personal-detail placeholders.
- `npm run lint` passed with the existing `Value.tsx` image warning.
- `npm run build` passed and generated 52 pages.
- `git diff --check` and draft whitespace checks passed; the repository-wide U+2014 scan returned no matches.
- The legacy Jest script was not run; this repository has no configured first-party test suite.
- Initial draft verified on `codex/xap-124-nextjs-backend-application`.

### Repository delivery

On September 12, Xavier asked to commit all saved work, merge to `main`, and leave the checkout on `main`. This saves the incomplete application draft; it does not supply the missing personal details or establish submission. Git delivery evidence is recorded in XAP-124.

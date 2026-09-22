# Social media AI agent platform: proof-gap reference

Captured September 22, 2026. [Source listing](https://www.upwork.com/jobs/~022102458229293359010). Related program: [XAP-122](https://linear.app/thexap/issue/XAP-122/program-strengthen-upwork-profile-discovery-and-proof).

Status: Xavier accepted the pass recommendation and asked to preserve the listing as a reference for a future portfolio example. No application was prepared or submitted, and no Connects were spent. This record does not select or authorize a build.

## Listing snapshot

| Field | Captured value |
| --- | --- |
| Title | Senior Full-Stack AI Engineer for Social Media Platform |
| Posted | About three hours before the authenticated capture |
| Eligibility | Worldwide |
| Client | United States, Fort Myers; payment verified |
| Engagement | Hourly, more than 30 hours per week, one to three months |
| Experience level | Expert |
| Project type | Ongoing project |
| Posted rate | $70 to $120 per hour |
| Activity | More than 50 proposals, 0 interviewing, no invites sent |
| Client activity | Last viewed about 14 minutes before capture |
| Proposal cost | 27 Connects without a boost |
| Bid range | $10 low, $62.43 average, $160 high |
| Client history | 18 jobs posted, 50% hire rate, 15 hires, 7 active, $28K spent, 3,582 hours, $7.27 average hourly rate paid, 5.00 from 6 reviews |

The bid range describes applicant behavior, not the client's budget. The posted rate was much higher than the client's visible historical rates. Current hourly contracts included customer-support work at $5.50, $6, and $10 per hour and graphic-design work at $20 per hour. That mismatch was a commercial risk, not proof that the client would refuse the posted rate.

## Requested product

The client wants a production-ready, multi-brand social-media platform that can:

1. Research trends and develop content ideas.
2. Generate hooks, scripts, and captions.
3. Repurpose approved content for other formats.
4. Keep each brand's context, prompts, assets, and generated content separate.
5. Require human review and approval.
6. Integrate with social platforms and several model providers.
7. Use performance data to improve future content work.

The brief asks for a maintainable architecture and a long-term operating system, not a prompt-only demonstration.

## Screening gates

The application questions reveal the proof the buyer expects:

1. A personally built, technically similar AI product, with architecture, exact contribution, and current production status.
2. A concrete isolation design that prevents cross-brand data, prompt, asset, or output leakage.
3. A provider-independent LLM layer that can support OpenAI, Claude, and other providers without rebuilding the application.
4. Product judgment about which behavior belongs in deterministic software and which behavior benefits from AI or agents.
5. A precise, testable outcome for an initial 20 paid hours.

## Fit decision

The listing passed the United States and payment-verification eligibility gates. Xavier's full-stack delivery, product ownership, API work, approval workflows, testing, and architecture judgment are relevant.

The decisive gap is comparable production-AI evidence. The current approved record does not establish a customer-facing production agent platform, multi-provider LLM runtime, AI evaluation system, or sustained AI operation. With more than 50 proposals and a first question that explicitly tests similar production experience, a theory-led application would not be a strong use of 27 Connects.

The client-rate history, crowded applicant pool, and unconfirmed availability for more than 30 hours per week reinforced the pass decision.

## Candidate example direction

This listing is useful evidence for a future **multi-brand content workflow vertical slice**. It is a candidate proof direction, not a selected product.

The narrow example would use two fictional brands and one complete content journey:

1. Create two isolated brand workspaces with separate context, assets, rules, and source material.
2. Turn a bounded source pack and trend notes into content ideas.
3. Generate hooks, captions, and a short script through a provider-independent interface.
4. Let a human accept, edit, reject, or request another version.
5. Repurpose only approved content into one additional format.
6. Import seeded performance observations and show a deterministic comparison for the next brief.
7. Export an approved package without publishing to a real social account.

The first 20-hour spike should prove only the riskiest system behavior:

- two-brand authorization and storage isolation;
- one generation and approval workflow;
- a provider adapter with deterministic test doubles and a documented second-provider path;
- versioned prompts, model settings, outputs, and human decisions;
- a small evaluation report and recorded handoff.

Trend crawling, autonomous publishing, broad social-platform integrations, billing, team administration, and performance optimization should remain outside the first spike.

## Evidence the example should earn

- Server-side authorization tests that attempt cross-brand reads and writes.
- Storage and query rules that always require the active brand identifier.
- An evaluation set covering brand leakage, unsupported claims, voice drift, and instruction conflicts.
- Two real provider adapters behind one contract, with provider switching that does not change the surrounding product workflow and deterministic test doubles for verification.
- Retry and idempotency checks that prevent duplicate generations or approvals.
- Human approval as an enforced state transition, not a visual convention.
- Per-run latency, token usage, cost, provider, model, and prompt-version records.
- Failure demonstrations for provider timeout, malformed output, and interrupted processing.
- A concise architecture and operating guide that explains secrets, retention, deletion, and recovery boundaries.

Authorization, brand isolation, approval, publication, retries, billing, retention, and deletion should remain deterministic. AI can propose, transform, summarize bounded research, and generate variants. It should not decide tenant boundaries, approve its own output, publish autonomously, or rewrite its operating controls.

## Evidence ceiling

A working concept could establish implemented architecture, tested behavior, product judgment, and an evaluation method. It would not establish client adoption, production scale, sustained reliability, social-platform performance, increased engagement, or a successful multi-brand business. Those claims require later operating evidence.

Future selection should compare this direction with the current approved portfolio-project research and Xavier's available effort. One attractive job post is a demand signal, not sufficient reason to start a large platform.

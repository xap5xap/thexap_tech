# Upwork opportunity tracker

Updated September 24, 2026. This tracker records decisions, application status, and bounded attribution state. The dated research reports remain the source for the original market capture and ranking. Follow the [Upwork writing style](README.md) for every draft.

## Status guide

| Status | Meaning |
| --- | --- |
| Researched | Captured and reviewed, with no application decision yet |
| Shortlisted | Worth checking again before investing in a proposal |
| Preparing | Proposal work is in progress |
| Applied | Xavier has confirmed that the application was submitted |
| Interviewing | The client has started a conversation or interview |
| Hired | A contract was awarded |
| Passed | Xavier decided not to apply |
| Closed | The listing is unavailable or the opportunity ended |

Do not infer an application or outcome from a draft. Change `Applied`, `Interviewing`, `Hired`, or `Passed` only from Xavier's confirmation or a verified Upwork readback.

Attribution is independent of application status:

- `Not distributed`: no confirmed proposal send uses an alias.
- `Historical unknown`: the application predates the tagged-link workflow or the exact sent links were not verified.
- `Distributed privately`: a confirmed send and its alias mapping exist in verified private custody. Do not put the alias-to-job mapping in this repository.

A reserved alias stays `Not distributed`. An observed analytics alias cannot change a row to Applied, Interviewing, or Hired.

## Current opportunities

| Rank | Opportunity | Upwork job ID | Status | Attribution | Latest action | Saved material |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BuildPrint SaaS beta | `~022097084188898847661` | Applied | Historical unknown | Authenticated Upwork readback on September 21 says a proposal was submitted; the submission date and exact sent links remain unverified | [Job brief](jobs/buildprint/job-post.md), [proposal](jobs/buildprint/proposal.md) |
| 2 | Asset & Service History PWA | `~022092570052512761530` | Applied | Historical unknown | Authenticated September 23 readback keeps the listing open; the one-job client profile now shows one hire and one active contract, but nothing identifies Xavier as the hire | [Job brief](jobs/asset-service-history-pwa/job-post.md), [proposal](jobs/asset-service-history-pwa/proposal.md) |
| 3 | Existing SaaS technical ownership | `~022096935944376628276` | Applied | Historical unknown | Authenticated September 23 readback keeps the Spain-based listing open with four hires and two interviewing; only Stas B. at fixed $105 and Oleh H. at $25/hour are attributable | [Job brief](jobs/existing-saas-technical-ownership/job-post.md), [proposal](jobs/existing-saas-technical-ownership/proposal.md) |
| 4 | Technical Product Manager, SaaS | `~022087883401522996504` | Applied | Historical unknown | Authenticated Upwork readback on September 21 says a proposal was submitted; this conflicts with Xavier's September 10 pass decision and needs review | [Job brief](jobs/technical-product-manager-saas/job-post.md), [proposal](jobs/technical-product-manager-saas/proposal.md) |
| 5 | KINSTALL B2B SaaS | `~022088299779008397024` | Closed | Not distributed | Authenticated direct page on September 21 says the job is no longer available | [Research report](2026-09-09-ai-product-execution-demand.md) |
| Unranked | Next.js/PostgreSQL existing-app takeover | `~022101688790698155395` | Applied | Historical unknown | Authenticated September 23 readback keeps the listing open; job-level interviewing decreased from 5 to 4, but no Xavier-specific interview was inferred | [Direct listing](https://www.upwork.com/jobs/~022101688790698155395) |
| Unranked | Secret World map marketplace | `~022100839223652532326` | Closed | Historical unknown | Authenticated direct page on September 21 says the listing is no longer available; no interview or hire outcome was inferred | [Job brief](jobs/secret-world-map-marketplace/job-post.md), [proposal](jobs/secret-world-map-marketplace/proposal.md) |
| Unranked | Research-administration SaaS reliability takeover | `~022102405643575634652` | Shortlisted | Not distributed | New September 22 match; consider only a fixed first milestone capped at 20 hours and confirm the Cloudflare-fetch and LLM proof gaps before proposal work | [Direct listing](https://www.upwork.com/jobs/~022102405643575634652) |
| Unranked | Travel web app launch and product consulting | `~022102257805844849603` | Shortlisted | Not distributed | New September 22 complete-cycle match; proceed only if the paid review is separately bounded and Xavier can truthfully show a launched paid-subscription SaaS | [Direct listing](https://www.upwork.com/jobs/~022102257805844849603) |
| Unranked | Senior Full-Stack Engineer, BrimScout | `~022102487176980458764` | Preparing | Not distributed | Xavier approved the draft wording September 24. Revised listing offers $45-$50/hour, a capped paid assessment, and an initial 30-day engagement; rate, capacity, start date, link, and Connects spend still need confirmation. No submission is recorded | [Job brief](jobs/brimscout/job-post.md), [proposal](jobs/brimscout/proposal.md) |
| Unranked | Multi-brand social media AI platform | `~022102458229293359010` | Passed | Not distributed | Xavier accepted the pass recommendation September 22; saved as a future production-AI proof reference | [Job brief and candidate example](jobs/social-media-ai-agent-platform/job-post.md) |

## Daily research workflow

A daily Codex task runs at 9:00 AM in Xavier's local time. It stays quiet when there are no strong new matches or meaningful status changes.

1. Search the newest Upwork listings using the query families in the dated research report.
2. Deduplicate by Upwork job ID and recheck availability, location, compensation, client activity, competition, and mandatory proof.
3. Add strong matches here and keep the detailed evidence in a dated daily research note.
4. Record Xavier's application or pass decision without changing the historical research capture.
5. Keep Upwork research read-only unless Xavier separately asks to prepare or submit an application.

## Research archive

- [September 9 demand research and five-opportunity ranking](2026-09-09-ai-product-execution-demand.md)
- [September 11 daily research](daily/2026-09-11.md)
- [September 21 daily research](daily/2026-09-21.md)
- [September 22 daily research](daily/2026-09-22.md)
- [September 23 daily research](daily/2026-09-23.md)
- [Daily research notes](daily/README.md)

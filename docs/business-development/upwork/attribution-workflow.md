# Upwork proposal link attribution

Issue: XAP-202
Contract: `docs/analytics/measurement-plan.md` version 1.0.0

## Custody decision

This Git repository is not suitable custody for a new alias-to-opportunity mapping. The current workspace does not provide a verifiable private record location that this run can safely write. Therefore:

- the builder, validator, ledger states, and unassigned synthetic examples live here;
- no real proposal alias or alias-to-job mapping was created in this run; and
- a future real mapping must be created only in verified private business-development custody.

This does not block preparation of the public-safe workflow. It prevents a public Git record from becoming a lookup table for private opportunity data.

## Build and validate a link

The builder accepts the canonical HTTPS host, a supported public destination, a monthly cohort, and an opaque alias. It derives `utm_content` from the destination and never accepts a client name, job ID, email, proposal copy, or arbitrary query value.

```text
npm run url:upwork -- build --url https://www.thexap.com/projects/armonia --month 2026-09 --alias p7k2m4q
```

Synthetic, unassigned output:

```text
https://www.thexap.com/projects/armonia?utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=armonia_link
```

Validate a complete URL before copying it into a proposal draft:

```text
npm run url:upwork -- validate --url 'https://www.thexap.com/projects/armonia?utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=armonia_link'
```

Quote URLs in a shell so `&` is not interpreted. Store examples in fenced literal code, not Markdown links.

Supported destinations are the homepage, projects index, Armonía case study, and a currently published engagement route. Supported public section hashes are preserved. Existing campaign parameters are accepted only when every existing value exactly matches the requested campaign; duplicates, foreign/apex/insecure origins, credentials, arbitrary query keys, unpublished engagement slugs, unsupported hashes, and malformed aliases are rejected.

## Private attribution record

Reservation is optional and does not establish distribution. A real record in verified private custody needs these fields:

```text
private_opportunity_reference: <private reference, never sent to GA4>
alias: pxxxxxx
cohort: proposal_YYYY_MM
state: reserved | distributed
reserved_at: <timestamp and zone>
distributed_at: <confirmed timestamp and zone, only after send>
exact_links_sent:
  - <literal tagged URL actually sent>
confirmation_source: <Xavier confirmation or verified Upwork readback>
actual_connect_cost: <confirmed integer or unknown>
outcomes:
  reply: <unknown or dated evidence>
  interview: <unknown or dated evidence>
  hire: <unknown or dated evidence>
```

Do not record a planned rate, draft link, displayed application cost, or open form as an actual send or cost. Replies, interviews, and hires require their own dated evidence. Do not copy the private opportunity reference into a URL or use the alias as `user_id`.

## GA4 reporting scope

The campaign keys map to native compatible session dimensions:

| URL value | Native GA4 dimension |
| --- | --- |
| `utm_source=upwork` | Session manual source |
| `utm_medium=referral` | Session manual medium |
| `utm_campaign=proposal_YYYY_MM` | Session manual campaign name |
| `utm_id=pxxxxxx` | Session manual campaign ID |
| `utm_content=<bounded destination>` | Session manual ad content |

The site keeps only valid campaign values still present on the current URL when consent is granted. It does not persist pre-consent attribution, copy UTMs to internal navigation, or overwrite acquisition on every event.

For a cohort, the observable proposal-visit rate is unique distributed aliases with at least one eligible session divided by confirmed distributed aliases in that cohort. It is not a proposal-read rate, application-success rate, or named-client visit rate.

Forwarded links, link previews and scanners, founder QA clicks, blockers, rejected or withdrawn consent, missing referrers, navigation before consent, and cross-device visits all limit inference. GA4 activity cannot prove that Upwork or a particular client viewed a proposal. No event can promote a tracker row to Applied, Interviewing, or Hired.

## Existing records

The two current Applied rows predate this workflow. Their saved proposal files contain plain site links, but the exact submitted links were not independently read back. They remain `Historical unknown`, not zero-result tagged sends. Preparing, Passed, and Shortlisted rows remain `Not distributed`. No application, proposal field, boost, Connect balance, or Upwork account setting was changed for XAP-202.

## Synthetic redirect evidence

On September 20, 2026, a read-only request to the apex host with the unassigned alias `p7k2m4q` returned HTTP 308 to the exact `https://www.thexap.com/projects` URL with all five campaign values unchanged. Following the redirect returned HTTP 200 at that exact tagged canonical URL. URL fragments are browser-only and are not transmitted in an HTTP request; supported hashes are covered by the builder tests.

This verifies the current host redirect, not GA4 acquisition or a real proposal distribution. The synthetic alias is not assigned to an opportunity and must never be interpreted as one.

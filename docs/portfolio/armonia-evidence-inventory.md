# Armonía case-study evidence inventory

## Purpose

This inventory supports the production Armonía case study under XAP-49. It records the boundary between publishable claims, privately verified evidence, illustrative material, and excluded material.

The repository contains only public-safe summaries. Raw interviews, clinical information, patient records, credentials, and private analytics remain outside this repository.

## Product boundary

Armonía is presented as one practice-level product system with two separate technical products:

- the public site supports discovery, trust, content, cinematic storytelling, and a WhatsApp contact path;
- the private application supports Carla's practice operations and reporting;
- appointment coordination currently remains human through WhatsApp;
- no automated integration between the public site, WhatsApp, and the private application is claimed.

AI assisted the research synthesis and parts of the product-production workflow. Carla remained the domain expert and final decision-maker. The operating application is not presented as an AI product.

## Claim and evidence ledger

| Publishable claim                                                                       | Evidence state                  | Source boundary                                                                                      | Public-use boundary                                                                                |
| --------------------------------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Carla uses the private application as her primary operating system.                     | Verified outcome                | Practice-owner operational confirmation, privately verified on 2026-09-01                            | Current use by Carla only. Do not imply patient adoption, revenue, conversion, or business impact. |
| The former Google Sheet is archive-only.                                                | Verified outcome                | Practice-owner operational confirmation, privately verified on 2026-09-01                            | Applies to the previous operational Sheet after adoption of the application.                       |
| The growing monthly Sheet made business analysis difficult.                             | Observed research finding       | Private discovery archive and before-state documentation                                             | Publish only the safe summary. Do not publish the Sheet, row values, or clinical detail.           |
| Prospective patients currently contact Carla through WhatsApp.                          | Observed current behavior       | Public website and current operational confirmation                                                  | Describe this as a human contact and appointment-coordination path, not automated booking.         |
| Xavier led discovery, strategy, brand, UX, engineering, film, launch, and distribution. | Observed contribution           | Research, validation, code, public-product, and launch artifacts across the two Armonía repositories | Keep Carla's domain, validation, and final-decision role explicit.                                 |
| Carla participated in validation and made the final decisions.                          | Observed collaboration boundary | Private engineering-process and validation documentation                                             | Publish the role boundary without exposing raw interviews or private feedback.                     |
| The public site and cinematic journey are live.                                         | Observed public artifact        | Cinematic hero on the public Armonía homepage                                                        | Availability supports a product and launch claim, not a reach or conversion claim.                 |
| A production private application exists with operational and reporting workflows.       | Observed product artifact       | Private application repository and public login surface                                              | Show no authenticated production data, patient details, or private analytics.                      |
| Product decisions were traceable from research through validation and implementation.   | Observed process artifact       | Private engineering-process documentation                                                            | Describe the workflow, not the raw research content.                                               |

## Asset ledger

| Asset                        | Evidence state | Permission | Use and disclosure                                                                                                                                              |
| ---------------------------- | -------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cinematic journey film frame | Observed       | Owned      | Primary case-study visual. It contains no patient or practice-operational data.                                                                                 |
| Monthly reporting prototype  | Illustrative   | Owned      | May be shown only with the visible statement that it is an illustrative validation prototype using seeded data. The production workflow is verified separately. |

The analytics prototype is used instead of an authenticated production screenshot. It demonstrates the reporting direction without exposing patient identities, private figures, or production records.

## Deliberately excluded

- public testimonials;
- raw interviews and transcripts;
- patient names, contact details, session details, and clinical information;
- authenticated production screenshots containing live records;
- credentials, tokens, internal URLs, or environment values;
- private business metrics and unsourced performance claims;
- claims of automated appointment booking or cross-product data transfer;
- claims that the operating application is an AI system.

## Approval and publication gate

- [x] Xavier confirmed the current operating status and Google Sheet boundary.
- [x] Xavier authorized the use of a sanitized analytics or reporting screen and excluded testimonials.
- [x] Selected assets contain no visible patient information.
- [x] Illustrative data is labeled at the point of use.
- [ ] Carla approves the final narrative, ownership boundary, claims, and selected assets.
- [ ] Final route verification passes before repository delivery.

XAP-49 can close after the approved, verified work is merged and pushed to `develop`, with the remote branch read back and delivery evidence recorded in Linear. Production release remains a separate step and does not keep XAP-49 open.

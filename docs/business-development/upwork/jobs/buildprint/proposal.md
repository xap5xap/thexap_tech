# BuildPrint: proposal in progress

Updated September 10, 2026. [Job brief and questions](job-post.md). [XAP-114](https://linear.app/thexap/issue/XAP-114/prepare-the-buildprint-upwork-proposal).

**Status: draft, not submitted.** Questions 1-3 and screening answers 1, 3, 4, and 5 are approved. Screening answer 2 has an expanded draft for review, incorporating Xavier's confirmed AWS technologies. Questions 4-9 remain in the proposal draft. Prices, availability, and the complete application have not been finalized.

Copy from these sections: [Cover letter](#cover-letter) and [Application screening answers](#application-screening-answers).

## Writing style

Sound like a thoughtful friend helping someone bring an idea to life. Be warm, candid, simple, and direct. Keep each answer short. Avoid jargon, sales language, repetitive explanations, and em dashes. Incorporate Xavier's feedback. After approving questions 1-3 individually, he asked for the remaining answers together.

## Cover letter

Full text entered in the Upwork cover-letter field for Xavier's review. The first sentence is required by the job post. This is an unsubmitted draft.

I understand that Build•Print is an operating system, not a replacement for construction-management software.

I’d enjoy helping you turn your methods into software that operators can actually use. Having Tiny Homes of Tucson as the first operator gives us a practical place to start.

I’d review your materials with you, map the key workflows, and build a simple prototype for them to try. Their feedback would help us agree on the Beta scope before building it in small steps.

I’d use Next.js, TypeScript, PostgreSQL, and Node.js. These are widely supported tools that make maintenance and handover easier. BuildPrint would keep its own data and workflows, with separate connectors for JobTread, GHL, and QBO. Each company would have its own records, permissions, and integration connections, with isolation enforced in the app and database.

For the Beta, I’d focus on tasks, approvals, resources, basic certification tracking, Local Cost Conversion, and essential integration flows. I’d defer the AI assistant, advanced analytics, full learning platform, billing, and additional integrations.

Through Upwork, I’ve worked on applications with multi-company requirements, including a project using AWS services. With Armonía, I led discovery, design, and development of an operational app, including Clerk and Google Calendar integrations. The practice owner helped shape the decisions and now uses it as her main system.

You’d work directly with me. I’d handle planning, development, testing, and communication, using AI tools with my own review and responsibility.

For discovery, I’d allow 32-40 hours, or $2,080-$2,600 at $65/hour, covering the architecture, integration plan, clickable prototype, and Beta estimate.

My preliminary range for the focused Beta is 400-600 hours, or $26,000-$39,000, plus discovery. At 25 hours a week, that’s about four to six months. If three months is the priority, we’d agree on a smaller first release during discovery.

You can see my Armonía case study here: https://www.thexap.com/projects/armonia

Xavier

## 1. How would you approach this Beta?

**Approved by Xavier on September 10, 2026.**

I’d review your materials with you, map the key workflows, and build a simple prototype for Tiny Homes of Tucson to try. We’d use their feedback to agree on the Beta scope, then build and test it in small steps.

## 2. What technology stack would you recommend and why?

**Approved by Xavier on September 10, 2026.**

I’d use Next.js and TypeScript to build the app, PostgreSQL to organize company data and workflows, and Node.js for integrations. These are widely supported tools that make maintenance and handover easier. Managed hosting would help keep server maintenance down.

Internal reference note: this is a preliminary engineering recommendation, not a finalized architecture or provider selection. References checked September 10: [Next.js documentation](https://nextjs.org/docs), [PostgreSQL overview](https://www.postgresql.org/about/), and [Node.js overview](https://nodejs.org/en/about). Omit this internal note from the application.

## 3. How would you make the architecture software-agnostic while still supporting preferred integrations?

**Approved by Xavier on September 10, 2026.**

I’d keep BuildPrint’s workflows and core data in its own system, with a separate connector for each tool, starting with JobTread, GHL, and QBO. Each connector would translate data between the two systems. That way, we can support other tools later without rebuilding BuildPrint.

## 4. How would you structure the multi-tenant data model?

**Draft, awaiting Xavier's feedback.**

I’d give each company its own records, settings, and integration connections. Users would join companies through memberships, with roles controlling what they can do. Shared BuildPrint templates would stay separate from each company’s work. I’d enforce company boundaries in both the app and database and test for cross-company access.

## 5. What would you build in Beta versus defer?

**Draft, awaiting Xavier's feedback.**

I’d focus on what Tiny Homes of Tucson needs to complete the program: tasks, approvals, resources, basic certification tracking, Local Cost Conversion, and the essential integration flows. I’d keep model and jurisdiction records simple, and defer the AI assistant, advanced analytics, full learning platform, billing, and extra integrations.

## 6. What similar SaaS/API/integration projects have you personally built?

**Draft, awaiting Xavier's feedback.**

Through Upwork, I’ve worked on applications with multi-company requirements, including a project using AWS services. Armonía is another relevant example: I led discovery, design, and development of an operational app, including Clerk and Google Calendar integrations. The practice owner guided the business decisions and now uses it as her primary system.

## 7. Who specifically would perform the work?

**Draft, awaiting Xavier's feedback.**

I’d handle the work myself, from planning and development to testing and communication. I use AI tools to help with delivery, and I review and take responsibility for the result. You’d work directly with me.

## 8. What would you estimate for the paid discovery/architecture phase?

**Draft estimate for review, using $65/hour as a working assumption.**

I’d allow 32-40 hours, or $2,080-$2,600 at $65/hour. That covers reviewing your materials, mapping the core workflows, architecture, an integration plan, a clickable prototype, and the Beta estimate. We’d agree on the outputs before starting.

## 9. What preliminary range would you expect for the functional Beta?

**Draft estimate for review, not a fixed quote. See the assumptions below.**

For the focused Beta above, I’d allow 400-600 hours, or $26,000-$39,000 at $65/hour, plus discovery. At 25 hours a week, that’s about four to six months. If a three-month launch is the priority, we’d need to agree on a smaller first release during discovery.

## Application screening answers

**Answers 1, 4, and 5 retain their approved wording. Answer 3 has revised wording approved by Xavier. Answer 2 is an expanded draft for review.** The earlier versions of answers 2 and 3 are preserved in the internal notes. These answers use Xavier's confirmation of prior Upwork multi-tenancy work and AWS technologies, Armonía's inspected implementation, and the approved case study. Prior clients remain unnamed. No historical user or company counts have been supplied for the AWS example.

### 1. Describe one multi-tenant SaaS application you personally architected or built. What was your role, what technology stack did you use, and approximately how many users/organizations did it support?

I’ve worked on multi-tenant applications for Upwork clients, including a project using AWS services. In Armonía, I led the architecture and development with React, TypeScript, Hono, PostgreSQL, and Clerk. It has a multi-tenant data model, with one practice currently using it and the owner relying on it as her main system.

### 2. Describe an application where you integrated multiple third-party platforms through APIs, OAuth and/or webhooks. Which platforms did you integrate, and what were the biggest technical challenges?

In Armonía, I integrated Clerk for authentication and organization access, and Google Calendar for appointment syncing through OAuth and webhooks. The app uses React and TypeScript, with a Node.js/Hono backend and PostgreSQL. The main challenges were keeping each practice’s data separate, handling repeated webhook notifications, and recovering from failed syncs.

On another Upwork project, I worked with Next.js and AWS. I used Cognito for authentication, API Gateway to expose the backend APIs, and Lambda to run backend functions. I also used CDK to define and deploy the AWS infrastructure in code.

### 3. For Build•Print, would you recommend building the Beta with traditional custom code, a low-code platform, or a hybrid approach? Explain why.

I’d use custom code for BuildPrint’s business logic, supported by proven libraries and services like Clerk and AWS. We can use existing tools for authentication, storage, and hosting, then focus our development on your workflows, pricing rules, and operator experience. That helps us move faster without reinventing things that already work.

### 4. How would you design Build•Print so JobTread/GHL/QBO can be the initial integrations without making the application dependent on those platforms?

I’d use BuildPrint’s own records and IDs, then map each platform’s data through a separate connector. We’d agree which system owns each piece of information. Failed syncs would be visible and retryable, and changing a provider would mainly affect its connector.

### 5. After reviewing this posting, what do you believe is the single greatest technical or product risk in this Beta?

The biggest risk is trying to build all ten modules before we know what the first operator actually needs. I’d use discovery and the prototype to agree on one complete, useful workflow, then build around that. It gives us a clearer scope and earlier feedback.

## Internal review notes

These notes are for Xavier and must be omitted from the application.

### Evidence and wording

- [Approved Armonía case source](../../../../../src/content/portfolio/caseStudies/armonia.ts) and [evidence inventory](../../../../portfolio/armonia-evidence-inventory.md): establish Xavier's product and engineering ownership, Carla's decision role, the stack, and the September 1 confirmation that the app became her primary system. That adoption statement is a dated owner confirmation, not a new check of production usage.
- Armonía implementation inspected read-only on September 10: `apps/patients-api/src/services/tenant.ts`, `packages/db/drizzle/0003_multi_tenant_rls_policies.sql`, and `product/docs/build-decisions/bucket-04-auth-tenant-source.md`, under `/Users/xavierperez/ClaudeProjects/armonia/Armonia`. These support the tenant model, Clerk organization mapping, and database policies. They do not establish a large customer population or current production isolation results.
- Integration implementation inspected in that same repository: `apps/patients-api/src/routes/clerk-webhooks.ts`, `apps/patients-api/src/routes/google-calendar-connection.ts`, and `apps/patients-api/src/routes/google-calendar-webhooks.ts`. They support the implementation examples and the challenges described. No claim of incident-free operation, finished production Calendar repairs, or prior JobTread/GHL/QBO delivery is made.
- Xavier confirmed on September 10 that most of his client projects were through Upwork, that multi-tenancy was a recurring requirement, and that one relevant project used AWS technologies and services. He later named Next.js, Amazon Cognito, Amazon API Gateway, AWS CDK, and AWS Lambda for that project. Keep the client contact anonymous. Do not add unnamed AWS services, specific integration configurations, sole architecture ownership, scale, or historical user/company counts.
- The expanded screening answer explains those technologies at the service-role level. Official references checked September 10: [Cognito identity and authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html), [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html), [Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html), and [CDK infrastructure as code](https://docs.aws.amazon.com/cdk/v2/guide/home.html). Next.js is the application framework; CDK is the infrastructure development toolkit. These references verify the descriptions of the tools, while Xavier's direct account establishes his use of them. The specific technical challenges described remain attached to the inspected Armonía example, not invented for the AWS project.
- The Armonía evidence confirms one practice and its owner using the app. It does not establish the current total number of users or organizations. The screening answer distinguishes its implemented tenant model from the confirmed usage scope.
- The staffing answer proposes Xavier as the individual delivering the work, with AI assistance and personal review. It does not promise a team or unconfirmed weekly availability.
- Architecture references checked September 10: [PostgreSQL row security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) supports the database-policy approach in question 4; [Microsoft's integration boundary pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) supports the connector approach in screening answer 4. These are proposed design choices. The sources do not establish a completed BuildPrint architecture or vendor API compatibility.

### Previous screening answer 2

Approved September 10 before Xavier requested the expanded Armonía/AWS example. This is the version previously entered in the browser form, preserved as history:

> In Armonía, I built the Clerk and Google Calendar integrations, including organization webhooks, OAuth connections, and calendar sync. The main challenges were keeping each connection tied to the right practice, handling repeated notifications, and recovering when synchronization failed.

### Previous screening answer 3

Approved September 10 before Xavier clarified his preference for proven libraries and services with custom code for the business logic. This is the version previously entered in the browser form, preserved as history:

> I’d use custom code for the core product and managed services for things like login, storage, and hosting. Your workflows, pricing rules, and integrations need flexibility. This gives us control over how BuildPrint works while saving time on the supporting infrastructure.

### Discovery estimate basis

This is an assistant-prepared planning estimate for Xavier's review, not an agreed commitment or a measured benchmark. It assumes organized source materials, prompt client feedback, a prototype of the core operator workflow, and architecture-level integration investigation. It does not include implementing the connectors or prototyping all ten modules in detail.

| Work | Estimated hours |
| --- | --- |
| Review materials and walkthrough | 6-8 |
| Map core workflows and roles | 5-6 |
| Architecture, data, security, and integration plan | 7-9 |
| Clickable prototype of the core workflow | 8-10 |
| Beta scope, milestones, and estimate | 6-7 |
| Total | 32-40 |

At $65/hour, the range is $2,080-$2,600. Hosting, vendor subscriptions, and other pass-through costs are separate. If the materials or prototype require more work, agree on revised outputs or an extension before exceeding the approved discovery budget.

### Focused Beta estimate basis

This is an assistant-prepared estimate based on the saved job brief and the scope proposed in question 5. No underlying client workbook, credentials, API entitlement, or detailed specification has been validated. Discovery must test the assumptions before a delivery commitment.

| Work | Estimated hours |
| --- | --- |
| Company model, authentication, roles, file access, and audit foundation | 40-60 |
| Implementation tasks, dependencies, approvals, uploads, and progress view | 60-90 |
| Simple resources, training/certification completion, model and jurisdiction records | 30-45 |
| Local Cost Conversion for agreed workbook rules, with calculation checks | 50-80 |
| One agreed flow per preferred integration, including connection and failure handling | 90-150 |
| Pilot feedback, security and workflow verification, deployment, and handover | 60-75 |
| Subtotal | 330-500 |
| Planning allowance for uncertainty, approximately 20% | 66-100 |
| Rounded planning range | 400-600 |

The range assumes one pilot operator, reusable company separation, a small role set, client-provided content, and limited initial flows across JobTread, GHL, and QBO. It excludes broad two-way synchronization, full LMS/assessment authoring, AI assistance, advanced analytics, subscription billing, additional integrations, large historical migrations, and ongoing support. Discovery must identify which system owns each record and confirm API access and provider constraints.

At $65/hour, Beta labor would be $26,000-$39,000, excluding discovery and third-party costs. Including the proposed discovery phase, labor would total $28,080-$41,600. These numbers are working assumptions for review.

At an illustrative 25 hours/week, the Beta alone takes 16-24 working weeks, plus discovery, client feedback, and external access delays. This exceeds the listing's 1-3 month duration. Do not promise this scope inside three months: agree on a smaller first release or a different schedule. Xavier's actual capacity remains unconfirmed.

## Application terms and submission record

| Item | Status |
| --- | --- |
| Proposed hourly rate | $65/hour used in the draft calculations; pending Xavier's decision |
| Discovery estimate | Draft: 32-40 hours, $2,080-$2,600; pending approval |
| Functional Beta price and timeline | Draft: 400-600 hours, $26,000-$39,000 plus discovery; 16-24 weeks at an illustrative 25 hours/week; scope and capacity unconfirmed |
| Optional boost | No boost selected during inspection |
| Connects used | None; submission would require the then-current application cost |
| Application form | Cover letter and the earlier five screening answers were entered and verified on September 10. Screening answers 2 and 3 were subsequently revised in this document; the assistant has not entered those revisions in the browser. |
| Submission | Not submitted; no confirmation or sent copy exists |

When submitted, preserve the exact sent proposal, screening answers, agreed application terms, submission date, and confirmation separately from the working draft.

## Revision record

- September 10: Xavier approved the shorter answer to question 1 and asked to save the opportunity and proposal together.
- September 10: Created this working document, retained question 1, and drafted question 2 for individual review. Earlier exploratory wording and estimates are not approved application terms.
- September 10: Xavier approved question 2 and asked to continue. Preserved its wording and added question 3 as a draft for review.
- September 10: Xavier approved question 3 and asked for all remaining answers. Added proposal answers 4-9, all five screening answers, verified Armonía implementation references, and provisional estimate assumptions. Questions 1-3 remain unchanged. The complete application is still a draft.
- September 10: Incorporated Xavier's confirmation of Upwork multi-tenancy experience and an AWS-based client project, keeping the client unnamed and leaving unprovided service names and scale out of the claims.
- September 10: Xavier approved the five screening answers presented in the conversation and asked to save them. Replaced screening answer 1 with that exact wording, retained answers 2-5 verbatim, and marked the screening section approved. No application was submitted.
- September 10: At Xavier's request, entered the cover letter presented in the conversation and all five approved screening answers into the existing Upwork application tab. Used a plain URL for the case-study link in the cover-letter field. Verified all six field values, no em dashes, and a displayed boost of 0 Connects. Left the form open at the cover letter for Xavier to review; did not submit or change the existing $65/hour rate.
- September 10: Xavier could not see the browser tab and requested the content in the working document. Added the complete cover letter verbatim and direct section links; the five screening answers remain unchanged and available to copy. Submission remains unconfirmed; no application was sent by the assistant.
- September 10: Xavier requested more detail about Armonía's integrations and the anonymous AWS client project, then confirmed API Gateway, Cognito, Next.js, CDK, and Lambda. Expanded screening answer 2 using those technologies, preserved the previous approved answer as history, and marked the new wording as a draft for review. No browser change or submission.
- September 10: Xavier clarified that the Beta should use proven libraries and services like Clerk and AWS, with custom code for the business logic. He approved the revised screening answer 3 and asked to save and commit everything. Saved that wording, preserved the earlier version as history, and left the application submission record unchanged.

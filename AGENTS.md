# AGENTS.md

## Scope and source of truth

These instructions apply to the entire `thexap_tech` repository.

`AGENTS.md` is the canonical, tool-neutral project brief for Hermes, Claude Code, Codex, and other coding agents. Put shared project knowledge here rather than in agent-specific instruction files. Do not recreate `CLAUDE.md` unless there is a concrete Claude Code-only requirement; if one is ever needed, it should import `@AGENTS.md` and contain no duplicated project context.

## Project overview

This repository contains Xavier Perez's personal website and portfolio. It currently presents his freelance track record, AI product positioning, blog, project archive, and meeting flow.

The approved near-term market category is **Senior Full-Stack Product Engineer** for founders, product leads, and small product teams. Xavier works as an **independent product partner**. Founder-led contracts and product partnerships are the primary commercial objective, selective compatible long-term contracts or employment are secondary, and mentoring remains a secondary offer.

The existing projects experience reflects an earlier positioning as a freelance frontend/fullstack developer. Work on that surface should build evidence for Xavier's approved near-term transformation: moving an ambiguous opportunity, fragmented ownership, a prototype, or an existing product toward a coherent, dependable, shipped software product with visible decisions and verification. `AI-native` describes the delivery method and supporting specialization, not the primary category or proof of production-AI experience.

`docs/portfolio/positioning-and-messaging.md` is the controlling messaging brief for the approved audience, positioning hierarchy, proof plan, CTA, and route-copy direction.

## Longer-term product north star

A visitor should eventually have evidence to believe:

> Xavier can discover the opportunity, shape the product, create the brand and experience, build the system, produce the launch story, distribute it, and learn from the market.

This complete idea-to-audience cycle is the longer-term portfolio and founder north star, not a blanket near-term commercial outcome claim. The portfolio is not a gallery of attractive landing pages and not a list of technologies. It is a set of product stories that demonstrate judgment, range, craft, and truthful ownership.

## Writing and punctuation

- Do not use the Unicode U+2014 em dash anywhere in repository content. This applies to user-facing copy, metadata, documentation, source comments, and agent-authored text files.
- Rewrite the sentence with a comma, colon, period, parentheses, or clearer sentence structure instead.
- Before completing work, run `rg -n $'\u2014' . --glob '!.git/**' --glob '!node_modules/**' --glob '!.next/**'` and confirm that it returns no matches.

## Current technical stack

Treat the source tree and `package.json` as authoritative when this summary becomes stale.

- Next.js 15 using the Pages Router
- React 19 and TypeScript
- MUI 6 with Emotion
- Contentful GraphQL for blog content
- `urql` plus GraphQL Code Generator for typed Contentful queries
- React Three Fiber, Drei, and Three.js for the homepage scroll animation
- Calendly for the meeting page
- Google Analytics loaded from the app shell

## Commands

- **Development server:** `npm run dev`
- **Production build:** `npm run build`
- **Lint:** `npm run lint`
- **Start production server:** `npm run start`
- **GraphQL codegen watch mode:** `npm run codegen`
- **Legacy test script:** `npm run test`

The package currently defines `npm run test`, but the repository has no tracked first-party test files and Jest is not a direct dependency. Do not report tests as passing unless the test setup is repaired and a real suite executes.

## Pre-commit behavior

Husky runs lint-staged on commit. Staged JavaScript and TypeScript files are processed with Next lint autofix and Prettier. Preserve unrelated work and inspect the resulting diff before committing.

## Architecture

### Page structure

- `pages/index.tsx` assembles the homepage marketing funnel.
- Homepage sections currently render in this order: `Hero` → `StakesSection` → `ValuesSection` → `GuideSection` → `PlanSection` → `ProofSection` → `HireLaunchSection`.
- `src/components/HeaderFooterLayout.tsx` provides the shared site frame.
- `pages/blog/` contains the Contentful-backed blog index and dynamic post pages.
- `pages/projects/index.tsx` renders the current project grid from `data/projects.json`.
- `pages/projects/[slug].tsx` statically generates the current project detail pages from `data/projects.json`.
- `pages/schedule-meeting.tsx` provides the Calendly flow.
- `pages/_app.tsx` owns the Emotion cache, MUI theme provider, global styles, and Google Analytics.

### Content and data

Two Contentful access patterns coexist:

- `src/contentful/urqlClient.ts` creates the `urql` client used with typed GraphQL documents generated into `src/gql/`.
- `src/lib/blogApi.ts` is an older raw-fetch helper with inline GraphQL.

GraphQL Code Generator scans:

- `src/**/*.tsx`
- `pages/**/*.tsx`
- `src/contentful/graphql/*.graphql`

Generated artifacts live in `src/gql/`. Do not hand-edit generated files when the source query or schema should be changed instead.

The project portfolio is not currently stored in Contentful; it is the static dataset in `data/projects.json`. Keep that distinction explicit when planning the portfolio redesign.

### Required environment variables

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW` (optional): selects preview content when enabled

A production build can execute Contentful queries during static generation. If credentials or network access are unavailable, report the exact build blocker rather than claiming successful verification.

### Theming and visual system

- `src/theme/brandingTheme.ts` defines the MUI design tokens.
- The primary accent is orange `#f59415`.
- Dark mode uses `#202124` for the page background and `#303136` for paper surfaces.
- `src/context/ThemeContext.tsx` owns theme state and currently starts in dark mode.
- `src/theme/createEmotionCache.ts` configures Emotion.
- Prefer theme tokens and responsive MUI values over isolated hard-coded colors or one-off breakpoints.

## Portfolio strategy

### Portfolio thesis

The portfolio as a whole should demonstrate this cycle:

1. Opportunity or problem discovery
2. Audience and product positioning
3. Product strategy and scope
4. Naming, brand, and visual direction
5. UX, interface, and interaction design
6. Application and AI/system implementation
7. Launch narrative and creative production
8. Distribution across appropriate channels
9. Measurement, learning, and iteration

Not every project must contain every step at production depth, but the portfolio as a whole must prove the complete cycle. When a step is intentionally omitted, say why.

### Types of work and disclosure

Every project must be labeled honestly as one of:

- **Live product / client work:** Shipped work for a real organization or customer.
- **Owned product / experiment:** Something Xavier operates, tests, or distributes himself.
- **Concept product:** A hypothetical product created to demonstrate product thinking and execution.

Concept products are encouraged, but never present them as client work or validated businesses. Never invent users, revenue, testimonials, conversion lifts, client constraints, or production status. Clearly distinguish:

- observed facts;
- design assumptions;
- hypotheses to test;
- simulated or illustrative data;
- measured outcomes.

### What a portfolio project should include

A strong project is a coherent product system, not just one web page. Depending on the concept, the evidence set may include:

- an opportunity brief and target user;
- positioning, promise, and key message;
- naming and visual identity;
- a landing page or product website;
- a believable product surface or working vertical slice;
- AI architecture, agent workflow, evaluation approach, or automation where relevant;
- launch trailer, cinematic sequence, motion system, product demo, or social cutdowns;
- distribution assets for the channels the audience actually uses;
- an acquisition or launch plan;
- an instrumentation and learning plan;
- a case study explaining decisions, trade-offs, and Xavier's personal contribution.

Google Flow or similar generative media tools may be used for cinematic storytelling, as demonstrated by the current Armonía hero. Generated media should serve the product narrative rather than act as decoration.

### Distribution requirement

Do not stop at “build the site.” For every concept that advances beyond brainstorming, define:

- the intended audience;
- the channel or community where that audience can be reached;
- the launch hook;
- at least one reusable distribution asset;
- the call to action;
- what signal would count as useful learning.

Distribution can include a launch film, product demo, social campaign, educational content, email sequence, community launch, marketplace listing, partnership asset, waitlist experiment, or another channel-appropriate format. Do not force the same channel mix onto every product.

### Case-study standard

Featured case studies should answer, in this order:

1. **What changed?** A one-sentence outcome or intended transformation.
2. **For whom?** The audience and their problem.
3. **Why this product?** The insight, bet, or hypothesis.
4. **What did Xavier own?** Explicit scope across strategy, design, engineering, AI, media, and distribution.
5. **How does it work?** The key experience and system, shown with strong visuals.
6. **What decisions mattered?** Constraints, trade-offs, rejected directions, and risks.
7. **How did it reach people?** Launch and distribution artifacts.
8. **What evidence exists?** Real outcomes when available; otherwise a test plan and honest status.
9. **What was learned?** Reflection and next iteration.

Technology belongs in supporting detail, not as the main story.

### Portfolio mix

Avoid a portfolio made of many similar SaaS landing pages. Build a deliberate range across:

- real and concept work;
- consumer and business products;
- service, workflow, and media-rich experiences;
- visible interfaces and invisible automation/infrastructure;
- emotionally expressive brand work and rigorous operational tools;
- different distribution motions.

Prefer a small set of flagship case studies with substantial evidence over a large grid of thin entries. Older projects may remain in a secondary engineering archive if they still provide credible proof, but they should not compete visually with the current positioning.

### Initial strategic direction

1. **Make Armonía the first flagship case study.** Reframe it from “fullstack developer” work into a truthful end-to-end story covering the business problem, experience, application, brand evolution, cinematic hero, content/distribution system, and real constraints.
2. **Document the publishing system as owned product infrastructure.** Show the workflow and human approval gates that turn product knowledge into distributable content and assets.
3. **Create a limited concept slate, not an unlimited mockup collection.** Choose concepts that fill missing proof: AI product architecture, product strategy, motion/storytelling, and distribution.
4. **Show the product, not only its marketing page.** At least one believable workflow, interactive prototype, or working vertical slice should accompany each major concept.
5. **Design distribution while designing the product.** Launch artifacts and channel strategy are part of the concept from the beginning.
6. **Curate aggressively.** A project earns a flagship slot only when it strengthens the approved positioning or closes a named proof gap and has enough evidence to support a real case study.

## Idea-storm workflow

Capture ideas cheaply and broadly before selecting any to build. Each idea should record:

- working name;
- target audience;
- painful or desirable situation;
- proposed transformation;
- why the idea demonstrates Xavier's current positioning;
- product surface to build;
- AI/system depth, if relevant;
- visual or cinematic opportunity;
- credible distribution motion;
- evidence that can be produced honestly;
- estimated effort and major risks;
- status: `raw`, `shortlisted`, `selected`, `building`, `published`, or `parked`.

Score shortlisted ideas from 1–5 on:

- positioning proof;
- product depth;
- AI/system depth;
- visual storytelling potential;
- distribution potential;
- distinctiveness from the rest of the slate;
- feasibility;
- credibility of the evidence.

Do not select an idea only because its landing page would look beautiful.

## Decision and implementation principles

- **Evidence over claims.** Show artifacts and decisions instead of asserting broad capability.
- **Outcomes over task lists.** Lead with user or business transformation, not responsibilities.
- **Whole-product coherence over asset volume.** Every artifact should support the same product promise.
- **Range without randomness.** Each project should fill a deliberate proof gap.
- **Truth over theater.** Concept work can be ambitious, but its status and evidence must be explicit.
- **Distribution is product work.** A finished build with no route to an audience is incomplete for this portfolio.
- **AI where it matters.** Do not add AI as decoration; explain the job it performs, its failure modes, and how it is evaluated.
- **Accessibility and responsive behavior are acceptance criteria.** Verify keyboard navigation, semantics, contrast, loading behavior, and mobile layouts when changing visible surfaces.
- **Preserve generated and CMS boundaries.** Change source queries/data models rather than patching generated GraphQL artifacts or hard-coding CMS output.
- **Quality over quantity.** Three excellent, differentiated stories are more valuable than twelve thin cards.

## Project management

Material work in this repository belongs to Linear team **XAP**. Portfolio concepts and portfolio-strategy work default to the **Portfolio Repositioning** project. Before substantive work, search for an existing issue matching the intended outcome and reuse it when appropriate; otherwise create one. Keep the issue as the work ledger and only mark it done after the deliverable is verified.

### Approval completion workflow

When Xavier explicitly approves the final deliverable for an issue, that approval authorizes the agent to complete the normal repository and Linear delivery workflow in the same turn. Do not wait for a separate commit, push, merge, or Linear-status instruction.

1. Confirm that the approved artifact satisfies the issue criteria and required verification.
2. Commit the verified changes on the scoped working branch.
3. Refresh `origin/develop`, confirm there is no unexpected divergence, and merge the working branch into `develop`.
4. Push `develop` and read back the remote branch SHA to confirm the push.
5. Record the approved decisions, verification results, commit SHA, and merged `develop` SHA in the Linear issue.
6. Mark the Linear issue Done only after the remote `develop` readback succeeds.

This standing approval applies to `develop`, not `main` or production. Stop and report instead of forcing completion if there are merge conflicts, failing checks, unrelated dirty changes, protected-branch rejection, unexpected remote divergence, or another material mismatch.

## Verification expectations

For documentation-only changes:

1. Inspect the final diff and confirm instruction files do not duplicate or contradict one another.
2. Run `npm run lint`.
3. Run `npm run build` when the necessary Contentful credentials and network access are available.
4. Report missing test infrastructure or environment blockers honestly.

For product changes, add focused verification for the affected route and inspect both desktop and mobile rendering. Do not claim completion from a successful compile alone.

## Current reference surfaces

- Projects index: <https://www.thexap.com/projects>
- Homepage: <https://www.thexap.com/>
- Armonía live product and cinematic direction: <https://www.armoniapsicologia.com/>

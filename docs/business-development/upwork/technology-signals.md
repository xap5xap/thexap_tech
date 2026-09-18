# Applied-job technology signals

Updated September 18, 2026. [XAP-127](https://linear.app/thexap/issue/XAP-127/document-applied-job-technology-signals-for-portfolio-planning).

This register turns confirmed Upwork applications into input for portfolio planning. It records what clients request, where Xavier already has truthful evidence, and which repeated proof gaps may justify a small project or blog post.

It is not a claim that Xavier has used every listed technology. It is not authorization to build or publish an artifact.

## Capture rule

After Xavier confirms an application:

1. Save the job brief and proposal record.
2. Mark the opportunity `Applied` in the opportunity tracker.
3. Add the job's important technologies and capabilities below.
4. Classify Xavier's evidence as:
   - `Verified`: supported by a current project, source history, or public work record.
   - `Adjacent`: related experience exists, but the exact requested technology or responsibility is not established.
   - `Gap`: no qualifying evidence is currently recorded.
   - `Unknown`: Xavier may have relevant experience, but it has not been verified.
5. Record one coherent project or article direction when it could close a meaningful gap.
6. Revisit the register when a signal appears in another worthwhile application.

Prefer repeated buyer problems over keyword collecting. A signal should usually influence the portfolio when it appears in at least two relevant opportunities, supports the approved Senior Full-Stack Product Engineer position, or closes a specifically named proof gap.

## Signal index

| Signal | Applied jobs | Current evidence | Candidate proof direction |
| --- | ---: | --- | --- |
| React | 1 | Verified | Use as the interface layer in a bounded product vertical slice |
| Node.js APIs | 1 | Verified | Show an end-to-end request, validation, persistence, and failure path |
| Express | 1 | Adjacent | Compare an Express implementation with Xavier's verified Node.js/Hono experience |
| MongoDB and Mongoose | 1 | Gap | Model and test one small marketplace workflow rather than a generic CRUD demo |
| Socket.io and real-time behavior | 1 | Gap | Demonstrate one event flow with reconnect, stale-state, and failure handling |
| Map-based product interfaces | 1 | Gap | Build one map interaction tied to a real marketplace workflow |
| Figma-to-production implementation | 1 | Verified | Show design decisions, responsive behavior, accessibility, and visual verification |
| Existing-product debugging | 1 | Verified | Publish a traceable UI-to-API-to-data diagnosis with tests and handoff notes |
| Web and mobile delivery | 1 | Verified at a broad historical level | Keep platform scope explicit in any new artifact |

## Applications

### Secret World map marketplace

- **Date:** September 18, 2026
- **Job ID:** `~022100839223652532326`
- **Status:** Applied, confirmed by Xavier
- **Source:** [Upwork listing](https://www.upwork.com/jobs/~022100839223652532326)
- **Saved records:** [job brief](jobs/secret-world-map-marketplace/job-post.md), [proposal](jobs/secret-world-map-marketplace/proposal.md)
- **Requested signals:** React, Node.js, Express, MongoDB, Mongoose, Socket.io, map interfaces, Figma implementation, API work, inherited-code debugging, testing, and web/mobile delivery.
- **Strongest current proof:** React and Node.js delivery, existing-codebase work, mobile history, UX implementation, testing, release work, and clear handoff.
- **Current proof gaps:** MongoDB, Mongoose, Socket.io, and production map implementation are not established by the current repository evidence.
- **Candidate project:** A small neighborhood marketplace vertical slice with a map, one listing or job flow, a Node.js API, MongoDB persistence, and one real-time update. It should include tests, failure behavior, responsive UI, and a short case study.
- **Candidate articles:** Turning finished Figma screens into a reliable React feature; testing a real-time map workflow across UI, API, and database; scoping an inherited application before estimating implementation.

The project and article directions are candidates. Selection must consider repetition across future applications, distinctiveness from existing portfolio work, feasibility, and the evidence that can be produced honestly.

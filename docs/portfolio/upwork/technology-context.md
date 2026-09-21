# Technology context for older engagements

Xavier requested useful technical explanations based on job titles, available descriptions, and technologies from each period. All 28 pages now have a concise `Technology & trade-offs` section. Recorded scope and tools stay factual; the engineering perspective describes an illustrative approach and does not claim that a suggested library was used on the contract.

The catalog uses conservative availability checkpoints, not popularity rankings or proof of project use:

| Example | Available by | Primary source checked September 20, 2026 |
| --- | --- | --- |
| Redux | December 2015 | [Redux history](https://redux.js.org/understanding/history-and-design/history-of-redux), development began in mid-2015 |
| Material UI | December 2014 | [MUI project history](https://mui.com/blog/material-ui-is-now-mui/), project began in 2014 |
| Tailwind CSS | August 18, 2020 | [Tailwind CSS 1.7 release](https://tailwindcss.com/blog/tailwindcss-1-7) |
| Zustand | August 17, 2020 | [Official package registry](https://registry.npmjs.org/zustand), version 3.0.0 timestamp; the package itself was first published in April 2019 |
| Supabase | August 5, 2020 | [Supabase July 2020 alpha update](https://supabase.com/blog/supabase-alpha-july-2020), available authentication and database context |

Validation rejects examples whose checkpoint is later than the engagement start. Examples are not serialized into index stack tags. No invented versions, product features, client outcomes, or usage metrics are added. The supplied spelling "Zutand" is normalized to "Zustand".


## Technical judgment revision

Xavier approved the visual direction and asked to replace vague conditional prose with readable explanations of technology fit and engineering responsibility. The section now uses two or three points per engagement. Each point has a title, a short explanation, and a concrete trade-off. The MongoDB/AWS page includes reasoning about document modeling, infrastructure as code, and service responsibilities. Briefs retain relevant, explicitly identified example tools.

Use first-person singular for Xavier's supported contribution and engineering principles. Use past tense only for documented actions. Use `we` only for a shared team action with known participants. A recorded technology does not establish that Xavier originally selected it or reveal the client's exact selection rationale. The explanations therefore distinguish supported work from present-tense engineering perspective. There are no invented project-specific data shapes, library adoptions, performance gains, or original architecture decisions.

`technicalContext.points` is projected field by field into public props. Every point requires a title, explanation, and trade-off. The existing example-period validation and explicit example disclosure remain in place. The index receives only the recorded stack.

Technical references checked for the rationale:

- [MongoDB data modeling](https://www.mongodb.com/docs/manual/data-modeling/): document structure, access patterns, embedding versus references, and validation.
- [Zustand](https://github.com/pmndrs/zustand): small shared stores and component subscriptions.
- [Tailwind utility classes](https://tailwindcss.com/docs/styling-with-utility-classes): reusable styling utilities and component conventions.
- [Redux fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview): actions, reducers, and shared state.

These sources support general technical explanations, not historical claims of use on a contract. No current-version feature is attributed to an older project.

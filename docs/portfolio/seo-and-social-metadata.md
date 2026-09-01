# Portfolio SEO and social-preview metadata

## Scope

This record defines the metadata, canonical, indexability, disclosure, and verification decisions implemented under `XAP-52`.

The current published portfolio-route manifest is exactly:

- `/projects`
- `/projects/armonia`

Future case-study routes receive metadata only after their records enter the validated published flagship registry.

## Primary sharing contexts

The primary contexts are Upwork proposals and LinkedIn posts. Titles and descriptions must remain specific and useful when a recipient encounters a project outside the main site journey.

## Route metadata

| Route               | Document title                                                           | Social title                                             | Description                                                                                                                         | Social image                                  |
| ------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `/projects`         | `Selected products and systems \| Xavier Perez`                          | `Selected products and systems`                          | `Case studies showing Xavier's work across product strategy, design, engineering, launch, and distribution, from idea to audience.` | `/images/projects/social-preview.jpg`         |
| `/projects/armonia` | `Armonía: from discovery to a practice operating system \| Xavier Perez` | `Armonía: from discovery to a practice operating system` | `How Xavier and Carla turned practice research into a public experience and a private system used for daily operations.`            | `/images/projects/armonia/social-preview.jpg` |

Each route emits:

- one distinct document title and meta description;
- a self-referencing absolute canonical URL on `https://www.thexap.com`;
- `index,follow` robots and Googlebot instructions with large-image previews enabled;
- Open Graph URL, title, description, site name, locale, image, dimensions, MIME type, and image alternative text;
- X Card summary-large-image title, description, image, and image alternative text.

## Indexability and disclosure policy

- Published client work is indexable when its claims, current status, and assets satisfy the flagship publication checks.
- Published owned products or experiments are indexable and prepend `Owned product or experiment.` to the preview description.
- Published concept products are indexable only when they qualify for the published flagship registry. Their preview descriptions prepend `Concept product.`
- Deliberately retained inactive work is indexable only when it remains credible evidence. Its preview description prepends `No longer active.`
- Retired work is absent from the registry, generates no route or canonical URL, and returns the normal not-found response without a redirect.
- Raw, shortlisted, selected, planned, or otherwise unpublished work receives no public route and no metadata.

The preview helper uses the dedicated social image when one is present and otherwise falls back to the primary visual. Dedicated social images use a 1200 by 630 pixel JPEG contract.

## Verification boundary

Before merge, verification covers the rendered HTML inputs that Xavier controls:

- unique title and description;
- visible-heading alignment;
- canonical and robots signals;
- complete Open Graph and X Card fields;
- absolute and reachable image URLs;
- 1200 by 630 pixel image dimensions and public-safe alternative text;
- current route generation and retired-route not-found behavior.

LinkedIn, X, Slack, and iMessage previews require a publicly reachable deployment and may cache earlier metadata. Their verification record must name the tested URL, platform, result, and date.

After a production release, Google's crawl and displayed result are inspected when available. Exact snippet wording and recrawl timing are not completion requirements because Google may select different page text for a particular query.

## Boundaries

- XAP-52 does not promise rankings, reach, clicks, or proposal outcomes.
- XAP-52 does not publish `main` or production.
- XAP-52 changes the projects-index heading to the already-approved `Selected products and systems`, but it does not implement the full future three-flagship index experience.
- Project metadata is derived from the shared presentation record. It does not introduce project-specific fields or weaken evidence and disclosure rules.

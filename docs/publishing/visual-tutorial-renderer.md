# Visual tutorial renderer

Status: XAP-208 implementation record

Canonical contract: [`visual-tutorial-publication-contract.md`](visual-tutorial-publication-contract.md)

The blog renderer implements the accepted XAP-206 contract without changing Contentful models or publication data.

## Rendering rules

- Only Asset titles matching the exact `vtp1|{slug}|{role}|{id}|c{0-or-1}|a{0-or-1}` protocol opt into tutorial caption handling.
- The featured Asset is a semantic figure. A `vtp1` hero uses Asset `description` as alt text and consumes the first RichText paragraph as its optional caption and attribution.
- A `vtp1` inline Asset is a bounded wide semantic figure. It uses Contentful width and height, scales proportionally, and consumes the following paragraph only when its title declares caption or attribution content.
- Legacy Assets do not consume adjacent prose. Legacy hero descriptions render as escaped plain text, never raw HTML.
- PDF and DOCX Asset hyperlinks render as accessible resource links with their Contentful description, format and size. Unsupported Asset hyperlinks remain safe links when they use an expected HTTPS Contentful delivery host. Missing or unsafe Assets become text or are omitted with a diagnostic.
- Absolute `https://www.thexap.com/...` RichText links render through their site-local path.
- Article prose has a 760 px readable measure. Tutorial figures are bounded at 1120 px inside the article container and remain within the viewport.

## Metadata

Every renderable article emits a description, exact canonical URL, Open Graph article fields, featured-image dimensions and alt text, X card fields, and the editorial publication time when present. The public article URL remains `https://www.thexap.com/blog/{slug}`.

## Focused verification

`npm run test:visual-tutorial` covers exact protocol parsing, legacy fallback, hero and inline caption consumption, attribution, PDF/DOCX rendering, site-owned internal links, unsupported and missing Assets, raw HTML removal, and canonical/social metadata. Its CH-01-shaped fixture contains one hero, three inline graphics, PDF and DOCX downloads, and a site-owned article link.

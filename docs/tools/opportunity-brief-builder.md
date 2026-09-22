# Opportunity Brief Builder

The native Opportunity Brief Builder lives at:

`https://www.thexap.com/tools/opportunity-brief-builder`

Contentful articles link to that exact HTTPS URL as a normal RichText hyperlink. They do not upload or embed the prototype HTML, CSS, or JavaScript. The related CH-01 tutorial returns from the tool through `/blog/problem-and-audience`, using the accepted `problem-and-audience` chapter slug and the article URL pattern in the visual tutorial publication contract.

The tool keeps entered brief content only in React state for the current browser tab. It does not use an API route, local storage, session storage, cookies, or a backend. Consented site analytics may record a page view classified as `content_group: utility` and `page_type: tool`; the brief fields are never analytics inputs.

The implementation preserves the local prototype's fifteen inputs, nine essential-field progress measure, live Markdown preview, fictional example, copy fallback, Markdown download, print flow, and confirmed reset. The read-only prototype remains the source reference in the XAP-130 content workspace.

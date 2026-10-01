# From Zero to a Working Product content archive

This directory keeps the public Markdown and publication images for Xavier's tutorial series in Git. Contentful remains the source used by the website. These files are not imported into website routes or browser bundles.

## Chapters

| Chapter | Source | Manual X thread |
| --- | --- | --- |
| 01. Start with a problem you can explain | [Article](chapters/001-problem-and-audience/blog.md) | [Thread](chapters/001-problem-and-audience/twitter.md) |
| 02. Find a route to users before building | [Article](chapters/002-validate-and-reach-people/blog.md) | [Thread](chapters/002-validate-and-reach-people/twitter.md) |

CH-02 is an approved authoring snapshot, not a publication receipt. Its X link placeholder will be replaced in a separate ready-to-paste file after the article is verified live.

## Daily workflow

Xavier authorized daily automatic publication on October 1, 2026. The workflow takes one chapter in series order, reuses any existing draft, verifies its content and assets, publishes the exact Contentful version, checks the website, and then posts the LinkedIn adaptation. It saves the final X thread for Xavier to post manually.

The daily workflow resumes a partial publication before starting another chapter. It records exact local file hashes, the content version, final social text and public URLs. A completed publication has its own public-safe publication record. An archived Markdown file alone does not establish that it was posted.

Each chapter folder may contain:

- `blog.md`: the article body.
- `companion.md`: the public worksheet, when present.
- `linkedin.md`: the adaptation and public media instructions.
- `twitter.md`: the numbered X thread and media instructions.
- `x-standalone.md`: a separate short X post.
- `images/`: the images referenced by those files.
- `archive-hashes.json`: hashes of the archived source files.
- `twitter-ready.md` and `x-standalone-ready.md`: the composed manual-posting copies, added after the live article URL is verified.
- `publication.json`: public URLs and separate per-destination states, added by the actual publication run.

For X, copy only the text within each numbered block. Attach the matching image and ALT description shown outside that block. The final ready-to-paste file includes the verified blog URL.

Private research, source identities, review wrappers, prompts, publisher manifests, account identifiers, credentials and raw provider receipts stay in the private authoring workspace. Never copy a whole authoring folder into this repository. Use only the explicit public-file allowlist above.

The scheduled workflow is an approved exception to per-post confirmation for this series, Contentful and Xavier's LinkedIn profile. It does not grant permission to post to X, change a source product, delete provider objects or release website code. Quality, privacy and exact-version checks still apply. The private automation policy and original owner request hold the full operational authorization.

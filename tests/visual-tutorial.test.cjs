const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { createTheme, ThemeProvider } = require("@mui/material/styles");

require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const result = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true
    }
  });
  module._compile(result.outputText, filename);
};
require.extensions[".tsx"] = require.extensions[".ts"];

const nextImagePath = require.resolve("next/image");
require.cache[nextImagePath] = {
  id: nextImagePath,
  filename: nextImagePath,
  loaded: true,
  exports: {
    __esModule: true,
    default: ({ alt, height, src, width }) => React.createElement("img", { alt, height, src, width })
  }
};

const { BLOCKS } = require("@contentful/rich-text-types");
const PostBody = require("../src/components/Blog/PostBody.tsx").default;
const PostHeader = require("../src/components/Blog/PostHeader.tsx").default;
const RichTextAsset = require("../src/components/RichTextAsset.tsx").default;
const RichTextAssetLink = require("../src/components/Blog/RichTextAssetLink.tsx").default;
const { getBlogArticleMetadata } = require("../src/lib/blogArticleMetadata.ts");
const {
  getSiteOwnedHref,
  parseVisualTutorialAssetTitle,
  prepareVisualTutorialContent
} = require("../src/lib/visualTutorial.ts");
const { visualTutorialFixture } = require("./fixtures/visualTutorialFixture.ts");

const theme = createTheme();
const render = element => renderToStaticMarkup(React.createElement(ThemeProvider, { theme }, element));

const prepareFixture = () =>
  prepareVisualTutorialContent({
    document: visualTutorialFixture.body.json,
    blockAssets: visualTutorialFixture.body.links.assets.block,
    featuredImage: visualTutorialFixture.featuredImage,
    articleSlug: visualTutorialFixture.slug
  });

test("vtp1 titles parse only when every protocol segment is valid", () => {
  assert.deepEqual(parseVisualTutorialAssetTitle("vtp1|sample-article|inline|diagram-one|c1|a0"), {
    version: "vtp1",
    slug: "sample-article",
    role: "inline",
    id: "diagram-one",
    hasCaption: true,
    hasAttribution: false
  });

  for (const title of [
    "legacy title",
    "vtp2|sample-article|inline|diagram-one|c1|a0",
    "vtp1|Sample|inline|diagram-one|c1|a0",
    "vtp1|sample-article|wide|diagram-one|c1|a0",
    "vtp1|sample-article|inline|diagram-one|c2|a0",
    "vtp1|sample-article|inline|diagram-one|c1"
  ]) {
    assert.equal(parseVisualTutorialAssetTitle(title), null, title);
  }
});

test("CH-01-shaped RichText consumes the hero and opted-in inline captions only", () => {
  const prepared = prepareFixture();

  assert.equal(prepared.diagnostics.length, 0);
  assert.ok(prepared.heroCaption);
  assert.deepEqual(Object.keys(prepared.inlineCaptions), ["framework", "comparison"]);
  assert.equal(prepared.document.content.filter(node => node.nodeType === BLOCKS.EMBEDDED_ASSET).length, 3);
  assert.ok(
    JSON.stringify(prepared.document).includes(
      "The third graphic intentionally has no caption and must not consume this prose paragraph."
    )
  );
});

test("legacy Assets do not opt into vtp1 caption consumption", () => {
  const legacyDocument = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      { nodeType: BLOCKS.EMBEDDED_ASSET, data: { target: { sys: { id: "legacy" } } }, content: [] },
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [{ nodeType: "text", value: "Legacy prose remains visible.", marks: [], data: {} }]
      }
    ]
  };
  const prepared = prepareVisualTutorialContent({
    document: legacyDocument,
    blockAssets: [{ sys: { id: "legacy" }, title: "Legacy image" }],
    featuredImage: { title: "Legacy hero" },
    articleSlug: "legacy-post"
  });

  assert.equal(prepared.heroCaption, null);
  assert.deepEqual(prepared.inlineCaptions, {});
  assert.equal(prepared.document.content.length, 2);
});

test("semantic figures preserve separate alt text, captions and attribution links", () => {
  const prepared = prepareFixture();
  const header = render(
    React.createElement(PostHeader, {
      title: visualTutorialFixture.title,
      date: visualTutorialFixture.date,
      image: visualTutorialFixture.featuredImage,
      articleSlug: visualTutorialFixture.slug,
      caption: prepared.heroCaption,
      tags: []
    })
  );
  const body = render(
    React.createElement(PostBody, {
      content: visualTutorialFixture.body,
      articleSlug: visualTutorialFixture.slug,
      prepared
    })
  );
  const html = `${header}${body}`;

  assert.equal((html.match(/<figure/g) || []).length, 4);
  assert.equal((html.match(/<figcaption/g) || []).length, 3);
  assert.match(html, /alt="A rough product idea narrowing into one audience/);
  assert.match(html, /A useful opportunity brief narrows the decision/);
  assert.match(html, /href="https:\/\/example.com\/credits\/hero"/);
  assert.match(html, /Illustration by Example Studio/);
  assert.doesNotMatch(html, /dangerouslySetInnerHTML|<script/);
});

test("PDF and DOCX hyperlinks render as resource links and never as next/image sources", () => {
  const prepared = prepareFixture();
  const html = render(
    React.createElement(PostBody, {
      content: visualTutorialFixture.body,
      articleSlug: visualTutorialFixture.slug,
      prepared
    })
  );

  assert.match(html, /href="https:\/\/assets.ctfassets.net\/example\/brief-pdf\/opportunity-brief.pdf"/);
  assert.match(html, /href="https:\/\/assets.ctfassets.net\/example\/brief-docx\/opportunity-brief.docx"/);
  assert.match(html, /type="application\/pdf"/);
  assert.match(html, /aria-describedby="asset-brief-pdf-description"/);
  assert.doesNotMatch(html, /<img[^>]+(?:\.pdf|\.docx)/);
});

test("native thexap.com resource URLs render as local Next.js paths", () => {
  assert.equal(
    getSiteOwnedHref("https://www.thexap.com/tools/opportunity-brief-builder"),
    "/tools/opportunity-brief-builder"
  );
  assert.equal(getSiteOwnedHref("https://external.example/tools/example"), null);

  const prepared = prepareFixture();
  const html = render(
    React.createElement(PostBody, {
      content: visualTutorialFixture.body,
      articleSlug: visualTutorialFixture.slug,
      prepared
    })
  );
  assert.match(html, /href="\/tools\/opportunity-brief-builder"/);
});

test("missing and unsupported Assets degrade to text or safe links without throwing", () => {
  const unsupportedBlockAssets = {
    block: [
      {
        sys: { id: "archive" },
        title: "Download the archive",
        url: "https://assets.ctfassets.net/example/archive/archive.zip",
        contentType: "application/zip"
      }
    ],
    hyperlink: []
  };
  const blockHtml = render(
    React.createElement(RichTextAsset, {
      id: "archive",
      assets: unsupportedBlockAssets,
      articleSlug: "sample"
    })
  );
  assert.match(blockHtml, /href="https:\/\/assets.ctfassets.net\/example\/archive\/archive.zip"/);
  assert.doesNotMatch(blockHtml, /<img/);

  const unknownLinkAssets = {
    block: [],
    hyperlink: [
      {
        sys: { id: "data" },
        url: "https://assets.ctfassets.net/example/data/data.csv",
        contentType: "text/csv"
      }
    ]
  };
  assert.match(
    render(React.createElement(RichTextAssetLink, { id: "data", assets: unknownLinkAssets }, "Open data")),
    /href="https:\/\/assets.ctfassets.net\/example\/data\/data.csv"/
  );
  assert.match(
    render(React.createElement(RichTextAssetLink, { id: "missing", assets: unknownLinkAssets }, "Missing file")),
    /Missing file/
  );

  const unsafeLinkAssets = {
    block: [],
    hyperlink: [{ sys: { id: "unsafe" }, url: "javascript:alert(1)", contentType: "application/pdf" }]
  };
  const unsafeHtml = render(
    React.createElement(RichTextAssetLink, { id: "unsafe", assets: unsafeLinkAssets }, "Unsafe file")
  );
  assert.match(unsafeHtml, /Unsafe file/);
  assert.doesNotMatch(unsafeHtml, /href=/);
});

test("legacy hero descriptions render as escaped plain text instead of raw HTML", () => {
  const legacyImage = {
    sys: { id: "legacy-hero" },
    title: "Legacy hero",
    description: "<strong>Legacy caption</strong><script>alert('unsafe')</script>",
    url: "https://images.ctfassets.net/example/legacy/legacy.png",
    contentType: "image/png",
    width: 1200,
    height: 800
  };
  const html = render(
    React.createElement(PostHeader, {
      title: "Legacy article",
      image: legacyImage,
      articleSlug: "legacy-article",
      tags: []
    })
  );

  assert.match(html, /Legacy caption/);
  assert.doesNotMatch(html, /<script|<strong>/);
  assert.match(html, /alt="Cover image for Legacy article"/);
});

test("canonical, Open Graph and X metadata use the public article contract", () => {
  const metadata = getBlogArticleMetadata({
    title: visualTutorialFixture.title,
    excerpt: visualTutorialFixture.excerpt,
    slug: visualTutorialFixture.slug,
    date: visualTutorialFixture.date,
    image: visualTutorialFixture.featuredImage
  });

  assert.equal(metadata.canonicalUrl, `https://www.thexap.com/blog/${visualTutorialFixture.slug}`);
  assert.equal(metadata.description, visualTutorialFixture.excerpt);
  assert.equal(metadata.image.url, visualTutorialFixture.featuredImage.url);
  assert.equal(metadata.image.alt, visualTutorialFixture.featuredImage.description);
  assert.equal(metadata.image.width, 1600);
  assert.equal(metadata.image.height, 900);
  assert.equal(metadata.publishedTime, visualTutorialFixture.date);
});

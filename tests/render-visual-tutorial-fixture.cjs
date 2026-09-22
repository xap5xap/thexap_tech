const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

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
    default: ({ alt, height, src, style, width }) => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#303136"/><path d="M0 ${height * 0.7} L${width * 0.35} ${height * 0.32} L${width * 0.62} ${height * 0.58} L${width} ${height * 0.18} V${height} H0Z" fill="#f59415" opacity="0.75"/><text x="50%" y="50%" fill="white" font-family="Arial" font-size="${Math.max(30, width / 24)}" text-anchor="middle">Visual tutorial fixture</text></svg>`;
      return React.createElement("img", {
        alt,
        "data-original-src": src,
        height,
        src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
        style,
        width
      });
    }
  }
};

const { CssBaseline } = require("@mui/material");
const { createTheme, ThemeProvider } = require("@mui/material/styles");
const PostBody = require("../src/components/Blog/PostBody.tsx").default;
const PostHeader = require("../src/components/Blog/PostHeader.tsx").default;
const { getBlogArticleMetadata } = require("../src/lib/blogArticleMetadata.ts");
const { prepareVisualTutorialContent } = require("../src/lib/visualTutorial.ts");
const { getDesignTokens, getThemedComponents } = require("../src/theme/brandingTheme.ts");
const { visualTutorialFixture } = require("./fixtures/visualTutorialFixture.ts");

let theme = createTheme(getDesignTokens("dark"));
theme = createTheme(theme, getThemedComponents(theme));

const prepared = prepareVisualTutorialContent({
  document: visualTutorialFixture.body.json,
  blockAssets: visualTutorialFixture.body.links.assets.block,
  featuredImage: visualTutorialFixture.featuredImage,
  articleSlug: visualTutorialFixture.slug
});
const metadata = getBlogArticleMetadata({
  title: visualTutorialFixture.title,
  excerpt: visualTutorialFixture.excerpt,
  slug: visualTutorialFixture.slug,
  date: visualTutorialFixture.date,
  image: visualTutorialFixture.featuredImage
});

const content = renderToStaticMarkup(
  React.createElement(
    ThemeProvider,
    { theme },
    React.createElement(
      React.Fragment,
      null,
      React.createElement(CssBaseline),
      React.createElement(
        "main",
        { id: "main-content" },
        React.createElement(
          "article",
          null,
          React.createElement(PostHeader, {
            title: visualTutorialFixture.title,
            date: visualTutorialFixture.date,
            image: visualTutorialFixture.featuredImage,
            articleSlug: visualTutorialFixture.slug,
            caption: prepared.heroCaption,
            tags: []
          }),
          React.createElement(PostBody, {
            content: visualTutorialFixture.body,
            articleSlug: visualTutorialFixture.slug,
            prepared
          })
        )
      )
    )
  )
);

const outputPath = path.resolve(process.argv[2] || "/private/tmp/xap-208-browser-fixture/index.html");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${metadata.title}</title><meta name="description" content="${metadata.description}"><link rel="canonical" href="${metadata.canonicalUrl}"><meta property="og:title" content="${metadata.title}"><meta property="og:description" content="${metadata.description}"><meta name="twitter:card" content="summary_large_image"><style>html,body{margin:0;overflow-x:clip}body{background:#202124}main{padding:48px 16px 96px}article{margin:0 auto;max-width:1200px;min-width:0;width:100%}@media(max-width:600px){main{padding-top:24px}}a{overflow-wrap:anywhere}</style></head><body>${content}</body></html>`
);

process.stdout.write(`${outputPath}\n`);

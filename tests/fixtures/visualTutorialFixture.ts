import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import { Asset, BlogBody } from "../../src/gql/graphql";

const slug = "start-with-a-problem-you-can-explain";

const text = (value: string) => ({ nodeType: "text", value, marks: [], data: {} });
const paragraph = (content: unknown[]) => ({ nodeType: BLOCKS.PARAGRAPH, data: {}, content });
const hyperlink = (uri: string, label: string) => ({
  nodeType: INLINES.HYPERLINK,
  data: { uri },
  content: [text(label)]
});
const assetHyperlink = (id: string, label: string) => ({
  nodeType: INLINES.ASSET_HYPERLINK,
  data: { target: { sys: { id } } },
  content: [text(label)]
});
const embeddedAsset = (id: string) => ({
  nodeType: BLOCKS.EMBEDDED_ASSET,
  data: { target: { sys: { id } } },
  content: []
});
const listItem = (content: unknown[]) => ({
  nodeType: BLOCKS.LIST_ITEM,
  data: {},
  content: [paragraph(content)]
});

const imageAsset = ({ id, title, description, width, height }: Record<string, string | number>) => ({
  __typename: "Asset",
  sys: { id },
  title,
  description,
  url: `https://images.ctfassets.net/example/${id}/${id}.png`,
  contentType: "image/png",
  fileName: `${id}.png`,
  size: 240000,
  width,
  height
});

export const visualTutorialFixture = {
  slug,
  title: "Start with a problem you can explain",
  excerpt: "Write a one-page opportunity brief that names the audience, current workaround and assumption to test.",
  date: "2026-09-21T12:00:00-05:00",
  featuredImage: imageAsset({
    id: "hero",
    title: `vtp1|${slug}|hero|hero|c1|a1`,
    description: "A rough product idea narrowing into one audience, one problem and one testable assumption.",
    width: 1600,
    height: 900
  }) as unknown as Asset,
  body: {
    json: {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        paragraph([
          text("A useful opportunity brief narrows the decision before it expands the feature list. · "),
          hyperlink("https://example.com/credits/hero", "Illustration by Example Studio")
        ]),
        { nodeType: BLOCKS.HEADING_2, data: {}, content: [text("Separate the idea from the problem")] },
        paragraph([
          text("Start with the situation a person can already recognize, then name the change worth testing.")
        ]),
        embeddedAsset("framework"),
        paragraph([text("A small framework for turning a broad idea into a testable opportunity.")]),
        embeddedAsset("comparison"),
        paragraph([
          text("Compare the current workaround with the proposed change. · "),
          hyperlink("https://example.com/credits/comparison", "Diagram by Example Studio")
        ]),
        embeddedAsset("completed-brief"),
        paragraph([text("The third graphic intentionally has no caption and must not consume this prose paragraph.")]),
        { nodeType: BLOCKS.HEADING_2, data: {}, content: [text("Use the opportunity resources")] },
        paragraph([text("Choose an editable or printable format.")]),
        {
          nodeType: BLOCKS.UL_LIST,
          data: {},
          content: [
            listItem([assetHyperlink("brief-pdf", "Download the opportunity brief as PDF (218 KB)")]),
            listItem([assetHyperlink("brief-docx", "Download the editable opportunity brief as DOCX (84 KB)")]),
            listItem([hyperlink("https://www.thexap.com/blog/choosing-a-beachhead", "Read a related product article")])
          ]
        }
      ]
    } as Document,
    links: {
      entries: { block: [], hyperlink: [], inline: [] },
      resources: { block: [], hyperlink: [], inline: [] },
      assets: {
        block: [
          imageAsset({
            id: "framework",
            title: `vtp1|${slug}|inline|framework|c1|a0`,
            description: "A four-part framework connects audience, situation, promised change and assumption.",
            width: 1400,
            height: 900
          }),
          imageAsset({
            id: "comparison",
            title: `vtp1|${slug}|inline|comparison|c1|a1`,
            description: "Two columns compare a current workaround with a proposed product change.",
            width: 1400,
            height: 1000
          }),
          imageAsset({
            id: "completed-brief",
            title: `vtp1|${slug}|inline|completed-brief|c0|a0`,
            description: "A completed fictional opportunity brief with one falsifiable assumption.",
            width: 1200,
            height: 1500
          })
        ],
        hyperlink: [
          {
            __typename: "Asset",
            sys: { id: "brief-pdf" },
            title: "Opportunity brief companion PDF",
            description: "A print-ready opportunity brief with a fictional example and completion check.",
            url: "https://assets.ctfassets.net/example/brief-pdf/opportunity-brief.pdf",
            contentType: "application/pdf",
            fileName: "opportunity-brief.pdf",
            size: 223744,
            width: null,
            height: null
          },
          {
            __typename: "Asset",
            sys: { id: "brief-docx" },
            title: "Opportunity brief companion DOCX",
            description: "An editable opportunity brief with the same prompts and fictional example.",
            url: "https://assets.ctfassets.net/example/brief-docx/opportunity-brief.docx",
            contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            fileName: "opportunity-brief.docx",
            size: 86016,
            width: null,
            height: null
          }
        ]
      }
    }
  } as unknown as BlogBody
};

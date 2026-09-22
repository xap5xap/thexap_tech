import { BLOCKS, Document, TopLevelBlock } from "@contentful/rich-text-types";

export const VISUAL_TUTORIAL_PROTOCOL = "vtp1";
export const VISUAL_TUTORIAL_PROSE_WIDTH = 760;
export const VISUAL_TUTORIAL_WIDE_WIDTH = 1120;

export type VisualTutorialRole = "hero" | "inline";

export type VisualTutorialAssetProtocol = {
  version: typeof VISUAL_TUTORIAL_PROTOCOL;
  slug: string;
  role: VisualTutorialRole;
  id: string;
  hasCaption: boolean;
  hasAttribution: boolean;
};

export type RichTextAssetShape = {
  sys?: { id?: string | null } | null;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  contentType?: string | null;
  fileName?: string | null;
  size?: number | null;
  width?: number | null;
  height?: number | null;
};

export type PreparedVisualTutorialContent = {
  document: Document;
  heroCaption: TopLevelBlock | null;
  inlineCaptions: Record<string, TopLevelBlock>;
  diagnostics: string[];
};

const VTP1_TITLE = /^vtp1\|([a-z0-9]+(?:-[a-z0-9]+)*)\|(hero|inline)\|([a-z][a-z0-9-]*)\|c([01])\|a([01])$/;

export const parseVisualTutorialAssetTitle = (title?: string | null): VisualTutorialAssetProtocol | null => {
  if (!title) return null;

  const match = VTP1_TITLE.exec(title);
  if (!match) return null;

  return {
    version: VISUAL_TUTORIAL_PROTOCOL,
    slug: match[1],
    role: match[2] as VisualTutorialRole,
    id: match[3],
    hasCaption: match[4] === "1",
    hasAttribution: match[5] === "1"
  };
};

export const protocolMatchesArticle = (
  protocol: VisualTutorialAssetProtocol | null,
  articleSlug: string,
  role: VisualTutorialRole
): protocol is VisualTutorialAssetProtocol => protocol?.slug === articleSlug && protocol.role === role;

export const protocolHasCaptionContent = (protocol: VisualTutorialAssetProtocol | null): boolean =>
  Boolean(protocol?.hasCaption || protocol?.hasAttribution);

const isParagraph = (node: TopLevelBlock | undefined): node is TopLevelBlock => node?.nodeType === BLOCKS.PARAGRAPH;

const embeddedAssetId = (node: TopLevelBlock): string | null => {
  if (node.nodeType !== BLOCKS.EMBEDDED_ASSET) return null;

  const id = node.data?.target?.sys?.id;
  return typeof id === "string" && id.length > 0 ? id : null;
};

export const prepareVisualTutorialContent = ({
  document,
  blockAssets,
  featuredImage,
  articleSlug
}: {
  document: Document;
  blockAssets: Array<RichTextAssetShape | null | undefined>;
  featuredImage?: RichTextAssetShape | null;
  articleSlug: string;
}): PreparedVisualTutorialContent => {
  const diagnostics: string[] = [];
  const inlineCaptions: Record<string, TopLevelBlock> = {};
  const nodes = [...document.content];
  let heroCaption: TopLevelBlock | null = null;

  const heroProtocol = parseVisualTutorialAssetTitle(featuredImage?.title);
  if (protocolMatchesArticle(heroProtocol, articleSlug, "hero") && protocolHasCaptionContent(heroProtocol)) {
    if (isParagraph(nodes[0])) {
      heroCaption = nodes.shift() || null;
    } else {
      diagnostics.push(
        `The vtp1 hero for "${articleSlug}" declares caption content but the first body node is not a paragraph.`
      );
    }
  }

  const assetsById = new Map<string, RichTextAssetShape>();
  blockAssets.forEach(asset => {
    const id = asset?.sys?.id;
    if (id) assetsById.set(id, asset);
  });

  const bodyNodes: TopLevelBlock[] = [];

  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    bodyNodes.push(node);

    const assetId = embeddedAssetId(node);
    if (!assetId) continue;

    const asset = assetsById.get(assetId);
    if (!asset) {
      diagnostics.push(`Embedded Asset "${assetId}" is missing from the Contentful block Asset collection.`);
      continue;
    }

    const protocol = parseVisualTutorialAssetTitle(asset.title);
    if (!protocolMatchesArticle(protocol, articleSlug, "inline") || !protocolHasCaptionContent(protocol)) continue;

    const captionNode = nodes[index + 1];
    if (!isParagraph(captionNode)) {
      diagnostics.push(
        `The vtp1 inline Asset "${assetId}" declares caption content but is not followed by a paragraph.`
      );
      continue;
    }

    inlineCaptions[assetId] = captionNode;
    index += 1;
  }

  return {
    document: { ...document, content: bodyNodes },
    heroCaption,
    inlineCaptions,
    diagnostics
  };
};

export const plainTextFromLegacyDescription = (description?: string | null): string =>
  (description || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const SUPPORTED_IMAGE_TYPES = new Set(["image/gif", "image/jpeg", "image/png", "image/webp"]);

export const isSupportedImageAsset = (asset?: RichTextAssetShape | null): boolean =>
  Boolean(
    asset?.url &&
    asset.contentType &&
    SUPPORTED_IMAGE_TYPES.has(asset.contentType) &&
    Number.isInteger(asset.width) &&
    Number.isInteger(asset.height) &&
    Number(asset.width) > 0 &&
    Number(asset.height) > 0
  );

export const isPdfAsset = (asset?: RichTextAssetShape | null): boolean => asset?.contentType === "application/pdf";

export const isDocxAsset = (asset?: RichTextAssetShape | null): boolean =>
  asset?.contentType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export const getSafeContentfulAssetHref = (href?: string | null): string | null => {
  if (!href) return null;

  try {
    const parsed = new URL(href);
    if (parsed.protocol !== "https:") return null;
    if (parsed.hostname !== "assets.ctfassets.net" && parsed.hostname !== "images.ctfassets.net") return null;
    return parsed.toString();
  } catch {
    return null;
  }
};

export const formatAssetSize = (size?: number | null): string | null => {
  if (!size || size <= 0) return null;
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(size >= 10 * 1024 * 1024 ? 0 : 1)} MB`;
};

const SITE_ORIGIN = "https://www.thexap.com";

export const getSiteOwnedHref = (href: string): string | null => {
  try {
    const parsed = new URL(href, SITE_ORIGIN);
    if (parsed.origin !== SITE_ORIGIN) return null;
    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return null;
  }
};

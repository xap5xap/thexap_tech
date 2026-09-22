import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Image from "next/image";
import { TopLevelBlock } from "@contentful/rich-text-types";
import { BlogBodyAssets } from "../gql/graphql";
import {
  getSafeContentfulAssetHref,
  isSupportedImageAsset,
  parseVisualTutorialAssetTitle,
  protocolMatchesArticle,
  VISUAL_TUTORIAL_PROSE_WIDTH,
  VISUAL_TUTORIAL_WIDE_WIDTH
} from "../lib/visualTutorial";
import RichTextCaption from "./Blog/RichTextCaption";
import { articleLinkSx } from "./Blog/RichTextHyperlink";

type Props = {
  id: string;
  assets: BlogBodyAssets;
  articleSlug: string;
  caption?: TopLevelBlock;
};

export default function RichTextAsset({ id, assets, articleSlug, caption }: Props) {
  const asset = assets?.block?.find(candidate => candidate?.sys?.id === id);
  const safeHref = getSafeContentfulAssetHref(asset?.url);

  if (!asset || !safeHref) {
    console.warn(`[Contentful] Embedded Asset "${id}" is missing or has no safe delivery URL.`);
    return null;
  }

  if (!isSupportedImageAsset(asset)) {
    console.warn(
      `[Contentful] Embedded Asset "${id}" cannot render as an image because its type or dimensions are unsupported.`
    );
    return (
      <Box sx={{ marginX: "auto", marginY: 3, maxWidth: VISUAL_TUTORIAL_PROSE_WIDTH, width: "100%" }}>
        <Link href={safeHref} sx={articleLinkSx}>
          {asset.title || asset.fileName || "Open the linked resource"}
        </Link>
      </Box>
    );
  }

  const protocol = parseVisualTutorialAssetTitle(asset.title);
  const tutorialImage = protocolMatchesArticle(protocol, articleSlug, "inline");
  const presentationWidth = tutorialImage ? VISUAL_TUTORIAL_WIDE_WIDTH : VISUAL_TUTORIAL_PROSE_WIDTH;
  const maxWidth = Math.min(presentationWidth, asset.width as number);

  return (
    <Box
      component="figure"
      data-asset-protocol={tutorialImage ? protocol.version : "legacy"}
      sx={{
        marginX: "auto",
        marginY: { xs: 4, md: 6 },
        maxWidth,
        width: "100%"
      }}
    >
      <Image
        src={safeHref}
        width={asset.width as number}
        height={asset.height as number}
        alt={asset.description || ""}
        sizes={
          tutorialImage
            ? "(max-width: 1199px) calc(100vw - 32px), 1120px"
            : "(max-width: 799px) calc(100vw - 32px), 760px"
        }
        style={{ display: "block", height: "auto", maxWidth: "100%", width: "100%" }}
      />
      {tutorialImage && caption ? <RichTextCaption node={caption} /> : null}
    </Box>
  );
}

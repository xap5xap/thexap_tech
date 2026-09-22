import { TopLevelBlock } from "@contentful/rich-text-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Asset, ContentfulTag, Maybe } from "../../gql/graphql";
import TagsChips from "../TagsChips";
import { formatBlogDate } from "../../lib/blogDate";
import {
  isSupportedImageAsset,
  parseVisualTutorialAssetTitle,
  plainTextFromLegacyDescription,
  protocolMatchesArticle,
  VISUAL_TUTORIAL_PROSE_WIDTH
} from "../../lib/visualTutorial";
import RichTextCaption from "./RichTextCaption";

type Props = {
  title?: Maybe<string>;
  tags?: Maybe<ContentfulTag>[] | undefined;
  date?: string;
  image?: Maybe<Asset>;
  articleSlug: string;
  caption?: TopLevelBlock | null;
};

const PostHeader = ({ title, tags, date, image, articleSlug, caption }: Props) => {
  const dateLabel = formatBlogDate(date);
  const protocol = parseVisualTutorialAssetTitle(image?.title);
  const tutorialHero = protocolMatchesArticle(protocol, articleSlug, "hero");
  const legacyCaption = tutorialHero ? "" : plainTextFromLegacyDescription(image?.description);
  const alt = tutorialHero ? image?.description?.trim() || "" : `Cover image for ${title || "this article"}`;
  const canRenderImage = isSupportedImageAsset(image);

  if (image?.url && !canRenderImage) {
    console.warn(`[Contentful] Featured Asset for "${articleSlug}" has unsupported or missing image metadata.`);
  }

  return (
    <>
      <Box
        component="header"
        sx={{ marginX: "auto", maxWidth: VISUAL_TUTORIAL_PROSE_WIDTH, paddingBottom: 2, width: "100%" }}
      >
        <Typography component="h1" variant="h1">
          {title || ""}
        </Typography>
        <TagsChips tags={tags} />
      </Box>
      <Divider sx={{ marginX: "auto", maxWidth: VISUAL_TUTORIAL_PROSE_WIDTH, width: "100%" }} />
      {dateLabel && (
        <Typography
          component="time"
          dateTime={date}
          mt={4}
          variant="body2"
          sx={{ display: "block", marginX: "auto", maxWidth: VISUAL_TUTORIAL_PROSE_WIDTH, width: "100%" }}
        >
          {dateLabel}
        </Typography>
      )}
      {canRenderImage ? (
        <Box
          component="figure"
          data-asset-protocol={tutorialHero ? protocol.version : "legacy"}
          sx={{
            marginX: "auto",
            marginY: { xs: 4, md: 6 },
            maxWidth: Math.min(1060, image?.width as number),
            width: "100%"
          }}
        >
          <Image
            style={{ borderRadius: "24px", display: "block", height: "auto", maxWidth: "100%", width: "100%" }}
            src={image?.url || ""}
            alt={alt}
            width={image?.width as number}
            height={image?.height as number}
            sizes="(max-width: 1099px) calc(100vw - 32px), 1060px"
          />
          {tutorialHero && caption ? <RichTextCaption node={caption} /> : null}
          {!tutorialHero && legacyCaption ? (
            <Box component="figcaption" sx={{ color: "text.secondary", marginTop: 1.5, textAlign: "left" }}>
              <Typography component="span" variant="caption" sx={{ lineHeight: 1.65 }}>
                {legacyCaption}
              </Typography>
            </Box>
          ) : null}
        </Box>
      ) : null}
    </>
  );
};

export default PostHeader;

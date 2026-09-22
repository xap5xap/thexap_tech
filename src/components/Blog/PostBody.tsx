import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { Block, Inline } from "@contentful/rich-text-types";
import Box from "@mui/material/Box";
import { BlogBody } from "../../gql/graphql";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import HyperlinkEntry from "../HyperLinkEntry";
import HighlightedCode from "../HighlightedCode";
import RichTextAsset from "../RichTextAsset";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import RichTextAssetLink from "./RichTextAssetLink";
import RichTextHyperlink from "./RichTextHyperlink";
import { PreparedVisualTutorialContent, VISUAL_TUTORIAL_PROSE_WIDTH } from "../../lib/visualTutorial";

type Props = {
  content: BlogBody;
  articleSlug: string;
  prepared: PreparedVisualTutorialContent;
};

const proseSx = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: VISUAL_TUTORIAL_PROSE_WIDTH,
  width: "100%"
};

const customMarkdownOptions = (
  content: BlogBody,
  articleSlug: string,
  inlineCaptions: PreparedVisualTutorialContent["inlineCaptions"]
): Options => ({
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h1" sx={proseSx}>
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => {
      return (
        <Typography variant="h2" sx={{ ...proseSx, marginTop: 6 }}>
          {children}
        </Typography>
      );
    },
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h3" sx={{ ...proseSx, marginTop: 4 }}>
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: ReactNode) => {
      return (
        <Typography variant="h4" sx={{ ...proseSx, marginTop: 3 }}>
          {children}
        </Typography>
      );
    },
    [BLOCKS.HEADING_5]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h5" sx={{ ...proseSx, marginTop: 2 }}>
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h6" sx={{ ...proseSx, marginTop: 2 }}>
        {children}
      </Typography>
    ),
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => {
      if (
        node.content.length === 1 &&
        node.content[0].nodeType === "text" &&
        node.content[0].marks.length > 0 &&
        node.content[0].marks[0].type === "code"
      ) {
        return (
          <Box sx={proseSx}>
            <HighlightedCode renderPre>{children}</HighlightedCode>
          </Box>
        );
      }
      return (
        <Typography variant="body1" component="p" marginY={2} sx={{ ...proseSx, overflowWrap: "anywhere" }}>
          {children}
        </Typography>
      );
    },
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => (
      <Box component="ul" sx={{ ...proseSx, paddingLeft: { xs: 3, sm: 4 } }}>
        {children}
      </Box>
    ),
    [BLOCKS.OL_LIST]: (node: Block | Inline, children: ReactNode) => (
      <Box component="ol" sx={{ ...proseSx, paddingLeft: { xs: 3, sm: 4 } }}>
        {children}
      </Box>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: ReactNode) => (
      <Box component="li" sx={{ marginY: 1 }}>
        {children}
      </Box>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const id = String(node.data.target?.sys?.id || "");
      return (
        <RichTextAsset id={id} assets={content.links.assets} articleSlug={articleSlug} caption={inlineCaptions[id]} />
      );
    },
    [BLOCKS.QUOTE]: (node: Block | Inline, children: ReactNode) => {
      return (
        <Paper
          component="blockquote"
          sx={{
            ...proseSx,
            border: "1px solid",
            borderLeft: "8px solid",
            paddingY: 1,
            paddingX: 2,
            marginTop: 5,
            marginBottom: 5,
            "& p": {
              color: "text.secondary"
            }
          }}
        >
          <Typography component="div" variant="body1">
            {children}
          </Typography>
        </Paper>
      );
    },
    [BLOCKS.HR]: () => <Divider sx={{ ...proseSx, marginY: 4 }} />,
    [INLINES.ENTRY_HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
      return (
        <HyperlinkEntry id={node.data.target.sys.id} entries={content.links.entries}>
          {children}
        </HyperlinkEntry>
      );
    },
    [INLINES.ASSET_HYPERLINK]: (node: Block | Inline, children: ReactNode) => (
      <RichTextAssetLink id={node.data.target.sys.id} assets={content.links.assets}>
        {children}
      </RichTextAssetLink>
    ),
    [INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
      return <RichTextHyperlink href={String(node.data.uri || "")}>{children}</RichTextHyperlink>;
    }
  },
  renderMark: {
    [MARKS.CODE]: text => {
      return <HighlightedCode>{text}</HighlightedCode>;
    }
  }
});

const PostBody = ({ content, articleSlug, prepared }: Props) => {
  return (
    <Box sx={{ minWidth: 0, width: "100%" }}>
      {documentToReactComponents(
        prepared.document,
        customMarkdownOptions(content, articleSlug, prepared.inlineCaptions)
      )}
    </Box>
  );
};

export default PostBody;

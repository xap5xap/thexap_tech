import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Block, Document, Inline, Text } from "@contentful/rich-text-types";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { BlogBody } from "../../gql/graphql";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import HyperlinkEntry from "../HyperLinkEntry";
import HighlightedCode from "../HighlightedCode";

type Props = {
  content: BlogBody;
};

const customMarkdownOptions = (content: BlogBody): Options => ({
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h1">{children}</Typography>
    ),
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => {
      return <Typography variant="h2">{children}</Typography>;
    },
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h3" mt={4}>
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: ReactNode) => {
      return (
        <Typography variant="h4" mt={3}>
          {children}
        </Typography>
      );
    },
    [BLOCKS.HEADING_5]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h5" mt={2}>
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="h6" mt={2}>
        {children}
      </Typography>
    ),
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
      <Typography variant="body1" component="div">
        {children}
      </Typography>
    ),

    [INLINES.ENTRY_HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
      return (
        <HyperlinkEntry
          id={node.data.target.sys.id}
          entries={content.links.entries}
        >
          {children}
        </HyperlinkEntry>
      );
    },
    [INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
      return <Link href={node.data.uri}>{children}</Link>;
    },
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      return <HighlightedCode>{text}</HighlightedCode>;
    },
  },
});

const PostBody = ({ content }: Props) => {
  return (
    <Box>
      <Box>
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content)
        )}
      </Box>
    </Box>
  );
};

export default PostBody;

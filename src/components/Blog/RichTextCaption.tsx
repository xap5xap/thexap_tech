import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES, TopLevelBlock } from "@contentful/rich-text-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment, ReactNode } from "react";
import RichTextHyperlink from "./RichTextHyperlink";

type Props = {
  node: TopLevelBlock;
};

const captionOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children: ReactNode) => <Fragment>{children}</Fragment>,
    [INLINES.HYPERLINK]: (node, children: ReactNode) => (
      <RichTextHyperlink href={String(node.data.uri || "")}>{children}</RichTextHyperlink>
    )
  }
};

const RichTextCaption = ({ node }: Props) => {
  const document: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [node]
  };

  return (
    <Box component="figcaption" sx={{ color: "text.secondary", marginTop: 1.5, textAlign: "left" }}>
      <Typography component="span" variant="caption" sx={{ lineHeight: 1.65 }}>
        {documentToReactComponents(document, captionOptions)}
      </Typography>
    </Box>
  );
};

export default RichTextCaption;

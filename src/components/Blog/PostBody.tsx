import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Box from "@mui/material/Box";
import { BlogBody } from "../../gql/graphql";
import { BLOCKS } from "@contentful/rich-text-types";
import RichTextAsset from "../RichTextAsset";

type Props = {
  content: BlogBody;
};

const customMarkdownOptions = (content: BlogBody) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      console.log("node", node);
      return (
        <div></div>
        //   <RichTextAsset
        //     id={node.data.target.sys.id}
        //     assets={content.links.assets.block}
        //   />
      );
    },
  },
});

const PostBody = ({ content }: Props) => {
  return (
    <Box>
      <Box>
        {/* <Box className={markdownStyles["markdown"]}> */}
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content)
        )}
      </Box>
    </Box>
  );
};

export default PostBody;

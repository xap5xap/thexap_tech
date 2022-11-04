import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ContentfulTag, Maybe } from "../../gql/graphql";
import TagsChips from "../TagsChips";

type Props = {
  title?: Maybe<string>;
  tags: Maybe<ContentfulTag>[];
  url?: Maybe<string>;
};

const PostHeader = ({ title, tags, url }: Props) => {
  return (
    <>
      <Box component="section" sx={{ paddingBottom: 2 }}>
        <Typography component="h1" variant="h1">
          {title || ""}
        </Typography>
        <TagsChips tags={tags} />
      </Box>
      <Divider />
      <Box sx={{ textAlign: "center", paddingY: 6 }} component="section">
        <Image
          style={{ borderRadius: "24px" }}
          //   layout="responsive"
          src={url || ""}
          alt={`Cover image for ${title}`}
          width={1060}
          height={742}
        />
      </Box>
    </>
  );
};

export default PostHeader;

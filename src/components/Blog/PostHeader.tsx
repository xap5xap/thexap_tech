import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Asset, ContentfulTag, Maybe } from "../../gql/graphql";
import TagsChips from "../TagsChips";
import { format } from "date-fns";

type Props = {
  title?: Maybe<string>;
  tags?: Maybe<ContentfulTag>[] | undefined;
  url?: Maybe<string>;
  date?: string;
  image?: Maybe<Asset>;
};

const PostHeader = ({ title, tags, date, image }: Props) => {
  return (
    <>
      <Box component="section" sx={{ paddingBottom: 2 }}>
        <Typography component="h1" variant="h1">
          {title || ""}
        </Typography>
        <TagsChips tags={tags} />
      </Box>
      <Divider />
      {date &&
      <Typography mt={4} variant="body2">
        {format(new Date(date || ""), "MMMM dd, yyyy")}
      </Typography>}
      <Box sx={{ textAlign: "center", paddingY: 6 }} component="section">
        <Image
          style={{ borderRadius: "24px" }}
          //   layout="responsive"
          src={image?.url || ""}
          alt={`Cover image for ${title}`}
          width={1060}
          height={742}
        />
        {(image?.description || "").length > 0 && (
          <Typography
            variant="caption"
            component="div"
            dangerouslySetInnerHTML={{
              __html: image?.description || ""
            }}
          ></Typography>
        )}
      </Box>
    </>
  );
};

export default PostHeader;

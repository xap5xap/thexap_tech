import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { ContentfulTag, Maybe } from "../gql/graphql";

type Props = {
  tags?: Maybe<ContentfulTag>[] | undefined;
};

const TagsChips = ({ tags }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: 2,
        paddingY: 2,
        paddingX: 1,
      }}
    >
      {tags?.map((el) => (
        <Chip key={el?.id} label={el?.name} />
      ))}
    </Box>
  );
};

export default TagsChips;

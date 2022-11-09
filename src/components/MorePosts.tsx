import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Blog, Maybe } from "../gql/graphql";
import BlogCard from "./Blog/BlogCard";

type Props = {
  posts: Array<Maybe<Blog>>;
};

const MorePosts = ({ posts }: Props) => {
  return (
    <Box sx={{ py: 9 }}>
      <Divider sx={{ mb: 9 }} />
      <Typography variant="subtitle1" mb={3}>
        You might also like
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        {posts.map((el, idx) => (
          <BlogCard key={idx} blog={el as Blog} />
        ))}
      </Box>
    </Box>
  );
};

export default MorePosts;

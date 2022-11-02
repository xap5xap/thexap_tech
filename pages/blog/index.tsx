import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BlogCard from "../../src/components/Blog/BlogCard";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import { getAllPostForBlogPage } from "../../src/lib/blogApi";

export type Blog = {
  title: string;
  slug: string;
  thumbnailImage: {
    url: string;
  };
  excerpt: string;
};
type Props = {
  allPosts: Blog[];
};

const BlogPage = ({ allPosts }: Props) => {
  console.log("allPosts", allPosts);
  return (
    <HeaderFooterLayout>
      <Box sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
        <Container>
          <Typography variant="h3">Blog</Typography>
        </Container>
      </Box>
      <Container
        sx={{
          paddingY: 9,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          columnGap: 4,
          rowGap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BlogCard />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BlogCard />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BlogCard />
        </Box>
      </Container>
    </HeaderFooterLayout>
  );
};

export const getStaticProps = async () => {
  const allPosts = (await getAllPostForBlogPage()) ?? [];
  console.log("allPosts", allPosts);
  return {
    props: { allPosts },
  };
};

export default BlogPage;

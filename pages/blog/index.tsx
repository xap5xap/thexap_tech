import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BlogCard from "../../src/components/Blog/BlogCard";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import { client } from "../../src/contentful/urqlClient";
import { graphql } from "../../src/gql";
import { Blog, BlogListForHomeQuery } from "../../src/gql/graphql";
import { getPreviewFromEnv } from "../../src/lib/utils";
import Masonry from "@mui/lab/Masonry";

const blogListForHome = graphql(/* GraphQL */ `
  query blogListForHome($preview: Boolean) {
    blogCollection(order: date_DESC, preview: $preview) {
      items {
        title
        slug
        excerpt
        featuredImage {
          url
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
    }
  }
`);

const BlogPage = (props: BlogListForHomeQuery) => {
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
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Masonry columns={{ xs: 1, md: 2 }} spacing={4} defaultHeight={450} defaultColumns={2} defaultSpacing={1}>
          {(props.blogCollection?.items || [])
            .filter(el => el !== null)
            .map((el, idx) => (
              <BlogCard key={idx} blog={el as Blog} />
            ))}
        </Masonry>
      </Container>
    </HeaderFooterLayout>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query(blogListForHome, { preview: getPreviewFromEnv() }).toPromise();

  return {
    props: { blogCollection: data?.blogCollection }
  };
};

export default BlogPage;

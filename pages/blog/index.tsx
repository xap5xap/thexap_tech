import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BlogCard from "../../src/components/Blog/BlogCard";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import { client } from "../../src/contentful/urqlClient";
import { graphql } from "../../src/gql";
import { Blog, BlogListForHomeQuery } from "../../src/gql/graphql";

const blogListForHome = graphql(/* GraphQL */ `
  query blogListForHome {
    blogCollection(order: date_DESC) {
      items {
        title
        slug
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
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          columnGap: 4,
          rowGap: 5,
        }}
      >
        {props.blogCollection?.items
          .filter((el) => el !== null)
          .map((el, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BlogCard blog={el as Blog} />
            </Box>
          ))}
      </Container>
    </HeaderFooterLayout>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query(blogListForHome, {}).toPromise();
  return {
    props: { blogCollection: data?.blogCollection },
  };
};

export default BlogPage;

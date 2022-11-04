import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";
import PostHeader from "../../src/components/Blog/PostHeader";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import { client } from "../../src/contentful/urqlClient";
import { graphql } from "../../src/gql";
import { Blog, BlogBody } from "../../src/gql/graphql";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import PostBody from "../../src/components/Blog/PostBody";
import BlogCover from "../../src/components/BlogCover";

const getPostAndMorePosts = graphql(/* GraphQL */ `
  query getPostAndMorePosts($slug: String) {
    blogCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        body {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                description
              }
            }
          }
        }
        date
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
type Props = {
  blog: Blog;
};
const IndividualBlogPage = ({ blog }: Props) => {
  console.log("inside blog", blog);
  const router = useRouter();

  if (!router.isFallback && !blog) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <HeaderFooterLayout>
      <BlogCover title={blog?.title} url={blog.featuredImage?.url} />
      {router.isFallback ? (
        <Box>Loading</Box>
      ) : (
        <Container
          component="article"
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 12,
          }}
        >
          <Head>
            <title>We are stronger as a group than an individual</title>
            <meta property="og:image" content="/images/daniel.jpg" />
          </Head>
          <PostHeader
            title={blog?.title}
            tags={blog?.contentfulMetadata.tags}
            url={blog.featuredImage?.url}
          />
          <PostBody content={blog?.body as BlogBody} />
        </Container>
      )}
    </HeaderFooterLayout>
  );
};

export const getStaticProps = async () => {
  const { data } = await client
    .query(getPostAndMorePosts, { slug: "first-post" })
    .toPromise();
  console.log(
    "data?.blogCollection?.items?.[0]",
    data?.blogCollection?.items?.[0]
  );
  return { props: { blog: data?.blogCollection?.items?.[0] } };
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export default IndividualBlogPage;

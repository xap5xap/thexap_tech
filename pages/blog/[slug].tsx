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
import { Blog, BlogBody, Maybe } from "../../src/gql/graphql";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import PostBody from "../../src/components/Blog/PostBody";
import BlogCover from "../../src/components/BlogCover";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import MorePosts from "../../src/components/MorePosts";
import SkeletonBlogPost from "../../src/components/Blog/SkeletonBlogPost";
import { getPreviewFromEnv } from "../../src/lib/utils";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const getAllPostsWithSlug = graphql(/* GraphQL */ `
  query getAllPostsWithSlug($preview: Boolean) {
    blogCollection(where: { slug_exists: true }, order: date_DESC, limit: 200, preview: $preview) {
      items {
        slug
      }
    }
  }
`);

const getMorePosts = graphql(/* GraphQL */ `
  query getMorePosts($slug: String, $preview: Boolean) {
    blogCollection(where: { slug_not: $slug }, order: date_DESC, limit: 2, preview: $preview) {
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

const getPostBySlug = graphql(/* GraphQL */ `
  query getPostBySlug($slug: String, $preview: Boolean) {
    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
      items {
        title
        body {
          json
          links {
            entries {
              hyperlink {
                sys {
                  id
                }
                ... on Blog {
                  title
                  slug
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                url
                description
                width
                height
              }
            }
          }
        }
        date
        slug
        featuredImage {
          url
          description
          width
          height
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
  blog: Maybe<Blog> | undefined;
  morePosts: Array<Maybe<Blog>>;
};

const IndividualBlogPage = ({ blog, morePosts }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !blog) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <HeaderFooterLayout>
      {router.isFallback ? (
        <SkeletonBlogPost />
      ) : (
        <>
          <BlogCover title={blog?.title} url={blog?.featuredImage?.url} />
          <Container
            component="article"
            sx={{
              display: "flex",
              margin: 1,
              flexDirection: "column",
              paddingTop: 12
            }}
          >
            <Head>
              <title>{blog?.title}</title>
              <meta property="og:image" content={blog?.featuredImage?.url || ""} />
            </Head>
            <PostHeader
              title={blog?.title}
              tags={blog?.contentfulMetadata?.tags}
              image={blog?.featuredImage}
              date={blog?.date}
            />
            <PostBody content={blog?.body as BlogBody} />
            <MorePosts posts={morePosts} />
          </Container>
        </>
      )}
    </HeaderFooterLayout>
  );
};

export const getStaticProps: GetStaticProps<Props | any, Params> = async ({ params }) => {
  const { data } = await client.query(getPostBySlug, { slug: params?.slug, preview: getPreviewFromEnv() }).toPromise();
  const morePosts = await client.query(getMorePosts, { slug: params?.slug, preview: getPreviewFromEnv() }).toPromise();

  return {
    props: {
      blog: data?.blogCollection?.items?.[0] || null,
      morePosts: morePosts.data?.blogCollection?.items
    }
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  let paths: Array<string | { params: Params }> | undefined = [];
  if (process.env.NODE_ENV === "production") {
    const { data } = await client.query(getAllPostsWithSlug, { preview: getPreviewFromEnv() }).toPromise();

    paths = data?.blogCollection?.items.map(el => ({
      params: { slug: el?.slug as string }
    }));
  }
  return { paths: paths || [], fallback: true };
};

export default IndividualBlogPage;

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

interface Params extends ParsedUrlQuery {
  slug: string;
}

const getMorePosts = graphql(/* GraphQL */ `
  query getMorePosts($slug: String) {
    blogCollection(where: { slug_not: $slug }, order: date_DESC, limit: 2) {
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
  query getPostBySlug($slug: String) {
    blogCollection(where: { slug: $slug }, limit: 1) {
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
              flexDirection: "column",
              paddingTop: 12,
            }}
          >
            <Head>
              <title>{blog?.title}</title>
              <meta
                property="og:image"
                content={blog?.featuredImage?.url || ""}
              />
            </Head>
            <PostHeader
              title={blog?.title}
              tags={blog?.contentfulMetadata?.tags}
              url={blog?.featuredImage?.url}
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

export const getStaticProps: GetStaticProps<Props | any, Params> = async ({
  params,
}) => {
  const { data } = await client
    .query(getPostBySlug, { slug: params?.slug })
    .toPromise();

  const morePosts = await client
    .query(getMorePosts, { slug: params?.slug })
    .toPromise();

  return {
    props: {
      blog: data?.blogCollection?.items?.[0],
      morePosts: morePosts.data?.blogCollection?.items,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return { paths: [], fallback: true };
};

export default IndividualBlogPage;

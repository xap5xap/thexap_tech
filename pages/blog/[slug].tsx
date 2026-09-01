import Container from "@mui/material/Container";
import Head from "next/head";
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
import {
  getMissingBlogEntryFields,
  isRenderableBlogCard,
  isRenderableBlogEntry
} from "../../src/lib/blogContentPolicy";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const getAllPostsWithSlug = graphql(/* GraphQL */ `
  query getAllPostsWithSlug($preview: Boolean) {
    blogCollection(
      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }
      order: date_DESC
      limit: 200
      preview: $preview
    ) {
      items {
        slug
      }
    }
  }
`);

const getIncompleteBlogEntries = graphql(/* GraphQL */ `
  query getIncompleteBlogEntries($preview: Boolean) {
    blogCollection(
      where: {
        OR: [{ slug_exists: false }, { title_exists: false }, { body_exists: false }, { featuredImage_exists: false }]
      }
      limit: 200
      preview: $preview
    ) {
      items {
        title
        slug
        body {
          json
        }
        featuredImage {
          url
        }
      }
    }
  }
`);

const getMorePosts = graphql(/* GraphQL */ `
  query getMorePosts($slug: String, $preview: Boolean) {
    blogCollection(
      where: { slug_not: $slug, slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }
      order: date_DESC
      limit: 2
      preview: $preview
    ) {
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

  if (router.isFallback) {
    return (
      <HeaderFooterLayout>
        <SkeletonBlogPost />
      </HeaderFooterLayout>
    );
  }

  if (!isRenderableBlogEntry(blog)) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <HeaderFooterLayout>
      <BlogCover title={blog.title} url={blog.featuredImage.url} />
      <Container
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 12
        }}
      >
        <Head>
          <title>{blog.title}</title>
          <meta property="og:image" content={blog.featuredImage.url} />
        </Head>
        <PostHeader
          title={blog.title}
          tags={blog.contentfulMetadata?.tags}
          image={blog.featuredImage}
          date={blog.date}
        />
        <PostBody content={blog.body as BlogBody} />
        <MorePosts posts={morePosts} />
      </Container>
    </HeaderFooterLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, Params> = async ({ params }) => {
  const postResult = await client
    .query(getPostBySlug, { slug: params?.slug, preview: getPreviewFromEnv() })
    .toPromise();

  if (postResult.error) {
    throw postResult.error;
  }

  const blog = postResult.data?.blogCollection?.items?.[0];

  if (!isRenderableBlogEntry(blog)) {
    if (blog) {
      console.warn(
        `[Contentful] Blog entry "${params?.slug}" is not renderable; missing required fields: ${getMissingBlogEntryFields(
          blog
        ).join(", ")}. Returning 404.`
      );
    }

    return { notFound: true };
  }

  const morePostsResult = await client
    .query(getMorePosts, { slug: params?.slug, preview: getPreviewFromEnv() })
    .toPromise();

  if (morePostsResult.error) {
    throw morePostsResult.error;
  }

  return {
    props: {
      blog,
      morePosts: (morePostsResult.data?.blogCollection?.items || []).filter(isRenderableBlogCard)
    }
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  let paths: Array<string | { params: Params }> | undefined = [];
  if (process.env.NODE_ENV === "production") {
    const preview = getPreviewFromEnv();
    const [result, incompleteResult] = await Promise.all([
      client.query(getAllPostsWithSlug, { preview }).toPromise(),
      client.query(getIncompleteBlogEntries, { preview }).toPromise()
    ]);

    if (result.error) {
      throw result.error;
    }

    if (incompleteResult.error) {
      throw incompleteResult.error;
    }

    incompleteResult.data?.blogCollection?.items.forEach(entry => {
      console.warn(
        `[Contentful] Blog entry "${entry?.slug || "(missing slug)"}" was excluded from static generation; missing required fields: ${getMissingBlogEntryFields(
          entry
        ).join(", ")}.`
      );
    });

    paths = (result.data?.blogCollection?.items || [])
      .filter((entry): entry is { slug: string } => Boolean(entry?.slug))
      .map(entry => ({ params: { slug: entry.slug } }));
  }
  return { paths: paths || [], fallback: "blocking" };
};

export default IndividualBlogPage;

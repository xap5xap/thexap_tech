/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  query getAllPostsWithSlug($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n": typeof types.GetAllPostsWithSlugDocument;
  "\n  query getIncompleteBlogEntries($preview: Boolean) {\n    blogCollection(\n      where: {\n        OR: [{ slug_exists: false }, { title_exists: false }, { body_exists: false }, { featuredImage_exists: false }]\n      }\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        body {\n          json\n        }\n        featuredImage {\n          url\n        }\n      }\n    }\n  }\n": typeof types.GetIncompleteBlogEntriesDocument;
  "\n  query getMorePosts($slug: String, $preview: Boolean) {\n    blogCollection(\n      where: { slug_not: $slug, slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 2\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetMorePostsDocument;
  "\n  query getPostBySlug($slug: String, $preview: Boolean) {\n    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {\n      items {\n        title\n        body {\n          json\n          links {\n            entries {\n              hyperlink {\n                sys {\n                  id\n                }\n                ... on Blog {\n                  title\n                  slug\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n                width\n                height\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n          description\n          width\n          height\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetPostBySlugDocument;
  "\n  query blogListForHome($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        excerpt\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.BlogListForHomeDocument;
};
const documents: Documents = {
  "\n  query getAllPostsWithSlug($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n":
    types.GetAllPostsWithSlugDocument,
  "\n  query getIncompleteBlogEntries($preview: Boolean) {\n    blogCollection(\n      where: {\n        OR: [{ slug_exists: false }, { title_exists: false }, { body_exists: false }, { featuredImage_exists: false }]\n      }\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        body {\n          json\n        }\n        featuredImage {\n          url\n        }\n      }\n    }\n  }\n":
    types.GetIncompleteBlogEntriesDocument,
  "\n  query getMorePosts($slug: String, $preview: Boolean) {\n    blogCollection(\n      where: { slug_not: $slug, slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 2\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.GetMorePostsDocument,
  "\n  query getPostBySlug($slug: String, $preview: Boolean) {\n    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {\n      items {\n        title\n        body {\n          json\n          links {\n            entries {\n              hyperlink {\n                sys {\n                  id\n                }\n                ... on Blog {\n                  title\n                  slug\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n                width\n                height\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n          description\n          width\n          height\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.GetPostBySlugDocument,
  "\n  query blogListForHome($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        excerpt\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.BlogListForHomeDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getAllPostsWithSlug($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getAllPostsWithSlug($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getIncompleteBlogEntries($preview: Boolean) {\n    blogCollection(\n      where: {\n        OR: [{ slug_exists: false }, { title_exists: false }, { body_exists: false }, { featuredImage_exists: false }]\n      }\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        body {\n          json\n        }\n        featuredImage {\n          url\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getIncompleteBlogEntries($preview: Boolean) {\n    blogCollection(\n      where: {\n        OR: [{ slug_exists: false }, { title_exists: false }, { body_exists: false }, { featuredImage_exists: false }]\n      }\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        body {\n          json\n        }\n        featuredImage {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getMorePosts($slug: String, $preview: Boolean) {\n    blogCollection(\n      where: { slug_not: $slug, slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 2\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getMorePosts($slug: String, $preview: Boolean) {\n    blogCollection(\n      where: { slug_not: $slug, slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      limit: 2\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getPostBySlug($slug: String, $preview: Boolean) {\n    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {\n      items {\n        title\n        body {\n          json\n          links {\n            entries {\n              hyperlink {\n                sys {\n                  id\n                }\n                ... on Blog {\n                  title\n                  slug\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n                width\n                height\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n          description\n          width\n          height\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getPostBySlug($slug: String, $preview: Boolean) {\n    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {\n      items {\n        title\n        body {\n          json\n          links {\n            entries {\n              hyperlink {\n                sys {\n                  id\n                }\n                ... on Blog {\n                  title\n                  slug\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n                width\n                height\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n          description\n          width\n          height\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query blogListForHome($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        excerpt\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query blogListForHome($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true, title_exists: true, body_exists: true, featuredImage_exists: true }\n      order: date_DESC\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        excerpt\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

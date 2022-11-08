/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query getAllPostsWithSlug($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true }\n      order: date_DESC\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n": types.GetAllPostsWithSlugDocument,
    "\n  query getMorePosts($slug: String, $preview: Boolean) {\n    blogCollection(\n      where: { slug_not: $slug }\n      order: date_DESC\n      limit: 2\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetMorePostsDocument,
    "\n  query getPostBySlug($slug: String, $preview: Boolean) {\n    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {\n      items {\n        title\n        body {\n          json\n          links {\n            entries {\n              hyperlink {\n                sys {\n                  id\n                }\n                ... on Blog {\n                  title\n                  slug\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n                width\n                height\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n          description\n          width\n          height\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPostBySlugDocument,
    "\n  query blogListForHome($preview: Boolean) {\n    blogCollection(order: date_DESC, preview: $preview) {\n      items {\n        title\n        slug\n        excerpt\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.BlogListForHomeDocument,
};

export function graphql(source: "\n  query getAllPostsWithSlug($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true }\n      order: date_DESC\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPostsWithSlug($preview: Boolean) {\n    blogCollection(\n      where: { slug_exists: true }\n      order: date_DESC\n      limit: 200\n      preview: $preview\n    ) {\n      items {\n        slug\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getMorePosts($slug: String, $preview: Boolean) {\n    blogCollection(\n      where: { slug_not: $slug }\n      order: date_DESC\n      limit: 2\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMorePosts($slug: String, $preview: Boolean) {\n    blogCollection(\n      where: { slug_not: $slug }\n      order: date_DESC\n      limit: 2\n      preview: $preview\n    ) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getPostBySlug($slug: String, $preview: Boolean) {\n    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {\n      items {\n        title\n        body {\n          json\n          links {\n            entries {\n              hyperlink {\n                sys {\n                  id\n                }\n                ... on Blog {\n                  title\n                  slug\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n                width\n                height\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n          description\n          width\n          height\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostBySlug($slug: String, $preview: Boolean) {\n    blogCollection(where: { slug: $slug }, limit: 1, preview: $preview) {\n      items {\n        title\n        body {\n          json\n          links {\n            entries {\n              hyperlink {\n                sys {\n                  id\n                }\n                ... on Blog {\n                  title\n                  slug\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n                width\n                height\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n          description\n          width\n          height\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query blogListForHome($preview: Boolean) {\n    blogCollection(order: date_DESC, preview: $preview) {\n      items {\n        title\n        slug\n        excerpt\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query blogListForHome($preview: Boolean) {\n    blogCollection(order: date_DESC, preview: $preview) {\n      items {\n        title\n        slug\n        excerpt\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
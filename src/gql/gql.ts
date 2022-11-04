/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query getPostAndMorePosts($slug: String) {\n    blogCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        title\n        body {\n          json\n          links {\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPostAndMorePostsDocument,
    "\n  query blogListForHome {\n    blogCollection(order: date_DESC) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.BlogListForHomeDocument,
};

export function graphql(source: "\n  query getPostAndMorePosts($slug: String) {\n    blogCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        title\n        body {\n          json\n          links {\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostAndMorePosts($slug: String) {\n    blogCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        title\n        body {\n          json\n          links {\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                description\n              }\n            }\n          }\n        }\n        date\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query blogListForHome {\n    blogCollection(order: date_DESC) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query blogListForHome {\n    blogCollection(order: date_DESC) {\n      items {\n        title\n        slug\n        featuredImage {\n          url\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
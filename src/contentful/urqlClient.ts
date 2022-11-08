import { createClient } from "urql";

export const client = createClient({
  url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  fetchOptions: {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        process.env.CONTENTFUL_PREVIEW
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
  },
});

import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig("./", dev).combinedEnv;

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`]: {
        headers: {
          Authorization: `Bearer ${CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
        }
      }
    }
  ],
  documents: ["src/**/*.tsx", "!src/gql/**/*", "pages/**/*.tsx", "src/contentful/graphql/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};
export default config;

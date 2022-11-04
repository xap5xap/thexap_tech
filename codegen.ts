import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
          },
        },
    },
  ],
  documents: [
    "src/**/*.tsx",
    "!src/gql/**/*",
    "pages/**/*.tsx",
    "src/contentful/graphql/*.graphql",
  ],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
    "./src/lib/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        disableDescriptions: true,
      },
    },
  },
};
export default config;

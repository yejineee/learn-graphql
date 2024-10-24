
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        mappers: {
          Movie: '../model#Movie',
          Director: '../model#Director',
        }
      },
    }
  },
};

export default config;

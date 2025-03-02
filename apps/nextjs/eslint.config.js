import baseConfig, { restrictEnvAccess } from "@happening/eslint-config/base";
import nextjsConfig from "@happening/eslint-config/nextjs";
import reactConfig from "@happening/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];

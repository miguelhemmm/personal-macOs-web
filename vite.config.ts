import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal-macOs-web/",
  resolve: {
    alias: {
      i18n: "/src/i18n",
      models: "/src/models/index.ts",
      shared: "/src/shared/index.ts",
      theme: "/src/theme/index.ts",
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});

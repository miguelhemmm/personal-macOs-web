import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
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
      babel: { plugins: ["@emotion/babel-plugin"] },
    }),
    {
      name: "html-transform",
      transformIndexHtml: (html) => {
        return html.replace(
          "<head>",
          `<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="I'm an SWE specialized in Web Technologies. My passion about web have enabled me with to know great solutions for business. I'm a strong believer that everything is possible as long as we use the correct tools." />
    <meta name="og:image" content="https://images.unsplash.com/photo-1548588627-f978862b85e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
  `
        );
      },
    },
  ],
});

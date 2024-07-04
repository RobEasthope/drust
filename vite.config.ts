import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkFrontmatter from "remark-frontmatter";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});

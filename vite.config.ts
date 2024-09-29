import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isStorybook = process.argv[1]?.includes("storybook");

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    !isStorybook &&
      remix({
        presets: [vercelPreset()],
      }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    exclude: ["@resvg/resvg-js"],
  },
});

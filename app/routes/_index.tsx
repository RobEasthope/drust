import type { MetaFunction } from "@remix-run/node";
import Markdown from "~/content/cs2eo.mdx";
import { MDXProvider } from "@mdx-js/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <section className="font-sans p-4">
        <h1 className="text-3xl">MDX prototype</h1>
        <MDXProvider>
          <Markdown />
        </MDXProvider>
      </section>
    </div>
  );
}

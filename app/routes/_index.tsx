import type { MetaFunction } from "@remix-run/node";

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
        <div>Markdown</div>
      </section>
    </div>
  );
}

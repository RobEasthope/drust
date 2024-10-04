import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { defineLocations, presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { projectDetails } from "~/sanity/sanity.details";
import schema from "~/sanity/sanity.schemas";
import { defaultDocumentNode, structure } from "~/sanity/sanity.structure";
import { STUDIO_BASEPATH } from "~/sanity/sanity.studio";

export default defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Drust",
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/resource/preview",
        },
      },
      resolve: {
        locations: {
          record: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  title: doc?.title || "Untitled",
                  href: `/records/${doc?.slug}`,
                },
                { title: "Home", href: `/` },
              ],
            }),
          }),
        },
      },
    }),
    visionTool(),
  ],
  basePath: STUDIO_BASEPATH,
  schema: {
    types: schema,
  },
});

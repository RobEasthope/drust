import { defineField, defineType } from "sanity";

import Duration from "~/sanity/components/Duration/Duration";

export const trackSchema = defineType({
  name: "track",
  title: "Track",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "duration",
      description: "Time in seconds",
      type: "number",
      components: {
        input: Duration,
      },
    }),
  ],
});

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "~/sanity/sanity.details";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

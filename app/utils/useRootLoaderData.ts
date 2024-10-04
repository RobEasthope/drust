import { useRouteLoaderData } from "@remix-run/react";

import type { loader as RootLoader } from "~/root";

export function useRootLoaderData() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = useRouteLoaderData<typeof RootLoader>(`root`);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
}

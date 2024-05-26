import "server-only";

import { createClient, type QueryParams } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ghrka703",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const { projectId, dataset } = client.config();
export function urlFor(source: SanityImageSource) {
  return projectId && dataset ? imageUrlBuilder({ projectId, dataset}).image(source) : null;
}

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 60,
      tags,
    },
  });
}
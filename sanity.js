import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Usually 'production'
  useCdn: true, // `true` enables fast caching, set to `false` for latest updates
  apiVersion: "2023-01-01", // Use the latest API version
});

import { sanityClient } from "../../sanity";

export async function getPosts() {
  const query = `*[_type == "post"] { title, slug }`;
  return sanityClient.fetch(query);
}

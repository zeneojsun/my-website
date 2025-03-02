import { getPosts } from "@/app/lib/fetchPosts";
import { HomeClient } from "./HomeClient"; // Use named import

export default async function HomePage() {
  const posts = await getPosts(); // Fetch data on the server
  return <HomeClient posts={posts} />;
}

import HomePage from "./Home/Home";
import { blogSerivice } from "@/services/blog.service";

export default async function Home() {

  const res = await blogSerivice.getBlogPosts();
  const data = await res?.data
  console.log(data);
  return (
    <div>
      <HomePage />
    </div>
  );
}

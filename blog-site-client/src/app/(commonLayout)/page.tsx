import HomePage from "./Home/Home";
import { blogSerivice } from "@/services/blog.service";

export default async function Home() {
const {data} = await blogSerivice.getBlogPosts();
console.log(data);
  return (
    <div>
      <HomePage />
    </div>
  );
}

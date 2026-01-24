import { BlogPost } from "@/types";
import BlogCard from "./Components/modules/BlogPost";
import { blogSerivice } from "@/services/blog.service";

export default async function Home() {

  const res = await blogSerivice.getBlogPosts({
    isFeatured: false,

  },
    {
      cache : "no-store"
    }

  );
  const data = await res?.data
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto">

      <div className="grid md:grid-cols-3 gap-3  px-10">
        {
          data?.data?.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  );
}

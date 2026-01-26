"use server"
import { blogSerivice } from "@/services/blog.service"


export const getBlogs = async () => {
    return await blogSerivice.getBlogPosts();
}

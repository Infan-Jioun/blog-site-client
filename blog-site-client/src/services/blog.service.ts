import { env } from "@/env";


export const blogSerivice = {
    getBlogPosts: async () => {
        try {
            const res = await fetch(`${env.API_URL}/posts`);
            const data = await res.json();
            return {data : data , error : null}
        } catch (error) {
            console.error(error);
        }
    }
}
import { env } from "@/env";

const API_URL = env.API_URL;
export const blogSerivice = {
    getBlogPostsc: async () => {
        try {
            const res = await fetch(`${API_URL}/posts`);
            const data = await res.json();
            return {data : data , error : null}
        } catch (error) {
            console.error(error);
        }
    }
}
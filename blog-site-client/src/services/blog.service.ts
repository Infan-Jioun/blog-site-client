import { env } from "@/env";


export const blogSerivice = {
    getBlogPosts: async () => {
        //* No Dynamic and no {cache : no store}  :SSG --> Static page
        //* {cache : no store}  : SSR --> Dynamic Page
        //* next : {revalidate : 10} : ISR --> Mix between static and dynamic
        try {
            const res = await fetch(`${env.API_URL}/posts`, {
                next: { revalidate: 10 }
            });
            const data = await res.json();
            return { data: data, error: null }
        } catch (error) {
            console.error(error);
        }
    }
}
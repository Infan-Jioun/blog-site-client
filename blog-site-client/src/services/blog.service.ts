import { env } from "@/env";
//* No Dynamic and no {cache : no store}  :SSG --> Static page
//* {cache : no store}  : SSR --> Dynamic Page
//* next : {revalidate : 10} : ISR --> Mix between static and dynamic

interface GetBlogParams {
    isFeatured?: boolean;
    search?: string
}
export const blogSerivice = {
    getBlogPosts: async (params?: GetBlogParams) => {

        try {
            const url = new URL(`${env.API_URL}/posts`)
            url.searchParams.append("key", "Value")
            console.log(url.toString());
            const res = await fetch(url.toString());
            const data = await res.json();
            return { data: data, error: null }
        } catch (error) {
            console.error(error);
        }
    }
}
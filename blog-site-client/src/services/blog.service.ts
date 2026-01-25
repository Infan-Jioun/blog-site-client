import { env } from "@/env";
//* No Dynamic and no {cache : no store}  :SSG --> Static page
//* {cache : no store}  : SSR --> Dynamic Page
//* next : {revalidate : 10} : ISR --> Mix between static and dynamic

interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number
}
interface GetBlogParams {
    isFeatured?: boolean;
    search?: string
}

export const blogSerivice = {
    getBlogPosts: async (params?: GetBlogParams, options?: ServiceOptions) => {

        try {
            const url = new URL(`${env.API_URL}/posts`)
            url.searchParams.append("key", "Value")
            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value != undefined && value != null && value != "") {
                        url.searchParams.append(key, value)
                    }
                })
            }

            const config: RequestInit = {};
            if (options?.cache) {
                config.cache = options.cache;
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }
            console.log(url.toString());
            const res = await fetch(url.toString(), config);
            const data = await res.json();
            return { data: data, error: null }
        } catch (error) {
            console.error(error);
        }
    },
    getBlogById: async (id: string) => {
        try {
            const res = await fetch(`${env.API_URL}/posts/${id}`)
            const data = await res.json();
            return { data: data, error: null }
        } catch (err) {
            return { data: null, error: { message: "Something went wrong" } }
        }
    }

}
import { cookies } from "next/headers";

export const userService = {
    getSesstion: async function () {
        try {
            const cookieStore = await cookies();
            const res = await fetch('http://localhost:5000/get-session', {
                headers: {
                    Cookie: cookieStore.toString()
                },
                cache: "no-store"
            });
            const session = await res.json();
            return session;
        }
        catch (error) {
            console.error(error);
        }
    }
}
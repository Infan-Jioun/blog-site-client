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
            if (!session.data) {
                return {
                    data: null, error: {
                        message:
                            "session is missing"
                    }
                }
            }
            return { data: session, error: null }
        }
        catch (error) {
            console.error(error);
        }
    }
}
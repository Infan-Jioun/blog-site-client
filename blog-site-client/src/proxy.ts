import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constant/roles";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    let isAuthenticated = false;
    let isAdmin = false;
    const response = await userService.getSesstion();
    if (response && response.data) {
        isAuthenticated = true;
        isAdmin = response.data.user.role === Roles.admin;
    }
    //* User in not authenticated at all
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    //* User is authenticated but not admin

    if (isAdmin && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }
    //* User Cannnot visit admin routes
    if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    console.log(response?.data);
    return NextResponse.next();
}
export const config = {
    matcher: ["/dashboard", "/admin-dashboard"]
}

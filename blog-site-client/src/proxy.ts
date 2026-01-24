import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constant/roles";

export async function proxy(request: NextRequest) {
    let isAuthenticated = false;
    let isAdmin = false;
    const response = await userService.getSesstion();
    if (response && response.data) {
        isAuthenticated = true;
        isAdmin = response.data.user.role === Roles.admin
    }
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    console.log(response?.data);
    return NextResponse.next();
}
export const config = {
    matcher: ["/dashboard"]
}

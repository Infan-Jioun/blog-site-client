import * as React from "react"

import { SearchForm } from "@/app/(dashboardLayout)/components/search-form"
import { VersionSwitcher } from "@/app/(dashboardLayout)/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/app/(dashboardLayout)/components/ui/sidebar"
import { Route } from "@/types"
import { adminRoutes } from "@/app/routes/adminRoutes/page"
import { userRoutes } from "@/app/routes/userRoutes/page"
import Link from "next/link"
import { Roles } from "@/constant/roles"


export function AppSidebar({ user, ...props }:
  { user: { role: string } & React.ComponentProps<typeof Sidebar> }) {
  let routes: Route[] = [];
  switch (user.role) {
    case Roles.admin: routes = adminRoutes;
      break;
    case Roles.user: routes = userRoutes;
      break;
    default: routes = [];
      break;
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>

        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

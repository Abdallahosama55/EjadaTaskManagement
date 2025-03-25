import { NavLink, useLocation } from "react-router-dom"
import {ListTodo, LogOut} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUserStore } from "@/stores/user-store"

// Menu items
const mainNavItems = [

  {
    title: "My Tasks",
    icon: ListTodo,
    path: "/tasks",

  },
  
]



export function AppSidebar() {
  const { user } = useUserStore()
  const location = useLocation()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ListTodo className="h-4 w-4" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Ejada</span>
            <span className="text-xs text-muted-foreground">Task Manager</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)}
                  >
                    <NavLink to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
  
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between p-2">
      
       
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}


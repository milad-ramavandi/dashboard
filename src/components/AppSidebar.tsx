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
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { LOGO } from "@/constants"
import paths from "@/routes/paths"
import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from "lucide-react"
import { Link } from "react-router"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useState } from "react"
import { cn } from "cn"

const items = [
  { title: "Home", url: paths.home, icon: <Home /> },
  { title: "Inbox", url: "/", icon: <Inbox /> },
  { title: "Calender", url: "/", icon: <Calendar /> },
  { title: "Search", url: "/", icon: <Search /> },
  { title: "Settings", url: "/", icon: <Settings /> },
]

export function AppSidebar() {
  const [isCollapseble, setIsCollapseble] = useState<boolean>(true)
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton render={<Link to={paths.home} />}>
              <img src={LOGO} alt="logo" width={25} height={25} />
              <span className="tracking-widest">SHOPPER</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => {
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton render={<Link to={item.url} />}>
                      <>{item.icon}</>
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.title === "Inbox" && <SidebarMenuBadge>24</SidebarMenuBadge>}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger render={<SidebarMenuButton/>} onClick={() => setIsCollapseble((prev) => !prev)}>
                <User2 />
                <span>John Doe</span>
                <ChevronUp className={cn("ml-auto transition-all duration-200", isCollapseble ? "rotate-180" : "rotate-0")} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

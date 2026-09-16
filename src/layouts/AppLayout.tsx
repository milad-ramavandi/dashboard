import { AppSidebar } from "@/components/AppSidebar"
import Header from "@/components/Header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useCookies } from "react-cookie"
import { Outlet } from "react-router"

const AppLayout = () => {
  const cookies = useCookies()
  const sidebar_state = cookies[0].sidebar_state;
  return (
    <SidebarProvider defaultOpen={sidebar_state}>
      <AppSidebar />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <SidebarTrigger className={"cursor-pointer"} />
          <Header />
        </div>
        <main className="w-full px-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default AppLayout

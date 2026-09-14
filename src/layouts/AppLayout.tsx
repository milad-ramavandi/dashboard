import Header from "@/components/Header"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"

const AppLayout = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <SidebarTrigger className={"cursor-pointer"} />
        <Header />
      </div>
      <main className="w-full px-4">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout

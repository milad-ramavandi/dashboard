import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router"

const AppLayout = () => {
  return (
    <div className="w-full flex">
        <Sidebar/>
        <div>
            <Header/>
            <main className="w-full px-4">
               <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AppLayout
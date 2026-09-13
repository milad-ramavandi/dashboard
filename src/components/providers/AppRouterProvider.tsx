import routes from "@/routes"
import { RouterProvider } from "react-router"

const AppRouterProvider = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default AppRouterProvider
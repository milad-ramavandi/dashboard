import {createBrowserRouter} from "react-router"
import paths from "./paths"
import AppLayout from "@/layouts/AppLayout";


const routes = createBrowserRouter([
    {
        path:paths.home,
        element: <AppLayout/>
    }
])


export default routes;
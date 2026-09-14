import {createBrowserRouter} from "react-router"
import paths from "./paths"
import AppLayout from "@/layouts/AppLayout";
import Home from "@/screens/Home";


const routes = createBrowserRouter([
    {
        path:paths.home,
        element: <AppLayout/>,
        children: [
            {
                element:<Home/>,
                index:true
            }
        ]
    }
])


export default routes;
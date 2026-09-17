import {createBrowserRouter} from "react-router"
import paths from "./paths"
import Home from "@/screens/Home";
import AppLayout from "@/components/layouts/AppLayout";


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
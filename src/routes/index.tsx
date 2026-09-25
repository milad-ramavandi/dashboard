import { createBrowserRouter } from "react-router"
import paths from "./paths"
import Home from "@/screens/home"
import AppLayout from "@/components/layouts/AppLayout"
import UsersPage from "@/screens/users"
import UserPage from "@/screens/users/user"
import PaymentsPage from "@/screens/payments"
import ProductsPage from "@/screens/products"

const routes = createBrowserRouter([
  {
    path: paths.home,
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: paths.users.root,
        element: <UsersPage />,
      },
      {
        path: paths.users.user,
        element: <UserPage />,
      },
      {
        path: paths.payments.root,
        element: <PaymentsPage />,
      },
      {
        path: paths.products.root,
        element: <ProductsPage />,
      },
    ],
  },
])

export default routes

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "../src/styles/main.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import AppRouterProvider from "./components/providers/AppRouterProvider"
import { SidebarProvider } from "./components/ui/sidebar"
import { AppSidebar } from "./components/AppSidebar"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <AppRouterProvider />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
)

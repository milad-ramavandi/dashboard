import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "../src/styles/main.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import AppRouterProvider from "./components/providers/AppRouterProvider"
import { CookiesProvider } from "react-cookie"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CookiesProvider>
        <AppRouterProvider />
      </CookiesProvider>
    </ThemeProvider>
  </StrictMode>
)

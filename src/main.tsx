import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "../src/styles/main.css"
import { ThemeProvider } from "@/components/providers/theme-provider.tsx"
import AppRouterProvider from "./components/providers/AppRouterProvider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      
        <AppRouterProvider/>
  
    </ThemeProvider>
  </StrictMode>
)

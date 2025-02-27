import { BrowserRouter } from "react-router-dom"
import { SnackbarProvider } from "./SnackbarProvider"
import { ThemeProvider } from "./ThemeProvider"
import { ReactNode } from "react"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

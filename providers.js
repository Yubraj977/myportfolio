"use client"
import { ThemeProvider } from "next-themes"
import InitialLoader from "./app/components/InitialLoader"
import FloatingCTA from "./app/components/FloatingCTA"

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <InitialLoader />
      <FloatingCTA />
      {children}
    </ThemeProvider>
  )
}
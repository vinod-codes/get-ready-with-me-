"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log("ThemeProvider initialized")
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}


"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// This component prevents theme flash on page load and handles SSR localStorage issues
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  // Only show children content when mounted to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR, render without theme provider to avoid localStorage access
  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// This component prevents theme flash on page load
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  // Only show children content when mounted to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted yet, render with a minimal UI that won't cause hydration mismatch
  if (!mounted) {
    // You can optionally render a minimal skeleton here, but empty div works fine too
    return (
      <NextThemesProvider {...props}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </NextThemesProvider>
    )
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

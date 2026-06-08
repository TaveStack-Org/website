import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Metadata + viewport re-exported from app/metadata.ts
export { metadata, viewport } from './metadata';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen text-foreground font-base antialiased overflow-x-hidden",
                    base.variable,
                    heading.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

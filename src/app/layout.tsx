import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

// Metadata is now directly imported from the metadata.ts file in the app directory
export { metadata } from './metadata';

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
                <ClerkProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </ClerkProvider>
            </body>
        </html>
    );
};

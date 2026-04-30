"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import DotGrid from "@/components/dot-grid";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full relative overflow-x-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DotGrid />
            </div>
            {/* Theme-aware fade overlay so the dot grid recedes near content */}
            <div className="fixed inset-0 z-[5] bg-background/55 dark:bg-background/35 pointer-events-none" />
            <div className="relative z-10">
                <Navbar />
                {children}
                <Footer />
            </div>
        </main>
    );
};

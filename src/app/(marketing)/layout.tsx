"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Aurora from "@/components/aurora";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full relative">
            <div className="fixed inset-0 z-0">
                <Aurora />
            </div>
            <div className="relative z-10">
                <Navbar />
                {children}
                <Footer />
            </div>
        </main>
    );
};

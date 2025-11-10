"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib";
import { BookOpen, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";

interface DocSection {
    id: string;
    title: string;
    subsections?: { id: string; title: string }[];
}

interface DocsLayoutProps {
    sections: DocSection[];
    children: React.ReactNode;
}

export default function DocsLayout({ sections, children }: DocsLayoutProps) {
    const [activeSection, setActiveSection] = useState<string>("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -80% 0px",
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);

            section.subsections?.forEach((subsection) => {
                const subElement = document.getElementById(subsection.id);
                if (subElement) observer.observe(subElement);
            });
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="w-full relative">
            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden fixed top-24 left-4 z-50 p-2 rounded-lg bg-background border border-border shadow-lg"
            >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex gap-8 relative">
                {/* Sidebar Navigation */}
                <aside
                    className={cn(
                        "fixed lg:sticky top-24 left-0 h-[calc(100vh-6rem)] w-64 border-r border-border bg-background z-40 transition-transform duration-300 overflow-y-auto",
                        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    )}
                >
                    <nav className="p-6 space-y-6">
                        <div className="flex items-center gap-2 mb-8">
                            <BookOpen className="w-5 h-5 text-purple-500" />
                            <span className="font-semibold text-lg">Documentation</span>
                        </div>

                        <div className="space-y-1">
                            {sections.map((section) => (
                                <div key={section.id} className="space-y-1">
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className={cn(
                                            "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                            activeSection === section.id
                                                ? "bg-purple-500/10 text-purple-500"
                                                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                        )}
                                    >
                                        {section.title}
                                    </button>

                                    {section.subsections && section.subsections.length > 0 && (
                                        <div className="ml-4 space-y-1 border-l border-border pl-3">
                                            {section.subsections.map((subsection) => (
                                                <button
                                                    key={subsection.id}
                                                    onClick={() => scrollToSection(subsection.id)}
                                                    className={cn(
                                                        "w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5",
                                                        activeSection === subsection.id
                                                            ? "text-purple-500"
                                                            : "text-muted-foreground hover:text-foreground"
                                                    )}
                                                >
                                                    <ChevronRight className="w-3 h-3" />
                                                    {subsection.title}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Quick Links */}
                        <div className="pt-6 border-t border-border">
                            <p className="text-xs font-semibold text-muted-foreground mb-3">QUICK LINKS</p>
                            <div className="space-y-2">
                                <a
                                    href="/pricing"
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#"
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0 px-4 lg:px-8 py-8 lg:ml-64">
                    <div className="max-w-4xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            {/* Mobile Overlay */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30 top-24"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}

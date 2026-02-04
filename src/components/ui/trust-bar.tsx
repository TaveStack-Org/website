"use client";

import { cn } from "@/lib";
import Marquee from "./marquee";
import Image from "next/image";

interface Company {
    name: string;
    logo: string;
}

interface TrustBarProps {
    title?: string;
    companies: Company[];
    className?: string;
    speed?: number;
}

const TrustBar = ({
    title = "Trusted by leading companies",
    companies,
    className,
    speed = 40,
}: TrustBarProps) => {
    return (
        <div className={cn("w-full py-8", className)}>
            <p className="text-center text-sm md:text-base text-muted-foreground mb-6">
                {title}
            </p>
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                <Marquee
                    className={`[--duration:${speed}s] select-none [--gap:3rem]`}
                >
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            {company.logo.startsWith("/") ? (
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain"
                                />
                            ) : (
                                <span className="text-lg font-semibold text-muted-foreground">
                                    {company.name}
                                </span>
                            )}
                        </div>
                    ))}
                </Marquee>
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default TrustBar;

"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
}

const AnimatedStat = ({ value, prefix, suffix, label }: AnimatedStatProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setDisplay(value);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-brand-gradient">
                    {prefix}
                    <NumberFlow value={display} />
                    {suffix}
                </span>
            </div>
            <div className="mt-2 text-sm md:text-base text-muted-foreground max-w-[18ch]">
                {label}
            </div>
        </div>
    );
};

export default AnimatedStat;

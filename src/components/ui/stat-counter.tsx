"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib";

interface StatCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    duration?: number;
    className?: string;
}

const StatCounter = ({
    value,
    suffix = "",
    prefix = "",
    label,
    duration = 2000,
    className,
}: StatCounterProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, value, duration]);

    return (
        <div ref={ref} className={cn("text-center", className)}>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </div>
            <div className="mt-2 text-sm md:text-base text-muted-foreground">
                {label}
            </div>
        </div>
    );
};

export default StatCounter;

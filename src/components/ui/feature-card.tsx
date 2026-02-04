"use client";

import { cn } from "@/lib";
import { LucideIcon } from "lucide-react";
import AnimationContainer from "../global/animation-container";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
    delay?: number;
}

const FeatureCard = ({
    icon: Icon,
    title,
    description,
    className,
    delay = 0,
}: FeatureCardProps) => {
    return (
        <AnimationContainer animation="fadeUp" delay={delay}>
            <div
                className={cn(
                    "group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm",
                    "hover:border-primary/50 hover:bg-card/80 transition-all duration-300",
                    "hover:shadow-lg hover:shadow-primary/5",
                    className
                )}
            >
                {/* Icon container */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </AnimationContainer>
    );
};

export default FeatureCard;

"use client";

import { HOW_IT_WORKS } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import GradientText from "./ui/gradient-text";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Wrapper className="py-20 lg:py-32 relative" id="how-it-works">
            <div className="flex flex-col items-center text-center gap-4 py-8 w-full">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="How it works" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight">
                        <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                            One Platform. All Your Workflows.
                        </GradientText>
                        <br />
                        <span className="text-foreground">Finally Connected.</span>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Connect your business systems, automate complex workflows, and gain complete visibility—all in three simple steps.
                    </p>
                </AnimationContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full pt-10">
                {HOW_IT_WORKS.map((item, index) => (
                    <AnimationContainer
                        key={index}
                        animation="fadeUp"
                        delay={0.5 + (index * 0.2)}
                    >
                        <div
                            className={cn(
                                "flex flex-col items-start gap-4 rounded-lg lg:rounded-2xl p-4 lg:p-6 h-full",
                                "border border-border/50 bg-card/50 backdrop-blur-sm",
                                "hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
                            )}
                        >
                            {/* Step Header */}
                            <div className="flex items-center gap-x-4 w-full">
                                <AnimationContainer
                                    animation="scaleUp"
                                    delay={0.7 + (index * 0.2)}
                                >
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                </AnimationContainer>
                                <div>
                                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                                        Step {item.step}
                                    </span>
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Subtitle */}
                            <p className="text-sm font-medium text-foreground/80">
                                {item.subtitle}
                            </p>

                            {/* Image */}
                            <AnimationContainer
                                animation="fadeUp"
                                delay={0.9 + (index * 0.2)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-40 object-contain rounded-lg"
                                />
                            </AnimationContainer>

                            {/* Features List */}
                            <AnimationContainer
                                animation="fadeUp"
                                delay={1.1 + (index * 0.2)}
                            >
                                <ul className="space-y-2">
                                    {item.features.map((feature, featureIndex) => (
                                        <li 
                                            key={featureIndex}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </AnimationContainer>
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    )
};

export default HowItWorks;

"use client";

import { PERKS } from '@/constants';
import { cn } from "@/lib";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const Perks = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Wrapper className="py-20 lg:py-32 relative">
            <div className="flex flex-col items-center text-center gap-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Perks" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        African-focused
                        <br />
                        AI advantages
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Unique features optimized for African accents, languages, and connectivity challenges.
                    </p>
                </AnimationContainer>
            </div>

            <div className="relative pt-10">
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10">
                    <AnimationContainer animation="scaleUp" delay={0.5}>
                        <Image
                            src="/images/grid-lines.svg"
                            alt="Plus"
                            width={32}
                            height={32}
                            className="size-full"
                        />
                    </AnimationContainer>
                </div>

                <div className="grid grid-cols-2 relative z-20">
                    {PERKS.map((perk, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center p-2 md:p-16",
                                index % 2 === 0 ? "justify-end" : "justify-start"
                            )}
                        >
                            <AnimationContainer
                                animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                                delay={0.2 * (index + 1)}
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className={cn(
                                        "size-12 lg:size-16 rounded-lg lg:rounded-2xl flex items-center justify-center",
                                        mounted && resolvedTheme === "dark" ? "bg-neutral-900" : mounted ? "bg-purple-100" : "bg-purple-100"
                                    )}>
                                        <perk.icon className="size-6 lg:size-8 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg md:text-xl font-medium">
                                            {perk.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground max-w-[250px]">
                                            {perk.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimationContainer>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Perks;
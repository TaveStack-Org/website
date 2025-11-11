"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import { FlickeringGrid } from "./ui/flickering-grid";
import SectionBadge from "./ui/section-badge";
import { useTheme } from "next-themes";
import { cn } from "@/lib";
import { useEffect, useState } from "react";

const HIGHLIGHTS = [
    {
        icon: "/icons/shield.svg",
        label: "African Accent Recognition"
    },
    {
        icon: "/icons/clock.svg",
        label: "Contextual Intelligence"
    },
    {
        icon: "/icons/magicpen.svg",
        label: "Multilingual Support"
    }
];

const CTA = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Wrapper className="py-20 lg:py-32" id="contact">
            <div className="flex flex-col items-center text-center relative gap-4 py-20 lg:py-32 overflow-hidden z-0">
                <div className={cn(
                    "absolute inset-x-0 bottom-0 bg-gradient-to-t w-full h-1/2 z-10",
                    mounted && resolvedTheme === "dark" ? "from-[#101010]" : mounted ? "from-purple-100" : "from-purple-100"
                )}></div>

                <AnimationContainer animation="scaleUp" delay={0.2} className="w-full mx-auto">
                    <div className="absolute -top-1/2 inset-x-0 mx-auto bg-foreground/50 rounded-full size-1/2 blur-[4rem] lg:blur-[10rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.3}>
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.2}>
                    <FlickeringGrid
                        className="absolute inset-0 -z-10 h-full w-[120%]"
                        squareSize={4}
                        gridGap={6}
                        color="#525252"
                        maxOpacity={0.2}
                        flickerChance={0.1}
                        height={800}
                    />
                </AnimationContainer>

                <div className="flex flex-col items-center justify-center w-full z-30">
                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <SectionBadge title="Beta Testing Now" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            Join Africa's Digital Transformation
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto mt-4">
                            Be among the first to experience TaveStack's AI-powered productivity tools designed specifically for African markets and workflows.
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <div className="flex items-center mt-4">
                            <div className={cn(
                                "rounded-full px-4 py-2.5 flex flex-wrap md:flex-row items-center justify-center gap-4",
                                mounted && resolvedTheme === "dark" ? "bg-neutral-900" : mounted ? "bg-purple-100" : "bg-purple-100"
                            )}>
                                {HIGHLIGHTS.map((item, index) => (
                                    <AnimationContainer
                                        key={index}
                                        animation="fadeRight"
                                        delay={0.7 + (index * 0.1)}
                                    >
                                        <div className="flex items-center gap-2 last:hidden md:last:flex">
                                            <Image
                                                src={item.icon}
                                                alt={item.label}
                                                width={1024}
                                                height={1024}
                                                className="size-5 text-primary"
                                            />
                                            <span className="text-sm text-foreground">
                                                {item.label}
                                            </span>
                                        </div>
                                    </AnimationContainer>
                                ))}
                            </div>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={1}>
                        <Link href={{ pathname: "https://app.tavestack.com/" }}>
                            <Button size="lg" className="mt-6">
                                Start now
                                <ArrowRightIcon className="size-4 ml-2" />
                            </Button>
                        </Link>
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    )
};

export default CTA;

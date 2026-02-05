"use client";

import { ArrowRightIcon, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import { FlickeringGrid } from "./ui/flickering-grid";
import SectionBadge from "./ui/section-badge";
import { useTheme } from "next-themes";
import { cn } from "@/lib";
import { useEffect, useState } from "react";

const TRUST_ELEMENTS = [
    "No credit card required",
    "Setup in 4-8 weeks",
    "Cancel anytime"
];

const CTA = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Wrapper className="py-20 lg:py-32" id="cta">
            <div className="flex flex-col items-center text-center relative gap-4 py-20 lg:py-32 overflow-hidden z-0">
                <div className={cn(
                    "absolute inset-x-0 bottom-0 bg-gradient-to-t w-full h-1/2 z-10",
                    mounted && resolvedTheme === "dark" ? "from-background" : mounted ? "from-background" : "from-background"
                )}></div>

                <AnimationContainer animation="scaleUp" delay={0.2} className="w-full mx-auto">
                    <div className="absolute -top-1/2 inset-x-0 mx-auto bg-primary/30 rounded-full size-1/2 blur-[4rem] lg:blur-[10rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.3}>
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.2}>
                    <FlickeringGrid
                        className="absolute inset-0 -z-10 h-full w-[120%]"
                        squareSize={4}
                        gridGap={6}
                        color="#9c40ff"
                        maxOpacity={0.15}
                        flickerChance={0.1}
                        height={800}
                    />
                </AnimationContainer>

                <div className="flex flex-col items-center justify-center w-full z-30">
                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <SectionBadge title="Get Started" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold !leading-tight mt-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70">
                                Ready to Transform
                            </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70">
                                Your Operations?
                            </span>
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto mt-4">
                            Join 40+ companies already scaling with Tavestack. Start your free trial today and see the difference.
                        </p>
                    </AnimationContainer>

                    {/* CTA Buttons */}
                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link href="https://app.tavestack.com/">
                                <Button size="lg" className="px-8 gap-2">
                                    Start Free 14-Day Trial
                                    <ArrowRightIcon className="size-4" />
                                </Button>
                            </Link>
                            <Link href="/demo">
                                <Button variant="outline" size="lg" className="px-8 gap-2">
                                    <Calendar className="size-4" />
                                    Schedule a Demo
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>

                    {/* Trust Elements */}
                    <AnimationContainer animation="fadeUp" delay={0.7}>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6">
                            {TRUST_ELEMENTS.map((element, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    {element}
                                </div>
                            ))}
                        </div>
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    )
};

export default CTA;

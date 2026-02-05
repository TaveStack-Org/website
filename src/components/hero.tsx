"use client";

import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from "./ui/section-badge";
import GradientText from "./ui/gradient-text";
import RotatingText from "./ui/rotating-text";
import TrustBar from "./ui/trust-bar";
import { Play } from "lucide-react";

// Placeholder company logos for trust bar
const TRUSTED_COMPANIES = [
    { name: "NITDA", logo: "" },
    { name: "Ministry of Environment", logo: "" },
    { name: "Ministry of Finance", logo: "" },
    { name: "Ministry of Trade and Industry", logo: "" },
    { name: "Ministry of Foreign Affairs", logo: "" },
    { name: "Bigtech Agency", logo: "" },
];

const Hero = () => {
    return (
        <Wrapper className="pt-20 lg:pt-32 relative min-h-[80vh] w-full flex items-center justify-center">
            
            <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">
                
                <div className="flex flex-col items-center gap-8 py-8 w-full">
                    <div className="flex flex-col items-center gap-6">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="Built for Africa. Built to Scale." />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold !leading-tight">
                                One Platform to{" "}
                                <GradientText
                                    colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']}
                                    animationSpeed={6}
                                    className="mx-0"
                                >
                                    <RotatingText
                                        texts={['Connect', 'Automate', 'Optimize']}
                                        mainClassName="inline-flex min-w-[180px] md:min-w-[220px] lg:min-w-[280px] xl:min-w-[340px] justify-center"
                                        staggerFrom="last"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2500}
                                    />
                                </GradientText>
                                Your Entire Business
                            </h1>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Tavestack eliminates workflow chaos with intelligent automation—built specifically for African enterprises scaling across the continent.
                            </p>
                        </AnimationContainer>
                    </div>

                    <AnimationContainer animation="fadeUp" delay={0.8}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://app.tavestack.com/">
                                <Button size="lg" className="w-full sm:w-auto px-8">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link href="/demo">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 gap-2">
                                    <Play className="w-4 h-4" />
                                    Watch Demo
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={1}>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <span className="text-green-500">✓</span> No credit card required
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="text-green-500">✓</span> 14-day free trial
                                </span>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>

                {/* Trust Bar */}
                <AnimationContainer animation="fadeUp" delay={1.2}>
                    <TrustBar 
                        title="Trusted by 40+ organizations and government agencies across Africa"
                        companies={TRUSTED_COMPANIES}
                        className="mt-8 lg:mt-16"
                    />
                </AnimationContainer>
            </div>
        </Wrapper>
    )
};

export default Hero;

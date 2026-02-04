"use client";

import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from "./ui/section-badge";
import GradientText from "./ui/gradient-text";
import TrustBar from "./ui/trust-bar";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Play } from "lucide-react";

// Placeholder company logos for trust bar
const TRUSTED_COMPANIES = [
    { name: "TechFlow", logo: "" },
    { name: "EastAfrica Logistics", logo: "" },
    { name: "FinServe Group", logo: "" },
    { name: "GoldCoast Industries", logo: "" },
    { name: "PanAfrica Holdings", logo: "" },
    { name: "RwandaTech", logo: "" },
];

// Theme-aware dashboard component
const ThemeAwareDashboardContent = () => {
    const { resolvedTheme } = useTheme();
    
    // Use different dashboard images based on theme
    const dashboardSrc = resolvedTheme === "dark" 
        ? "/images/Meeting Dark.png"
        : "/images/Meeting Light.png";
    
    return (
        <Image
            src={dashboardSrc}
            alt="Tavestack Workflow Dashboard"
            sizes="1000px"
            width={1024}
            height={1024}
            className="object-contain min-w-full h-auto rounded-xl lg:rounded-2xl"
            style={{
                transition: "all 0.3s ease-in-out"
            }}
        />
    );
};

// Dynamically load the theme-aware dashboard to prevent hydration mismatch
const ThemeAwareDashboard = dynamic(
    () => Promise.resolve(ThemeAwareDashboardContent),
    { ssr: false }
);

const Hero = () => {
    return (
        <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full h-full flex-1">
            
            <div className="flex flex-col lg:flex-row w-full h-full lg:gap-16">
                
                <div className="flex flex-col items-start gap-8 py-8 w-full lg:max-w-xl">
                    <div className="flex flex-col items-start gap-4">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="Built for Africa. Built to Scale." />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold !leading-tight">
                                One Platform to{" "}
                                <GradientText
                                    colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']}
                                    animationSpeed={6}
                                    className="mx-0"
                                >
                                    Connect, Automate & Optimize
                                </GradientText>{" "}
                                Your Entire Business
                            </h1>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg">
                                Tavestack eliminates workflow chaos with intelligent automation—built specifically for African enterprises scaling across the continent.
                            </p>
                        </AnimationContainer>
                    </div>

                    <AnimationContainer animation="fadeUp" delay={0.8}>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
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
                        <div className="flex flex-col items-start gap-2">
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

                <AnimationContainer animation="fadeRight" delay={0.4}>
                    <div className="flex flex-col items-start justify-start w-full h-min relative overflow-visible">
                        <div className="lg:aspect-[1.3884514435695539/1] w-full lg:w-[1000px] lg:h-[auto,720px] relative">
                            <div className="lg:absolute lg:inset-0">
                                <ThemeAwareDashboard />
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </div>

            {/* Trust Bar */}
            <AnimationContainer animation="fadeUp" delay={1.2}>
                <TrustBar 
                    title="Trusted by 40+ companies across 8 African countries"
                    companies={TRUSTED_COMPANIES}
                    className="mt-8 lg:mt-16"
                />
            </AnimationContainer>
        </Wrapper>
    )
};

export default Hero;

"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { DETAILED_FEATURES } from "@/constants";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FeaturesPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-20">
            {/* Hero Section */}
            <Wrapper className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Platform Features" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Everything You Need to
                            </GradientText>
                            <span className="text-foreground">Automate Your Business</span>
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            One platform. Unlimited workflows. Complete control over your business operations.
                        </p>
                    </AnimationContainer>
                </div>

                {/* Features Grid */}
                <div className="space-y-24">
                    {DETAILED_FEATURES.map((feature, index) => (
                        <AnimationContainer key={feature.id} animation="fadeUp" delay={0.2}>
                            <div 
                                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Content */}
                                <div className={`flex flex-col gap-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                        {feature.title}
                                    </h2>
                                    <p className="text-base text-muted-foreground">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {feature.features.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-card/50 border border-border/50">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-contain p-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24">
                    <div className="flex flex-col items-center text-center gap-4 mb-8">
                        <AnimationContainer animation="fadeUp" delay={0.5}>
                            <SectionBadge title="Get Started" />
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    Ready to Get Started?
                                </GradientText>
                            </h2>
                        </AnimationContainer>
                    </div>
                    <AnimationContainer animation="fadeUp" delay={0.7}>
                        <div className="text-center">
                            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                                Start your free 14-day trial and experience the power of unified workflow automation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="https://app.tavestack.com/">
                                    <Button size="lg">Start Free Trial</Button>
                                </Link>
                                <Link href="/demo">
                                    <Button variant="outline" size="lg">Schedule a Demo</Button>
                                </Link>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>
            </Wrapper>
        </div>
    );
};

export default FeaturesPage;

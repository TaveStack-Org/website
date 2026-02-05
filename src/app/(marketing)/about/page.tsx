"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Users, Globe, Award, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const MISSION_VISION = {
    mission: "To democratize enterprise-grade workflow automation for African businesses, enabling them to compete globally while staying rooted locally.",
    vision: "A world where every African business, regardless of size, has access to world-class productivity tools that understand their unique context."
};

const TEAM = [
    { name: "CEO & Co-Founder", bio: "Former enterprise architect with 15 years experience" },
    { name: "CTO & Co-Founder", bio: "Built scalable systems at leading African tech companies" },
    { name: "VP Engineering", bio: "Led engineering teams at Fortune 500 companies" },
    { name: "VP Product", bio: "Product leader with deep ERP domain expertise" },
];

const TIMELINE = [
    { year: "2022", event: "Tavestack founded in Lagos" },
    { year: "2023", event: "Seed funding secured, 10 beta customers" },
    { year: "2024", event: "Expanded to 8 African countries, 40+ customers" },
    { year: "2025", event: "Launching next-gen AI features" },
];

const VALUES = [
    { icon: Target, title: "Customer-First", description: "Every decision starts with our customers' needs" },
    { icon: Users, title: "African Excellence", description: "World-class products built in Africa, for Africa" },
    { icon: Globe, title: "Global Standards", description: "We meet international quality and security benchmarks" },
    { icon: Award, title: "Continuous Innovation", description: "Always improving, always learning" },
];

const AboutPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-20">
            {/* Hero Section */}
            <Wrapper className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="About Us" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Built for Africa.
                            </GradientText>
                            <span className="text-foreground">Built to Scale.</span>
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            We're on a mission to transform how African businesses operate with intelligent workflow automation.
                        </p>
                    </AnimationContainer>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <div className="p-8 rounded-2xl bg-card/50 border border-border/50 h-full">
                            <h2 className="text-xl font-bold mb-4 text-primary">Our Mission</h2>
                            <p className="text-lg text-muted-foreground">{MISSION_VISION.mission}</p>
                        </div>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <div className="p-8 rounded-2xl bg-card/50 border border-border/50 h-full">
                            <h2 className="text-xl font-bold mb-4 text-primary">Our Vision</h2>
                            <p className="text-lg text-muted-foreground">{MISSION_VISION.vision}</p>
                        </div>
                    </AnimationContainer>
                </div>

                {/* Values */}
                <div className="mb-24">
                    <div className="flex flex-col items-center text-center gap-4 mb-12">
                        <AnimationContainer animation="fadeUp" delay={0.7}>
                            <SectionBadge title="Core Values" />
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={0.8}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    Our Values
                                </GradientText>
                            </h2>
                        </AnimationContainer>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-24">
                    <div className="flex flex-col items-center text-center gap-4 mb-12">
                        <AnimationContainer animation="fadeUp" delay={0.8}>
                            <SectionBadge title="Timeline" />
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={0.9}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    Our Journey
                                </GradientText>
                            </h2>
                        </AnimationContainer>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {TIMELINE.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="font-bold text-primary">{item.year}</span>
                                </div>
                                <p className="text-sm text-muted-foreground max-w-[150px]">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-24" id="team">
                    <div className="flex flex-col items-center text-center gap-4 mb-12">
                        <AnimationContainer animation="fadeUp" delay={0.9}>
                            <SectionBadge title="Our Team" />
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={1.0}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    Leadership Team
                                </GradientText>
                            </h2>
                        </AnimationContainer>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TEAM.map((member, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-primary/50" />
                                </div>
                                <h3 className="font-semibold mb-1">{member.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                                <div className="flex justify-center gap-3">
                                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer" />
                                    <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Careers CTA */}
                <div className="mb-24" id="careers">
                    <div className="flex flex-col items-center text-center gap-4 mb-8">
                        <AnimationContainer animation="fadeUp" delay={1.0}>
                            <SectionBadge title="Careers" />
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={1.1}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    Join Our Team
                                </GradientText>
                            </h2>
                        </AnimationContainer>
                    </div>
                    <AnimationContainer animation="fadeUp" delay={1.2}>
                        <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-primary/5 border border-primary/20 text-center">
                            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                We're always looking for talented people who share our mission. Check out our open positions.
                            </p>
                            <Button size="lg">View Open Positions</Button>
                        </div>
                    </AnimationContainer>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutPage;

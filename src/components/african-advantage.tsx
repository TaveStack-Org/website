"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import GradientText from "./ui/gradient-text";
import { CheckCircle2, Globe, Banknote, Shield, HeadphonesIcon, TrendingUp } from "lucide-react";

const AFRICAN_FEATURES = [
    {
        icon: Globe,
        text: "Support for 15+ African ERP systems"
    },
    {
        icon: Banknote,
        text: "Multi-currency support (25+ African currencies)"
    },
    {
        icon: Shield,
        text: "Regional compliance (local regulations + international standards)"
    },
    {
        icon: HeadphonesIcon,
        text: "Local support teams in your timezone"
    },
    {
        icon: TrendingUp,
        text: "Built to scale from Lagos to Nairobi, Johannesburg to Accra"
    },
];

const AFRICAN_COUNTRIES = [
    { name: "Nigeria", position: { top: "35%", left: "28%" } },
    { name: "Kenya", position: { top: "48%", left: "62%" } },
    { name: "South Africa", position: { top: "78%", left: "48%" } },
    { name: "Ghana", position: { top: "40%", left: "22%" } },
    { name: "Senegal", position: { top: "32%", left: "12%" } },
    { name: "Tanzania", position: { top: "55%", left: "58%" } },
    { name: "Rwanda", position: { top: "50%", left: "55%" } },
    { name: "Uganda", position: { top: "45%", left: "55%" } },
];

const AfricanAdvantage = () => {
    return (
        <Wrapper className="py-20 lg:py-32 relative overflow-hidden" id="african-advantage">
            {/* Background pattern */}
            <div 
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                {/* Left Column - Text Content */}
                <div className="flex-1 flex flex-col gap-6">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="African Advantage" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Built for Africa.
                            </GradientText>
                            <br />
                            <span className="text-foreground">Ready for Global Scale.</span>
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                            Tavestack is the first unified productivity platform designed specifically for African businesses.
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <ul className="space-y-4 mt-4">
                            {AFRICAN_FEATURES.map((feature, index) => (
                                <li 
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <feature.icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm md:text-base text-foreground">
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </AnimationContainer>
                </div>

                {/* Right Column - Africa Map Visualization */}
                <div className="flex-1 relative">
                    <AnimationContainer animation="fadeLeft" delay={0.4}>
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Stylized Africa Map Background */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border border-border/50">
                                {/* SVG Africa silhouette placeholder */}
                                <svg
                                    viewBox="0 0 200 200"
                                    className="w-full h-full p-8 text-primary/20"
                                    fill="currentColor"
                                >
                                    <path d="M100 20 C60 25 40 45 35 70 C30 95 40 130 55 155 C70 180 90 190 100 190 C110 190 130 180 145 155 C160 130 170 95 165 70 C160 45 140 25 100 20 Z M80 60 A5 5 0 1 1 80 70 A5 5 0 1 1 80 60 M120 75 A5 5 0 1 1 120 85 A5 5 0 1 1 120 75 M90 100 A5 5 0 1 1 90 110 A5 5 0 1 1 90 100 M110 130 A5 5 0 1 1 110 140 A5 5 0 1 1 110 130" />
                                </svg>
                            </div>

                            {/* Animated connection nodes */}
                            {AFRICAN_COUNTRIES.map((country, index) => (
                                <div 
                                    key={index}
                                    className="absolute"
                                    style={{
                                        top: country.position.top,
                                        left: country.position.left,
                                    }}
                                >
                                    <div className="relative group cursor-pointer">
                                        {/* Pulse animation */}
                                        <div 
                                            className="absolute inset-0 rounded-full bg-primary/30 animate-ping"
                                            style={{ animationDelay: `${index * 0.3}s`, animationDuration: '2s' }}
                                        />
                                        {/* Node */}
                                        <div className="relative w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-card border border-border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                            {country.name}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Stats overlay */}
                            <div className="absolute bottom-4 left-4 right-4 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50">
                                <div className="flex items-center justify-between text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-primary">8</div>
                                        <div className="text-xs text-muted-foreground">Countries</div>
                                    </div>
                                    <div className="h-8 w-px bg-border" />
                                    <div>
                                        <div className="text-2xl font-bold text-primary">40+</div>
                                        <div className="text-xs text-muted-foreground">Companies</div>
                                    </div>
                                    <div className="h-8 w-px bg-border" />
                                    <div>
                                        <div className="text-2xl font-bold text-primary">15+</div>
                                        <div className="text-xs text-muted-foreground">African ERPs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    );
};

export default AfricanAdvantage;

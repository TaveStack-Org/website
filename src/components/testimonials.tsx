"use client";

import { TESTIMONIALS, METRICS } from '@/constants';
import { cn } from '@/lib';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import Marquee from './ui/marquee';
import SectionBadge from './ui/section-badge';
import GradientText from './ui/gradient-text';
import StatCounter from './ui/stat-counter';

const Testimonials = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Wrapper className="py-20 lg:py-32" id="testimonials">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Customer Success" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight">
                        <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                            Trusted by Africa's
                        </GradientText>
                        <span className="text-foreground">Fastest-Growing Companies</span>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        See how enterprises across Africa are transforming their operations with Tavestack
                    </p>
                </AnimationContainer>
            </div>

            {/* Metrics Bar */}
            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-8 rounded-2xl bg-card/50 border border-border/50">
                    {METRICS.map((metric, index) => (
                        <div key={index} className="text-center">
                            <StatCounter
                                value={metric.value}
                                prefix={metric.prefix}
                                suffix={metric.suffix}
                                label={metric.label}
                                duration={2000}
                            />
                        </div>
                    ))}
                </div>
            </AnimationContainer>

            {/* Testimonials Carousel */}
            <AnimationContainer animation="fadeUp" delay={0.6}>
                <div className="relative">
                    <div className={cn(
                        "absolute -left-1 top-0 w-20 h-full bg-gradient-to-r to-transparent z-10",
                        !mounted ? "from-background" : resolvedTheme === "dark" ? "from-background" : "from-background"
                    )} />
                    <div className={cn(
                        "absolute -right-1 top-0 w-20 h-full bg-gradient-to-l to-transparent z-10",
                        !mounted ? "from-background" : resolvedTheme === "dark" ? "from-background" : "from-background"
                    )} />

                    <Marquee className="[--gap:1.5rem]" pauseOnHover>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex-shrink-0 w-[400px] rounded-2xl p-6 border border-border/50",
                                    "bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
                                )}
                            >
                                <div className="flex flex-col gap-4">
                                    {/* Quote icon */}
                                    <Quote className="w-8 h-8 text-primary/30" />
                                    
                                    {/* Content */}
                                    <p className="text-base text-foreground leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Rating */}
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-primary text-primary"
                                            />
                                        ))}
                                    </div>

                                    {/* Author info */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-sm font-semibold text-primary">
                                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-foreground">
                                                {testimonial.author}
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                {testimonial.role}, {testimonial.company}
                                            </p>
                                            <p className="text-xs text-primary">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default Testimonials;

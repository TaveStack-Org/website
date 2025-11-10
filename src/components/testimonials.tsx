"use client";

import { TESTIMONIALS } from '@/constants';
import { cn } from '@/lib';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import Marquee from './ui/marquee';
import SectionBadge from './ui/section-badge';
import GradientText from './ui/gradient-text';

const Testimonials = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Testimonials" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight">
                        <GradientText colors={['#9c40ff', '#ffaa40', '#9c40ff']} animationSpeed={6}>
                            Trusted across Africa
                            <br />
                            and beyond
                        </GradientText>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from our beta users across different sectors about how TaveStack is transforming their workflow
                    </p>
                </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="relative">
                    <div className={cn(
                        "absolute -left-1 top-0 w-20 h-full bg-gradient-to-r to-transparent z-10",
                        !mounted ? "from-[#101010]" : resolvedTheme === "dark" ? "from-[#101010]" : "from-purple-50"
                    )} />
                    <div className={cn(
                        "absolute -right-1 top-0 w-20 h-full bg-gradient-to-l to-transparent z-10",
                        !mounted ? "from-[#101010]" : resolvedTheme === "dark" ? "from-[#101010]" : "from-purple-50"
                    )} />

                    <Marquee className="[--gap:1.5rem]" pauseOnHover>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <AnimationContainer
                                key={index}
                                animation="fadeUp"
                                delay={0.6 + (index * 0.1)}
                            >
                                <div
                                    className={cn(
                                        "flex-shrink-0 w-[400px] rounded-3xl backdrop-blur-3xl p-8",
                                        !mounted ? "bg-[#191919]" : resolvedTheme === "dark" ? "bg-[#191919]" : "bg-purple-100"
                                    )}
                                >
                                    <div className="flex flex-col gap-6">
                                        <AnimationContainer animation="fadeRight" delay={0.7 + (index * 0.1)}>
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">
                                                        {testimonial.author}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </AnimationContainer>

                                        <AnimationContainer animation="fadeUp" delay={0.8 + (index * 0.1)}>
                                            <p className="text-lg">
                                                "{testimonial.content}"
                                            </p>
                                        </AnimationContainer>

                                        <AnimationContainer animation="fadeUp" delay={0.9 + (index * 0.1)}>
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 fill-primary text-primary"
                                                    />
                                                ))}
                                            </div>
                                        </AnimationContainer>
                                    </div>
                                </div>
                            </AnimationContainer>
                        ))}
                    </Marquee>
                </div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default Testimonials;

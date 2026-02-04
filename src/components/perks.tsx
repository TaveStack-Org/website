"use client";

import { SOLUTION_PERKS } from '@/constants';
import { cn } from "@/lib";
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import GradientText from './ui/gradient-text';
import StarBorder from './ui/star-border';

const Perks = () => {
    return (
        <Wrapper className="py-20 lg:py-32 relative">
            <div className="flex flex-col items-center text-center gap-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Why Tavestack" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight">
                        <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                            Everything You Need
                            <br />
                            To Run Efficiently
                        </GradientText>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        One unified platform that connects your ERP systems, automates workflows, and gives you complete visibility.
                    </p>
                </AnimationContainer>
            </div>

            <div className="relative pt-10">
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10">
                    <AnimationContainer animation="scaleUp" delay={0.5}>
                        <Image
                            src="/images/grid-lines.svg"
                            alt="Grid"
                            width={32}
                            height={32}
                            className="size-full"
                        />
                    </AnimationContainer>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 relative z-20 gap-4 lg:gap-8">
                    {SOLUTION_PERKS.map((perk, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.2 * (index + 1)}
                        >
                            <div className="flex flex-col items-center text-center gap-4 p-4 md:p-8">
                                <StarBorder
                                    as="div"
                                    color="#9c40ff"
                                    speed="4s"
                                    thickness={2}
                                    className="cursor-default"
                                >
                                    <div className="size-16 lg:size-20 rounded-lg lg:rounded-2xl flex items-center justify-center bg-transparent">
                                        <perk.icon className="size-8 lg:size-10 text-purple-500" />
                                    </div>
                                </StarBorder>
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
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Perks;
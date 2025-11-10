"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { FAQS } from '@/constants';
import { cn } from '@/lib';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import GradientText from './ui/gradient-text';

const FAQ = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Wrapper className="py-20 lg:py-32" id="faq">
            <div className="flex flex-col items-center text-center gap-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="FAQ" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight">
                        <GradientText colors={['#9c40ff', '#ffaa40', '#9c40ff']} animationSpeed={6}>
                            Still have questions?
                        </GradientText>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about TaveStack's features for African users
                    </p>
                </AnimationContainer>
            </div>

            <div className="max-w-3xl mx-auto pt-10">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {FAQS.map((item, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.5 + (index * 0.1)}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className={cn(
                                    "border-none rounded-2xl px-6",
                                    mounted && resolvedTheme === "dark" ? "bg-[#191919]" : mounted ? "bg-purple-100" : "bg-purple-100"
                                )}
                            >
                                <AccordionTrigger className="hover:no-underline py-6 text-base md:text-lg text-left font-normal">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-left">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </AnimationContainer>
                    ))}
                </Accordion>
            </div>
        </Wrapper>
    );
};

export default FAQ;

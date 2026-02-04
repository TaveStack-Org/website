"use client";

import { PERKS, PROBLEM_STAT } from "@/constants";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { XCircle } from "lucide-react";

const ProblemSection = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center gap-12">
                {/* Heading */}
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Your Teams Are Drowning in{" "}
                            <span className="text-destructive">Disconnected Tools</span>
                        </h2>
                    </div>
                </AnimationContainer>

                {/* 3-Column Problem Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
                    {PERKS.map((perk, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.3 + index * 0.1}
                        >
                            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-destructive/10">
                                    <XCircle className="w-7 h-7 text-destructive" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    {perk.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {perk.description}
                                </p>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>

                {/* Stat Callout */}
                <AnimationContainer animation="fadeUp" delay={0.7}>
                    <div className="relative max-w-2xl mx-auto mt-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl" />
                        <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 text-center">
                            <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground">
                                {PROBLEM_STAT.description}
                            </p>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default ProblemSection;

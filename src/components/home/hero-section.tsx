"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Play, Sparkles } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import GradientText from "../ui/gradient-text";
import { TRUSTED_LOGOS } from "@/constants";
import OsMockup from "./os-mockup";

const HeroSection = () => (
    <Wrapper className="relative pt-32 lg:pt-40 pb-16 flex flex-col items-center text-center">
        <AnimationContainer animation="fadeUp" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm">
                <Sparkles className="size-3.5 text-accent" />
                <span className="font-medium">
                    Introducing TaveStack OS 2.0 — Now with TAVE, your embedded AI Agent
                </span>
            </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight !leading-[1.05] max-w-5xl">
                The{" "}
                <GradientText
                    colors={["#7C3AED", "#F97316", "#7C3AED"]}
                    animationSpeed={6}
                    className="!mx-0 inline-flex"
                >
                    Operating System
                </GradientText>{" "}
                Your Business Has Been Waiting For
            </h1>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.25}>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
                One platform. Every business function. An AI Agent that runs it all.
                TaveStack gives your organization a unified OS — deploy any ERP or
                productivity app, and let TAVE operate them end-to-end so your team
                focuses on what only humans can do.
            </p>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.35}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/demo">
                    <Button
                        size="lg"
                        className="bg-brand-gradient text-white border-0 px-8 shadow-lg shadow-primary/30 hover:opacity-95"
                    >
                        Enter the OS Free
                    </Button>
                </Link>
                <Link href="/ai-agent">
                    <Button size="lg" variant="outline" className="px-8 gap-2">
                        <Play className="size-4" />
                        See TAVE in Action
                    </Button>
                </Link>
            </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.45}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                    <Check className="size-4 text-accent" /> Free OS access — pay only for apps you deploy
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <Check className="size-4 text-accent" /> TAVE AI Agent included on all plans
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <Check className="size-4 text-accent" /> Live in days, not months
                </span>
            </div>
        </AnimationContainer>

        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 w-full"
        >
            <OsMockup />
        </motion.div>

        <AnimationContainer animation="fadeUp" delay={0.7}>
            <div className="mt-16 w-full">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                    Trusted by 40+ organizations and government agencies
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
                        {TRUSTED_LOGOS.map((name) => (
                            <div
                                key={name}
                                className="text-sm md:text-base font-semibold tracking-tight text-muted-foreground"
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimationContainer>
    </Wrapper>
);

export default HeroSection;

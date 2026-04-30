"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APP_MODULES, APP_TILE_ICONS } from "@/constants";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import SectionHeading from "../marketing/section-heading";
import { Button } from "../ui/button";

const ModularOs = () => (
    <Wrapper className="py-20 lg:py-28">
        <SectionHeading
            eyebrow="The Platform"
            title={
                <>
                    One OS. Every Business Function.{" "}
                    <span className="text-brand-gradient">Infinite Combinations.</span>
                </>
            }
            description="Like the best operating systems in the world, TaveStack is modular at its core. You're never locked into a bloated suite. Build your business stack your way — every app you deploy is natively connected to every other."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {APP_MODULES.filter((m) => m.slug !== "erp").map((m, i) => {
                const Icon = APP_TILE_ICONS[m.slug];
                return (
                    <AnimationContainer
                        key={m.slug}
                        animation="fadeUp"
                        delay={0.05 * i}
                    >
                        <Link
                            href={`/apps/${m.slug}`}
                            className="group relative block h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="size-11 rounded-xl bg-brand-gradient flex items-center justify-center text-white shadow-md shadow-primary/20">
                                    <Icon className="size-5" />
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70 px-2 py-0.5 rounded-full border border-border/50 group-hover:text-primary group-hover:border-primary/40 transition-colors">
                                    Deploy
                                </span>
                            </div>
                            <h3 className="text-base font-semibold mb-1.5 group-hover:text-primary transition-colors">
                                {m.name}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                {m.tagline}
                            </p>
                            <div className="mt-4 pt-3 border-t border-border/40 text-[11px] text-muted-foreground/80 line-clamp-2 italic">
                                TAVE: {m.taveHighlights[0]}
                            </div>
                        </Link>
                    </AnimationContainer>
                );
            })}
        </div>

        <AnimationContainer animation="fadeUp" delay={0.5}>
            <div className="mt-12 text-center">
                <Link href="/apps">
                    <Button variant="outline" className="gap-2">
                        Explore all apps
                        <ArrowRight className="size-4" />
                    </Button>
                </Link>
            </div>
        </AnimationContainer>
    </Wrapper>
);

export default ModularOs;

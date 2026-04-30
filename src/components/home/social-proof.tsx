"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import SectionHeading from "../marketing/section-heading";
import AnimatedStat from "../marketing/animated-stat";
import { HOME_STATS, HOME_TESTIMONIALS } from "@/constants";

const SocialProof = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [selected, setSelected] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <Wrapper className="py-20 lg:py-28">
            <SectionHeading
                eyebrow="Customer Stories"
                title={
                    <>
                        The Numbers Speak.{" "}
                        <span className="text-brand-gradient">The Leaders Confirm.</span>
                    </>
                }
            />

            <AnimationContainer animation="fadeUp" delay={0.3}>
                <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 md:p-10">
                    {HOME_STATS.map((s) => (
                        <AnimatedStat
                            key={s.label}
                            value={s.value}
                            prefix={s.prefix}
                            suffix={s.suffix}
                            label={s.label}
                        />
                    ))}
                </div>
            </AnimationContainer>

            <div className="mt-16 relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {HOME_TESTIMONIALS.map((t) => (
                            <div
                                key={t.author}
                                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-3"
                            >
                                <div className="h-full rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-7 md:p-8 flex flex-col">
                                    <Quote className="size-7 text-primary/40 mb-4" />
                                    <p className="text-base md:text-lg leading-relaxed text-foreground flex-1">
                                        “{t.quote}”
                                    </p>
                                    <div className="mt-6 pt-5 border-t border-border/40">
                                        <p className="font-semibold text-sm">{t.author}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            {t.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-3">
                    <button
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                        className="size-9 rounded-full border border-border/60 bg-card/40 hover:bg-card text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                    >
                        <ChevronLeft className="size-4" />
                    </button>
                    <div className="flex items-center gap-1.5">
                        {HOME_TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => emblaApi?.scrollTo(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all ${
                                    i === selected
                                        ? "w-8 bg-brand-gradient"
                                        : "w-1.5 bg-muted-foreground/30"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                        className="size-9 rounded-full border border-border/60 bg-card/40 hover:bg-card text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                    >
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

export default SocialProof;

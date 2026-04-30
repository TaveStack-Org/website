import Link from "next/link";
import { Calendar, PlayCircle, Repeat, Video } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";

const SERIES = [
    {
        icon: PlayCircle,
        title: "TAVE in 20 Minutes",
        cadence: "Weekly · Tuesdays 16:00 GMT",
        body: "Live demo of TAVE completing a real-world business task — invoice reconciliation, candidate shortlisting, board pack generation. New scenario every week.",
        cta: "Reserve next session",
    },
    {
        icon: Video,
        title: "OS Masterclass",
        cadence: "Monthly · First Thursday",
        body: "Deep-dive on a single app module with the engineers who built it. Q&A, edge cases, and the workflows power users actually use.",
        cta: "Save your seat",
    },
    {
        icon: Calendar,
        title: "African Business Tech",
        cadence: "Quarterly · CXO panel",
        body: "An honest panel with African CXOs on digital transformation — what worked, what they wish they had skipped, and what they would build differently.",
        cta: "Watch latest replay",
    },
    {
        icon: Repeat,
        title: "Build on TaveStack",
        cadence: "Monthly · Developer session",
        body: "For engineers building on the TaveStack API — new endpoints, sample apps, and the SDK roadmap. Bring questions.",
        cta: "Join the dev list",
    },
];

const WebinarsPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Webinars"
            title={
                <>
                    Live Learning.{" "}
                    <span className="text-brand-gradient">On-Demand Intelligence.</span>
                </>
            }
            subtitle="Free, recurring sessions with the team building TaveStack and the customers running on it. Show up live or watch the replay — both work."
        />

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 gap-5">
                {SERIES.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <AnimationContainer
                            key={s.title}
                            animation="fadeUp"
                            delay={0.05 * i}
                        >
                            <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 flex flex-col">
                                <div className="size-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-5">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-lg font-semibold">{s.title}</h3>
                                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                                    {s.cadence}
                                </p>
                                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                                    {s.body}
                                </p>
                                <Link href="/contact" className="mt-6">
                                    <Button variant="outline" className="w-full">
                                        {s.cta}
                                    </Button>
                                </Link>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>
    </div>
);

export default WebinarsPage;

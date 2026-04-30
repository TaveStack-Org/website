import Link from "next/link";
import {
    ArrowRight,
    Compass,
    HeartHandshake,
    Newspaper,
    Users2,
} from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import SectionHeading from "@/components/marketing/section-heading";

const VALUES = [
    {
        title: "Radical integration",
        body: "We believe in connected systems over isolated excellence.",
    },
    {
        title: "AI as infrastructure",
        body: "Intelligence shouldn't be a premium feature. It should be in the foundation.",
    },
    {
        title: "African by origin, global by design",
        body: "Our roots make us more practical, more resilient, and more capable of building for the real world.",
    },
    {
        title: "Transparency in billing",
        body: "No per-seat gouging. No hidden fees. No lock-in.",
    },
    {
        title: "Execution over advice",
        body: "We build tools that do, not just tools that suggest.",
    },
];

const SECTIONS = [
    {
        href: "/about/story",
        icon: Compass,
        title: "Our Story",
        body: "How TaveStack started in Abuja and why we are building a global Business OS.",
    },
    {
        href: "/about/team",
        icon: Users2,
        title: "Team",
        body: "The people building TaveStack OS and TAVE.",
    },
    {
        href: "/about/careers",
        icon: HeartHandshake,
        title: "Careers",
        body: "Open roles across engineering, AI, and customer success.",
    },
    {
        href: "/about/press",
        icon: Newspaper,
        title: "Press",
        body: "Press kit, latest coverage, and contact for media inquiries.",
    },
];

const AboutPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="About"
            title={
                <>
                    We Built the Software{" "}
                    <span className="text-brand-gradient">We Couldn&rsquo;t Find.</span>
                </>
            }
            subtitle="TaveStack was born in Abuja, Nigeria, from a simple observation: African businesses — and increasingly, businesses everywhere — were spending more time managing software than running their companies. Eleven tools. Eleven logins. Zero intelligence connecting them. So we built the operating system."
        />

        <Wrapper className="py-12 lg:py-16">
            <SectionHeading
                eyebrow="Mission"
                title={
                    <>
                        Give every organization in the world{" "}
                        <span className="text-brand-gradient">access to an intelligent OS</span>
                    </>
                }
                description="To give every organization in the world — regardless of size, location, or legacy infrastructure — access to an intelligent, unified operating system that makes them as efficient as the best-run companies on earth."
            />

            <div className="mt-14">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6 text-center">
                    Our Values
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {VALUES.map((v, i) => (
                        <AnimationContainer
                            key={v.title}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <div className="h-full rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5">
                                <h4 className="text-base font-semibold text-brand-gradient">
                                    {v.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                    {v.body}
                                </p>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </div>
        </Wrapper>

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {SECTIONS.map((s) => {
                    const Icon = s.icon;
                    return (
                        <Link
                            key={s.href}
                            href={s.href}
                            className="group h-full block rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 transition-colors"
                        >
                            <div className="size-10 rounded-lg bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-4">
                                <Icon className="size-5" />
                            </div>
                            <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                                {s.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-2">{s.body}</p>
                            <ArrowRight className="size-4 text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                    );
                })}
            </div>
        </Wrapper>
    </div>
);

export default AboutPage;

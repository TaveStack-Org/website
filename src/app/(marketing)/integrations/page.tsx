import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Github, Webhook } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import SectionHeading from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { INTEGRATION_GROUPS } from "@/constants";

const DEV_LINKS = [
    {
        icon: BookOpen,
        title: "API Documentation",
        body: "REST and GraphQL reference for every TaveStack module.",
        href: "/resources/api",
    },
    {
        icon: Code2,
        title: "Developer Sandbox",
        body: "Free dev environment to test against TaveStack OS.",
        href: "/resources/api",
    },
    {
        icon: Github,
        title: "GitHub SDK",
        body: "Open-source SDKs and starter templates.",
        href: "/resources/api",
    },
    {
        icon: Webhook,
        title: "Webhook Reference",
        body: "Real-time events for every action across the OS.",
        href: "/resources/api",
    },
];

const IntegrationsPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Integrations"
            title={
                <>
                    TaveStack Plays Well With{" "}
                    <span className="text-brand-gradient">Your Existing World.</span>
                </>
            }
            subtitle="Already invested in tools your team loves? TaveStack OS integrates with 100+ external systems via native connectors, REST APIs, and webhooks. Migrate at your pace — or never migrate at all."
        />

        <Wrapper className="py-12 lg:py-16">
            <SectionHeading
                eyebrow="Categories"
                title="100+ Integrations Across the Stack"
            />
            <div className="mt-12 grid md:grid-cols-2 gap-5">
                {INTEGRATION_GROUPS.map((g, i) => {
                    const Icon = g.icon;
                    return (
                        <AnimationContainer
                            key={g.category}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="size-10 rounded-lg bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="text-base font-semibold">{g.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {g.items.map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs px-3 py-1.5 rounded-full border border-border/60 bg-foreground/5 text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>

        <Wrapper className="py-16 lg:py-24">
            <SectionHeading
                eyebrow="Developer API"
                title={
                    <>
                        Build on TaveStack.{" "}
                        <span className="text-brand-gradient">Extend Anything.</span>
                    </>
                }
                description="Every feature in TaveStack OS is accessible via our well-documented REST and GraphQL APIs. Build custom apps that run inside the OS, trigger TAVE from external systems, or pull TaveStack data into your BI tools."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {DEV_LINKS.map((d, i) => {
                    const Icon = d.icon;
                    return (
                        <AnimationContainer
                            key={d.title}
                            animation="fadeUp"
                            delay={0.05 * i}
                        >
                            <Link
                                href={d.href}
                                className="group h-full block rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors"
                            >
                                <div className="size-10 rounded-lg bg-secondary text-primary flex items-center justify-center mb-4">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                                    {d.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                                    {d.body}
                                </p>
                                <ArrowRight className="size-4 text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Link>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>

        <Wrapper className="pb-24">
            <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 lg:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-semibold">
                    Need a connector we don't list?
                </h3>
                <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                    We ship new integrations every month. If you don't see yours, our team will scope and prioritize it for the roadmap.
                </p>
                <div className="mt-6">
                    <Link href="/contact">
                        <Button className="bg-brand-gradient text-white border-0 px-7">
                            Request an integration
                        </Button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    </div>
);

export default IntegrationsPage;

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { RESOURCES_LINKS } from "@/constants";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Resources — Insights, Docs, and Case Studies",
    description:
        "Insights on AI, ERP, and African business operations — plus product documentation, case studies, webinars, API references, and the TaveStack community.",
    path: "/resources",
    keywords: ["TaveStack resources", "ERP blog", "ERP case studies", "TaveStack documentation"],
});

const ResourcesPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Resources"
            title={
                <>
                    Learn, <span className="text-brand-gradient">Build, and Lead</span> on TaveStack
                </>
            }
            subtitle="Insights, documentation, real customer stories, live sessions, and developer references — everything you need to get the most out of TaveStack OS and TAVE."
        />

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {RESOURCES_LINKS.map((r, i) => {
                    const Icon = r.icon;
                    return (
                        <AnimationContainer
                            key={r.href}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <Link
                                href={r.href}
                                className="group h-full block rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 hover:bg-card/70 transition-all"
                            >
                                <div className="size-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-5">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    {r.label}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                    {r.description}
                                </p>
                                <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                                    Explore <ArrowRight className="size-3.5" />
                                </div>
                            </Link>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>
    </div>
);

export default ResourcesPage;

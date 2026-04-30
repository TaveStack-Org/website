"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { APP_CATEGORY_FILTERS, APP_MODULES, APP_TILE_ICONS } from "@/constants";
import { Button } from "@/components/ui/button";

const slugCategory: Record<string, string> = {
    erp: "ERP",
    finance: "Finance",
    hr: "HR",
    crm: "CRM",
    "supply-chain": "Supply Chain",
    projects: "Projects",
    analytics: "Analytics",
    communications: "Communications",
    compliance: "Compliance",
};

const AppsPage = () => {
    const [filter, setFilter] = useState<string>("All");
    const visible = APP_MODULES.filter((m) =>
        filter === "All" ? true : slugCategory[m.slug] === filter,
    );

    return (
        <div className="w-full relative flex flex-col">
            <PageHero
                eyebrow="Apps Marketplace"
                title={
                    <>
                        Every Business App You Need.{" "}
                        <span className="text-brand-gradient">One OS to Run Them All.</span>
                    </>
                }
                subtitle="TaveStack Apps are not integrations — they are native modules built to live inside the TaveStack OS. Deploy what you need today. Expand as you grow. Every app is natively connected to TAVE."
            />

            <Wrapper className="pb-12">
                <AnimationContainer animation="fadeUp" delay={0.1}>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {APP_CATEGORY_FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                                    filter === f
                                        ? "border-primary/50 bg-primary/10 text-primary"
                                        : "border-border/60 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </AnimationContainer>
            </Wrapper>

            <Wrapper className="pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visible.map((m, i) => {
                        const Icon = APP_TILE_ICONS[m.slug];
                        return (
                            <AnimationContainer
                                key={m.slug}
                                animation="fadeUp"
                                delay={0.04 * i}
                            >
                                <Link
                                    href={`/apps/${m.slug}`}
                                    className="group h-full block rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5 transition-all"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="size-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20">
                                            <Icon className="size-5" />
                                        </div>
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70 px-2 py-0.5 rounded-full border border-border/50">
                                            {m.plan}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        {m.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                                        {m.tagline}
                                    </p>
                                    <p className="text-xs text-muted-foreground/80 mt-3 line-clamp-2">
                                        {m.description}
                                    </p>
                                    <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                                        <span className="text-sm font-semibold">
                                            <span className="text-brand-gradient">${m.monthly}</span>
                                            <span className="text-xs text-muted-foreground">
                                                /month
                                            </span>
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                            View module <ArrowRight className="size-3" />
                                        </span>
                                    </div>
                                </Link>
                            </AnimationContainer>
                        );
                    })}
                </div>
            </Wrapper>

            <Wrapper className="pb-24">
                <div className="rounded-2xl border border-primary/30 bg-card/40 backdrop-blur-sm p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <Sparkles className="size-9 text-primary shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold">
                                Every app comes with TAVE built in
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                                Activate any module and TAVE inherits full read-and-write access automatically. No new logins. No new integrations. No new dashboards.
                            </p>
                        </div>
                    </div>
                    <Link href="/ai-agent">
                        <Button className="bg-brand-gradient text-white border-0 hover:opacity-95 shadow-lg shadow-primary/20">
                            Meet TAVE
                        </Button>
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default AppsPage;

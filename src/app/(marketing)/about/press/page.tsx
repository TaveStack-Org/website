import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Mail, Newspaper } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Press & Media",
    description:
        "TaveStack press kit, media coverage, and press contact. For media inquiries: press@tavestack.com.",
    path: "/about/press",
});

const COVERAGE = [
    {
        outlet: "TechCabal",
        title: "TaveStack lands government deployments across four ministries",
        date: "Apr 2026",
    },
    {
        outlet: "Disrupt Africa",
        title: "Why TaveStack's modular ERP model is winning African SMEs",
        date: "Mar 2026",
    },
    {
        outlet: "Ventureburn",
        title: "AI Agents that act, not advise — TaveStack's pitch to enterprise",
        date: "Feb 2026",
    },
    {
        outlet: "Rest of World",
        title: "Africa's first global Business OS goes live",
        date: "Jan 2026",
    },
];

const PressPage = () => (
    <div className="w-full relative flex flex-col">
        <Wrapper className="pt-32">
            <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="size-3.5" />
                About TaveStack
            </Link>
        </Wrapper>

        <PageHero
            eyebrow="Press"
            title={
                <>
                    TaveStack <span className="text-brand-gradient">in the News</span>
                </>
            }
            subtitle="Press kit, media coverage, and contact for journalists and analysts. We respond fast — usually same business day."
        />

        <Wrapper className="pb-12">
            <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7">
                    <Download className="size-7 text-primary mb-4" />
                    <h3 className="text-lg font-semibold">Press Kit</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Logo files (SVG, PNG), product screenshots, founder portraits, brand colors, and a one-pager about TaveStack OS.
                    </p>
                    <Button variant="outline" className="mt-5 gap-2">
                        Download Press Kit (.zip)
                        <Download className="size-4" />
                    </Button>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7">
                    <Mail className="size-7 text-primary mb-4" />
                    <h3 className="text-lg font-semibold">Media Inquiries</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Story ideas, interviews, panels, expert commentary on AI and African enterprise tech — get in touch.
                    </p>
                    <a
                        href="mailto:press@tavestack.com"
                        className="mt-5 inline-flex items-center justify-center rounded-md bg-brand-gradient text-white px-7 h-9 text-sm font-medium shadow-md shadow-primary/20"
                    >
                        press@tavestack.com
                    </a>
                </div>
            </div>
        </Wrapper>

        <Wrapper className="pb-24">
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center gap-2">
                <Newspaper className="size-5 text-primary" />
                Recent Coverage
            </h3>
            <div className="space-y-3">
                {COVERAGE.map((c, i) => (
                    <AnimationContainer
                        key={c.title}
                        animation="fadeUp"
                        delay={0.04 * i}
                    >
                        <a
                            href="#"
                            className="group flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors"
                        >
                            <div className="flex-1">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                    {c.outlet} · {c.date}
                                </p>
                                <p className="text-base font-semibold mt-1 group-hover:text-primary transition-colors">
                                    {c.title}
                                </p>
                            </div>
                            <ExternalLink className="size-4 text-muted-foreground" />
                        </a>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    </div>
);

export default PressPage;

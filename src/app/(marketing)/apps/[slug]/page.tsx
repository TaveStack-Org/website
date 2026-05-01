import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { APP_MODULES, APP_TILE_ICONS, type AppSlug } from "@/constants";
import { Button } from "@/components/ui/button";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export function generateStaticParams() {
    return APP_MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const m = APP_MODULES.find((x) => x.slug === slug);
    if (!m) return {};
    return buildMeta({
        title: `${m.name} — TaveStack Apps`,
        description: `${m.tagline} ${m.description}`,
        path: `/apps/${m.slug}`,
        keywords: [m.name, `${m.name} software`, `${m.name} ERP`, "TaveStack Apps", "AI-native business module"],
    });
}

const AppDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const m = APP_MODULES.find((x) => x.slug === slug);
    if (!m) notFound();

    const Icon = APP_TILE_ICONS[m.slug as AppSlug];
    const others = APP_MODULES.filter((x) => x.slug !== m.slug && x.slug !== "erp").slice(0, 3);

    return (
        <div className="w-full relative flex flex-col">
            <Wrapper className="pt-32">
                <Link
                    href="/apps"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="size-3.5" />
                    All apps
                </Link>
            </Wrapper>

            <PageHero
                eyebrow={m.plan === "Enterprise" ? "Enterprise plan" : "Grow plan"}
                title={
                    <>
                        {m.name}
                        <span className="block text-brand-gradient mt-2 text-3xl md:text-4xl lg:text-5xl">
                            {m.tagline}
                        </span>
                    </>
                }
                subtitle={m.description}
            >
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link href="/demo">
                        <Button
                            size="lg"
                            className="bg-brand-gradient text-white border-0 px-8 shadow-lg shadow-primary/30 hover:opacity-95"
                        >
                            Deploy {m.name}
                        </Button>
                    </Link>
                    <span className="text-sm text-muted-foreground">
                        From{" "}
                        <span className="text-brand-gradient font-semibold">${m.annual}</span>
                        /month annual · ${m.monthly}/month
                    </span>
                </div>
            </PageHero>

            <Wrapper className="pb-12">
                <AnimationContainer animation="scaleUp" delay={0.2}>
                    <div className="relative mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl p-8 lg:p-10 overflow-hidden text-center">
                        <div className="absolute -inset-20 -z-10 bg-brand-gradient opacity-15 blur-[100px] rounded-full pointer-events-none" />
                        <div className="size-16 mx-auto rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-xl shadow-primary/30 mb-5">
                            <Icon className="size-7" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {m.name} runs natively inside TaveStack OS.
                        </p>
                    </div>
                </AnimationContainer>
            </Wrapper>

            <Wrapper className="py-12 lg:py-16">
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">What&rsquo;s included</h2>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {m.features.map((f) => (
                                <li
                                    key={f}
                                    className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm px-4 py-3 text-sm"
                                >
                                    <Check className="size-4 shrink-0 mt-0.5 text-accent" />
                                    <span className="text-foreground/90">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 lg:p-7 h-fit">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="size-5 text-primary" />
                            <h3 className="text-lg font-semibold">TAVE in {m.name}</h3>
                        </div>
                        <ul className="space-y-3">
                            {m.taveHighlights.map((h) => (
                                <li
                                    key={h}
                                    className="text-sm text-foreground/85 leading-relaxed"
                                >
                                    <span className="text-primary mr-1">›</span> {h}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/ai-agent"
                            className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                            Meet TAVE in full
                            <ArrowRight className="size-3.5" />
                        </Link>
                    </div>
                </div>
            </Wrapper>

            <Wrapper className="py-16 lg:py-24">
                <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 lg:p-10">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-semibold">
                                Pricing — {m.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                {m.plan === "Enterprise"
                                    ? "Included with TaveStack Enterprise. Talk to sales for a tailored quote."
                                    : `Activate from $${m.annual}/month on annual billing, or $${m.monthly}/month month-to-month. Deactivate anytime.`}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold tracking-tight text-brand-gradient">
                                ${m.monthly}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                per organization / month
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <Wrapper className="pb-24">
                <h3 className="text-lg font-semibold mb-5 text-center">
                    Other modules teams pair with {m.name}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    {others.map((o) => {
                        const OtherIcon = APP_TILE_ICONS[o.slug];
                        return (
                            <Link
                                key={o.slug}
                                href={`/apps/${o.slug}`}
                                className="group rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-secondary text-primary flex items-center justify-center">
                                        <OtherIcon className="size-4" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold group-hover:text-primary transition-colors">
                                            {o.name}
                                        </h4>
                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                            {o.tagline}
                                        </p>
                                    </div>
                                    <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Wrapper>
        </div>
    );
};

export default AppDetailPage;

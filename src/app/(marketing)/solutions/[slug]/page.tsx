import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { SOLUTIONS, APP_MODULES, APP_TILE_ICONS } from "@/constants";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
    return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const s = SOLUTIONS.find((x) => x.slug === slug);
    if (!s) return {};
    return {
        title: `${s.name} — TaveStack Solutions`,
        description: s.summary,
    };
}

const recommendedApps: Record<string, string[]> = {
    enterprise: ["erp", "finance", "compliance", "analytics"],
    sme: ["finance", "hr", "crm", "communications"],
    government: ["compliance", "supply-chain", "finance", "communications"],
    manufacturing: ["supply-chain", "finance", "projects", "analytics"],
    "financial-services": ["finance", "compliance", "analytics", "crm"],
    retail: ["supply-chain", "crm", "finance", "analytics"],
    healthcare: ["hr", "supply-chain", "compliance", "communications"],
    africa: ["finance", "hr", "crm", "communications"],
};

const SolutionDetailPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const s = SOLUTIONS.find((x) => x.slug === slug);
    if (!s) notFound();

    const Icon = s.icon;
    const apps = (recommendedApps[s.slug] ?? [])
        .map((appSlug) => APP_MODULES.find((m) => m.slug === appSlug))
        .filter((m): m is NonNullable<typeof m> => Boolean(m));

    return (
        <div className="w-full relative flex flex-col">
            <Wrapper className="pt-32">
                <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="size-3.5" />
                    All solutions
                </Link>
            </Wrapper>

            <PageHero
                eyebrow={`Solutions · ${s.name}`}
                title={
                    <>
                        <span className="text-brand-gradient">{s.headline}</span>
                    </>
                }
                subtitle={s.summary}
            >
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/demo">
                        <Button
                            size="lg"
                            className="bg-brand-gradient text-white border-0 px-8 shadow-lg shadow-primary/30 hover:opacity-95"
                        >
                            Book a {s.name} demo
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="px-8">
                            Talk to a solutions expert
                        </Button>
                    </Link>
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
                            TaveStack OS configured for {s.name}.
                        </p>
                    </div>
                </AnimationContainer>
            </Wrapper>

            <Wrapper className="py-12 lg:py-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">Key benefits</h2>
                <div className="grid md:grid-cols-2 gap-3">
                    {s.benefits.map((b, i) => (
                        <AnimationContainer
                            key={b}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <div className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm px-4 py-4 text-sm">
                                <Check className="size-4 shrink-0 mt-0.5 text-accent" />
                                <span className="text-foreground/90 leading-relaxed">{b}</span>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </Wrapper>

            {s.callout && (
                <Wrapper className="py-12">
                    <AnimationContainer animation="scaleUp" delay={0.2}>
                        <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 lg:p-10 max-w-3xl mx-auto">
                            <Quote className="size-7 text-primary/40 mb-3" />
                            <p className="text-base md:text-lg leading-relaxed text-foreground/90 italic">
                                {s.callout}
                            </p>
                        </div>
                    </AnimationContainer>
                </Wrapper>
            )}

            {apps.length > 0 && (
                <Wrapper className="py-16 lg:py-24">
                    <h3 className="text-2xl font-semibold mb-8 text-center">
                        Recommended apps for {s.name}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {apps.map((m) => {
                            const AppIcon = APP_TILE_ICONS[m.slug];
                            return (
                                <Link
                                    key={m.slug}
                                    href={`/apps/${m.slug}`}
                                    className="group rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors"
                                >
                                    <div className="size-10 rounded-lg bg-brand-gradient text-white flex items-center justify-center mb-3 shadow-md shadow-primary/20">
                                        <AppIcon className="size-4" />
                                    </div>
                                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors">
                                        {m.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                        {m.tagline}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </Wrapper>
            )}

            <Wrapper className="pb-24">
                <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 lg:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                        Ready to deploy TaveStack for {s.name}?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                        Talk to a solutions expert who has shipped TaveStack OS in your sector. We
                        will scope, scope, and confirm in days.
                    </p>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/demo">
                            <Button className="bg-brand-gradient text-white border-0 px-7">
                                Book a Demo
                                <ArrowRight className="size-4 ml-1" />
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button variant="outline" className="px-7">
                                See pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default SolutionDetailPage;

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import PageHero from "./page-hero";

export interface LegalSection {
    title: string;
    body: string;
}

interface LegalShellProps {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: string;
    summary?: string;
    sections: LegalSection[];
    lastUpdated?: string;
}

const LegalShell = ({
    eyebrow,
    title,
    subtitle,
    summary,
    sections,
    lastUpdated = "April 2026",
}: LegalShellProps) => (
    <div className="w-full relative flex flex-col">
        <Wrapper className="pt-32">
            <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="size-3.5" />
                Back to TaveStack
            </Link>
        </Wrapper>

        <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <Wrapper className="pb-24">
            <div className="max-w-3xl mx-auto">
                {summary && (
                    <AnimationContainer animation="scaleUp" delay={0.1}>
                        <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 lg:p-7 mb-12">
                            <div className="flex items-start gap-3">
                                <Shield className="size-6 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                                        Summary
                                    </p>
                                    <p className="text-sm text-foreground/85 leading-relaxed">
                                        {summary}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>
                )}

                <div className="space-y-8">
                    {sections.map((s, i) => (
                        <AnimationContainer
                            key={s.title}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <section>
                                <div className="flex items-baseline gap-3 mb-3">
                                    <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h2 className="text-xl font-semibold">{s.title}</h2>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed pl-7">
                                    {s.body}
                                </p>
                            </section>
                        </AnimationContainer>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground">
                    Last updated: {lastUpdated}. Questions? Contact{" "}
                    <a
                        href="mailto:legal@tavestack.com"
                        className="text-primary hover:underline"
                    >
                        legal@tavestack.com
                    </a>
                </div>
            </div>
        </Wrapper>
    </div>
);

export default LegalShell;

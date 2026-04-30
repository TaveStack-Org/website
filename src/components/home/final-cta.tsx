import Link from "next/link";
import { Lock, ShieldCheck, Sparkles, Globe2, FileCheck } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";

const TRUST = [
    { icon: ShieldCheck, label: "SOC 2 Type II Certified" },
    { icon: FileCheck, label: "NDPR Compliant" },
    { icon: Sparkles, label: "99.9% Uptime SLA" },
    { icon: Lock, label: "End-to-end encryption" },
    { icon: Globe2, label: "GDPR Ready" },
];

const FinalCta = () => (
    <Wrapper className="py-20 lg:py-28">
        <AnimationContainer animation="scaleUp" delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm px-6 py-16 lg:px-16 lg:py-24 text-center">
                <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-brand-gradient opacity-25 blur-[120px] rounded-full pointer-events-none" />
                <div className="relative">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight !leading-tight max-w-3xl mx-auto">
                        Your Business Deserves an OS,{" "}
                        <span className="text-brand-gradient">Not a Stack of Apps.</span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of professionals who've stopped duct-taping tools together
                        and started running their entire business from one intelligent operating
                        system.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/demo">
                            <Button
                                size="lg"
                                className="bg-brand-gradient text-white border-0 px-8 shadow-lg shadow-primary/30 hover:opacity-95"
                            >
                                Enter the OS Free
                            </Button>
                        </Link>
                        <Link href="/demo">
                            <Button size="lg" variant="outline" className="px-8">
                                Book a Demo
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-muted-foreground">
                        {TRUST.map((t) => {
                            const Icon = t.icon;
                            return (
                                <span
                                    key={t.label}
                                    className="inline-flex items-center gap-1.5"
                                >
                                    <Icon className="size-4 text-primary" />
                                    {t.label}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AnimationContainer>
    </Wrapper>
);

export default FinalCta;

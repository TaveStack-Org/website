import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import SectionHeading from "../marketing/section-heading";
import { Button } from "../ui/button";

const TIERS = [
    {
        name: "Free — The OS",
        price: "$0",
        cadence: "forever",
        description: "Start here. Always free.",
        features: [
            "Full TaveStack OS access",
            "TAVE AI Agent (limited commands)",
            "Up to 5 users",
            "1 active app module",
        ],
        cta: { label: "Enter the OS Free", href: "/demo" },
        accent: false,
    },
    {
        name: "Grow",
        price: "From $49",
        cadence: "/module/month",
        description: "Deploy the apps your business needs.",
        features: [
            "Full TAVE AI Agent",
            "Unlimited users",
            "Per-module billing — activate/deactivate anytime",
            "Priority support",
        ],
        cta: { label: "Start with Grow", href: "/pricing" },
        accent: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        cadence: "",
        description: "For organizations with complex needs.",
        features: [
            "Dedicated TAVE environment",
            "Custom integrations",
            "On-premise or private cloud",
            "SLA-backed uptime + 24/7 support",
        ],
        cta: { label: "Talk to Sales", href: "/contact" },
        accent: false,
    },
];

const PricingTeaser = () => (
    <Wrapper className="py-20 lg:py-28">
        <SectionHeading
            eyebrow="Pricing"
            title={
                <>
                    The OS Is Free.{" "}
                    <span className="text-brand-gradient">The Apps Are Yours to Choose.</span>
                </>
            }
            description="TaveStack believes your core business infrastructure should be accessible to every organization. The OS — including TAVE — is free to enter. You only pay for the apps you deploy."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
            {TIERS.map((t, i) => (
                <AnimationContainer key={t.name} animation="fadeUp" delay={0.1 * i}>
                    <div
                        className={`relative h-full rounded-2xl border p-7 backdrop-blur-sm flex flex-col ${
                            t.accent
                                ? "border-primary/50 bg-card/80 shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                                : "border-border/60 bg-card/40 hover:border-border"
                        }`}
                    >
                        {t.accent && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-gradient text-white text-[10px] font-semibold uppercase tracking-wider shadow-md">
                                Most popular
                            </div>
                        )}
                        <h3 className="text-lg font-semibold">{t.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            {t.description}
                        </p>
                        <div className="mt-5 flex items-baseline gap-1">
                            <span
                                className={`text-3xl md:text-4xl font-bold tracking-tight ${
                                    t.accent ? "text-brand-gradient" : "text-foreground"
                                }`}
                            >
                                {t.price}
                            </span>
                            {t.cadence && (
                                <span className="text-xs text-muted-foreground">
                                    {t.cadence}
                                </span>
                            )}
                        </div>
                        <ul className="mt-6 space-y-2.5 flex-1">
                            {t.features.map((f) => (
                                <li
                                    key={f}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                    <Check className="size-4 shrink-0 mt-0.5 text-accent" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href={t.cta.href} className="mt-7">
                            <Button
                                className={`w-full ${
                                    t.accent
                                        ? "bg-brand-gradient text-white border-0 hover:opacity-95"
                                        : ""
                                }`}
                                variant={t.accent ? "default" : "outline"}
                            >
                                {t.cta.label}
                            </Button>
                        </Link>
                    </div>
                </AnimationContainer>
            ))}
        </div>

        <AnimationContainer animation="fadeUp" delay={0.5}>
            <div className="mt-12 text-center">
                <Link href="/pricing">
                    <Button variant="ghost" className="gap-2">
                        See full pricing
                        <ArrowRight className="size-4" />
                    </Button>
                </Link>
            </div>
        </AnimationContainer>
    </Wrapper>
);

export default PricingTeaser;

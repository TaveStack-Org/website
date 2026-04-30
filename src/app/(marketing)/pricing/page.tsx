"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import SectionHeading from "@/components/marketing/section-heading";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_MODULES, APP_TILE_ICONS, PRICING_FAQ } from "@/constants";
import { Button } from "@/components/ui/button";

const TIERS = [
    {
        name: "OS Free",
        sub: "Forever free",
        price: { monthly: 0, annual: 0 },
        priceLabel: "$0",
        cadence: "/month",
        description: "Start here. Always free.",
        features: [
            "Full TaveStack OS access",
            "TAVE AI Agent (up to 50 commands/month)",
            "Up to 5 users",
            "1 active app module",
            "Community support",
            "5GB storage",
        ],
        cta: { label: "Enter the OS Free", href: "/demo" },
        accent: false,
    },
    {
        name: "OS Grow",
        sub: "Per organization",
        price: { monthly: 39, annual: 29 },
        priceLabel: "$29",
        cadence: "/org/month, billed annually",
        description: "Deploy unlimited apps and unlock TAVE.",
        features: [
            "Full TaveStack OS access",
            "TAVE AI Agent (unlimited commands)",
            "Unlimited users",
            "Unlimited app modules (billed separately)",
            "Priority email support (24-hour response)",
            "100GB storage",
            "SSO and SAML",
            "Custom branding",
        ],
        cta: { label: "Start with Grow", href: "/demo" },
        accent: true,
    },
    {
        name: "OS Enterprise",
        sub: "Custom",
        price: null,
        priceLabel: "Custom",
        cadence: "Contact sales",
        description: "For organizations with complex needs.",
        features: [
            "Everything in Grow",
            "Dedicated TAVE instance with custom training",
            "Private cloud or on-premise deployment",
            "Dedicated Customer Success Manager",
            "99.9% uptime SLA",
            "Custom integrations",
            "Advanced security and compliance suite",
            "24/7 phone and on-site support",
            "White-label option",
        ],
        cta: { label: "Talk to Sales", href: "/contact" },
        accent: false,
    },
];

const PricingPage = () => {
    const [annual, setAnnual] = useState(true);
    const sortedApps = [...APP_MODULES].filter((m) => m.slug !== "erp");

    return (
        <div className="w-full relative flex flex-col">
            <PageHero
                eyebrow="Pricing"
                title={
                    <>
                        Simple Pricing.{" "}
                        <span className="text-brand-gradient">No Surprises. No Lock-In.</span>
                    </>
                }
                subtitle="The TaveStack OS is your home — and it's free, forever. Every app module you deploy has transparent, predictable pricing. Build your exact stack. Pay for exactly what you use."
            >
                <div className="flex items-center gap-3 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm p-1">
                    <button
                        onClick={() => setAnnual(false)}
                        className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                            !annual
                                ? "bg-brand-gradient text-white"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setAnnual(true)}
                        className={`px-4 py-1.5 text-sm rounded-full transition-colors inline-flex items-center gap-2 ${
                            annual
                                ? "bg-brand-gradient text-white"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        Annual
                        <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                annual
                                    ? "bg-white/20 text-white"
                                    : "bg-accent/15 text-accent"
                            }`}
                        >
                            Save 20%
                        </span>
                    </button>
                </div>
            </PageHero>

            <Wrapper className="py-12">
                <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
                    {TIERS.map((t, i) => (
                        <AnimationContainer
                            key={t.name}
                            animation="fadeUp"
                            delay={0.1 * i}
                        >
                            <div
                                className={`relative h-full rounded-2xl border p-7 backdrop-blur-sm flex flex-col ${
                                    t.accent
                                        ? "border-primary/50 bg-card/80 shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                                        : "border-border/60 bg-card/40"
                                }`}
                            >
                                {t.accent && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-gradient text-white text-[10px] font-semibold uppercase tracking-wider shadow-md">
                                        Most popular
                                    </div>
                                )}
                                <h3 className="text-xl font-semibold">{t.name}</h3>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                                    {t.sub}
                                </p>
                                <p className="text-sm text-muted-foreground mt-4">
                                    {t.description}
                                </p>
                                <div className="mt-5 flex items-baseline gap-1">
                                    <span
                                        className={`text-4xl md:text-5xl font-bold tracking-tight ${
                                            t.accent ? "text-brand-gradient" : "text-foreground"
                                        }`}
                                    >
                                        {t.price === null
                                            ? "Custom"
                                            : `$${annual ? t.price.annual : t.price.monthly}`}
                                    </span>
                                    {t.price !== null && (
                                        <span className="text-xs text-muted-foreground">
                                            /month
                                        </span>
                                    )}
                                </div>
                                {t.price !== null && annual && t.price.annual !== t.price.monthly && (
                                    <p className="text-[11px] text-muted-foreground/80 mt-1">
                                        ${t.price.annual * 12} billed annually
                                    </p>
                                )}
                                {t.price === null && (
                                    <p className="text-[11px] text-muted-foreground/80 mt-1">
                                        {t.cadence}
                                    </p>
                                )}
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
            </Wrapper>

            <Wrapper className="py-16 lg:py-24">
                <SectionHeading
                    eyebrow="App modules"
                    title={
                        <>
                            Apps —{" "}
                            <span className="text-brand-gradient">Activate What You Need</span>
                        </>
                    }
                    description="All app prices include unlimited users on OS Grow and Enterprise plans. TAVE has full access to every activated module."
                />
                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <div className="mt-12 overflow-x-auto rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
                        <table className="w-full min-w-[640px] text-sm">
                            <thead>
                                <tr className="border-b border-border/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
                                    <th className="p-4 lg:p-5 font-medium">App Module</th>
                                    <th className="p-4 lg:p-5 font-medium text-right">Monthly</th>
                                    <th className="p-4 lg:p-5 font-medium text-right">
                                        Annual (per month)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedApps.map((m) => {
                                    const Icon = APP_TILE_ICONS[m.slug];
                                    return (
                                        <tr
                                            key={m.slug}
                                            className="border-b border-border/40 last:border-0 hover:bg-foreground/[0.015] transition-colors"
                                        >
                                            <td className="p-4 lg:p-5">
                                                <Link
                                                    href={`/apps/${m.slug}`}
                                                    className="inline-flex items-center gap-3 hover:text-primary transition-colors"
                                                >
                                                    <span className="size-8 rounded-md bg-secondary text-primary flex items-center justify-center">
                                                        <Icon className="size-4" />
                                                    </span>
                                                    <span className="font-medium">{m.name}</span>
                                                </Link>
                                            </td>
                                            <td className="p-4 lg:p-5 text-right text-muted-foreground">
                                                ${m.monthly}
                                            </td>
                                            <td className="p-4 lg:p-5 text-right font-semibold text-foreground">
                                                ${m.annual}
                                            </td>
                                        </tr>
                                    );
                                })}
                                <tr className="bg-primary/5">
                                    <td className="p-4 lg:p-5 font-bold text-foreground">
                                        Full Suite Bundle
                                    </td>
                                    <td className="p-4 lg:p-5 text-right font-bold">$229</td>
                                    <td className="p-4 lg:p-5 text-right font-bold text-brand-gradient">
                                        $185
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimationContainer>
            </Wrapper>

            <Wrapper className="py-16 lg:py-24">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Pricing Questions, Answered"
                />
                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <Accordion
                        type="single"
                        collapsible
                        className="mt-10 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm divide-y divide-border/40 max-w-3xl mx-auto"
                    >
                        {PRICING_FAQ.map((f, i) => (
                            <AccordionItem
                                key={f.q}
                                value={`faq-${i}`}
                                className="border-b-0 px-5 lg:px-6"
                            >
                                <AccordionTrigger className="text-left hover:no-underline text-base font-medium">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AnimationContainer>
            </Wrapper>

            <Wrapper className="pb-24">
                <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <Sparkles className="size-9 text-primary shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold">
                                NGO and government pricing
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                                Up to 40% discount for registered NGOs and government institutions. Contact sales@tavestack.com for verification.
                            </p>
                        </div>
                    </div>
                    <Link href="/contact">
                        <Button className="bg-brand-gradient text-white border-0 px-7 hover:opacity-95">
                            Contact Sales
                        </Button>
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default PricingPage;

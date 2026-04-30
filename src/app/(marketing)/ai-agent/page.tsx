"use client";

import {
    Brain,
    CheckCircle2,
    FileCheck2,
    GitBranch,
    Globe2,
    KeyRound,
    Languages,
    Mic,
    Network,
    ShieldAlert,
    Sparkles,
    XCircle,
} from "lucide-react";
import Link from "next/link";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import SectionHeading from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { TAVE_USE_CASES } from "@/constants";

const COMPARISON = [
    {
        title: "Traditional AI Assistants",
        sub: "ChatGPT, Copilot",
        icon: XCircle,
        tone: "muted" as const,
        items: [
            "Answers questions",
            "Drafts text",
            "No access to your business data",
            "Cannot take action in your systems",
            "You still have to do the work",
        ],
    },
    {
        title: "Basic AI Add-ons",
        sub: "in CRM/ERP tools",
        icon: ShieldAlert,
        tone: "muted" as const,
        items: [
            "AI within one app only",
            "Can auto-fill fields or summarize",
            "Cannot cross module boundaries",
            "Siloed intelligence",
            "Limited to suggestions",
        ],
    },
    {
        title: "TAVE inside TaveStack OS",
        sub: "AI Agent at the OS level",
        icon: Sparkles,
        tone: "brand" as const,
        items: [
            "AI Agent at the OS level",
            "Reads and writes across ALL deployed modules",
            "Executes multi-step workflows end-to-end",
            "Understands your organization's context",
            "Takes action — you just confirm",
        ],
    },
];

const CAPABILITIES = [
    {
        icon: Network,
        title: "Multi-module orchestration",
        body: "Execute workflows that span Finance, HR, CRM, and Supply Chain in a single instruction.",
    },
    {
        icon: Brain,
        title: "Memory and context",
        body: "TAVE remembers previous conversations, organizational preferences, and past actions. It gets smarter over time.",
    },
    {
        icon: KeyRound,
        title: "Role-aware execution",
        body: "TAVE respects your org's permission model. It will never allow a user to trigger actions they're not authorized for.",
    },
    {
        icon: FileCheck2,
        title: "Approval gating",
        body: "For high-stakes actions (payments, hires, contract execution), TAVE routes to the right approver before executing.",
    },
    {
        icon: GitBranch,
        title: "Audit trail",
        body: "Every action TAVE takes is logged, timestamped, and attributable. Full compliance visibility.",
    },
    {
        icon: Globe2,
        title: "API tool access",
        body: "TAVE can call external APIs, webhooks, and integrations on your behalf — not just internal modules.",
    },
    {
        icon: Languages,
        title: "Multilingual",
        body: "TAVE communicates in English, Hausa, Yoruba, Igbo, French, Arabic, and Swahili. More languages added quarterly.",
    },
    {
        icon: Mic,
        title: "Voice interface",
        body: "Give TAVE instructions by voice on mobile. Hands-free business operations.",
    },
];

const AiAgentPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Meet TAVE"
            title={
                <>
                    Meet TAVE.{" "}
                    <span className="block text-brand-gradient mt-2">
                        The First AI Agent That Doesn&rsquo;t Just Suggest — It Acts.
                    </span>
                </>
            }
            subtitle="TAVE (TaveStack Autonomous Virtual Executive) is your organization's embedded AI intelligence. It lives inside the TaveStack OS, has native access to every app you've deployed, and can execute real business tasks — not just answer questions."
        >
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/demo">
                    <Button
                        size="lg"
                        className="bg-brand-gradient text-white border-0 px-8 shadow-lg shadow-primary/30 hover:opacity-95"
                    >
                        See TAVE in Action
                    </Button>
                </Link>
                <Link href="/apps">
                    <Button size="lg" variant="outline" className="px-8">
                        Explore the Apps TAVE Runs
                    </Button>
                </Link>
            </div>
        </PageHero>

        {/* Cinematic TAVE preview */}
        <Wrapper className="pb-12">
            <AnimationContainer animation="scaleUp" delay={0.2}>
                <div className="relative mx-auto max-w-4xl rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl shadow-2xl p-6 lg:p-8 overflow-hidden">
                    <div className="absolute -inset-20 -z-10 bg-brand-gradient opacity-20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="flex items-center gap-3 pb-5 border-b border-border/40">
                        <div className="size-9 rounded-md bg-brand-gradient flex items-center justify-center">
                            <Sparkles className="size-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">TAVE</p>
                            <p className="text-[11px] text-muted-foreground">
                                Executing across Finance, CRM, and Communications
                            </p>
                        </div>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <span className="size-1.5 rounded-full bg-green-400 animate-glow-pulse" />
                            online
                        </span>
                    </div>
                    <div className="mt-5 space-y-3">
                        <div className="text-sm rounded-lg bg-foreground/5 px-4 py-3">
                            “Pull all overdue invoices, draft reminder emails, log the action in
                            the CRM, and alert the Finance Manager.”
                        </div>
                        {[
                            "Pulled 14 overdue invoices from Finance · ₦42.8M outstanding.",
                            "Drafted reminders in CFO tone · queued for review.",
                            "Logged 14 customer-touch events in CRM with follow-up tasks.",
                            "Notified Finance Manager via Communications · ack received.",
                        ].map((line, i) => (
                            <AnimationContainer key={i} animation="fadeUp" delay={0.05 * i}>
                                <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm">
                                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                                    <span className="text-foreground/90">{line}</span>
                                </div>
                            </AnimationContainer>
                        ))}
                    </div>
                </div>
            </AnimationContainer>
        </Wrapper>

        {/* Comparison */}
        <Wrapper className="py-20 lg:py-28">
            <SectionHeading
                eyebrow="What makes TAVE different"
                title={
                    <>
                        Every Other AI Tool Advises.{" "}
                        <span className="text-brand-gradient">TAVE Executes.</span>
                    </>
                }
            />
            <div className="mt-14 grid md:grid-cols-3 gap-5">
                {COMPARISON.map((c, i) => {
                    const Icon = c.icon;
                    return (
                        <AnimationContainer
                            key={c.title}
                            animation="fadeUp"
                            delay={0.1 + i * 0.05}
                        >
                            <div
                                className={`h-full rounded-2xl border p-7 backdrop-blur-sm flex flex-col ${
                                    c.tone === "brand"
                                        ? "border-primary/50 bg-card/80 shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                                        : "border-border/60 bg-card/30"
                                }`}
                            >
                                <div
                                    className={`size-11 rounded-xl flex items-center justify-center mb-5 ${
                                        c.tone === "brand"
                                            ? "bg-brand-gradient text-white shadow-md shadow-primary/20"
                                            : "bg-foreground/5 text-muted-foreground"
                                    }`}
                                >
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-lg font-semibold">{c.title}</h3>
                                <p className="text-xs text-muted-foreground mb-5">{c.sub}</p>
                                <ul className="space-y-2.5 flex-1">
                                    {c.items.map((it) => (
                                        <li
                                            key={it}
                                            className={`flex items-start gap-2 text-sm ${
                                                c.tone === "brand"
                                                    ? "text-foreground/90"
                                                    : "text-muted-foreground"
                                            }`}
                                        >
                                            {c.tone === "brand" ? (
                                                <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-accent" />
                                            ) : (
                                                <span className="size-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                                            )}
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>

        {/* Use cases */}
        <Wrapper className="py-20 lg:py-28">
            <SectionHeading
                eyebrow="What TAVE can do"
                title="TAVE In Action"
                description="Real prompts. Real cross-module execution. No demos rigged for stage."
            />
            <div className="mt-14 grid md:grid-cols-2 gap-5">
                {TAVE_USE_CASES.map((u, i) => {
                    const Icon = u.icon;
                    return (
                        <AnimationContainer
                            key={u.module}
                            animation="fadeUp"
                            delay={0.05 * i}
                        >
                            <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="size-9 rounded-md bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20">
                                        <Icon className="size-4" />
                                    </div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                        {u.module}
                                    </h3>
                                </div>
                                <div className="rounded-lg bg-foreground/5 px-4 py-3 text-sm italic mb-3 text-foreground">
                                    “{u.prompt}”
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <span className="text-primary mr-1">→</span>
                                    {u.result}
                                </p>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>

        {/* Capabilities */}
        <Wrapper className="py-20 lg:py-28">
            <SectionHeading
                eyebrow="Built for execution"
                title="Built for Real Business Execution"
            />
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {CAPABILITIES.map((c, i) => {
                    const Icon = c.icon;
                    return (
                        <AnimationContainer
                            key={c.title}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <div className="h-full rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5">
                                <div className="size-10 rounded-lg bg-secondary text-primary flex items-center justify-center mb-4">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-sm font-semibold mb-1.5">{c.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {c.body}
                                </p>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>
    </div>
);

export default AiAgentPage;

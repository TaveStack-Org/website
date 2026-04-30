"use client";

import {
    Cpu,
    Database,
    Layers,
    Lock,
    Shield,
    Sparkles,
    Workflow,
    LayoutDashboard,
    LayoutGrid,
    Command,
    BellRing,
    UserCog,
    GitBranch,
    Globe2,
    Server,
    Network,
} from "lucide-react";
import { useState } from "react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import SectionHeading from "@/components/marketing/section-heading";
import OsMockup from "@/components/home/os-mockup";

const PILLARS = [
    {
        icon: Database,
        title: "Unified Data Kernel",
        body: "Every app you deploy shares a single data layer. There are no data silos, no manual exports, no copy-paste between systems. HR knows what Finance knows. CRM feeds Supply Chain. Everything is one.",
    },
    {
        icon: Layers,
        title: "Native App Runtime",
        body: "Apps deployed within TaveStack OS aren't external integrations — they're native modules that run inside the OS. They inherit the OS's security, authentication, audit trail, and AI connectivity automatically.",
    },
    {
        icon: Sparkles,
        title: "TAVE Execution Layer",
        body: "TAVE, the AI Agent, is embedded at the OS level — not bolted onto individual apps. It has system-level access to every deployed module, making it the first AI Agent that can actually execute business operations end-to-end.",
    },
    {
        icon: LayoutGrid,
        title: "App Marketplace",
        body: "A curated ecosystem of business apps — ERP, productivity, communications, analytics — designed to be deployed inside the OS with a single click. Each app is pre-integrated. No setup required.",
    },
];

const TABS = [
    {
        key: "workspace",
        label: "Workspace",
        icon: LayoutDashboard,
        title: "The Workspace",
        body: "Your home inside TaveStack OS. A personalized dashboard with live widgets from every module you've deployed — pending approvals, revenue highlights, HR alerts, open tasks, and TAVE's latest activity feed. Fully customizable. Works on desktop, tablet, and mobile.",
    },
    {
        key: "dock",
        label: "App Dock",
        icon: LayoutGrid,
        title: "The App Dock",
        body: "Inspired by the elegance of modern operating systems, the TaveStack App Dock gives you instant access to every module you've activated — Finance, HR, CRM, Projects, and more. Switch contexts in one click. No new tabs, no new logins.",
    },
    {
        key: "command",
        label: "Command Palette",
        icon: Command,
        title: "The Command Palette",
        body: "Press ⌘ + K (or tap the search bar) to open the universal Command Palette. Run any action, navigate to any module, or talk to TAVE — all from one place. It's the fastest way to work in TaveStack.",
    },
    {
        key: "tave",
        label: "TAVE Sidebar",
        icon: Sparkles,
        title: "TAVE Sidebar",
        body: "The TAVE panel is always a click away. Type in plain language. TAVE understands context, has access to your entire OS, and takes action — not just advice. It remembers previous conversations and learns your organization's patterns over time.",
    },
    {
        key: "notifications",
        label: "Notifications",
        icon: BellRing,
        title: "Notification Center",
        body: "One unified feed for every event across every module. Invoices approved. Candidates shortlisted. Stock levels low. Purchase orders raised. No app-hopping. No missed alerts.",
    },
    {
        key: "admin",
        label: "Admin Console",
        icon: UserCog,
        title: "Admin Console",
        body: "The OS-level control panel for administrators. Manage users, roles, permissions, module access, billing, and security policies from a single, clean interface.",
    },
];

const ARCHITECTURE = [
    {
        icon: Shield,
        title: "Multi-tenant with data isolation",
        body: "Every organization's data is logically separated at the kernel level. No shared tables, no leakage.",
    },
    {
        icon: GitBranch,
        title: "Event-driven backbone",
        body: "All modules communicate through a real-time event bus. Actions in one module instantly propagate across the OS.",
    },
    {
        icon: Network,
        title: "API-first design",
        body: "Every module, every feature, every TAVE interaction is accessible via our REST and GraphQL APIs. Build on top of TaveStack. Extend anything.",
    },
    {
        icon: Globe2,
        title: "Edge-deployed",
        body: "TaveStack OS is deployed across global edge nodes, ensuring sub-200ms response times for users from Lagos to London.",
    },
    {
        icon: Cpu,
        title: "TAVE runtime isolation",
        body: "Each organization's TAVE instance runs in an isolated AI execution environment. Your TAVE learns only from your data. Never shared.",
    },
    {
        icon: Lock,
        title: "End-to-end encryption",
        body: "Data at rest (AES-256) and in transit (TLS 1.3). Encryption keys per organization.",
    },
];

const PlatformPage = () => {
    const [active, setActive] = useState(TABS[0].key);
    const current = TABS.find((t) => t.key === active) ?? TABS[0];
    const ActiveIcon = current.icon;

    return (
        <div className="w-full relative flex flex-col">
            <PageHero
                eyebrow="The TaveStack OS"
                title={
                    <>
                        This Is Not Software. This Is Your Business&rsquo;s{" "}
                        <span className="text-brand-gradient">Operating System.</span>
                    </>
                }
                subtitle="Every great computing revolution began with an OS. The personal computer had Windows. The smartphone had iOS. Now, the modern enterprise has TaveStack OS — the first unified operating system designed for how businesses actually work."
            />

            <Wrapper className="pb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <OsMockup />
                </AnimationContainer>
            </Wrapper>

            {/* Pillars */}
            <Wrapper className="py-20 lg:py-28">
                <SectionHeading
                    eyebrow="What makes it an OS"
                    title="What Makes It an OS, Not Just Software?"
                />
                <div className="mt-14 grid md:grid-cols-2 gap-5">
                    {PILLARS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <AnimationContainer
                                key={p.title}
                                animation="fadeUp"
                                delay={0.1 + i * 0.05}
                            >
                                <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 hover:border-primary/40 transition-colors">
                                    <div className="size-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-5">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {p.body}
                                    </p>
                                </div>
                            </AnimationContainer>
                        );
                    })}
                </div>
            </Wrapper>

            {/* Tabbed walkthrough */}
            <Wrapper className="py-20 lg:py-28">
                <SectionHeading
                    eyebrow="Interface walkthrough"
                    title={
                        <>
                            The <span className="text-brand-gradient">Command Center</span> for Your Business
                        </>
                    }
                />

                <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-6">
                    <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
                        {TABS.map((t) => {
                            const Icon = t.icon;
                            const isActive = t.key === active;
                            return (
                                <button
                                    key={t.key}
                                    onClick={() => setActive(t.key)}
                                    className={`shrink-0 lg:shrink flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors border ${
                                        isActive
                                            ? "border-primary/50 bg-primary/5 text-foreground"
                                            : "border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:bg-card/70"
                                    }`}
                                >
                                    <span
                                        className={`size-8 rounded-md flex items-center justify-center shrink-0 ${
                                            isActive
                                                ? "bg-brand-gradient text-white"
                                                : "bg-foreground/5 text-muted-foreground"
                                        }`}
                                    >
                                        <Icon className="size-4" />
                                    </span>
                                    <span className="font-medium">{t.label}</span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 lg:p-10 min-h-[280px]">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="size-10 rounded-lg bg-brand-gradient text-white flex items-center justify-center">
                                <ActiveIcon className="size-5" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold">
                                {current.title}
                            </h3>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {current.body}
                        </p>
                    </div>
                </div>
            </Wrapper>

            {/* Architecture */}
            <Wrapper className="py-20 lg:py-28">
                <SectionHeading
                    eyebrow="Under the hood"
                    title={
                        <>
                            <span className="text-brand-gradient">Enterprise-Grade</span> Architecture Under the Hood
                        </>
                    }
                    description="TaveStack OS is built on a cloud-native microservices foundation, designed for security, scale, and speed at every layer."
                />
                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ARCHITECTURE.map((a, i) => {
                        const Icon = a.icon;
                        return (
                            <AnimationContainer
                                key={a.title}
                                animation="fadeUp"
                                delay={0.05 * i}
                            >
                                <div className="h-full rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors">
                                    <div className="size-10 rounded-lg bg-secondary text-primary flex items-center justify-center mb-4">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="text-base font-semibold mb-1.5">
                                        {a.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {a.body}
                                    </p>
                                </div>
                            </AnimationContainer>
                        );
                    })}
                </div>
            </Wrapper>

            <Wrapper className="pb-24">
                <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <Server className="size-9 text-primary shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold">
                                Want to deploy on your own cloud?
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Enterprise plans support private cloud and on-premise deployment with the same OS, the same TAVE, and dedicated infrastructure.
                            </p>
                        </div>
                    </div>
                    <a
                        href="/contact"
                        className="shrink-0 inline-flex items-center gap-2 rounded-md bg-brand-gradient text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-primary/20 hover:opacity-95"
                    >
                        Talk to Sales
                        <Workflow className="size-4" />
                    </a>
                </div>
            </Wrapper>
        </div>
    );
};

export default PlatformPage;

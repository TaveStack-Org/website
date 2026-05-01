import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Documentation",
    description:
        "Get started with TaveStack OS — set up your workspace, deploy your first app module, learn TAVE commands, configure user permissions, and integrate with the rest of your stack.",
    path: "/resources/docs",
    keywords: ["TaveStack documentation", "TAVE commands", "ERP setup guide"],
});

import Link from "next/link";
import {
    BookOpen,
    Boxes,
    Cpu,
    Database,
    FileText,
    KeyRound,
    Library,
    PlayCircle,
    Sparkles,
    UserCog,
} from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";

const SECTIONS = [
    {
        icon: PlayCircle,
        title: "Getting Started with TaveStack OS",
        body: "First-time setup, OS tour, and your first 15 minutes inside the workspace.",
    },
    {
        icon: Boxes,
        title: "Setting Up Your First App Module",
        body: "Activate, configure, and start using a module — from Finance to CRM.",
    },
    {
        icon: Sparkles,
        title: "Working with TAVE — Command Reference",
        body: "Patterns, prompts, approval gating, and the verbs TAVE understands natively.",
    },
    {
        icon: UserCog,
        title: "Admin Guide — User Management & Permissions",
        body: "Roles, RBAC, SSO, audit log, and OS-wide policy configuration.",
    },
    {
        icon: KeyRound,
        title: "Integration Setup Guides",
        body: "Step-by-step playbooks for SAP, QuickBooks, Salesforce, Slack, and more.",
    },
    {
        icon: Cpu,
        title: "API Reference",
        body: "REST and GraphQL endpoints for every module, with code samples.",
    },
    {
        icon: Database,
        title: "Data Import & Migration",
        body: "Bulk import templates, mappers, and migration runbooks from common systems.",
    },
    {
        icon: FileText,
        title: "Security & Compliance Guides",
        body: "Architecture, encryption, NDPR / GDPR / SOC 2 evidence packs.",
    },
    {
        icon: Library,
        title: "Release Notes & Changelog",
        body: "Every shipped change, every Tuesday. Subscribe to the RSS feed.",
    },
];

const DocsPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Documentation"
            title={
                <>
                    The <span className="text-brand-gradient">TaveStack OS</span> Knowledge Base
                </>
            }
            subtitle="Setup guides, admin runbooks, the TAVE command reference, integration playbooks, and the full API. Everything your team needs to ship on TaveStack."
        />

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {SECTIONS.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <AnimationContainer
                            key={s.title}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <Link
                                href="#"
                                className="group h-full block rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 hover:bg-card/70 transition-all"
                            >
                                <div className="size-10 rounded-lg bg-secondary text-primary flex items-center justify-center mb-4">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                    {s.body}
                                </p>
                            </Link>
                        </AnimationContainer>
                    );
                })}
            </div>

            <div className="mt-12 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 text-center">
                <BookOpen className="size-8 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold">Looking for something specific?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                    The full docs site (docs.tavestack.com) is searchable end-to-end. Hit ⌘ + K from any page inside the OS to open the same search inline.
                </p>
            </div>
        </Wrapper>
    </div>
);

export default DocsPage;

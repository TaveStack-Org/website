import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "API & Developers",
    description:
        "Build on TaveStack — REST and GraphQL APIs, webhooks, SDKs, and a free developer sandbox. Extend the OS, integrate external systems, or trigger TAVE from your own apps.",
    path: "/resources/api",
    keywords: ["TaveStack API", "ERP API", "GraphQL API", "Tavestack SDK", "ERP webhooks"],
});

import Link from "next/link";
import {
    BookOpen,
    Code2,
    Github,
    Network,
    Sparkles,
    Webhook,
    Workflow,
    Zap,
} from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";

const RESOURCES = [
    {
        icon: BookOpen,
        title: "REST API Reference",
        body: "Every module endpoint, parameter, error code, and example. Searchable, copyable, runnable.",
    },
    {
        icon: Network,
        title: "GraphQL Schema",
        body: "Single query endpoint exposing the entire OS graph — modules, users, audit log, TAVE actions.",
    },
    {
        icon: Webhook,
        title: "Webhooks",
        body: "Subscribe to real-time events from any module. Payload signing, retry policy, and a live event explorer.",
    },
    {
        icon: Sparkles,
        title: "TAVE Programmatic Access",
        body: "Trigger TAVE from external systems. Pass context, attach tools, and get structured action receipts back.",
    },
    {
        icon: Github,
        title: "Open-source SDKs",
        body: "TypeScript, Python, and Go SDKs — first-class types, retries, and pagination helpers built in.",
    },
    {
        icon: Workflow,
        title: "Sample Apps",
        body: "Reference implementations: a custom dashboard, a Slack-to-TAVE bridge, and a public-facing client portal.",
    },
];

const ApiPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="API & Developers"
            title={
                <>
                    Build on TaveStack.{" "}
                    <span className="text-brand-gradient">Ship in a weekend.</span>
                </>
            }
            subtitle="REST and GraphQL APIs covering every TaveStack module. Webhooks for every event. SDKs in three languages. Sandbox is free, production keys are scoped."
        >
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                    <Button
                        size="lg"
                        className="bg-brand-gradient text-white border-0 px-8 shadow-lg shadow-primary/30"
                    >
                        Get Sandbox Access
                    </Button>
                </Link>
                <Link href="/resources/docs">
                    <Button size="lg" variant="outline" className="px-8">
                        Read the Docs
                    </Button>
                </Link>
            </div>
        </PageHero>

        <Wrapper className="pb-12">
            <AnimationContainer animation="scaleUp" delay={0.2}>
                <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl overflow-hidden max-w-3xl mx-auto">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-foreground/[0.02]">
                        <div className="flex gap-1.5">
                            <div className="size-2.5 rounded-full bg-red-400/70" />
                            <div className="size-2.5 rounded-full bg-yellow-400/70" />
                            <div className="size-2.5 rounded-full bg-green-400/70" />
                        </div>
                        <span className="ml-3 text-xs font-mono text-muted-foreground">
                            POST /v1/tave/execute
                        </span>
                    </div>
                    <pre className="text-xs md:text-sm text-foreground/85 p-5 font-mono leading-relaxed overflow-x-auto">
                        <code>{`curl -X POST https://api.tavestack.com/v1/tave/execute \\
  -H "Authorization: Bearer $TAVESTACK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "instruction": "Reconcile last month bank statements",
    "modules": ["finance"],
    "approvers": ["cfo@example.com"]
  }'`}</code>
                    </pre>
                </div>
            </AnimationContainer>
        </Wrapper>

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {RESOURCES.map((r, i) => {
                    const Icon = r.icon;
                    return (
                        <AnimationContainer
                            key={r.title}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 transition-colors">
                                <div className="size-11 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-5">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-base font-semibold">{r.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                    {r.body}
                                </p>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>

            <div className="mt-16 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 justify-between">
                <div className="flex items-start gap-4">
                    <Code2 className="size-9 text-primary shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold">Become a Technology Partner</h3>
                        <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                            Build apps that run natively inside TaveStack OS. Co-marketing, early API access, and a dedicated DX team.
                        </p>
                    </div>
                </div>
                <Link href="/partners">
                    <Button className="bg-brand-gradient text-white border-0 px-7">
                        <Zap className="size-4 mr-1" /> Apply now
                    </Button>
                </Link>
            </div>
        </Wrapper>
    </div>
);

export default ApiPage;

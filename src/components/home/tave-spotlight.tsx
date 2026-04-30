"use client";

import {
    ArrowRight,
    Bell,
    BrainCircuit,
    CalendarClock,
    FileBarChart,
    LayoutGrid,
    MessageCircle,
    Workflow,
} from "lucide-react";
import Link from "next/link";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import SectionHeading from "../marketing/section-heading";
import { Button } from "../ui/button";

const FEATURES = [
    {
        icon: LayoutGrid,
        title: "Cross-Module Execution",
        body: "TAVE moves a candidate from HR through payroll setup in Finance without you touching either module.",
    },
    {
        icon: MessageCircle,
        title: "Natural Language Commands",
        body: "“Close all overdue invoices under ₦500K and notify the clients.” Done.",
    },
    {
        icon: Bell,
        title: "Proactive Alerts",
        body: "TAVE monitors your entire OS and flags anomalies before they become crises.",
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        body: "Describe a workflow in plain language. TAVE builds and deploys it.",
    },
    {
        icon: FileBarChart,
        title: "Report Generation",
        body: "“Give me a P&L for Q3 broken down by department.” Instant. Beautiful. Accurate.",
    },
    {
        icon: CalendarClock,
        title: "Calendar & Scheduling",
        body: "TAVE manages schedules, books meetings, and coordinates across teams.",
    },
];

const TaveSpotlight = () => (
    <Wrapper className="py-20 lg:py-28">
        <SectionHeading
            eyebrow="Meet TAVE"
            title={
                <>
                    Your Business Has a New Employee.{" "}
                    <span className="text-brand-gradient">It Never Sleeps.</span>
                </>
            }
            description="TAVE (TaveStack Autonomous Virtual Executive) is not a chatbot bolted onto the side of your software. TAVE lives inside the OS, with native read-and-write access to every module you deploy — Finance, HR, CRM, Inventory, and more."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                    <AnimationContainer key={f.title} animation="fadeUp" delay={0.1 + i * 0.05}>
                        <div className="group relative h-full rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 hover:bg-card/70 transition-all">
                            <div className="size-10 rounded-lg bg-brand-gradient flex items-center justify-center mb-4 shadow-md shadow-primary/20">
                                <Icon className="size-5 text-white" />
                            </div>
                            <h3 className="text-base font-semibold mb-1.5">{f.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                            <BrainCircuit className="absolute right-4 bottom-4 size-4 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </AnimationContainer>
                );
            })}
        </div>

        <AnimationContainer animation="fadeUp" delay={0.5}>
            <div className="mt-12 text-center">
                <Link href="/ai-agent">
                    <Button variant="outline" className="gap-2">
                        Meet TAVE in full
                        <ArrowRight className="size-4" />
                    </Button>
                </Link>
            </div>
        </AnimationContainer>
    </Wrapper>
);

export default TaveSpotlight;

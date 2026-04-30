"use client";

import { useState } from "react";
import { CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { APP_MODULES } from "@/constants";

const COVERS = [
    "A live walkthrough of the TaveStack OS workspace",
    "A real-time TAVE demonstration — watch the AI Agent complete a multi-module task",
    "A tour of 3 app modules relevant to your industry",
    "Q&A with a TaveStack solutions expert",
];

const INDUSTRIES = [
    "Manufacturing",
    "Financial Services",
    "Government",
    "Retail",
    "Healthcare",
    "Logistics",
    "Professional Services",
    "Other",
];

const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–1,000", "1,000+"];

const DemoPage = () => {
    const [modules, setModules] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const toggleModule = (slug: string) => {
        setModules((prev) =>
            prev.includes(slug) ? prev.filter((x) => x !== slug) : [...prev, slug],
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full relative flex flex-col">
            <PageHero
                eyebrow="Demo"
                title={
                    <>
                        See TaveStack OS in 30 Minutes.{" "}
                        <span className="text-brand-gradient">
                            Change How You Think About Business Software.
                        </span>
                    </>
                }
                subtitle="No sales pressure. Just a real demonstration of TAVE executing across modules in a workspace tailored to your industry."
            />

            <Wrapper className="pb-24">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                    <div className="space-y-3">
                        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6">
                            <h3 className="text-base font-semibold mb-4 inline-flex items-center gap-2">
                                <Clock className="size-4 text-primary" /> What the demo covers
                            </h3>
                            <ul className="space-y-2.5">
                                {COVERS.map((c) => (
                                    <li
                                        key={c}
                                        className="flex items-start gap-2 text-sm text-foreground/85"
                                    >
                                        <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-accent" />
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6">
                            <Sparkles className="size-7 text-primary mb-3" />
                            <h3 className="text-base font-semibold">
                                The TAVE moment
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                Most demos show software. Ours shows the AI Agent running it. Bring a real workflow you wish was automated — we will run it live in your demo.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6">
                            <ShieldCheck className="size-7 text-primary mb-3" />
                            <h3 className="text-base font-semibold">
                                Guarantee
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                No sales pressure. No commitment. If TaveStack isn't a fit, we will tell you ourselves and recommend an alternative.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 lg:p-8">
                        {submitted ? (
                            <div className="flex flex-col items-center text-center py-12">
                                <CheckCircle2 className="size-10 text-accent mb-4" />
                                <h3 className="text-2xl font-semibold">
                                    Demo request received.
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                                    A solutions expert will email you within one business day to confirm a 30-minute slot tailored to your industry.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="text-xl font-semibold">Book your demo</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="Name" name="name" required />
                                    <Field
                                        label="Work Email"
                                        name="email"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="Phone" name="phone" type="tel" />
                                    <Field label="Company Name" name="company" required />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-foreground mb-1.5">
                                            Industry <span className="text-accent ml-0.5">*</span>
                                        </label>
                                        <select
                                            required
                                            name="industry"
                                            className="w-full h-10 rounded-md border border-border/60 bg-background/80 backdrop-blur-sm px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <option value="">Select…</option>
                                            {INDUSTRIES.map((i) => (
                                                <option key={i} value={i}>
                                                    {i}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-foreground mb-1.5">
                                            Team Size <span className="text-accent ml-0.5">*</span>
                                        </label>
                                        <select
                                            required
                                            name="size"
                                            className="w-full h-10 rounded-md border border-border/60 bg-background/80 backdrop-blur-sm px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <option value="">Select…</option>
                                            {TEAM_SIZES.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <Field
                                    label="Preferred date / time"
                                    name="when"
                                    placeholder="e.g. Tuesday morning, 10–11am WAT"
                                />
                                <div>
                                    <label className="block text-xs font-medium text-foreground mb-2">
                                        Which modules are you most interested in?
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {APP_MODULES.filter((m) => m.slug !== "erp").map((m) => {
                                            const active = modules.includes(m.slug);
                                            return (
                                                <button
                                                    type="button"
                                                    key={m.slug}
                                                    onClick={() => toggleModule(m.slug)}
                                                    className={`px-3.5 py-1.5 text-sm rounded-full border transition-colors ${
                                                        active
                                                            ? "border-primary/50 bg-primary/10 text-primary"
                                                            : "border-border/60 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                                    }`}
                                                >
                                                    {m.name}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-brand-gradient text-white border-0 hover:opacity-95 shadow-lg shadow-primary/20"
                                >
                                    Book Demo
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

const Field = ({
    label,
    name,
    type = "text",
    required,
    placeholder,
}: {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
}) => (
    <div>
        <label className="block text-xs font-medium text-foreground mb-1.5">
            {label}
            {required && <span className="text-accent ml-0.5">*</span>}
        </label>
        <input
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            className="w-full h-10 rounded-md border border-border/60 bg-background/80 backdrop-blur-sm px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
    </div>
);

export default DemoPage;

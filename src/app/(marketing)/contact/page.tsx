"use client";

import { useState } from "react";
import { CheckCircle2, HandshakeIcon, Mail, MapPin, Newspaper, PhoneCall } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants";

const INTERESTS = [
    "OS Demo",
    "Module Pricing",
    "Enterprise Enquiry",
    "Partnership",
    "Other",
];

const ORG_SIZES = [
    "Just me",
    "2–10",
    "11–50",
    "51–200",
    "201–1,000",
    "1,000+",
];

const ContactPage = () => {
    const [interests, setInterests] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const toggleInterest = (i: string) => {
        setInterests((prev) =>
            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full relative flex flex-col">
            <PageHero
                eyebrow="Contact"
                title={
                    <>
                        Let's Talk <span className="text-brand-gradient">Business.</span>
                    </>
                }
                subtitle="Sales, support, partnerships, or press — pick the channel that fits or use the form. We respond within one business day."
            />

            <Wrapper className="pb-24">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
                    <div className="space-y-3">
                        <ChannelCard
                            icon={Mail}
                            label="Sales"
                            value={SITE.contact.sales}
                            sub="+234 707 366 6668"
                        />
                        <ChannelCard
                            icon={Mail}
                            label="Support"
                            value={SITE.contact.support}
                        />
                        <ChannelCard
                            icon={HandshakeIcon}
                            label="Partnerships"
                            value={SITE.contact.partners}
                        />
                        <ChannelCard
                            icon={Newspaper}
                            label="Press"
                            value={SITE.contact.press}
                        />
                        <ChannelCard
                            icon={MapPin}
                            label="Office"
                            value={SITE.address}
                        />
                        <ChannelCard
                            icon={PhoneCall}
                            label="Phone"
                            value={SITE.phone}
                        />
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 lg:p-8">
                        {submitted ? (
                            <div className="flex flex-col items-center text-center py-12">
                                <CheckCircle2 className="size-10 text-accent mb-4" />
                                <h3 className="text-2xl font-semibold">
                                    Message received.
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                                    Thanks for reaching out. A member of the TaveStack team will respond within one business day.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="text-xl font-semibold">Send us a message</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="Full Name" name="name" required />
                                    <Field
                                        label="Work Email"
                                        name="email"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Field label="Organization Name" name="org" required />
                                    <Field label="Role / Title" name="role" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-foreground mb-1.5">
                                        Organization Size
                                    </label>
                                    <select
                                        name="size"
                                        required
                                        className="w-full h-10 rounded-md border border-border/60 bg-background/80 backdrop-blur-sm px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    >
                                        <option value="">Select…</option>
                                        {ORG_SIZES.map((s) => (
                                            <option key={s} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-foreground mb-2">
                                        What are you interested in?
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {INTERESTS.map((i) => {
                                            const active = interests.includes(i);
                                            return (
                                                <button
                                                    type="button"
                                                    key={i}
                                                    onClick={() => toggleInterest(i)}
                                                    className={`px-3.5 py-1.5 text-sm rounded-full border transition-colors ${
                                                        active
                                                            ? "border-primary/50 bg-primary/10 text-primary"
                                                            : "border-border/60 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                                    }`}
                                                >
                                                    {i}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-foreground mb-1.5">
                                        Message <span className="text-muted-foreground">(optional)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full rounded-md border border-border/60 bg-background/80 backdrop-blur-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-brand-gradient text-white border-0 hover:opacity-95 shadow-lg shadow-primary/20"
                                >
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

const ChannelCard = ({
    icon: Icon,
    label,
    value,
    sub,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
    sub?: string;
}) => (
    <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-4 flex items-start gap-3">
        <div className="size-9 shrink-0 rounded-md bg-secondary text-primary flex items-center justify-center">
            <Icon className="size-4" />
        </div>
        <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {label}
            </p>
            <p className="text-sm text-foreground mt-1 break-all">{value}</p>
            {sub && (
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
            )}
        </div>
    </div>
);

const Field = ({
    label,
    name,
    type = "text",
    required,
}: {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
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
            className="w-full h-10 rounded-md border border-border/60 bg-background/80 backdrop-blur-sm px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
    </div>
);

export default ContactPage;

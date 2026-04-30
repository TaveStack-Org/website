"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Briefcase,
    CalendarDays,
    DollarSign,
    MessageSquare,
    Search,
    Sparkles,
    Truck,
    Users2,
    ShieldCheck,
    PieChart,
} from "lucide-react";
import { useEffect, useState } from "react";

const apps = [
    { icon: DollarSign, name: "Finance", state: "active" },
    { icon: Users2, name: "HR", state: "active" },
    { icon: Briefcase, name: "CRM", state: "active" },
    { icon: Truck, name: "Supply" },
    { icon: CalendarDays, name: "Projects" },
    { icon: PieChart, name: "Analytics" },
    { icon: MessageSquare, name: "Comms" },
    { icon: ShieldCheck, name: "Compliance" },
];

const widgets = [
    { label: "Revenue MTD", value: "₦42.8M", trend: "+18.2%", color: "from-primary/30 to-primary/5" },
    { label: "Open Invoices", value: "127", trend: "8 overdue", color: "from-accent/30 to-accent/5" },
    { label: "Active Hires", value: "14", trend: "3 starting Mon", color: "from-primary/30 to-accent/10" },
];

const taveScript = [
    { who: "user", text: "TAVE, close all overdue invoices under ₦500K and notify the clients." },
    { who: "tave", text: "Pulling 14 invoices from Finance · drafting reminders · sending now." },
    { who: "tave", text: "Done. 14 reminders sent. CFO notified. 4 already responded." },
];

const OsMockup = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setStep((s) => (s + 1) % (taveScript.length + 1));
        }, 2400);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative mx-auto w-full max-w-6xl overflow-visible">
            {/* Glow — bounded so the wide blur cannot trigger horizontal overflow on mobile */}
            <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

            <div className="relative rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-foreground/[0.02]">
                    <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-red-400/70" />
                        <div className="size-2.5 rounded-full bg-yellow-400/70" />
                        <div className="size-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Search className="size-3.5" />
                        <span className="font-mono">tavestack.os/workspace</span>
                    </div>
                    <div className="text-xs text-muted-foreground hidden sm:block">⌘ K</div>
                </div>

                <div className="grid grid-cols-12 min-h-[440px]">
                    {/* Sidebar — App dock */}
                    <aside className="col-span-2 sm:col-span-1 border-r border-border/50 bg-foreground/[0.02] p-2 flex flex-col gap-2 min-w-0">
                        {apps.map((a, i) => {
                            const Icon = a.icon;
                            return (
                                <motion.div
                                    key={a.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.05 }}
                                    className={`relative flex items-center justify-center aspect-square rounded-md ${
                                        a.state === "active"
                                            ? "bg-brand-gradient text-white shadow-md shadow-primary/30"
                                            : "bg-foreground/5 text-muted-foreground hover:text-foreground"
                                    } transition-colors group cursor-pointer`}
                                    title={a.name}
                                >
                                    <Icon className="size-4" />
                                    {a.state === "active" && (
                                        <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-green-400 border border-background" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </aside>

                    {/* Main workspace */}
                    <main className="col-span-10 sm:col-span-8 p-3 sm:p-5 flex flex-col gap-3 sm:gap-4 min-w-0 overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-muted-foreground">Tuesday, April 30</p>
                                <h3 className="text-lg font-semibold">Good morning, Sarah</h3>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/60 bg-foreground/5 text-xs text-muted-foreground">
                                <Sparkles className="size-3 text-accent" /> 4 TAVE updates today
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {widgets.map((w, i) => (
                                <motion.div
                                    key={w.label}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + i * 0.1 }}
                                    className={`relative overflow-hidden rounded-lg border border-border/60 bg-gradient-to-br ${w.color} p-3`}
                                >
                                    <p className="text-xs text-muted-foreground">{w.label}</p>
                                    <p className="text-xl font-bold mt-1">{w.value}</p>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">{w.trend}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex-1 rounded-lg border border-border/60 bg-foreground/[0.02] p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-xs font-medium">
                                    <BarChart3 className="size-3.5 text-primary" /> Cross-module activity
                                </div>
                                <span className="text-[10px] text-muted-foreground">Live</span>
                            </div>
                            <div className="space-y-2">
                                {[
                                    { mod: "Finance", text: "PO #4421 approved by CFO", t: "1m" },
                                    { mod: "HR", text: "3 new applications · Senior Engineer role", t: "4m" },
                                    { mod: "CRM", text: "Deal moved to negotiation: AfricaPay (₦12M)", t: "9m" },
                                    { mod: "Supply", text: "SKU-4421 below reorder point", t: "12m" },
                                ].map((row, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 + i * 0.1 }}
                                        className="flex items-center justify-between text-xs py-1.5 border-b border-border/30 last:border-0"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">
                                                {row.mod}
                                            </span>
                                            <span className="text-muted-foreground">{row.text}</span>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground">{row.t} ago</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </main>

                    {/* TAVE sidebar — hidden on mobile (cramped at <80px), shown sm+ */}
                    <aside className="hidden sm:flex col-span-3 border-l border-border/50 bg-foreground/[0.02] p-3 flex-col min-w-0">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="size-7 rounded-md bg-brand-gradient flex items-center justify-center">
                                <Sparkles className="size-3.5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">TAVE</p>
                                <p className="text-[10px] text-muted-foreground">AI Agent · online</p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-2.5 overflow-hidden">
                            {taveScript.slice(0, step).map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-[11px] leading-snug rounded-lg px-2.5 py-2 ${
                                        m.who === "user"
                                            ? "bg-foreground/5 text-foreground self-end ml-2"
                                            : "bg-brand-gradient/10 border border-primary/20 text-foreground"
                                    }`}
                                >
                                    {m.text}
                                </motion.div>
                            ))}
                            {step < taveScript.length && step > 0 && (
                                <div className="flex gap-1 px-2.5 py-1">
                                    <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" />
                                    <span
                                        className="size-1.5 rounded-full bg-primary animate-glow-pulse"
                                        style={{ animationDelay: "0.2s" }}
                                    />
                                    <span
                                        className="size-1.5 rounded-full bg-primary animate-glow-pulse"
                                        style={{ animationDelay: "0.4s" }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="mt-2 rounded-md border border-border/60 bg-background/60 px-2.5 py-1.5 text-[10px] text-muted-foreground flex items-center gap-1.5">
                            <span className="text-primary">›</span> Ask TAVE anything
                            <span className="ml-auto inline-block w-px h-3 bg-primary animate-caret-blink" />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default OsMockup;

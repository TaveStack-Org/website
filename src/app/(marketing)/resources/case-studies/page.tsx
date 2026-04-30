import Link from "next/link";
import { ArrowRight, Building2, FileText } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";

const STUDIES = [
    {
        client: "TechFlow Manufacturing",
        country: "Nigeria",
        industry: "Manufacturing",
        challenge:
            "9 disconnected tools, manual operations handoffs, three full-time roles spent reconciling data across HR, Finance, and Inventory.",
        modules: ["Finance", "HR", "Supply Chain", "Analytics"],
        result: "68% productivity gain in 90 days · 3 ops roles redeployed · ₦47M saved annually",
        quote:
            "Now I type to TAVE and the OS does everything. I closed three positions in my operations team because the AI handles what they used to do manually.",
        author: "Sarah Okonkwo, Operations Director",
    },
    {
        client: "EastAfrica Logistics",
        country: "Kenya",
        industry: "Logistics",
        challenge:
            "Inventory drift across 7 warehouses, vendor payments out of sync with deliveries, finance close taking 11 days monthly.",
        modules: ["Supply Chain", "Finance", "Communications"],
        result: "Close cut to 3 days · vendor disputes down 82% · zero stock-outs in Q1",
        quote:
            "The AI Agent can actually write purchase orders, update inventory, and notify suppliers — not just suggest it. That changed how I think about software entirely.",
        author: "Michael Mwangi, CFO",
    },
    {
        client: "FinServe Group",
        country: "Senegal",
        industry: "Financial Services",
        challenge:
            "Hacked-together stack of Salesforce + Workday + Slack + SAP. Multi-entity reporting impossible. Compliance evidence pulled by hand.",
        modules: ["Finance", "CRM", "Compliance", "Communications"],
        result: "11 systems consolidated to 1 OS · audit prep cut 60% · onboarding clients 4× faster",
        quote:
            "TaveStack OS is the Salesforce + Workday + Slack + SAP combination we were trying to hack together for years. It works, it's connected, and it's actually affordable.",
        author: "Amara Diop, CTO",
    },
    {
        client: "GoldCoast Industries",
        country: "Ghana",
        industry: "Heavy Industry",
        challenge:
            "Could not justify enterprise ERP cost or project. Needed to scale modules as the business grew without renegotiation overhead.",
        modules: ["HR", "Finance", "Supply Chain", "Projects", "Analytics", "Communications", "Compliance"],
        result: "Started with 2 modules · expanded to 7 in 6 months · zero per-seat surprises",
        quote:
            "The modular billing was the clincher. We started with just HR and Finance. Six months later, we've deployed 7 modules. No renegotiation, no hidden costs.",
        author: "Emmanuel Asante, Supply Chain Manager",
    },
];

const CaseStudiesPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Case Studies"
            title={
                <>
                    Real Organizations.{" "}
                    <span className="text-brand-gradient">Real Results on TaveStack.</span>
                </>
            }
            subtitle="From Lagos to Nairobi to Dakar — see how customers replaced fragmented stacks with one operating system, and what changed in the months that followed."
        />

        <Wrapper className="pb-24">
            <div className="grid lg:grid-cols-2 gap-6">
                {STUDIES.map((s, i) => (
                    <AnimationContainer
                        key={s.client}
                        animation="fadeUp"
                        delay={0.05 * i}
                    >
                        <article className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 lg:p-8 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="size-11 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20">
                                    <Building2 className="size-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold">{s.client}</h3>
                                    <p className="text-xs text-muted-foreground">
                                        {s.industry} · {s.country}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 flex-1">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                                        Challenge
                                    </p>
                                    <p className="text-sm text-foreground/85 leading-relaxed">
                                        {s.challenge}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                        Modules deployed
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {s.modules.map((m) => (
                                            <span
                                                key={m}
                                                className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                                        Results
                                    </p>
                                    <p className="text-sm font-semibold text-brand-gradient leading-relaxed">
                                        {s.result}
                                    </p>
                                </div>

                                <blockquote className="border-l-2 border-primary/40 pl-4 mt-2">
                                    <p className="text-sm italic text-foreground/85 leading-relaxed">
                                        “{s.quote}”
                                    </p>
                                    <footer className="text-xs text-muted-foreground mt-2 not-italic">
                                        — {s.author}
                                    </footer>
                                </blockquote>
                            </div>

                            <Link
                                href="/demo"
                                className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                                Book a demo like this
                                <ArrowRight className="size-3.5" />
                            </Link>
                        </article>
                    </AnimationContainer>
                ))}
            </div>

            <div className="mt-16 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 lg:p-12 text-center">
                <FileText className="size-8 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold">
                    Want a deeper case study you can show your board?
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                    We have full PDF case studies with detailed metrics, timelines, and architecture diagrams. Request one for your industry.
                </p>
                <div className="mt-6">
                    <Link href="/contact">
                        <Button className="bg-brand-gradient text-white border-0 px-7">
                            Request a case study pack
                        </Button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    </div>
);

export default CaseStudiesPage;

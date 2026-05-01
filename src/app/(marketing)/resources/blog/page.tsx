import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Blog — Insights on Business Intelligence, AI, and Operations",
    description:
        "Thought leadership and case studies on AI agents, modular ERP, African business technology, and the future of operations — from the team behind TaveStack OS.",
    path: "/resources/blog",
    keywords: ["AI ERP blog", "African business tech blog", "Tavestack blog", "AI automation insights"],
});

const CATEGORIES = [
    "AI & Automation",
    "ERP Strategy",
    "African Business Tech",
    "Product Updates",
    "Leadership & Operations",
    "TAVE Use Cases",
];

const POSTS = [
    {
        title: "Why Your Business Needs an OS, Not a Stack",
        category: "Thought Leadership",
        excerpt:
            "The era of duct-taping ten SaaS tools together is ending. Here is why a true business operating system changes how you operate — not just how you log in.",
        author: "Ibrahim Babangida",
        date: "Apr 24, 2026",
        readTime: "7 min read",
    },
    {
        title: "How TAVE Replaced Three Operations Roles at a Lagos Logistics Firm",
        category: "Case Study",
        excerpt:
            "Inside the 90-day rollout that automated PO routing, vendor reconciliation, and route exception management — and what the team did with the freed capacity.",
        author: "Sarah Okonkwo",
        date: "Apr 17, 2026",
        readTime: "9 min read",
    },
    {
        title: "The Modular ERP Revolution: Why Odoo Was Right and What Comes Next",
        category: "Industry Analysis",
        excerpt:
            "A decade ago, modular ERP was a niche idea. Now it is the only viable path forward for the next million businesses to digitize. Here is what the next chapter looks like.",
        author: "Amara Diop",
        date: "Apr 10, 2026",
        readTime: "11 min read",
    },
    {
        title: "NDPR Compliance in 2026: What Every Nigerian Business Needs to Know",
        category: "Compliance",
        excerpt:
            "Updates to NDPR enforcement, what data controllers must do this quarter, and the audit-ready stance every CTO and DPO should walk into Q3 with.",
        author: "Emmanuel Asante",
        date: "Apr 3, 2026",
        readTime: "6 min read",
    },
    {
        title: "How to Get Your AI Agent to Write Your Board Pack",
        category: "Tutorial",
        excerpt:
            "A step-by-step walkthrough — prompts, context shaping, and approval gates — for turning live TaveStack data into a board-ready monthly briefing in under 10 minutes.",
        author: "Michael Mwangi",
        date: "Mar 27, 2026",
        readTime: "8 min read",
    },
    {
        title: "From Spreadsheets to TaveStack in 30 Days: A CFO's Diary",
        category: "Customer Story",
        excerpt:
            "Day-by-day: what migration looked like for a 240-person manufacturing group switching from a 9-tool stack to one operating system.",
        author: "Sarah Okonkwo",
        date: "Mar 20, 2026",
        readTime: "12 min read",
    },
];

const BlogPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Blog"
            title={
                <>
                    Insights on{" "}
                    <span className="text-brand-gradient">Business Intelligence</span>, AI, and the Future of Operations
                </>
            }
            subtitle="Thought leadership, customer stories, and field notes from the people building and running their organizations on TaveStack OS."
        />

        <Wrapper className="pb-12">
            <div className="flex flex-wrap gap-2 justify-center">
                {CATEGORIES.map((c) => (
                    <span
                        key={c}
                        className="px-4 py-1.5 text-sm rounded-full border border-border/60 text-muted-foreground bg-card/40 backdrop-blur-sm"
                    >
                        {c}
                    </span>
                ))}
            </div>
        </Wrapper>

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {POSTS.map((p, i) => (
                    <AnimationContainer
                        key={p.title}
                        animation="fadeUp"
                        delay={0.05 * i}
                    >
                        <article className="group h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/40 hover:bg-card/70 transition-all flex flex-col">
                            <div className="h-44 relative bg-brand-gradient/15 border-b border-border/40 overflow-hidden flex items-center justify-center">
                                <BookOpen className="size-12 text-primary/40" />
                                <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-background/80 backdrop-blur text-primary">
                                    {p.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed flex-1">
                                    {p.excerpt}
                                </p>
                                <div className="mt-5 pt-5 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                                    <span>{p.author}</span>
                                    <span>{p.readTime}</span>
                                </div>
                                <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                                    Read post <ArrowRight className="size-3" />
                                </div>
                            </div>
                        </article>
                    </AnimationContainer>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                >
                    Want to write for TaveStack? Pitch the editorial team →
                </Link>
            </div>
        </Wrapper>
    </div>
);

export default BlogPage;

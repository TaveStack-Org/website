import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";

const ROLES = [
    {
        title: "Senior Backend Engineer",
        team: "Platform · Node.js / Python",
        location: "Abuja or Remote · Africa-friendly hours",
        description:
            "Own services in the OS kernel — auth, event bus, multi-tenant data, billing. You will set patterns the rest of the org follows.",
    },
    {
        title: "AI/ML Engineer — TAVE Core",
        team: "AI",
        location: "Remote · Global",
        description:
            "Build and evaluate the TAVE agent runtime — tool use, planning, memory, and approval gating. Strong evals discipline required.",
    },
    {
        title: "Product Manager — ERP Modules",
        team: "Product",
        location: "Abuja or Remote",
        description:
            "Own the roadmap for Finance, HR, and Supply Chain modules. Bring deep ERP domain knowledge and a track record of shipping.",
    },
    {
        title: "Customer Success Manager — Enterprise",
        team: "Customer Success",
        location: "Lagos / Nairobi / Remote",
        description:
            "Lead enterprise rollouts end-to-end. You will partner with implementation partners and own a retention number.",
    },
    {
        title: "Solutions Architect — Government & Public Sector",
        team: "Solutions",
        location: "Abuja",
        description:
            "Design TaveStack deployments for federal and state agencies. Procurement-savvy. NDPR-fluent.",
    },
    {
        title: "Head of Partnerships — West Africa",
        team: "Go-to-market",
        location: "Lagos / Accra",
        description:
            "Build the West Africa partner ecosystem from scratch — implementation, technology, and reseller partners.",
    },
];

const CareersPage = () => (
    <div className="w-full relative flex flex-col">
        <Wrapper className="pt-32">
            <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="size-3.5" />
                About TaveStack
            </Link>
        </Wrapper>

        <PageHero
            eyebrow="Careers"
            title={
                <>
                    Help Us Build the World&rsquo;s Most{" "}
                    <span className="text-brand-gradient">Important Business Software.</span>
                </>
            }
            subtitle="We're growing fast and building in public. If you believe AI should be useful, not just impressive — and that African tech companies should set the global standard — we want to hear from you."
        />

        <Wrapper className="pb-24">
            <div className="space-y-3">
                {ROLES.map((r, i) => (
                    <AnimationContainer
                        key={r.title}
                        animation="fadeUp"
                        delay={0.04 * i}
                    >
                        <div className="group rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 lg:p-7 hover:border-primary/40 transition-colors flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        {r.title}
                                    </h3>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70 px-2 py-0.5 rounded-full border border-border/50">
                                        {r.team}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground inline-flex items-center gap-1 mb-2">
                                    <MapPin className="size-3" />
                                    {r.location}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {r.description}
                                </p>
                            </div>
                            <Link href="/contact" className="shrink-0">
                                <Button variant="outline" className="gap-2">
                                    Apply <ArrowRight className="size-4" />
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>
                ))}
            </div>

            <div className="mt-16 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 lg:p-10 text-center">
                <h3 className="text-xl font-semibold">
                    Don&rsquo;t see your role?
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                    We&rsquo;re always interested in talking to exceptional engineers, designers, AI researchers, and operators. Send a short note describing what you&rsquo;d build at TaveStack.
                </p>
                <a
                    href="mailto:careers@tavestack.com"
                    className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-gradient text-white px-7 h-10 text-sm font-medium shadow-lg shadow-primary/20"
                >
                    careers@tavestack.com
                </a>
            </div>
        </Wrapper>
    </div>
);

export default CareersPage;

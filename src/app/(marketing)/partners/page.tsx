import Link from "next/link";
import {
    ArrowRight,
    Building2,
    Code2,
    GraduationCap,
    HandshakeIcon,
    Sparkles,
} from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import SectionHeading from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

const TYPES = [
    {
        icon: Building2,
        title: "Implementation Partners",
        body: "Consulting firms and systems integrators who deploy TaveStack OS for enterprise and government clients. Access to partner pricing, co-selling support, and dedicated partner success managers.",
        cta: "Apply to implement",
    },
    {
        icon: Code2,
        title: "Technology Partners",
        body: "Software companies that want to build native apps that run inside TaveStack OS or bi-directional integrations with the TaveStack API. Access to developer sandbox, early API access, and co-marketing.",
        cta: "Apply to build",
    },
    {
        icon: HandshakeIcon,
        title: "Reseller Partners",
        body: "Regional distributors and business development firms who sell TaveStack subscriptions to their local markets. Competitive margin structure, lead sharing, and dedicated co-marketing budget.",
        cta: "Apply to resell",
    },
    {
        icon: GraduationCap,
        title: "Training & Certification Partners",
        body: "Training institutions and professional bodies that certify individuals on TaveStack OS administration and TAVE orchestration. Curriculum support, exam access, and badge issuance.",
        cta: "Apply to certify",
    },
];

const PartnersPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Partner Ecosystem"
            title={
                <>
                    Build the Future of{" "}
                    <span className="text-brand-gradient">Business Operations.</span>{" "}
                    With Us.
                </>
            }
            subtitle="TaveStack's partner ecosystem is how we scale globally. Whether you implement for clients, build on our platform, or resell to your market — there's a place for you in the TaveStack ecosystem."
        />

        <Wrapper className="py-12 lg:py-16">
            <SectionHeading
                eyebrow="Partner types"
                title="Four Ways to Build With TaveStack"
            />
            <div className="mt-12 grid md:grid-cols-2 gap-5">
                {TYPES.map((t, i) => {
                    const Icon = t.icon;
                    return (
                        <AnimationContainer
                            key={t.title}
                            animation="fadeUp"
                            delay={0.05 * i}
                        >
                            <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 lg:p-8 flex flex-col">
                                <div className="size-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-5">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-xl font-semibold">{t.title}</h3>
                                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                                    {t.body}
                                </p>
                                <Link href="/contact" className="mt-6">
                                    <Button variant="outline" className="w-full gap-2">
                                        {t.cta}
                                        <ArrowRight className="size-4" />
                                    </Button>
                                </Link>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>

        <Wrapper className="pb-24">
            <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 lg:p-12 text-center max-w-3xl mx-auto">
                <Sparkles className="size-9 text-primary mx-auto mb-3" />
                <h3 className="text-2xl md:text-3xl font-semibold">
                    Ready to partner with TaveStack?
                </h3>
                <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                    Tell us a little about your business and the markets you serve. Our partnerships team responds within two business days.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/contact">
                        <Button className="bg-brand-gradient text-white border-0 px-7">
                            Apply to partner
                        </Button>
                    </Link>
                    <a
                        href="mailto:partners@tavestack.com"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground px-7 h-9 text-sm font-medium"
                    >
                        partners@tavestack.com
                    </a>
                </div>
            </div>
        </Wrapper>
    </div>
);

export default PartnersPage;

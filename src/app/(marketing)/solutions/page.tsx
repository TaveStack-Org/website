import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { SOLUTIONS } from "@/constants";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Solutions — Built for Every Industry and Team",
    description:
        "See how TaveStack OS and TAVE solve operational challenges for enterprises, governments, SMEs, and industries from manufacturing to financial services, retail, and healthcare.",
    path: "/solutions",
    keywords: [
        "Government ERP Nigeria",
        "Enterprise ERP",
        "SME ERP software",
        "Manufacturing ERP",
        "Financial services ERP",
        "Retail ERP",
        "Healthcare ERP",
    ],
});

const SolutionsPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Solutions"
            title={
                <>
                    Built for{" "}
                    <span className="text-brand-gradient">Every Industry</span> and Team
                </>
            }
            subtitle="See how TaveStack OS and TAVE solve business challenges for enterprises, governments, SMEs, and specific industries."
        />

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {SOLUTIONS.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <AnimationContainer
                            key={s.slug}
                            animation="fadeUp"
                            delay={0.04 * i}
                        >
                            <Link
                                href={`/solutions/${s.slug}`}
                                className="group h-full block rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5 transition-all"
                            >
                                <div className="size-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-5">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    {s.name}
                                </h3>
                                <p className="text-sm font-medium text-foreground/80 mt-1">
                                    {s.headline}
                                </p>
                                <p className="text-xs text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
                                    {s.summary}
                                </p>
                                <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                                    Read solution <ArrowRight className="size-3.5" />
                                </div>
                            </Link>
                        </AnimationContainer>
                    );
                })}
            </div>
        </Wrapper>
    </div>
);

export default SolutionsPage;

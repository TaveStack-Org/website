"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Factory, Truck, ShoppingBag, Landmark, HeartPulse, ArrowRight, CheckCircle2 } from "lucide-react";

const SOLUTIONS = [
    {
        id: "manufacturing",
        icon: Factory,
        title: "Manufacturing",
        description: "Optimize production workflows, inventory management, and supply chain operations.",
        benefits: [
            "Real-time production monitoring",
            "Inventory optimization",
            "Quality control automation",
            "Supply chain visibility"
        ],
        stats: { metric: "35%", label: "reduction in production delays" }
    },
    {
        id: "professional-services",
        icon: Building2,
        title: "Professional Services",
        description: "Streamline project management, resource allocation, and client communications.",
        benefits: [
            "Project portfolio management",
            "Time and expense tracking",
            "Client portal integration",
            "Automated billing"
        ],
        stats: { metric: "40%", label: "improvement in utilization" }
    },
    {
        id: "logistics",
        icon: Truck,
        title: "Logistics & Supply Chain",
        description: "End-to-end visibility and automation for logistics operations.",
        benefits: [
            "Fleet management integration",
            "Real-time tracking",
            "Route optimization",
            "Warehouse automation"
        ],
        stats: { metric: "25%", label: "reduction in delivery times" }
    },
    {
        id: "retail",
        icon: ShoppingBag,
        title: "Retail & E-Commerce",
        description: "Unified commerce operations from inventory to customer experience.",
        benefits: [
            "Omnichannel inventory sync",
            "Order management automation",
            "Customer data platform",
            "Vendor management"
        ],
        stats: { metric: "50%", label: "faster order processing" }
    },
    {
        id: "financial-services",
        icon: Landmark,
        title: "Financial Services",
        description: "Compliance-ready automation for financial operations.",
        benefits: [
            "Regulatory compliance automation",
            "Risk management workflows",
            "Client onboarding",
            "Audit trail management"
        ],
        stats: { metric: "60%", label: "reduction in compliance costs" }
    },
    {
        id: "healthcare",
        icon: HeartPulse,
        title: "Healthcare",
        description: "HIPAA-compliant workflow automation for healthcare organizations.",
        benefits: [
            "Patient scheduling automation",
            "Claims processing",
            "Regulatory compliance",
            "Electronic health records integration"
        ],
        stats: { metric: "45%", label: "improvement in patient throughput" }
    },
];

const SolutionsPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-20">
            {/* Hero Section */}
            <Wrapper className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Industry Solutions" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Solutions Built for
                            </GradientText>
                            <br />
                            <span className="text-foreground">Your Industry</span>
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Pre-built templates and workflows designed for your specific industry challenges.
                        </p>
                    </AnimationContainer>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SOLUTIONS.map((solution, index) => (
                        <AnimationContainer key={solution.id} animation="fadeUp" delay={0.2 + index * 0.1}>
                            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all h-full flex flex-col">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <solution.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>

                                {/* Benefits */}
                                <ul className="space-y-2 mb-6 flex-grow">
                                    {solution.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                {/* Stats */}
                                <div className="p-4 rounded-xl bg-primary/5 mb-4">
                                    <p className="text-2xl font-bold text-primary">{solution.stats.metric}</p>
                                    <p className="text-xs text-muted-foreground">{solution.stats.label}</p>
                                </div>

                                {/* CTA */}
                                <Link href="/demo" className="flex items-center gap-2 text-sm text-primary hover:underline">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>

                {/* CTA Section */}
                <AnimationContainer animation="fadeUp" delay={0.8}>
                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Don't See Your Industry?</h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Our flexible platform can be customized for any industry. Let's discuss your unique requirements.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Contact Us</Button>
                        </Link>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </div>
    );
};

export default SolutionsPage;

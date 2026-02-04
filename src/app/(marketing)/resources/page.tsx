"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Video, BookOpen, Download, ArrowRight } from "lucide-react";

const RESOURCE_CATEGORIES = [
    { id: "all", name: "All Resources" },
    { id: "case-studies", name: "Case Studies" },
    { id: "webinars", name: "Webinars" },
    { id: "guides", name: "Guides" },
    { id: "templates", name: "Templates" },
];

const RESOURCES = [
    {
        id: 1,
        type: "case-studies",
        title: "How TechFlow Manufacturing Reduced Production Delays by 35%",
        description: "Learn how a Nigerian manufacturing company transformed their operations with Tavestack.",
        icon: FileText,
        cta: "Read Case Study",
        featured: true,
    },
    {
        id: 2,
        type: "webinars",
        title: "Webinar: ERP Integration Best Practices for African Enterprises",
        description: "45-minute deep dive into connecting your ERP systems effectively.",
        icon: Video,
        cta: "Watch Webinar",
    },
    {
        id: 3,
        type: "guides",
        title: "The Complete Guide to Workflow Automation",
        description: "Everything you need to know about automating business processes.",
        icon: BookOpen,
        cta: "Read Guide",
    },
    {
        id: 4,
        type: "templates",
        title: "50+ Pre-Built Workflow Templates",
        description: "Ready-to-use templates for common business processes across industries.",
        icon: Download,
        cta: "Download Templates",
    },
    {
        id: 5,
        type: "case-studies",
        title: "EastAfrica Logistics: From 9 Systems to One Platform",
        description: "How a logistics company unified their operations and improved efficiency by 60%.",
        icon: FileText,
        cta: "Read Case Study",
    },
    {
        id: 6,
        type: "webinars",
        title: "Webinar: ROI of Workflow Automation",
        description: "Calculate and demonstrate the business value of automation investments.",
        icon: Video,
        cta: "Watch Webinar",
    },
    {
        id: 7,
        type: "guides",
        title: "Multi-Currency Operations Guide",
        description: "Managing finances across multiple African currencies with Tavestack.",
        icon: BookOpen,
        cta: "Read Guide",
    },
    {
        id: 8,
        type: "templates",
        title: "Procurement Workflow Templates",
        description: "Automate your entire procurement process from request to payment.",
        icon: Download,
        cta: "Download Templates",
    },
];

const ResourcesPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-20">
            {/* Hero Section */}
            <Wrapper className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Resources" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Learn & Grow
                            </GradientText>
                            <br />
                            <span className="text-foreground">With Tavestack</span>
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Case studies, guides, webinars, and templates to help you get the most out of Tavestack.
                        </p>
                    </AnimationContainer>
                </div>

                {/* Featured Resource */}
                <AnimationContainer animation="fadeUp" delay={0.5}>
                    <div className="mb-16">
                        {RESOURCES.filter(r => r.featured).map(resource => (
                            <div key={resource.id} className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-primary/5 border border-primary/20">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <span className="text-xs font-medium text-primary uppercase tracking-wider mb-4 block">
                                            Featured Case Study
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{resource.title}</h2>
                                        <p className="text-muted-foreground mb-6">{resource.description}</p>
                                        <Button size="lg" className="gap-2">
                                            {resource.cta} <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="aspect-video rounded-xl bg-card/50 border border-border/50 flex items-center justify-center">
                                        <resource.icon className="w-16 h-16 text-primary/30" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimationContainer>

                {/* Category Filter */}
                <AnimationContainer animation="fadeUp" delay={0.6}>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {RESOURCE_CATEGORIES.map(category => (
                            <Button
                                key={category.id}
                                variant={category.id === "all" ? "default" : "outline"}
                                size="sm"
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </AnimationContainer>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {RESOURCES.filter(r => !r.featured).map((resource, index) => (
                        <AnimationContainer key={resource.id} animation="fadeUp" delay={0.2 + index * 0.05}>
                            <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all h-full flex flex-col">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <resource.icon className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-xs text-primary uppercase tracking-wider mb-2">
                                    {resource.type.replace('-', ' ')}
                                </span>
                                <h3 className="font-semibold mb-2 line-clamp-2">{resource.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                                    {resource.description}
                                </p>
                                <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                                    {resource.cta} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <AnimationContainer animation="fadeUp" delay={0.9}>
                    <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
                        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Get the latest resources, tips, and product updates delivered to your inbox.
                        </p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-2 rounded-lg bg-background border border-border"
                            />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </div>
    );
};

export default ResourcesPage;

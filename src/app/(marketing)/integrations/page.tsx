"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from "@/constants";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const IntegrationsPage = () => {
    const [activeCategory, setActiveCategory] = useState("erp");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredIntegrations = INTEGRATIONS.filter(integration => {
        const matchesCategory = activeCategory === "all" || integration.category === activeCategory;
        const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="w-full relative flex flex-col pt-20">
            {/* Hero Section */}
            <Wrapper className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4 mb-12">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Integrations" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Connect Everything.
                            </GradientText>
                            <br />
                            <span className="text-foreground">Automate Anything.</span>
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Native integrations with 25+ ERP systems and growing. Connect your entire tech stack in minutes.
                        </p>
                    </AnimationContainer>
                </div>

                {/* Search Bar */}
                <AnimationContainer animation="fadeUp" delay={0.5}>
                    <div className="max-w-md mx-auto mb-12">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                                placeholder="Search integrations..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </AnimationContainer>

                {/* Category Tabs */}
                <AnimationContainer animation="fadeUp" delay={0.6}>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        <Button
                            variant={activeCategory === "all" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory("all")}
                        >
                            All
                        </Button>
                        {INTEGRATION_CATEGORIES.map((category) => (
                            <Button
                                key={category.id}
                                variant={activeCategory === category.id ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.icon} {category.name}
                            </Button>
                        ))}
                    </div>
                </AnimationContainer>

                {/* Integrations Grid */}
                <AnimationContainer animation="fadeUp" delay={0.7}>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredIntegrations.map((integration, index) => (
                            <div
                                key={integration.id}
                                className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                                        🔗
                                    </div>
                                    {integration.available && (
                                        <span className="text-xs text-green-500 flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" /> Available
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-semibold text-sm mb-1">{integration.name}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-2">
                                    {integration.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </AnimationContainer>

                {/* Custom Integration CTA */}
                <AnimationContainer animation="fadeUp" delay={0.8}>
                    <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
                        <h2 className="text-2xl font-bold mb-4">Don't See Your System?</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Our flexible API integration builder lets you connect any system with a REST API. 
                            Need help? Our team can build custom connectors for you.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Request a Custom Integration</Button>
                        </Link>
                    </div>
                </AnimationContainer>

                {/* How It Works */}
                <AnimationContainer animation="fadeUp" delay={0.9}>
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-center mb-8">How Integrations Work</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { step: 1, title: "Select", description: "Choose your system from our catalog" },
                                { step: 2, title: "Authenticate", description: "Connect with your credentials" },
                                { step: 3, title: "Sync", description: "Start syncing data in real-time" },
                            ].map((item) => (
                                <div key={item.step} className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-lg">
                                        {item.step}
                                    </div>
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </div>
    );
};

export default IntegrationsPage;

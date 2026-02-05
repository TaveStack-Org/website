"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { ADD_ONS } from "@/constants";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const PricingPage = () => {
    const [employees, setEmployees] = useState(100);
    const [hourlyWage, setHourlyWage] = useState(25);
    const [hoursWasted, setHoursWasted] = useState(4.5);
    const [calculatedSavings, setCalculatedSavings] = useState<number | null>(null);

    const calculateSavings = () => {
        // Annual savings = employees * hours wasted per week * hourly wage * 52 weeks
        const annualSavings = employees * hoursWasted * hourlyWage * 52;
        setCalculatedSavings(Math.round(annualSavings));
    };

    return (
        <div className="w-full relative flex flex-col pt-20">
            {/* Hero Section */}
            <Wrapper className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4 mb-8">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Pricing" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Simple, Transparent Pricing
                            </GradientText>
                            <span className="text-foreground">That Scales With You</span>
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto">
                            No hidden fees. Cancel anytime. Start with a free 14-day trial.
                        </p>
                    </AnimationContainer>
                </div>
            </Wrapper>

            {/* Pricing Component */}
            <Pricing />

            {/* Add-ons Section */}
            <Wrapper className="py-16">
                <div className="flex flex-col items-center text-center gap-4 mb-12">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Enhance Your Plan" />
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                            <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                Add-Ons
                            </GradientText>
                        </h2>
                        <p className="text-muted-foreground mt-2">Available for Professional & Enterprise plans</p>
                    </AnimationContainer>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {ADD_ONS.map((addon, index) => (
                        <AnimationContainer key={index} animation="fadeUp" delay={0.3 + index * 0.1}>
                            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                                <h3 className="font-semibold text-lg mb-2">{addon.name}</h3>
                                <p className="text-primary font-bold text-xl mb-3">{addon.price}</p>
                                <p className="text-sm text-muted-foreground">{addon.description}</p>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </Wrapper>

            {/* ROI Calculator */}
            <Wrapper className="py-16">
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col items-center text-center gap-4 mb-8">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="ROI Calculator" />
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={0.3}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    Calculate Your Savings
                                </GradientText>
                            </h2>
                            <p className="text-muted-foreground mt-2">See how much you could save with Tavestack</p>
                        </AnimationContainer>
                    </div>

                        <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="space-y-2">
                                    <Label htmlFor="employees">Number of Employees</Label>
                                    <Input 
                                        id="employees"
                                        type="number" 
                                        value={employees}
                                        onChange={(e) => setEmployees(Number(e.target.value))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="wage">Average Hourly Wage ($)</Label>
                                    <Input 
                                        id="wage"
                                        type="number" 
                                        value={hourlyWage}
                                        onChange={(e) => setHourlyWage(Number(e.target.value))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="hours">Hours Wasted/Week</Label>
                                    <Input 
                                        id="hours"
                                        type="number" 
                                        step="0.5"
                                        value={hoursWasted}
                                        onChange={(e) => setHoursWasted(Number(e.target.value))}
                                    />
                                </div>
                            </div>

                            <Button onClick={calculateSavings} className="w-full" size="lg">
                                Calculate Savings
                            </Button>

                            {calculatedSavings !== null && (
                                <div className="mt-8 p-6 rounded-xl bg-primary/10 text-center">
                                    <p className="text-sm text-muted-foreground mb-2">Estimated Annual Savings</p>
                                    <p className="text-4xl font-bold text-primary">
                                        ${calculatedSavings.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        per year with Tavestack automation
                                    </p>
                                </div>
                            )}
                        </div>
                </div>
            </Wrapper>

            {/* FAQ */}
            <FAQ />
        </div>
    );
};

export default PricingPage;

"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { CheckCircle2, Calendar, Users, PlayCircle, BarChart3 } from "lucide-react";

const WHAT_TO_EXPECT = [
    { icon: Calendar, text: "30-minute personalized demonstration" },
    { icon: PlayCircle, text: "See workflows relevant to your industry" },
    { icon: Users, text: "Ask questions in real-time" },
    { icon: BarChart3, text: "Get a custom ROI calculation" },
];

const INDUSTRIES = [
    "Manufacturing",
    "Professional Services",
    "Healthcare",
    "Retail & E-commerce",
    "Financial Services",
    "Logistics & Supply Chain",
    "Technology",
    "Other",
];

const COMPANY_SIZES = [
    "1-50 employees",
    "51-100 employees",
    "101-500 employees",
    "501-2500 employees",
    "2500+ employees",
];

const DemoPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-20">
            <Wrapper className="py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Info */}
                    <div className="flex flex-col gap-6">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="Book a Demo" />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.3}>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    See Tavestack in Action
                                </GradientText>
                            </h1>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Book a personalized demo with our team and discover how Tavestack can transform your business operations.
                            </p>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.5}>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-4">What to Expect</h3>
                                <ul className="space-y-3">
                                    {WHAT_TO_EXPECT.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <item.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-sm text-foreground">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <div className="mt-6 p-4 rounded-xl bg-card/50 border border-border/50">
                                <p className="text-sm text-muted-foreground text-center">
                                    <span className="text-primary font-semibold">4.8/5</span> average rating from 40+ customers
                                </p>
                            </div>
                        </AnimationContainer>
                    </div>

                    {/* Right Column - Form */}
                    <AnimationContainer animation="fadeLeft" delay={0.4}>
                        <div className="p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name *</Label>
                                        <Input id="fullName" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Work Email *</Label>
                                        <Input id="email" type="email" placeholder="john@company.com" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company Name *</Label>
                                        <Input id="company" placeholder="Your Company" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="jobTitle">Job Title *</Label>
                                        <Input id="jobTitle" placeholder="Operations Manager" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number *</Label>
                                        <Input id="phone" type="tel" placeholder="+234 XXX XXX XXXX" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="country">Country *</Label>
                                        <Input id="country" placeholder="Nigeria" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="industry">Industry *</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select industry" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {INDUSTRIES.map((industry) => (
                                                    <SelectItem key={industry} value={industry.toLowerCase()}>
                                                        {industry}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="companySize">Company Size *</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select size" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {COMPANY_SIZES.map((size) => (
                                                    <SelectItem key={size} value={size}>
                                                        {size}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="challenges">What challenges are you trying to solve? *</Label>
                                    <Textarea 
                                        id="challenges" 
                                        placeholder="Tell us about your current workflow challenges..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Schedule My Demo
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    By submitting, you agree to our Privacy Policy and Terms of Service.
                                </p>
                            </form>
                        </div>
                    </AnimationContainer>
                </div>

                {/* What Happens Next */}
                <div className="mt-16 lg:mt-24">
                    <div className="flex flex-col items-center text-center gap-4 mb-8">
                        <AnimationContainer animation="fadeUp" delay={0.7}>
                            <SectionBadge title="Next Steps" />
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={0.8}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    What Happens Next?
                                </GradientText>
                            </h2>
                        </AnimationContainer>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: 1, text: "We'll confirm your demo time within 24 hours" },
                            { step: 2, text: "You'll receive a calendar invitation" },
                            { step: 3, text: "Our team will customize the demo to your needs" },
                            { step: 4, text: "You'll see Tavestack in action!" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-3">
                                    {item.step}
                                </div>
                                <p className="text-sm text-muted-foreground">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default DemoPage;

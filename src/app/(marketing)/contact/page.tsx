"use client";

import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import GradientText from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Wrench } from "lucide-react";

const CONTACT_REASONS = [
    "General Inquiry",
    "Sales / Pricing",
    "Technical Support",
    "Partnership Opportunity",
    "Press / Media",
    "Careers",
];

const OFFICES = [
    { city: "Lagos, Nigeria", address: "Victoria Island, Lagos", type: "Headquarters" },
    { city: "Nairobi, Kenya", address: "Westlands, Nairobi", type: "Regional Office" },
    { city: "Johannesburg, SA", address: "Sandton, Johannesburg", type: "Regional Office" },
];

const CONTACT_OPTIONS = [
    { icon: MessageSquare, title: "General Inquiries", email: "hello@tavestack.com" },
    { icon: Users, title: "Sales", email: "sales@tavestack.com" },
    { icon: Wrench, title: "Support", email: "support@tavestack.com" },
];

const ContactPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-20">
            <Wrapper className="py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Contact Info */}
                    <div className="flex flex-col gap-8">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="Contact Us" />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.3}>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight">
                                <GradientText colors={['#8a27f3ff', '#db5800ff', '#8a27f3ff']} animationSpeed={6}>
                                    Let's Talk
                                </GradientText>
                            </h1>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </AnimationContainer>

                        {/* Contact Options */}
                        <AnimationContainer animation="fadeUp" delay={0.5}>
                            <div className="space-y-4">
                                {CONTACT_OPTIONS.map((option, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <option.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{option.title}</h3>
                                            <a href={`mailto:${option.email}`} className="text-sm text-primary hover:underline">
                                                {option.email}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimationContainer>

                        {/* Office Locations */}
                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <div className="mt-4">
                                <h3 className="font-semibold mb-4">Our Offices</h3>
                                <div className="space-y-4">
                                    {OFFICES.map((office, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                            <div>
                                                <p className="font-medium">{office.city}</p>
                                                <p className="text-sm text-muted-foreground">{office.address}</p>
                                                <span className="text-xs text-primary">{office.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimationContainer>

                        {/* Response Time */}
                        <AnimationContainer animation="fadeUp" delay={0.7}>
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                                <Clock className="w-5 h-5 text-primary" />
                                <p className="text-sm">
                                    <span className="font-medium">Average response time:</span> Within 24 hours
                                </p>
                            </div>
                        </AnimationContainer>
                    </div>

                    {/* Right Column - Contact Form */}
                    <AnimationContainer animation="fadeLeft" delay={0.4}>
                        <div className="p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                            <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name *</Label>
                                        <Input id="firstName" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name *</Label>
                                        <Input id="lastName" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input id="email" type="email" placeholder="john@company.com" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company Name</Label>
                                    <Input id="company" placeholder="Your Company" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="reason">Reason for Contact *</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a reason" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {CONTACT_REASONS.map((reason) => (
                                                <SelectItem key={reason} value={reason.toLowerCase().replace(/ /g, '-')}>
                                                    {reason}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea 
                                        id="message" 
                                        placeholder="How can we help you?"
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Send Message
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    By submitting, you agree to our Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </AnimationContainer>
                </div>
            </Wrapper>
        </div>
    );
};

export default ContactPage;

import Link from "next/link";
import { Github, Globe, MessageCircle, Slack, Users } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Community — Connect With Other TaveStack Builders",
    description:
        "Join the TaveStack Slack, GitHub, and regional meetups. Connect with operators, developers, and partners running the OS in production.",
    path: "/resources/community",
});

const CHANNELS = [
    {
        icon: Slack,
        title: "TaveStack Community Slack",
        body: "Where customers, partners, and the TaveStack team trade workflows, share TAVE prompts, and ship faster together.",
        cta: "Join Slack",
    },
    {
        icon: Github,
        title: "GitHub Discussions",
        body: "Roadmap conversations, SDK feedback, and open feature proposals — all in the open.",
        cta: "Open GitHub",
    },
    {
        icon: Users,
        title: "TaveStack User Groups",
        body: "Local in-person meetups in Lagos, Abuja, Nairobi, Accra, Dakar, and growing. Quarterly cadence.",
        cta: "Find a chapter",
    },
    {
        icon: MessageCircle,
        title: "Office Hours",
        body: "Weekly drop-in clinic with a TaveStack solutions engineer. Bring real problems, leave with real solutions.",
        cta: "Book a slot",
    },
];

const CommunityPage = () => (
    <div className="w-full relative flex flex-col">
        <PageHero
            eyebrow="Community"
            title={
                <>
                    A Community of{" "}
                    <span className="text-brand-gradient">Operators Who Ship.</span>
                </>
            }
            subtitle="TaveStack is built with — not just for — the people running on it. Join the channels where operators, builders, and the team trade ideas every day."
        />

        <Wrapper className="pb-24">
            <div className="grid md:grid-cols-2 gap-5">
                {CHANNELS.map((c, i) => {
                    const Icon = c.icon;
                    return (
                        <AnimationContainer
                            key={c.title}
                            animation="fadeUp"
                            delay={0.05 * i}
                        >
                            <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 flex flex-col">
                                <div className="size-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-md shadow-primary/20 mb-5">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="text-lg font-semibold">{c.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                                    {c.body}
                                </p>
                                <Link href="/contact" className="mt-6">
                                    <Button variant="outline" className="w-full">
                                        {c.cta}
                                    </Button>
                                </Link>
                            </div>
                        </AnimationContainer>
                    );
                })}
            </div>

            <div className="mt-12 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 lg:p-12 text-center">
                <Globe className="size-8 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold">
                    Want to host a TaveStack meetup?
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                    We support local organizers with content, swag, and travel for our team. Tell us where you want to gather and we will help you make it happen.
                </p>
                <Link href="/contact" className="mt-6 inline-block">
                    <Button className="bg-brand-gradient text-white border-0 px-7">
                        Apply to host
                    </Button>
                </Link>
            </div>
        </Wrapper>
    </div>
);

export default CommunityPage;

import Link from "next/link";
import { ArrowLeft, Linkedin } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "The Team Behind the OS",
    description:
        "Meet the founders, engineers, and operators building TaveStack OS — a team with deep roots in Nigerian enterprise tech, government digital transformation, and global AI engineering.",
    path: "/about/team",
});

const TEAM = [
    {
        name: "Ibrahim Babangida",
        title: "Chief Executive Officer",
        bio: "Building TaveStack to be Africa's first global Business OS. Two decades of enterprise tech leadership across public and private sector.",
        initials: "IB",
    },
    {
        name: "Position Open",
        title: "Chief Technology Officer",
        bio: "Owns platform architecture, security posture, and the technical roadmap. Recruiting now.",
        initials: "C·T",
    },
    {
        name: "Position Open",
        title: "Chief AI Officer",
        bio: "Owns the TAVE agent runtime, model strategy, evaluation, and the AI ethics policy.",
        initials: "C·A",
    },
    {
        name: "Position Open",
        title: "Chief Operating Officer",
        bio: "Owns customer success, partnerships, and operational scale across markets.",
        initials: "C·O",
    },
    {
        name: "Position Open",
        title: "VP Platform Engineering",
        bio: "Leads the OS kernel team — multi-tenancy, event bus, edge deployment.",
        initials: "VP",
    },
    {
        name: "Position Open",
        title: "Lead Software Developer",
        bio: "Owns app module velocity and SDK quality across TypeScript, Python, and Go.",
        initials: "LSD",
    },
];

const TeamPage = () => (
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
            eyebrow="Team"
            title={
                <>
                    The <span className="text-brand-gradient">Team Behind</span> the OS
                </>
            }
            subtitle="Builders, operators, and researchers across Abuja, Lagos, Nairobi, and London. Several seats are open — see the careers page if you want to ship with us."
        />

        <Wrapper className="pb-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {TEAM.map((member, i) => (
                    <AnimationContainer
                        key={member.title}
                        animation="fadeUp"
                        delay={0.04 * i}
                    >
                        <div className="h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 flex flex-col">
                            <div className="flex items-center gap-4">
                                <div className="size-14 rounded-xl bg-brand-gradient text-white flex items-center justify-center text-sm font-bold tracking-wider shadow-md shadow-primary/20">
                                    {member.initials}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {member.title}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-5 leading-relaxed flex-1">
                                {member.bio}
                            </p>
                            <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                                    Leadership
                                </span>
                                <Linkedin className="size-4 text-muted-foreground/50" />
                            </div>
                        </div>
                    </AnimationContainer>
                ))}
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
                We&rsquo;re hiring across the org.{" "}
                <Link
                    href="/about/careers"
                    className="text-primary hover:underline"
                >
                    See open roles →
                </Link>
            </div>
        </Wrapper>
    </div>
);

export default TeamPage;

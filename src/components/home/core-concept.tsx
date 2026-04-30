import { Boxes, LogIn, Sparkles } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import SectionHeading from "../marketing/section-heading";

const STEPS = [
    {
        icon: LogIn,
        title: "Enter the OS (Free)",
        body: "Sign up once and step inside the TaveStack OS. Explore the command center, set up your workspace, and invite your team. No commitment, no credit card. The OS is your home — forever free.",
    },
    {
        icon: Boxes,
        title: "Deploy the Apps You Need",
        body: "Browse the TaveStack App Marketplace and activate modules — Finance, HR, CRM, Supply Chain, Projects, and more. Each app is self-contained with its own billing. Activate what you need. Scale as you grow.",
    },
    {
        icon: Sparkles,
        title: "TAVE Does the Rest",
        body: "Your embedded AI Agent learns every app you've deployed. It executes tasks, generates reports, moves data between modules, answers queries, and takes action — across your entire OS — in natural language.",
    },
];

const CoreConcept = () => (
    <Wrapper className="py-20 lg:py-28">
        <SectionHeading
            eyebrow="How It Works"
            title="Sign Up Once. Deploy Anything. Let TAVE Run It."
            description="TaveStack works like an app store for your business — except every app talks to every other app, and your AI Agent can use them all without you having to ask twice."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                    <AnimationContainer key={s.title} animation="fadeUp" delay={0.2 + i * 0.1}>
                        <div className="relative h-full rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                            <div className="absolute -top-3 left-6 inline-flex items-center justify-center size-8 rounded-md bg-brand-gradient text-white text-sm font-bold shadow-md">
                                {i + 1}
                            </div>
                            <div className="size-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-4">
                                <Icon className="size-5" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                        </div>
                    </AnimationContainer>
                );
            })}
        </div>
    </Wrapper>
);

export default CoreConcept;

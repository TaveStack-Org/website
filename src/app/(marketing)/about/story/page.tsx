import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import PageHero from "@/components/marketing/page-hero";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Our Story — We Built the Software We Couldn't Find",
    description:
        "TaveStack was born in Abuja from a frustrated observation: African businesses were spending more time managing software than running their companies. Read the story of why we built a Business OS.",
    path: "/about/story",
});

const StoryPage = () => (
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
            eyebrow="Our Story"
            title={
                <>
                    We Built the Software{" "}
                    <span className="text-brand-gradient">We Couldn&rsquo;t Find.</span>
                </>
            }
        />

        <Wrapper className="pb-24">
            <article className="max-w-3xl mx-auto space-y-7 text-base lg:text-lg text-foreground/85 leading-relaxed">
                <p>
                    TaveStack was born in Abuja, Nigeria, from a simple but frustrating
                    observation: African businesses — and increasingly, businesses everywhere
                    — were spending more time managing software than running their
                    companies. Eleven tools. Eleven logins. Eleven monthly invoices. Zero
                    intelligence connecting them.
                </p>
                <p>
                    We asked: what if a business had an{" "}
                    <em className="not-italic font-semibold text-brand-gradient">
                        operating system
                    </em>{" "}
                    — one place where every function lived, every piece of data connected,
                    and an AI didn&rsquo;t just observe but actually operated the business?
                </p>
                <p>
                    TaveStack OS is the answer to that question. Built by a team with deep
                    roots in Nigerian enterprise technology, government digital
                    transformation, and global AI engineering.
                </p>
                <p>
                    We&rsquo;re not an African company trying to copy what Silicon Valley built.
                    We&rsquo;re a global company that started in Africa because Africa is where the
                    most creative, resilient, and ambitious operators in the world are
                    building businesses today.
                </p>
                <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 lg:p-8 not-italic">
                    <p className="text-base font-semibold text-foreground">
                        Why &ldquo;Tave&rdquo;?
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        TAVE stands for{" "}
                        <span className="text-foreground font-medium">
                            TaveStack Autonomous Virtual Executive
                        </span>{" "}
                        — the AI Agent at the heart of the OS. Every TaveStack customer gets
                        their own TAVE. We named the company after the agent because the
                        agent is the company.
                    </p>
                </div>
            </article>
        </Wrapper>
    </div>
);

export default StoryPage;

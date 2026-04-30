import { Github, Linkedin, Twitter, Youtube, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import Icons from "./global/icons";
import { FOOTER_NAV, SITE } from "@/constants";

const SOCIAL = [
    { icon: Linkedin, href: "https://linkedin.com/company/tavestack", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/tavestack", label: "X (Twitter)" },
    { icon: Youtube, href: "https://youtube.com/@tavestack", label: "YouTube" },
    { icon: Github, href: "https://github.com/tavestack", label: "GitHub" },
];

const COLUMNS: { title: string; links: readonly { label: string; href: string }[] }[] = [
    { title: "Platform", links: FOOTER_NAV.platform },
    { title: "Apps", links: FOOTER_NAV.apps },
    { title: "Solutions", links: FOOTER_NAV.solutions },
    { title: "Company", links: FOOTER_NAV.company },
    { title: "Legal", links: FOOTER_NAV.legal },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-border/50 pt-20 pb-8 w-full overflow-hidden mt-24">
            <Wrapper>
                <AnimationContainer animation="scaleUp" delay={0.2}>
                    <div className="absolute -top-1/4 inset-x-0 mx-auto bg-brand-gradient rounded-full w-1/2 h-1/4 blur-[10rem] opacity-30 pointer-events-none" />
                </AnimationContainer>
                <AnimationContainer animation="scaleUp" delay={0.3}>
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                </AnimationContainer>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    <AnimationContainer animation="fadeRight" delay={0.4} className="col-span-2 sm:col-span-3 lg:col-span-1">
                        <div className="flex flex-col items-start">
                            <Icons.logo className="w-32 h-auto" />
                            <p className="text-sm text-muted-foreground mt-3 italic">
                                The Business Operating System
                            </p>
                            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                                <p className="flex items-start gap-2">
                                    <MapPin className="size-4 shrink-0 mt-0.5" />
                                    <span>{SITE.address}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail className="size-4 shrink-0" />
                                    <a href={`mailto:${SITE.email}`} className="hover:text-foreground transition-colors">
                                        {SITE.email}
                                    </a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <PhoneCall className="size-4 shrink-0" />
                                    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                                        {SITE.phone}
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                {SOCIAL.map((s, i) => (
                                    <Link
                                        key={i}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="size-9 rounded-full bg-foreground/5 hover:bg-brand-gradient hover:text-white text-muted-foreground transition-colors flex items-center justify-center"
                                    >
                                        <s.icon className="size-4" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </AnimationContainer>

                    {COLUMNS.map((col, idx) => (
                        <AnimationContainer
                            key={col.title}
                            animation="fadeUp"
                            delay={0.5 + idx * 0.05}
                        >
                            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                                {col.title}
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AnimationContainer>
                    ))}
                </div>

                <AnimationContainer animation="fadeUp" delay={1}>
                    <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-3">
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} TaveStack Inc. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Made with purpose for Africa and the world.
                        </p>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </footer>
    );
};

export default Footer;

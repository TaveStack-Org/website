"use client";

import { Button } from "@/components/ui/button";
import {
    APP_MODULES,
    NAV_PRIMARY,
    RESOURCES_LINKS,
    SOLUTIONS,
    APP_TILE_ICONS,
} from "@/constants";
import { useClickOutside } from "@/hooks";
import { cn } from "@/lib";
import { useClerk } from "@clerk/nextjs";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import AnimationContainer from "./global/animation-container";
import Icons from "./global/icons";
import Wrapper from "./global/wrapper";
import { ModeToggle } from "./ui/theme-toggle";

type MegaKey = "apps" | "solutions" | "resources";

const Navbar = () => {
    const { user } = useClerk();
    const ref = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [mega, setMega] = useState<MegaKey | null>(null);
    const [openMobileGroup, setOpenMobileGroup] = useState<MegaKey | null>(null);
    const [visible, setVisible] = useState(false);

    const mobileMenuRef = useClickOutside(() => {
        if (open) setOpen(false);
    });

    const { scrollY } = useScroll({
        target: ref as RefObject<HTMLDivElement>,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 80);
    });

    return (
        <header className="fixed w-full top-0 inset-x-0 z-50">
            {/* Desktop */}
            <motion.div
                animate={{ width: visible ? "78%" : "100%", y: visible ? 16 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 40 }}
                className={cn(
                    "hidden lg:flex bg-transparent self-start items-center justify-between py-4 rounded-full relative z-[50] mx-auto w-full max-w-[1400px]",
                    visible &&
                        "bg-background/70 backdrop-blur-xl py-2 border border-border/60 shadow-[0_4px_30px_-10px_rgba(124,58,237,0.25)]"
                )}
            >
                <Wrapper className="flex items-center justify-between lg:px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-[170px] w-full"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="w-full" />
                        </Link>
                    </motion.div>

                    <nav
                        className="absolute inset-x-0 mx-auto w-max flex items-center gap-x-1 text-sm font-medium text-muted-foreground"
                        onMouseLeave={() => setMega(null)}
                    >
                        {NAV_PRIMARY.map((link, idx) => (
                            <AnimationContainer
                                key={link.label}
                                animation="fadeDown"
                                delay={0.05 * idx}
                            >
                                {link.mega ? (
                                    <button
                                        type="button"
                                        onMouseEnter={() => setMega(link.mega as MegaKey)}
                                        onClick={() =>
                                            setMega(
                                                mega === link.mega ? null : (link.mega as MegaKey),
                                            )
                                        }
                                        className={cn(
                                            "inline-flex items-center gap-1 rounded-md px-3.5 py-2 transition-colors duration-200 hover:text-foreground hover:bg-foreground/5",
                                            mega === link.mega && "text-foreground bg-foreground/5",
                                        )}
                                    >
                                        {link.label}
                                        <ChevronDown className="size-3.5 opacity-70" />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => setMega(null)}
                                        className="rounded-md px-3.5 py-2 transition-colors duration-200 hover:text-foreground hover:bg-foreground/5"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </AnimationContainer>
                        ))}
                    </nav>

                    <AnimationContainer animation="fadeLeft" delay={0.1}>
                        <div className="flex items-center gap-x-3">
                            <Link
                                href={user ? "/platform" : "/contact"}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                            >
                                Sign In
                            </Link>
                            <Link href="/demo">
                                <Button
                                    size="sm"
                                    className="bg-brand-gradient text-white hover:opacity-90 border-0 shadow-md shadow-primary/20"
                                >
                                    Get Started Free
                                </Button>
                            </Link>
                            <ModeToggle />
                        </div>
                    </AnimationContainer>
                </Wrapper>

                <AnimatePresence>
                    {mega && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setMega(mega)}
                            onMouseLeave={() => setMega(null)}
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(960px,90vw)] rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl p-6"
                        >
                            {mega === "apps" && <AppsMega onPick={() => setMega(null)} />}
                            {mega === "solutions" && (
                                <SolutionsMega onPick={() => setMega(null)} />
                            )}
                            {mega === "resources" && (
                                <ResourcesMega onPick={() => setMega(null)} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Mobile */}
            <motion.div
                animate={{
                    y: visible ? 16 : 0,
                    borderTopLeftRadius: open ? "0.75rem" : "2rem",
                    borderTopRightRadius: open ? "0.75rem" : "2rem",
                    borderBottomLeftRadius: open ? "0" : "2rem",
                    borderBottomRightRadius: open ? "0" : "2rem",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className={cn(
                    "flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-3 z-50",
                    visible &&
                        "bg-background/85 backdrop-blur-xl w-11/12 border border-border/60",
                    open && "border-transparent",
                )}
            >
                <Wrapper className="flex items-center justify-between lg:px-4">
                    <div className="flex items-center justify-between gap-x-4 w-full">
                        <Link href="/" className="max-w-[140px] w-full block">
                            <Icons.logo className="w-full" />
                        </Link>
                        <div className="flex items-center gap-x-2">
                            <Link href="/demo">
                                <Button size="sm" className="bg-brand-gradient text-white border-0">
                                    Start Free
                                </Button>
                            </Link>
                            <ModeToggle />
                            <button
                                aria-label={open ? "Close menu" : "Open menu"}
                                onClick={() => setOpen(!open)}
                                className="p-1.5 rounded-md hover:bg-foreground/5"
                            >
                                {open ? (
                                    <XIcon className="size-5" />
                                ) : (
                                    <MenuIcon className="size-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </Wrapper>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            ref={mobileMenuRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex rounded-b-xl absolute top-14 bg-background/95 backdrop-blur-xl inset-x-0 z-[60] flex-col items-start justify-start gap-1 w-full px-4 py-6 shadow-xl border-x border-b border-border max-h-[80vh] overflow-y-auto supports-[backdrop-filter]:bg-background/85"
                        >
                            {NAV_PRIMARY.map((link) =>
                                link.mega ? (
                                    <div key={link.label} className="w-full">
                                        <button
                                            onClick={() =>
                                                setOpenMobileGroup(
                                                    openMobileGroup === link.mega
                                                        ? null
                                                        : (link.mega as MegaKey),
                                                )
                                            }
                                            className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-base font-medium hover:bg-foreground/5"
                                        >
                                            {link.label}
                                            <ChevronDown
                                                className={cn(
                                                    "size-4 transition-transform",
                                                    openMobileGroup === link.mega && "rotate-180",
                                                )}
                                            />
                                        </button>
                                        {openMobileGroup === link.mega && (
                                            <div className="pl-4 pb-2 grid grid-cols-1 gap-1">
                                                {link.mega === "apps" &&
                                                    APP_MODULES.map((m) => (
                                                        <Link
                                                            key={m.slug}
                                                            href={`/apps/${m.slug}`}
                                                            onClick={() => setOpen(false)}
                                                            className="text-sm text-muted-foreground hover:text-foreground py-1.5"
                                                        >
                                                            {m.name}
                                                        </Link>
                                                    ))}
                                                {link.mega === "solutions" &&
                                                    SOLUTIONS.map((s) => (
                                                        <Link
                                                            key={s.slug}
                                                            href={`/solutions/${s.slug}`}
                                                            onClick={() => setOpen(false)}
                                                            className="text-sm text-muted-foreground hover:text-foreground py-1.5"
                                                        >
                                                            {s.name}
                                                        </Link>
                                                    ))}
                                                {link.mega === "resources" &&
                                                    RESOURCES_LINKS.map((r) => (
                                                        <Link
                                                            key={r.href}
                                                            href={r.href}
                                                            onClick={() => setOpen(false)}
                                                            className="text-sm text-muted-foreground hover:text-foreground py-1.5"
                                                        >
                                                            {r.label}
                                                        </Link>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="w-full rounded-lg px-4 py-2.5 text-base font-medium hover:bg-foreground/5"
                                    >
                                        {link.label}
                                    </Link>
                                ),
                            )}
                            <div className="mt-4 w-full grid grid-cols-2 gap-2">
                                <Link href="/contact" onClick={() => setOpen(false)}>
                                    <Button variant="secondary" className="w-full">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/demo" onClick={() => setOpen(false)}>
                                    <Button className="w-full bg-brand-gradient text-white border-0">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
};

const AppsMega = ({ onPick }: { onPick: () => void }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        <div className="col-span-2 flex items-center justify-between mb-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Apps Marketplace
            </p>
            <Link
                href="/apps"
                onClick={onPick}
                className="text-xs font-medium text-primary hover:underline"
            >
                Browse all apps →
            </Link>
        </div>
        {APP_MODULES.filter((m) => m.slug !== "erp").map((m) => {
            const Icon = APP_TILE_ICONS[m.slug];
            return (
                <Link
                    key={m.slug}
                    href={`/apps/${m.slug}`}
                    onClick={onPick}
                    className="group flex items-start gap-3 rounded-lg p-3 hover:bg-foreground/5 transition-colors"
                >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-brand-gradient text-white">
                        <Icon className="size-4" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {m.name}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                            {m.tagline}
                        </div>
                    </div>
                </Link>
            );
        })}
    </div>
);

const SolutionsMega = ({ onPick }: { onPick: () => void }) => (
    <div>
        <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                By Industry
            </p>
            <Link
                href="/solutions"
                onClick={onPick}
                className="text-xs font-medium text-primary hover:underline"
            >
                All solutions →
            </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {SOLUTIONS.map((s) => {
                const Icon = s.icon;
                return (
                    <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        onClick={onPick}
                        className="group flex items-start gap-3 rounded-lg p-3 hover:bg-foreground/5 transition-colors"
                    >
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                            <Icon className="size-4" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {s.name}
                            </div>
                            <div className="text-xs text-muted-foreground line-clamp-1">
                                {s.headline}
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    </div>
);

const ResourcesMega = ({ onPick }: { onPick: () => void }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {RESOURCES_LINKS.map((r) => {
            const Icon = r.icon;
            return (
                <Link
                    key={r.href}
                    href={r.href}
                    onClick={onPick}
                    className="group flex items-start gap-3 rounded-lg p-3 hover:bg-foreground/5 transition-colors"
                >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                        <Icon className="size-4" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {r.label}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                            {r.description}
                        </div>
                    </div>
                </Link>
            );
        })}
    </div>
);

export default Navbar;

"use client";

import { AnimatePresence, motion, MotionProps, Transition, Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

// Default animation configuration
const defaultTransition: Transition = { type: "spring", damping: 30, stiffness: 400 };

const defaultStaggerDuration = 0.025;

type CharactersSplitStringProps = {
    text: string;
    wrapperClassName?: string;
    characterClassName?: string;
    initial: MotionProps["initial"];
    animate: MotionProps["animate"];
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center";
    transition?: Transition;
};

function CharactersSplitString({
    text,
    wrapperClassName,
    characterClassName,
    initial,
    animate,
    staggerDuration = defaultStaggerDuration,
    staggerFrom = "first",
    transition = defaultTransition,
}: CharactersSplitStringProps) {
    const characters = text.split("");
    const totalCharacters = characters.length;

    const getDelay = (index: number) => {
        switch (staggerFrom) {
            case "first":
                return index * staggerDuration;
            case "last":
                return (totalCharacters - index - 1) * staggerDuration;
            case "center": {
                const center = Math.floor(totalCharacters / 2);
                return Math.abs(center - index) * staggerDuration;
            }
            default:
                return index * staggerDuration;
        }
    };

    return (
        <span className={wrapperClassName}>
            {characters.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className={characterClassName}
                    initial={initial}
                    animate={animate}
                    transition={{ ...transition, delay: getDelay(index) }}
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}

export interface RotatingTextProps {
    texts: string[];
    mainClassName?: string;
    splitLevelClassName?: string;
    staggerFrom?: "first" | "last" | "center";
    initial?: MotionProps["initial"];
    animate?: MotionProps["animate"];
    exit?: MotionProps["exit"];
    staggerDuration?: number;
    transition?: Transition;
    rotationInterval?: number;
    loop?: boolean;
    auto?: boolean;
    onNext?: (index: number) => void;
}

export default function RotatingText({
    texts,
    mainClassName = "",
    splitLevelClassName = "",
    staggerFrom = "last",
    initial = { y: "100%" },
    animate = { y: 0 },
    exit = { y: "-120%" },
    staggerDuration = defaultStaggerDuration,
    transition = defaultTransition,
    rotationInterval = 2000,
    loop = true,
    auto = true,
    onNext,
}: RotatingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const next = useCallback(() => {
        setCurrentIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex >= texts.length) {
                return loop ? 0 : prev;
            }
            return nextIndex;
        });
    }, [texts.length, loop]);

    useEffect(() => {
        if (onNext) {
            onNext(currentIndex);
        }
    }, [currentIndex, onNext]);

    useEffect(() => {
        if (!auto) return;

        intervalRef.current = setInterval(next, rotationInterval);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [next, rotationInterval, auto]);

    return (
        <span className={mainClassName}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    className="inline-flex"
                    exit={exit}
                    transition={transition}
                >
                    <CharactersSplitString
                        text={texts[currentIndex]}
                        wrapperClassName="inline-flex"
                        characterClassName={splitLevelClassName}
                        initial={initial}
                        animate={animate}
                        staggerDuration={staggerDuration}
                        staggerFrom={staggerFrom}
                        transition={transition}
                    />
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

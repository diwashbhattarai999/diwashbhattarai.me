"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
    animateByCharacter?: boolean;
    characterDelay?: number;
    className?: string;
    dangerouslySetInnerHTML?: { __html: string };
    delay?: number;
    duration?: number;
    text?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    yOffset?: number;
}
const BlurFadeText = ({
    text,
    dangerouslySetInnerHTML,
    className,
    variant,
    characterDelay = 0.03,
    delay = 0,
    yOffset = 8,
    animateByCharacter = false,
}: BlurFadeTextProps) => {
    const defaultVariants: Variants = {
        hidden: { filter: "blur(8px)", opacity: 0, y: yOffset },
        visible: { filter: "blur(0px)", opacity: 1, y: 0 },
    };
    const combinedVariants = variant || defaultVariants;
    const characters = useMemo(() => Array.from(text ?? ""), [text]);

    if (animateByCharacter && text) {
        return (
            <span className="z-0 inline-block">
                <AnimatePresence>
                    {characters.map((char, i) => (
                        <motion.span
                            animate="visible"
                            className={cn("inline-block", className)}
                            exit="hidden"
                            initial="hidden"
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                            key={i}
                            style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
                            transition={{
                                delay: delay + i * characterDelay,
                                ease: "easeOut",
                                yoyo: Number.POSITIVE_INFINITY,
                            }}
                            variants={combinedVariants}
                        >
                            {char}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </span>
        );
    }

    return (
        <span className="inline-block w-full">
            <AnimatePresence>
                <motion.span
                    animate="visible"
                    className={cn("inline-block", className)}
                    exit="hidden"
                    initial="hidden"
                    transition={{
                        delay,
                        ease: "easeOut",
                        yoyo: Number.POSITIVE_INFINITY,
                    }}
                    variants={combinedVariants}
                    {...(dangerouslySetInnerHTML ? { dangerouslySetInnerHTML } : { children: text })}
                />
            </AnimatePresence>
        </span>
    );
};

export default BlurFadeText;

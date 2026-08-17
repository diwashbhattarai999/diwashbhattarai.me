"use client";

import { motion } from "framer-motion";

interface IMotionTextProps {
    children: string;
    className: string;
    delayOffset: number;
}

export const MotionText = ({ children, delayOffset = 0, className }: IMotionTextProps) => {
    const text = children;
    const letters = Array.from(text).map((letter) => (letter === " " ? "\u00A0" : letter));

    return (
        <motion.div className={className}>
            {letters.map((letter, index) => (
                <motion.span
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex"
                    initial={{ opacity: 0, y: 10 }}
                    // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                    key={index}
                    transition={{
                        damping: 15,
                        delay: index * 0.03 + delayOffset,
                        stiffness: 400,
                        type: "spring",
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

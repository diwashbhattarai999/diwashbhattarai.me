"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { type ReactElement, useEffect, useRef } from "react";

interface MotionDivProps {
    children: ReactElement | string;
    className?: string;
    delayOffset?: number;
    initial?: { y: number; opacity: number };
}

export const MotionDiv = ({
    children,
    delayOffset,
    initial = { y: 50, opacity: 0 },
    className,
}: MotionDivProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            controls.start({ y: 0, opacity: 1 });
        }
    }, [controls, isInView]);

    return (
        <motion.div
            animate={controls}
            className={className}
            initial={initial}
            ref={ref}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                delay: delayOffset,
                delayChildren: 0.3,
                staggerChildren: 0.2,
            }}
        >
            {children}
        </motion.div>
    );
};

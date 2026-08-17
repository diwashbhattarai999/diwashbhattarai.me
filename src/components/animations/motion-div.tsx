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
    initial = { opacity: 0, y: 50 },
    className,
}: MotionDivProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, isInView]);

    return (
        <motion.div
            animate={controls}
            className={className}
            initial={initial}
            ref={ref}
            transition={{
                damping: 30,
                delay: delayOffset,
                delayChildren: 0.3,
                staggerChildren: 0.2,
                stiffness: 200,
                type: "spring",
            }}
        >
            {children}
        </motion.div>
    );
};

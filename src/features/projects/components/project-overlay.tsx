"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { Project } from "@/features/projects/types/project.types";
import { useIsDesktop } from "@/hooks/use-is-desktop";

const PREVIEW_HEIGHT = 200;
const PREVIEW_WIDTH = 320;

interface ProjectHoverPreviewProps {
    anchor: HTMLElement | null;
    project: Project | null;
}

const getPreviewLayout = (anchor: HTMLElement) => {
    const rect = anchor.getBoundingClientRect();
    const contentRight = Math.max(24, (window.innerWidth - Math.min(window.innerWidth, 1024)) / 2 + 8);

    return {
        top: rect.top + (rect.height - PREVIEW_HEIGHT) / 2,
        right: contentRight,
    };
};

export const ProjectHoverPreview = ({ project, anchor }: ProjectHoverPreviewProps) => {
    const isDesktop = useIsDesktop();
    const [mounted, setMounted] = useState(false);
    const [layout, setLayout] = useState({ top: 0, right: 0 });

    useEffect(() => {
        setMounted(true);
    }, []);

    useLayoutEffect(() => {
        if (!anchor) {
            return;
        }

        const updateLayout = () => {
            setLayout(getPreviewLayout(anchor));
        };

        updateLayout();
        window.addEventListener("scroll", updateLayout, true);
        window.addEventListener("resize", updateLayout);

        return () => {
            window.removeEventListener("scroll", updateLayout, true);
            window.removeEventListener("resize", updateLayout);
        };
    }, [anchor]);

    if (!(mounted && isDesktop && project && anchor)) {
        return null;
    }

    return createPortal(
        <motion.div
            animate={{ top: layout.top }}
            className="pointer-events-none fixed z-40 overflow-hidden rounded-xl shadow-2xl shadow-black/40"
            style={{ right: layout.right, width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT }}
            transition={{ type: "spring", stiffness: 520, damping: 42, mass: 0.7 }}
        >
            <Image
                alt={project.title}
                className="size-full object-cover object-top"
                height={PREVIEW_HEIGHT}
                key={project.id}
                sizes={`${PREVIEW_WIDTH}px`}
                src={project.image}
                width={PREVIEW_WIDTH}
            />
        </motion.div>,
        document.body
    );
};

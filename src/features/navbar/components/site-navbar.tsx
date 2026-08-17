"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { NAV_ACTIONS, NAV_ITEMS } from "@/features/navbar/constants/navbar.constants";
import { cn } from "@/lib/utils";

import { NavItem } from "./nav-item";

export const SiteNavbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useEffect(
        () =>
            scrollY.on("change", (latest) => {
                setScrolled(latest > 50);
            }),
        [scrollY]
    );

    return (
        <motion.header
            animate={{
                opacity: 1,
                scale: scrolled ? 0.95 : 1,
            }}
            className={cn("flex justify-between gap-4 px-4 py-3 md:gap-8 md:px-6", {
                "fixed top-5 left-1/2 z-40 h-[4rem] -translate-x-1/2 rounded-full border border-border/50 bg-background/60 shadow-lg backdrop-blur md:h-auto":
                    scrolled,
            })}
            initial={{ opacity: 0, y: 0 }}
            transition={{ damping: 20, stiffness: 200, type: "spring" }}
        >
            <Logo
                textClassName={cn({
                    "text-xl md:text-3xl": scrolled,
                })}
            />

            <nav
                aria-label="Primary"
                className={cn("flex flex-1 items-center justify-center gap-1 font-medium sm:gap-2 md:gap-3", {
                    "hidden md:flex": !scrolled,
                })}
            >
                {NAV_ITEMS.map((item) => (
                    <NavItem icon={item.icon} key={item.path} name={item.name} path={item.path} />
                ))}
            </nav>

            <div className="flex items-center gap-1 md:gap-2">
                {NAV_ACTIONS.map((action) => (
                    <Link
                        className="hidden rounded-md px-2 py-1 text-foreground/70 text-sm transition-colors hover:bg-muted hover:text-primary md:inline"
                        href={action.path}
                        key={action.path}
                    >
                        {action.name}
                    </Link>
                ))}
                <ThemeToggle />
            </div>
        </motion.header>
    );
};

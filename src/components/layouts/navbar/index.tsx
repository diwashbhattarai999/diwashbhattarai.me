"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/data/navbar";
import { cn } from "@/lib/utils";

import { NavItem } from "./nav-item";

export const Navbar = () => {
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
            className={cn("flex justify-between gap-10 px-6 py-3 md:gap-16", {
                "fixed top-5 left-1/2 z-40 h-[4rem] -translate-x-1/2 rounded-full border border-border/50 bg-background/60 shadow-lg backdrop-blur md:h-auto":
                    scrolled,
            })}
            initial={{ y: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            <Logo
                textClassName={cn({
                    "text-xl md:text-3xl": scrolled,
                })}
            />

            <nav
                className={cn("flex flex-1 items-center justify-center gap-3 font-medium sm:gap-6", {
                    "hidden md:flex": !scrolled,
                })}
            >
                {navItems.map((item) => (
                    <NavItem icon={item.icon} key={item.path} name={item.name} path={item.path} />
                ))}
            </nav>

            <ThemeToggle />
        </motion.header>
    );
};

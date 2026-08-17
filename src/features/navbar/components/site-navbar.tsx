"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NAV_ACTIONS, NAV_ITEMS } from "@/features/navbar/constants/navbar.constants";
import { cn } from "@/lib/utils";

import { NavItem } from "./nav-item";

const SCROLL_SHRINK_OFFSET = 50;

export const SiteNavbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useLayoutEffect(() => {
        setScrolled(Boolean(pathname) && window.scrollY > SCROLL_SHRINK_OFFSET);
    }, [pathname]);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > SCROLL_SHRINK_OFFSET);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <header
            className={cn("w-full", {
                "fixed top-5 left-1/2 z-40 w-max -translate-x-1/2": scrolled,
            })}
        >
            <div
                className={cn(
                    "flex origin-center justify-between gap-4 px-4 py-3 transition-transform duration-300 ease-out md:gap-8 md:px-6",
                    {
                        "h-16 scale-95 rounded-full border border-border/50 bg-background/60 shadow-lg backdrop-blur md:h-auto":
                            scrolled,
                    }
                )}
            >
                <Logo
                    textClassName={cn({
                        "text-xl md:text-3xl": scrolled,
                    })}
                />

                <nav
                    aria-label="Primary"
                    className={cn(
                        "flex flex-1 items-center justify-center gap-1 font-medium sm:gap-2 md:gap-3",
                        {
                            "hidden md:flex": !scrolled,
                        }
                    )}
                >
                    <TooltipProvider>
                        {NAV_ITEMS.map((item) => (
                            <NavItem icon={item.icon} key={item.path} name={item.name} path={item.path} />
                        ))}
                    </TooltipProvider>
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
            </div>
        </header>
    );
};

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ROUTES } from "@/configs/routes";
import type { NavItemProps } from "@/features/navbar/types/navbar.types";
import { cn } from "@/lib/utils";

export const NavItem = ({ name, icon: Icon, path, className }: NavItemProps) => {
    const pathname = usePathname();
    const isActive = path === ROUTES.HOME ? pathname === path : pathname.startsWith(path);

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    aria-label={name}
                    className={cn(
                        "rounded-md p-2.5 text-foreground/80 transition-colors hover:bg-muted hover:text-primary md:px-3 md:py-1",
                        isActive ? "bg-muted text-primary" : "md:text-foreground/60",
                        className
                    )}
                    href={path}
                >
                    <span className="hidden md:inline">{name}</span>
                    <Icon aria-hidden className="size-4 md:hidden" />
                </Link>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">{name}</TooltipContent>
        </Tooltip>
    );
};

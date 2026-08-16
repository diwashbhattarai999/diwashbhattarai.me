"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ROUTES } from "@/configs/routes";
import type { NavItemProps } from "@/features/navbar/types/navbar.types";
import { cn } from "@/lib/utils";

export const NavItem = ({ name, icon: Icon, path, className }: NavItemProps) => {
    const pathname = usePathname();
    const isActive = path === ROUTES.HOME ? pathname === path : pathname.startsWith(path);

    return (
        <>
            <Link
                className={cn(
                    "hidden rounded-md px-3 py-1 transition-colors hover:bg-muted hover:text-primary md:inline",
                    isActive ? "bg-muted text-primary" : "text-foreground/60",
                    className
                )}
                href={path}
                key={path}
            >
                {name}
            </Link>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild className="md:hidden">
                        <Link
                            className="relative rounded-md p-2.5 text-foreground/80 transition-colors hover:bg-muted hover:text-secondary-foreground"
                            href={path}
                            key={path}
                        >
                            <Icon className="size-4" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
};

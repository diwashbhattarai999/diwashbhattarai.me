import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface NavItemProps {
    className?: string;
    icon: LucideIcon;
    name: string;
    path: string;
}

export const NavItem = ({ name, icon: Icon, path, className }: NavItemProps) => {
    const pathname = usePathname();
    const isActive = path === "/" ? pathname === path : pathname.startsWith(path);

    return (
        <>
            <Link
                className={cn(
                    "hidden rounded-md px-4 py-1 transition-colors hover:bg-muted hover:text-primary md:inline",
                    isActive ? "bg-muted text-primary" : "text-foreground/60",
                    className
                )}
                href={path}
                key={path}
            >
                {name}
            </Link>

            {/* Mobile */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild className="md:hidden">
                        <Link
                            className="relative cursor-default rounded-md p-2.5 text-foreground/80 transition-colors hover:bg-muted hover:text-secondary-foreground"
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

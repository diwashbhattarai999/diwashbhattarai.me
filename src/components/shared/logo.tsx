import Link from "next/link";

import { ROUTES } from "@/configs/routes";
import { cn } from "@/lib/utils";

export const Logo = ({ className, textClassName }: { className?: string; textClassName?: string }) => (
    <Link
        aria-label="Diwash Bhattarai homepage"
        className={cn("flex items-center space-x-2", className)}
        href={ROUTES.HOME}
    >
        <span className={cn("font-bold text-3xl", textClassName)}>DB.</span>
    </Link>
);

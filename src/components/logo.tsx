import Link from "next/link";

import { cn } from "@/lib/utils";

export const Logo = ({ className, textClassName }: { className?: string; textClassName?: string }) => (
    <Link className={cn("flex items-center space-x-2", className)} href="/">
        <span className={cn("font-bold text-3xl", textClassName)}>DB.</span>
    </Link>
);

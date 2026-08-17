import Link from "next/link";
import type { ReactNode } from "react";

import { ROUTES } from "@/configs/routes";
import { cn } from "@/lib/utils";

interface HomepageLinkProps {
    children?: ReactNode;
    className?: string;
}

/**
 * In-content link to the portfolio homepage.
 *
 * @param children - Anchor text. Defaults to the site owner's homepage label.
 * @param className - Optional class names merged onto the link.
 */
export const HomepageLink = ({ children = "Diwash Bhattarai's homepage", className }: HomepageLinkProps) => (
    <Link className={cn("text-primary underline-offset-4 hover:underline", className)} href={ROUTES.HOME}>
        {children}
    </Link>
);

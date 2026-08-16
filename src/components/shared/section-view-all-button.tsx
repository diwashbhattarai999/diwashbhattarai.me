import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface SectionViewAllButtonProps {
    href: string;
    label: string;
}

/**
 * Shared outline CTA used for section “view all” actions.
 *
 * @param href - Destination route.
 * @param label - Button label text.
 */
export const SectionViewAllButton = ({ href, label }: SectionViewAllButtonProps) => (
    <Button asChild className="group shrink-0 px-0 text-sm" size="sm" variant="link">
        <Link href={href}>
            {label}
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </Button>
);

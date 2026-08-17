import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import type { WritingLink } from "@/features/blogs/constants/writing-links.constants";

const RELATED_PORTFOLIO_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

interface RelatedPortfolioLinksProps {
    links: readonly WritingLink[];
}

/**
 * Contextual portfolio pages related to a blog post.
 *
 * @param links - Internal pages with descriptive labels.
 */
export const RelatedPortfolioLinks = ({ links }: RelatedPortfolioLinksProps) => {
    if (links.length === 0) {
        return null;
    }

    return (
        <BlurFade delay={0.22}>
            <section className="mt-10">
                <h2 className="mb-3 font-semibold text-xl">Related pages</h2>
                <ul className="space-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link className={RELATED_PORTFOLIO_LINK_CLASS} href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </BlurFade>
    );
};

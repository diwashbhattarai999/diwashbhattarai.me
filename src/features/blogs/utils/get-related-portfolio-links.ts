import { ROUTES } from "@/configs/routes";
import type { WritingLink } from "@/features/blogs/constants/writing-links.constants";

const RELATED_PORTFOLIO_LINK_LIMIT = 4;

const includesAny = (haystack: string, needles: readonly string[]): boolean =>
    needles.some((needle) => haystack.includes(needle));

/**
 * Picks a small set of existing portfolio pages that match a blog post's topics.
 *
 * @param slug - Current post slug.
 * @param tags - Front-matter tags.
 * @param category - Front-matter category.
 * @returns Unique internal links with descriptive labels.
 */
export const getRelatedPortfolioLinks = (
    slug: string,
    tags: readonly string[] = [],
    category = ""
): WritingLink[] => {
    const haystack = `${slug} ${category} ${tags.join(" ")}`.toLowerCase();
    const links: WritingLink[] = [];

    const addLink = (href: string, label: string) => {
        if (links.some((link) => link.href === href)) {
            return;
        }

        links.push({ href, label });
    };

    if (includesAny(haystack, ["khalti"])) {
        addLink(ROUTES.PROJECT("good-buy"), "Good-Buy e-commerce with Khalti checkout");
        addLink(ROUTES.PROJECT("upchaar-patient-portal"), "UpchaarNepal patient portal");
    }

    if (includesAny(haystack, ["esewa"])) {
        addLink(ROUTES.PROJECT("upchaar-patient-portal"), "UpchaarNepal healthcare projects");
        addLink(
            ROUTES.EXPERIENCE_DETAIL("full-stack-software-developer-upachaar-nepal"),
            "Upachaar Nepal role"
        );
    }

    if (includesAny(haystack, ["rbac", "permission", "multi-tenant", "saas"])) {
        addLink(ROUTES.PROJECT("gymgrow"), "GymGrow multi-tenant gym platform");
        addLink(
            ROUTES.EXPERIENCE_DETAIL("full-stack-software-developer-plexbit"),
            "Full-stack work at Plex Bit Infosystems"
        );
    }

    if (includesAny(haystack, ["tanstack"])) {
        addLink(ROUTES.PROJECTS_STARTERS, "TanStack Start starter template");
        addLink(ROUTES.SKILLS, "React and TanStack skills");
    }

    if (includesAny(haystack, ["next.js", "nextjs", "react"])) {
        addLink(ROUTES.PROJECTS, "Explore my Next.js projects");
        addLink(ROUTES.SKILLS, "View my React, Next.js, and Node.js skills");
    }

    if (includesAny(haystack, ["node.js", "nodejs", "nestjs", "postgresql", "backend"])) {
        addLink(ROUTES.EXPERIENCE, "View my full-stack development experience");
        addLink(ROUTES.SKILLS, "View my Node.js and NestJS stack");
    }

    if (includesAny(haystack, ["career", "nepal", "full stack", "roadmap"])) {
        addLink(ROUTES.ABOUT, "About Diwash Bhattarai");
        addLink(ROUTES.EDUCATION, "CSIT education in Nepal");
        addLink(ROUTES.EXPERIENCE, "Full-stack development experience");
    }

    if (includesAny(haystack, ["css", "styling"])) {
        addLink(ROUTES.SKILLS, "Frontend skills including CSS and React");
        addLink(ROUTES.PROJECTS, "Explore my frontend projects");
    }

    if (includesAny(haystack, ["docker", "devops", "hosting"])) {
        addLink(ROUTES.PROJECTS_STARTERS, "Starter templates with Docker");
        addLink(ROUTES.SKILLS, "View my technical stack");
    }

    return links.slice(0, RELATED_PORTFOLIO_LINK_LIMIT);
};

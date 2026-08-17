"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SOCIALS_LINKS } from "@/features/footer/constants/social-links.constants";
import { cn } from "@/lib/utils";

interface SocialIconsProps {
    className?: string;
    iconClassName?: string;
    titles?: readonly string[];
}

/**
 * Renders public profile and contact icon links.
 *
 * @param titles - Optional allowlist of link titles such as GitHub or LinkedIn.
 */
export const SocialIcons = ({ className, iconClassName, titles }: SocialIconsProps) => {
    const links = titles ? SOCIALS_LINKS.filter((item) => titles.includes(item.title)) : SOCIALS_LINKS;

    return (
        <div className={cn("flex animate-blur-fade gap-2", className)} style={{ animationDelay: "0.14s" }}>
            <TooltipProvider>
                {links.map(({ Icon, link, title }) => (
                    <Tooltip key={title}>
                        <TooltipTrigger asChild>
                            <a
                                aria-label={title}
                                className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
                                href={link}
                                rel="noopener noreferrer"
                                target={link.startsWith("mailto") ? "_self" : "_blank"}
                            >
                                <Icon className={cn("size-5", iconClassName)} />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent sideOffset={4}>{title}</TooltipContent>
                    </Tooltip>
                ))}
            </TooltipProvider>
        </div>
    );
};

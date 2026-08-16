import BlurFade from "@/components/animations/blur-fade";
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
        <BlurFade className={cn("flex gap-2", className)} delay={0.1}>
            {links.map(({ Icon, link, title }) => (
                <a
                    className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
                    href={link}
                    key={title}
                    rel="noopener noreferrer"
                    target={link.startsWith("mailto") ? "_self" : "_blank"}
                >
                    <Icon className={cn("size-5", iconClassName)} />
                    <span className="sr-only">{title}</span>
                </a>
            ))}
        </BlurFade>
    );
};

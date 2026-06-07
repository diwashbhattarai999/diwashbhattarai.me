import { SOCIALS_LINKS } from "@/data/social-links";
import { cn } from "@/lib/utils";

import BlurFade from "./animations/blur-fade";

export const SocialIcons = ({ className, iconClassName }: { className?: string; iconClassName?: string }) => (
    <BlurFade className={cn("flex gap-2", className)} delay={0.1}>
        {SOCIALS_LINKS.map(({ Icon, link, title }, index) => (
            <a
                className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-muted hover:text-primary"
                href={link}
                // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                key={index}
                rel="noopener noreferrer"
                target={link.startsWith("mailto") ? "_self" : "_blank"}
            >
                <Icon className={cn("size-5", iconClassName)} />
                <span className="sr-only">{title}</span>
            </a>
        ))}
    </BlurFade>
);

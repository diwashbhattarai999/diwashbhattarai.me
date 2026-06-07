import { SOCIALS_LINKS } from "@/data/social-links";

export const Footer = () => (
    <footer className="border-border/40 border-t py-8">
        <div className="flex w-full flex-col items-center justify-center gap-1 px-4 md:flex-row md:justify-between md:gap-4">
            <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Diwash Bhattarai. All rights reserved.
            </p>

            <div className="flex gap-2">
                {SOCIALS_LINKS.map(({ Icon, link, title }, index) => (
                    <a
                        className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-muted hover:text-primary"
                        href={link}
                        // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                        key={index}
                        rel="noopener noreferrer"
                        target={link.startsWith("mailto") ? "_self" : "_blank"}
                    >
                        <Icon className="size-4" />
                        <span className="sr-only">{title}</span>
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

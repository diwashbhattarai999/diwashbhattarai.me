import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { SocialIcons } from "@/components/shared/social-icons";
import { FOOTER_LEGAL_LINKS } from "@/features/footer/constants/footer-links.constants";

export const SiteFooter = () => (
    <footer className="border-border/40 border-t py-8">
        <BlurFade delay={0.06}>
            <div className="flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Diwash Bhattarai. All rights reserved.
                </p>

                <nav aria-label="Legal">
                    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        {FOOTER_LEGAL_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    className="text-muted-foreground text-sm transition-colors hover:text-primary"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <SocialIcons iconClassName="size-4" />
            </div>
        </BlurFade>
    </footer>
);

import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { Logo } from "@/components/shared/logo";
import { SocialIcons } from "@/components/shared/social-icons";
import { siteConfig } from "@/configs/site";
import { ABOUT_ME } from "@/features/about/constants/about.constants";
import { FOOTER_LEGAL_LINKS, FOOTER_NAV_LINKS } from "@/features/footer/constants/footer-links.constants";
import { cn } from "@/lib/utils";

const FOOTER_LINK_CLASS =
    "text-muted-foreground text-sm transition-colors hover:text-primary focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring";

const FOOTER_LABEL_CLASS = "mb-4 font-medium text-foreground/80 text-xs uppercase tracking-[0.18em]";

/**
 * Site footer with brand, exploration links, and contact paths.
 */
export const SiteFooter = () => (
    <footer className="px-4 pt-12 pb-6 md:px-8 md:pt-16 md:pb-8">
        <BlurFade delay={0.06}>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12">
                <div className="max-w-xs sm:col-span-2 lg:col-span-1">
                    <Logo textClassName="text-2xl md:text-3xl" />
                    <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                        {ABOUT_ME.headline} based in {siteConfig.location}. Building production web apps with
                        React, Next.js, and Node.js.
                    </p>
                </div>

                <nav aria-label="Site">
                    <p className={FOOTER_LABEL_CLASS}>Explore</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                        {FOOTER_NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link className={FOOTER_LINK_CLASS} href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <p className={FOOTER_LABEL_CLASS}>Connect</p>
                    <SocialIcons className="-ml-2" />
                    <a className={cn(FOOTER_LINK_CLASS, "mt-4 inline-block")} href={siteConfig.social.email}>
                        {siteConfig.contactEmail}
                    </a>
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-input border-t border-dashed pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-muted-foreground/80 text-xs">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>

                <nav aria-label="Legal">
                    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        {FOOTER_LEGAL_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link className={cn(FOOTER_LINK_CLASS, "text-xs")} href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </BlurFade>
    </footer>
);

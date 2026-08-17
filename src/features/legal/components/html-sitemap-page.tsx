import { ArrowRight, FolderKanban } from "lucide-react";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/configs/routes";
import { SITEMAP_GROUP_ICONS } from "@/features/legal/constants/sitemap-icons.constants";
import { getHtmlSitemapGroups } from "@/features/legal/utils/get-html-sitemap-groups";

/**
 * Human-readable sitemap listing every public page on the site.
 */
export const HtmlSitemapPage = () => {
    const groups = getHtmlSitemapGroups();

    return (
        <SectionWrapper id="sitemap">
            <PageBreadcrumb
                className="mb-8"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { label: "Sitemap", path: ROUTES.SITEMAP },
                ]}
            />

            <BlurFade delay={0.04}>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h1 className="font-bold text-3xl">Sitemap</h1>
                        <p className="mt-2 max-w-2xl text-muted-foreground">
                            A full list of pages on this site, grouped by section. Start from{" "}
                            <Link
                                className="text-primary underline-offset-4 hover:underline"
                                href={ROUTES.HOME}
                            >
                                Diwash Bhattarai&apos;s homepage
                            </Link>{" "}
                            for the main overview.
                        </p>
                    </div>
                    <Badge variant="secondary">
                        {groups.reduce((total, group) => total + group.links.length, 0)} pages
                    </Badge>
                </div>
            </BlurFade>

            <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
                {groups.map((group, index) => {
                    const Icon = SITEMAP_GROUP_ICONS[group.title] ?? FolderKanban;

                    return (
                        <BlurFade
                            className="mb-4 break-inside-avoid"
                            delay={0.06 + index * 0.04}
                            key={group.title}
                        >
                            <Card className="gap-3 bg-card/50 py-4 backdrop-blur-md">
                                <CardHeader className="px-4">
                                    <CardTitle className="flex items-center justify-between gap-3 text-base">
                                        <span className="flex items-center gap-2">
                                            <span className="rounded-full bg-primary/10 p-1.5">
                                                <Icon className="size-3.5 text-primary" />
                                            </span>
                                            {group.title}
                                        </span>
                                        <Badge variant="secondary">{group.links.length}</Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-2 pb-1">
                                    <ul>
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    className="group flex items-center justify-between gap-3 rounded-md px-3 py-2 text-muted-foreground text-sm transition-colors hover:bg-muted hover:text-primary"
                                                    href={link.href}
                                                >
                                                    <span className="min-w-0 leading-snug">{link.label}</span>
                                                    <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </BlurFade>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

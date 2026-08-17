import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ROUTES } from "@/configs/routes";
import { FOOTER_LEGAL_LINKS } from "@/features/footer/constants/footer-links.constants";
import type { LegalDocument } from "@/features/legal/types/legal.types";
import { toSectionId } from "@/features/legal/utils/to-section-id";

interface LegalDocumentPageProps {
    document: LegalDocument;
    path: string;
}

/**
 * Renders a legal document with breadcrumb, table of contents, and numbered sections.
 *
 * @param document - Title, description, and policy sections.
 * @param path - Canonical path used in the breadcrumb.
 */
export const LegalDocumentPage = ({ document, path }: LegalDocumentPageProps) => {
    const relatedLinks = FOOTER_LEGAL_LINKS.filter((link) => link.href !== path);

    return (
        <SectionWrapper id="legal">
            <PageBreadcrumb
                className="mb-8"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { label: document.title, path },
                ]}
            />

            <BlurFade delay={0.06}>
                <div className="mb-8 max-w-3xl">
                    <Badge className="mb-4" variant="secondary">
                        Last updated {document.lastUpdated}
                    </Badge>
                    <h1 className="mb-3 font-bold text-3xl md:text-4xl">{document.title}</h1>
                    <p className="text-muted-foreground leading-relaxed">{document.description}</p>
                </div>
            </BlurFade>

            <BlurFade delay={0.08}>
                <nav
                    aria-label="On this page"
                    className="mb-10 rounded-xl border border-input/50 bg-card/50 p-4 backdrop-blur-md md:p-5"
                >
                    <p className="mb-3 font-medium text-sm">On this page</p>
                    <ol className="flex flex-wrap gap-2">
                        {document.sections.map((section, index) => (
                            <li key={section.title}>
                                <a
                                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary text-xs transition-colors hover:bg-primary/20"
                                    href={`#${toSectionId(section.title)}`}
                                >
                                    {index + 1}. {section.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
            </BlurFade>

            <div className="space-y-4">
                {document.sections.map((section, index) => (
                    <BlurFade delay={0.08 + index * 0.03} key={section.title}>
                        <Card
                            className="scroll-mt-24 gap-0 bg-card/50 py-0 backdrop-blur-md"
                            id={toSectionId(section.title)}
                        >
                            <CardContent className="p-5 md:p-6">
                                <h2 className="mb-3 flex items-start gap-3 font-semibold text-lg">
                                    <span className="font-medium text-primary tabular-nums">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {section.title}
                                </h2>
                                <div className="space-y-3 pl-9 text-muted-foreground leading-relaxed">
                                    {section.content.map((paragraph) => (
                                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </BlurFade>
                ))}
            </div>

            {relatedLinks.length > 0 ? (
                <nav aria-label="Related legal pages" className="mt-12 max-w-3xl">
                    <p className="mb-3 font-medium text-sm">Related</p>
                    <ul className="flex flex-wrap gap-2">
                        {relatedLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    className="inline-flex rounded-full border border-input/50 bg-card/50 px-3 py-1.5 text-muted-foreground text-sm transition-colors hover:border-primary/40 hover:text-primary"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            ) : null}
        </SectionWrapper>
    );
};

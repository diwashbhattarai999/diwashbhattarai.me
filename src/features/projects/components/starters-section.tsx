import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { SectionSubTitle, SectionTitle, SectionWrapper } from "@/components/shared/section-items";
import { STARTER_REPOS } from "@/features/projects/constants/starter-repos.constants";

import { ExternalLinkButton } from "./external-link-button";
import { ProjectTags } from "./project-tags";

const STARTER_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

/**
 * Open-source starters and templates linked from the projects page.
 */
export const StartersSection = () => (
    <SectionWrapper id="starters">
        <div className="mb-8 flex flex-col gap-2">
            <SectionTitle as="h2">Starters and templates</SectionTitle>
            <SectionSubTitle>
                GitHub templates I maintain for Next.js, TanStack Start, and Node.js / Express.
            </SectionSubTitle>
        </div>

        <ul className="grid gap-8">
            {STARTER_REPOS.map((starter, index) => (
                <BlurFade delay={0.08 + index * 0.06} key={starter.id}>
                    <li className="border-border/40 border-b pb-8">
                        <h3 className="font-bold text-xl">{starter.title}</h3>
                        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
                            {starter.description}
                        </p>
                        <ProjectTags className="mt-4" limit={8} tags={starter.skills} />
                        <div className="mt-5 flex flex-wrap gap-3">
                            <ExternalLinkButton
                                href={starter.githubUrl}
                                icon={Github}
                                label="View on GitHub"
                            />
                            {starter.liveUrl ? (
                                <ExternalLinkButton
                                    href={starter.liveUrl}
                                    icon={ExternalLink}
                                    label="Live demo"
                                />
                            ) : null}
                        </div>
                        {starter.relatedWriting && starter.relatedWriting.length > 0 ? (
                            <p className="mt-4 text-muted-foreground text-sm">
                                Related writing:{" "}
                                {starter.relatedWriting.map((article, articleIndex) => (
                                    <span key={article.href}>
                                        {articleIndex > 0 ? ", " : ""}
                                        <Link className={STARTER_LINK_CLASS} href={article.href}>
                                            {article.label}
                                        </Link>
                                    </span>
                                ))}
                            </p>
                        ) : null}
                    </li>
                </BlurFade>
            ))}
        </ul>
    </SectionWrapper>
);

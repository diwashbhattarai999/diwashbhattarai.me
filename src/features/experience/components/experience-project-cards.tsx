import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { Card, CardContent } from "@/components/ui/card";
import { ROUTES } from "@/configs/routes";
import type { ExperienceProject } from "@/features/experience/types/experience.types";
import { getProjectById } from "@/features/projects/constants/project.constants";

interface ExperienceProjectCardsProps {
    projects: ExperienceProject[];
}

/**
 * Rich project previews for an experience detail page.
 *
 * @param projects - Projects linked to the role.
 */
export const ExperienceProjectCards = ({ projects }: ExperienceProjectCardsProps) => {
    if (projects.length === 0) {
        return null;
    }

    return (
        <section className="mt-10 flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl">Projects</h2>

                <SectionViewAllButton href={ROUTES.PROJECTS} label="Explore my Next.js projects" />
            </div>
            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <ExperienceProjectCard index={index} key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
};

interface ExperienceProjectCardProps {
    index: number;
    project: ExperienceProject;
}

/**
 * Single project preview with image and short description when available.
 *
 * @param project - Experience project reference.
 * @param index - Card index for staggered animation.
 */
const ExperienceProjectCard = ({ project, index }: ExperienceProjectCardProps) => {
    const portfolioProject = project.projectId ? getProjectById(project.projectId) : undefined;
    const description = portfolioProject?.description ?? project.description;
    const image = portfolioProject?.image ?? project.image;
    const tags = portfolioProject?.tags.slice(0, 4) ?? project.tags?.slice(0, 4) ?? [];
    const title = portfolioProject?.title ?? project.name;

    const content = (
        <Card className="overflow-hidden bg-card/50 py-0 transition-colors hover:border-primary/30 hover:bg-card/80">
            <div className="flex flex-col md:flex-row">
                {image ? (
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden border-border/40 border-b md:aspect-auto md:h-auto md:w-56 md:border-r md:border-b-0 lg:w-72">
                        <Image
                            alt={title}
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] md:absolute md:inset-0 md:size-full"
                            fill
                            sizes="(max-width: 768px) 100vw, 288px"
                            src={image}
                        />
                    </div>
                ) : null}
                <CardContent className="flex flex-1 flex-col justify-center py-5">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-xl transition-colors group-hover:text-primary">
                            {title}
                        </h3>
                        {project.link && !project.projectId ? (
                            <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground" />
                        ) : null}
                    </div>
                    {description ? (
                        <p className="mt-2 line-clamp-2 text-base text-muted-foreground leading-relaxed md:line-clamp-3">
                            {description}
                        </p>
                    ) : null}
                    {tags.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    className="rounded-sm bg-primary/10 px-2.5 py-1 text-primary text-xs"
                                    key={tag}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    {project.projectId || project.link ? (
                        <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm">
                            {project.projectId ? "View case study" : "Visit project"}
                            <ArrowRight className="size-4" />
                        </span>
                    ) : null}
                </CardContent>
            </div>
        </Card>
    );

    if (project.projectId) {
        return (
            <BlurFade delay={0.08 + index * 0.04}>
                <Link
                    aria-label={`${project.name} case study`}
                    className="group block rounded-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                    href={ROUTES.PROJECT(project.projectId)}
                >
                    {content}
                </Link>
            </BlurFade>
        );
    }

    if (project.link) {
        return (
            <BlurFade delay={0.08 + index * 0.04}>
                <a
                    aria-label={`Visit ${project.name}`}
                    className="group block rounded-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {content}
                </a>
            </BlurFade>
        );
    }

    return (
        <BlurFade delay={0.08 + index * 0.04}>
            <div>{content}</div>
        </BlurFade>
    );
};

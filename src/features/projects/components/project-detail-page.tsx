import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import { cn } from "@/lib/utils";

interface ProjectDetailPageProps {
    projectId: string;
}

/**
 * Project detail view for a single portfolio case study.
 *
 * @param projectId - Route parameter identifying the project.
 */
export const ProjectDetailPage = ({ projectId }: ProjectDetailPageProps) => {
    const project = PROJECTS.find(({ id }) => id === projectId);

    if (!project) {
        notFound();
    }

    return (
        <div className="px-6 py-8">
            <PageBreadcrumb
                className="mb-8"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { href: ROUTES.PROJECTS, label: "Projects", path: ROUTES.PROJECTS },
                    { label: project.title, path: ROUTES.PROJECT(project.id) },
                ]}
            />

            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <BlurFade delay={0.04}>
                    <h1 className="font-bold text-4xl md:text-5xl">{project.title}</h1>
                </BlurFade>
                <BlurFade delay={0.08}>
                    <div className="flex flex-wrap gap-3">
                        {(
                            project.liveUrls ??
                            (project.liveUrl ? [{ label: "Live URL", url: project.liveUrl }] : [])
                        ).map((link) => (
                            <a
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "h-auto rounded-full py-1.5"
                                )}
                                href={link.url}
                                key={link.url}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <ExternalLink size={14} />
                                <span>{link.label}</span>
                            </a>
                        ))}
                        {project.githubUrl && (
                            <a
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "h-auto rounded-full py-1.5"
                                )}
                                href={project.githubUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Github size={14} />
                                <span>GitHub</span>
                            </a>
                        )}
                    </div>
                </BlurFade>
            </div>

            <BlurFade delay={0.1}>
                <div
                    className="relative mb-12 w-full overflow-hidden rounded-xl border"
                    style={{ aspectRatio: `${project.image.width} / ${project.image.height}` }}
                >
                    <Image
                        alt={project.title}
                        className="object-cover object-top"
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        src={project.image}
                    />
                </div>
            </BlurFade>

            <BlurFade delay={0.12}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Overview</h2>
                    <p className="mb-4 text-muted-foreground">{project.overview}</p>
                    <p className="text-muted-foreground">{project.poweredBy}</p>
                </section>
            </BlurFade>

            <BlurFade delay={0.14}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Technologies</h2>
                    <ul className="space-y-2">
                        {project.technologies.map((tech, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                            <li className="flex items-center gap-2" key={index}>
                                <span className="text-teal-400">•</span>
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </BlurFade>

            <BlurFade delay={0.16}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Features</h2>
                    <ul className="space-y-4">
                        {project.features.map((feature, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                            <li className="text-muted-foreground" key={index}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            </BlurFade>

            <BlurFade delay={0.18}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Development and Challenges</h2>
                    <p className="mb-8 text-muted-foreground">{project.developmentChallenges}</p>

                    <div className="space-y-8">
                        {project.screenshots?.map((screenshot, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                            <div className="space-y-2" key={index}>
                                <div
                                    className="relative w-full overflow-hidden rounded-xl border"
                                    style={{
                                        aspectRatio:
                                            typeof screenshot.src === "string"
                                                ? "16 / 9"
                                                : `${screenshot.src.width} / ${screenshot.src.height}`,
                                    }}
                                >
                                    <Image
                                        alt={screenshot.alt}
                                        className="object-cover object-top"
                                        fill
                                        sizes="(min-width: 1024px) 1024px, 100vw"
                                        src={screenshot.src}
                                    />
                                </div>
                                <p className="text-center text-sm text-zinc-400">{screenshot.caption}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </BlurFade>

            <BlurFade delay={0.22}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Conclusion</h2>
                    <p className="text-muted-foreground">{project.conclusion}</p>
                </section>
            </BlurFade>
        </div>
    );
};

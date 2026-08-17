import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { WRITING_LINKS } from "@/features/blogs/constants/writing-links.constants";
import { getExperienceByProjectId } from "@/features/experience/constants/experience.constants";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import { cn } from "@/lib/utils";

const PROJECT_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

interface ProjectDetailPageProps {
    projectId: string;
}

const formatList = (values: readonly string[]): string => {
    const [first] = values;

    if (!first) {
        return "";
    }

    if (values.length === 1) {
        return first;
    }

    return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
};

const getRelatedWriting = (tags: readonly string[]) => {
    const links: Array<{ href: string; label: string }> = [];

    if (tags.some((tag) => tag.includes("Next.js"))) {
        links.push(WRITING_LINKS.nextSeo, WRITING_LINKS.permissionDashboards);
    }

    if (tags.some((tag) => tag.includes("Stripe") || tag.includes("RBAC"))) {
        links.push(WRITING_LINKS.multiTenantPostgres);
    }

    if (tags.some((tag) => tag.includes("Khalti") || tag.includes("NestJS"))) {
        links.push(WRITING_LINKS.khaltiNext, WRITING_LINKS.scaleApis);
    }

    return [...new Map(links.map((link) => [link.href, link])).values()].slice(0, 3);
};

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

    const experience = getExperienceByProjectId(project.id);
    const relatedWriting = getRelatedWriting(project.tags);

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
                    <h2 className="mb-4 font-bold text-2xl">Problem it solves</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </section>
            </BlurFade>

            <BlurFade delay={0.14}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Overview</h2>
                    <p className="mb-4 text-muted-foreground leading-relaxed">{project.overview}</p>
                    {experience ? (
                        <p className="text-muted-foreground leading-relaxed">
                            I built this as a {experience.title} at{" "}
                            <Link
                                className={PROJECT_LINK_CLASS}
                                href={ROUTES.EXPERIENCE_DETAIL(experience.slug)}
                            >
                                {experience.company}
                            </Link>{" "}
                            ({experience.duration}).
                        </p>
                    ) : null}
                </section>
            </BlurFade>

            <BlurFade delay={0.16}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Architecture and technical approach</h2>
                    {project.poweredBy ? (
                        <p className="mb-4 text-muted-foreground leading-relaxed">{project.poweredBy}</p>
                    ) : null}
                    <p className="text-muted-foreground leading-relaxed">
                        Implementation used {formatList(project.technologies)}. The same names appear on the{" "}
                        <Link className={PROJECT_LINK_CLASS} href={ROUTES.SKILLS}>
                            skills
                        </Link>{" "}
                        page.
                    </p>
                </section>
            </BlurFade>

            <BlurFade delay={0.18}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Key features</h2>
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

            <BlurFade delay={0.2}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Technologies used</h2>
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

            {project.developmentChallenges ? (
                <BlurFade delay={0.22}>
                    <section className="mb-12">
                        <h2 className="mb-4 font-bold text-2xl">Challenges and solutions</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.developmentChallenges}
                        </p>
                    </section>
                </BlurFade>
            ) : null}

            {project.screenshots && project.screenshots.length > 0 ? (
                <BlurFade delay={0.23}>
                    <section className="mb-12">
                        <h2 className="mb-4 font-bold text-2xl">Screenshots</h2>
                        <div className="space-y-8">
                            {project.screenshots.map((screenshot, index) => (
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
            ) : null}

            <BlurFade delay={0.24}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Contribution and what I learned</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.conclusion}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        More product work is on{" "}
                        <Link className={PROJECT_LINK_CLASS} href={ROUTES.PROJECTS}>
                            projects
                        </Link>
                        {experience ? (
                            <>
                                {" "}
                                and the{" "}
                                <Link
                                    className={PROJECT_LINK_CLASS}
                                    href={ROUTES.EXPERIENCE_DETAIL(experience.slug)}
                                >
                                    {experience.company} role
                                </Link>
                            </>
                        ) : null}
                        .
                    </p>
                </section>
            </BlurFade>

            {relatedWriting.length > 0 ? (
                <BlurFade delay={0.26}>
                    <section className="mb-12">
                        <h2 className="mb-4 font-bold text-2xl">Related writing</h2>
                        <ul className="space-y-2">
                            {relatedWriting.map((article) => (
                                <li key={article.href}>
                                    <Link className={PROJECT_LINK_CLASS} href={article.href}>
                                        {article.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </BlurFade>
            ) : null}
        </div>
    );
};

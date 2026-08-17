import { Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlurFade from "@/components/animations/blur-fade";
import { BlinkingCircle } from "@/components/shared/blinking-circle";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/configs/routes";
import { WRITING_LINKS } from "@/features/blogs/constants/writing-links.constants";
import { ExperienceProjectCards } from "@/features/experience/components/experience-project-cards";
import { getExperienceBySlug } from "@/features/experience/constants/experience.constants";
import { cn } from "@/lib/utils";

const EXPERIENCE_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

interface ExperienceDetailPageProps {
    slug: string;
}

const getRelatedWriting = (skills: readonly string[]) => {
    const links: Array<{ href: string; label: string }> = [];

    if (skills.some((skill) => skill.includes("Next.js") || skill.includes("React"))) {
        links.push(WRITING_LINKS.permissionDashboards, WRITING_LINKS.nextSeo);
    }

    if (
        skills.some(
            (skill) => skill.includes("NestJS") || skill.includes("Node.js") || skill.includes("Kafka")
        )
    ) {
        links.push(WRITING_LINKS.scaleApis, WRITING_LINKS.backendNode);
    }

    if (skills.some((skill) => skill.includes("PostgreSQL") || skill.includes("Role-based"))) {
        links.push(WRITING_LINKS.multiTenantPostgres);
    }

    return [...new Map(links.map((link) => [link.href, link])).values()].slice(0, 3);
};

/**
 * Detailed experience case study for a single role.
 *
 * @param slug - Stable experience slug.
 */
export const ExperienceDetailPage = ({ slug }: ExperienceDetailPageProps) => {
    const experience = getExperienceBySlug(slug);

    if (!experience) {
        notFound();
    }

    const relatedWriting = getRelatedWriting(experience.skills);
    const linkedProjects = experience.projects.filter((project) => project.projectId);

    return (
        <SectionWrapper id="experience-detail">
            <PageBreadcrumb
                className="mb-12"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { href: ROUTES.EXPERIENCE, label: "Experience", path: ROUTES.EXPERIENCE },
                    { label: experience.title, path: ROUTES.EXPERIENCE_DETAIL(experience.slug) },
                ]}
            />

            <div className="flex items-center justify-between">
                <BlurFade delay={0.06}>
                    <div className="flex items-center gap-4">
                        <div className="relative shrink-0 rounded-full bg-primary/10 p-4">
                            <Briefcase className="size-8 text-primary" />
                            {experience.current ? (
                                <BlinkingCircle
                                    className="absolute right-1 bottom-1"
                                    label="Current role"
                                    size="lg"
                                />
                            ) : null}
                        </div>
                        <div>
                            <p className="text-primary">
                                {experience.company} · {experience.duration}
                                {experience.current ? " · Current" : ""}
                            </p>
                            <h1 className="mt-2 font-bold text-4xl">{experience.title}</h1>
                        </div>
                    </div>
                </BlurFade>

                {experience.website ? (
                    <BlurFade delay={0.16}>
                        <a
                            className={cn(buttonVariants({ variant: "outline" }))}
                            href={experience.website}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <ExternalLink className="size-4" />
                            Visit Website
                        </a>
                    </BlurFade>
                ) : null}
            </div>

            <Separator className="my-10" />

            <BlurFade delay={0.1}>
                <section className="mt-10">
                    <h2 className="mb-3 font-semibold text-2xl">Company and role overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{experience.description}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        This {experience.title} role at {experience.company} ran {experience.duration}
                        {experience.current ? " and is current" : ""}. It is part of the same career path
                        documented on{" "}
                        <Link className={EXPERIENCE_LINK_CLASS} href={ROUTES.ABOUT}>
                            about
                        </Link>{" "}
                        and{" "}
                        <Link className={EXPERIENCE_LINK_CLASS} href={ROUTES.EXPERIENCE}>
                            all experience
                        </Link>
                        .
                    </p>
                </section>
            </BlurFade>

            <BlurFade delay={0.12}>
                <section className="mt-10">
                    <h2 className="mb-3 font-semibold text-2xl">Responsibilities</h2>
                    <ul className="list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed">
                        {experience.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                        ))}
                    </ul>
                </section>
            </BlurFade>

            <BlurFade delay={0.14}>
                <section className="mt-10 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-2xl">Technologies used</h2>
                        <SectionViewAllButton href={ROUTES.SKILLS} label="View the full technical stack" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        Day-to-day work on this role used {experience.skills.slice(0, -1).join(", ")}
                        {experience.skills.length > 1 ? ", and " : ""}
                        {experience.skills.at(-1)}. Those tools overlap the{" "}
                        <Link className={EXPERIENCE_LINK_CLASS} href={ROUTES.SKILLS}>
                            skills
                        </Link>{" "}
                        page rather than being a separate stack.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                            <li
                                className="rounded-sm bg-primary/10 px-3 py-1 text-primary text-sm"
                                key={skill}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>
            </BlurFade>

            {experience.projects.length > 0 ? (
                <BlurFade delay={0.16}>
                    <section className="mt-10">
                        <h2 className="mb-3 font-semibold text-2xl">Systems and features</h2>
                        <p className="mb-6 text-muted-foreground leading-relaxed">
                            Product work in this role included{" "}
                            {experience.projects.map((project, index) => (
                                <span key={`${project.name}-${project.projectId ?? project.link ?? index}`}>
                                    {index > 0 ? ", " : ""}
                                    {project.projectId ? (
                                        <Link
                                            className={EXPERIENCE_LINK_CLASS}
                                            href={ROUTES.PROJECT(project.projectId)}
                                        >
                                            {project.name}
                                        </Link>
                                    ) : (
                                        project.name
                                    )}
                                </span>
                            ))}
                            . The cards below are the same records, with case-study links where a portfolio
                            write-up exists.
                        </p>
                    </section>
                </BlurFade>
            ) : null}

            <ExperienceProjectCards projects={experience.projects} />

            <BlurFade delay={0.18}>
                <section className="mt-10">
                    <h2 className="mb-3 font-semibold text-2xl">
                        Engineering contributions and skills gained
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{experience.skillsGained}</p>
                    {linkedProjects.length > 0 ? (
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            Architecture, features, and constraints for linked products are on each{" "}
                            <Link className={EXPERIENCE_LINK_CLASS} href={ROUTES.PROJECTS}>
                                project
                            </Link>{" "}
                            write-up.
                        </p>
                    ) : null}
                </section>
            </BlurFade>

            {relatedWriting.length > 0 ? (
                <BlurFade delay={0.2}>
                    <section className="mt-10">
                        <h2 className="mb-3 font-semibold text-xl">Related writing</h2>
                        <ul className="space-y-2">
                            {relatedWriting.map((article) => (
                                <li key={article.href}>
                                    <Link className={EXPERIENCE_LINK_CLASS} href={article.href}>
                                        {article.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </BlurFade>
            ) : null}

            {experience.website ? (
                <BlurFade delay={0.22}>
                    <a
                        className={cn(buttonVariants({ variant: "outline" }), "mt-10")}
                        href={experience.website}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <ExternalLink className="size-4" />
                        Visit Website
                    </a>
                </BlurFade>
            ) : null}
        </SectionWrapper>
    );
};

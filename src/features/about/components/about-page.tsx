import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { HomepageLink } from "@/components/shared/portfolio-home-note";
import { SectionSeperator, SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import {
    ABOUT_APPROACH,
    ABOUT_BACKGROUND,
    ABOUT_CAREER_FOCUS,
    ABOUT_EXPERTISE,
    ABOUT_INTRODUCTION,
    ABOUT_ME,
} from "@/features/about/constants/about.constants";
import { WRITING_LINKS } from "@/features/blogs/constants/writing-links.constants";
import { ContactSection } from "@/features/contact/components/contact-section";
import { EDUCATION_DETAILS } from "@/features/education/constants/education.constants";
import { EXPERIENCE_DETAILS } from "@/features/experience/constants/experience.constants";
import { STARTER_REPOS } from "@/features/projects/constants/starter-repos.constants";
import { SKILLS } from "@/features/skills/constants/skills.constants";

const ABOUT_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

/**
 * Detailed personal profile for Diwash Bhattarai.
 */
export const AboutPage = () => {
    const focusSkills = SKILLS.flatMap((category) => category.skills.map((skill) => skill.name)).slice(0, 16);
    const currentRole = EXPERIENCE_DETAILS.find((experience) => experience.current);
    const featuredProjects = currentRole?.projects.filter((project) => project.projectId) ?? [];

    return (
        <>
            <SectionWrapper id="about">
                <PageBreadcrumb
                    className="mb-8"
                    items={[
                        { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                        { label: "About", path: ROUTES.ABOUT },
                    ]}
                />

                <BlurFade delay={0.04}>
                    <p className="text-primary">{ABOUT_ME.headline}</p>
                    <h1 className="mt-2 font-bold text-4xl">{ABOUT_ME.name}</h1>
                    <p className="mt-4 text-muted-foreground">
                        {ABOUT_ME.title}. Over 3.5 years building production web applications with React,
                        Next.js, Node.js, NestJS, and TypeScript. A shorter overview is on <HomepageLink />.
                    </p>
                </BlurFade>

                <BlurFade delay={0.08}>
                    <section className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
                        <h2 className="font-semibold text-foreground text-xl">Professional introduction</h2>
                        {ABOUT_INTRODUCTION.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                    </section>
                </BlurFade>

                <BlurFade delay={0.1}>
                    <section className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
                        <h2 className="font-semibold text-foreground text-xl">Development background</h2>
                        {ABOUT_BACKGROUND.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                        <p>
                            The academic sequence is on the{" "}
                            <Link className={ABOUT_LINK_CLASS} href={ROUTES.EDUCATION}>
                                education
                            </Link>{" "}
                            page. The job history is on{" "}
                            <Link className={ABOUT_LINK_CLASS} href={ROUTES.EXPERIENCE}>
                                experience
                            </Link>
                            .
                        </p>
                    </section>
                </BlurFade>

                <BlurFade delay={0.12}>
                    <section className="mt-10 space-y-6">
                        <h2 className="font-semibold text-xl">Areas of expertise</h2>
                        <div className="space-y-5">
                            {ABOUT_EXPERTISE.map((area) => (
                                <div key={area.title}>
                                    <h3 className="font-medium text-lg">{area.title}</h3>
                                    <p className="mt-2 text-muted-foreground leading-relaxed">{area.body}</p>
                                </div>
                            ))}
                        </div>
                        {featuredProjects.length > 0 ? (
                            <p className="text-muted-foreground leading-relaxed">
                                Current product work at {currentRole?.company} includes{" "}
                                {featuredProjects.map((project, index) => (
                                    <span key={project.projectId}>
                                        {index > 0 ? ", " : ""}
                                        <Link
                                            className={ABOUT_LINK_CLASS}
                                            href={ROUTES.PROJECT(project.projectId ?? "")}
                                        >
                                            {project.name}
                                        </Link>
                                    </span>
                                ))}
                                .
                            </p>
                        ) : null}
                    </section>
                </BlurFade>

                <BlurFade delay={0.14}>
                    <section className="mt-10">
                        <h2 className="mb-3 font-semibold text-xl">Technologies I work with</h2>
                        <p className="mb-4 max-w-3xl text-muted-foreground leading-relaxed">
                            The names below are from the{" "}
                            <Link className={ABOUT_LINK_CLASS} href={ROUTES.SKILLS}>
                                technical stack
                            </Link>
                            . Frontend work is React and Next.js. Backend work is Node.js and NestJS.
                            TypeScript is the default language across both.
                        </p>
                        <div className="flex flex-wrap gap-x-2.5 gap-y-3">
                            {focusSkills.map((skill) => (
                                <span
                                    className="rounded-sm bg-primary/10 px-3 py-1 text-primary text-sm"
                                    key={skill}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4">
                            <SectionViewAllButton
                                href={ROUTES.SKILLS}
                                label="View the full technical stack"
                            />
                        </div>
                    </section>
                </BlurFade>

                <BlurFade delay={0.16}>
                    <section className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
                        <h2 className="font-semibold text-foreground text-xl">
                            Engineering approach and interests
                        </h2>
                        <p>{ABOUT_APPROACH}</p>
                    </section>
                </BlurFade>

                <BlurFade delay={0.18}>
                    <section className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
                        <h2 className="font-semibold text-foreground text-xl">Career focus</h2>
                        <p>{ABOUT_CAREER_FOCUS}</p>
                    </section>
                </BlurFade>

                <BlurFade delay={0.19}>
                    <section className="mt-10">
                        <h2 className="mb-3 font-semibold text-xl">Starters and templates</h2>
                        <p className="mb-3 text-muted-foreground leading-relaxed">
                            I also maintain GitHub templates for the stacks I use as a Next.js developer, a
                            TanStack Start developer, and a Node.js / Express backend developer. They live on
                            the{" "}
                            <Link className={ABOUT_LINK_CLASS} href={ROUTES.PROJECTS_STARTERS}>
                                projects
                            </Link>{" "}
                            page.
                        </p>
                        <ul className="space-y-2">
                            {STARTER_REPOS.map((starter) => (
                                <li key={starter.id}>
                                    <a
                                        className={ABOUT_LINK_CLASS}
                                        href={starter.githubUrl}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {starter.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </BlurFade>

                <BlurFade delay={0.2}>
                    <section className="mt-12">
                        <h2 className="mb-3 font-semibold text-xl">Recent roles</h2>
                        <ul className="space-y-5">
                            {EXPERIENCE_DETAILS.slice(0, 3).map((experience) => (
                                <li key={experience.slug}>
                                    <Link
                                        className="font-medium text-foreground transition-colors hover:text-primary"
                                        href={ROUTES.EXPERIENCE_DETAIL(experience.slug)}
                                    >
                                        {experience.title} at {experience.company}
                                    </Link>
                                    <p className="text-muted-foreground text-sm">{experience.duration}</p>
                                    <SectionSeperator className="my-3" />
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <SectionViewAllButton
                                href={ROUTES.EXPERIENCE}
                                label="View my full-stack development experience"
                            />
                        </div>
                    </section>
                </BlurFade>

                <BlurFade delay={0.22}>
                    <section className="mt-12">
                        <h2 className="mb-3 font-semibold text-xl">Education</h2>
                        <ul className="space-y-3 text-muted-foreground">
                            {EDUCATION_DETAILS.map((education) => (
                                <li key={education.id}>
                                    <Link
                                        className="font-medium text-foreground transition-colors hover:text-primary"
                                        href={ROUTES.EDUCATION_DETAIL(education.id)}
                                    >
                                        {education.shortDegree}
                                    </Link>
                                    <span>
                                        {" "}
                                        · {education.institution} · {education.duration}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </BlurFade>

                <BlurFade delay={0.24}>
                    <section className="mt-12">
                        <h2 className="mb-3 font-semibold text-xl">Writing</h2>
                        <p className="mb-3 text-muted-foreground leading-relaxed">
                            Longer notes on becoming a developer in Nepal, React, Next.js, and Node.js live on
                            the{" "}
                            <Link className={ABOUT_LINK_CLASS} href={ROUTES.BLOGS}>
                                blog
                            </Link>
                            .
                        </p>
                        <ul className="space-y-2">
                            {[
                                WRITING_LINKS.fullStackNepal,
                                WRITING_LINKS.reactDeveloper,
                                WRITING_LINKS.nextSeo,
                                WRITING_LINKS.backendNode,
                            ].map((article) => (
                                <li key={article.href}>
                                    <Link className={ABOUT_LINK_CLASS} href={article.href}>
                                        {article.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </BlurFade>

                <BlurFade delay={0.26}>
                    <p className="mt-12 text-muted-foreground text-sm">
                        <HomepageLink>{siteConfig.name}</HomepageLink> · {ABOUT_ME.headline} ·{" "}
                        {siteConfig.location}
                    </p>
                </BlurFade>
            </SectionWrapper>
            <SectionSeperator />
            <ContactSection />
        </>
    );
};

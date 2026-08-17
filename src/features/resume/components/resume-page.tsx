import { Download } from "lucide-react";
import Link from "next/link";

import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { ABOUT_ME } from "@/features/about/constants/about.constants";
import { EDUCATION_DETAILS } from "@/features/education/constants/education.constants";
import {
    EXPERIENCE_DETAILS,
    getExperienceSummary,
} from "@/features/experience/constants/experience.constants";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import { SKILLS } from "@/features/skills/constants/skills.constants";
import { cn } from "@/lib/utils";

/**
 * Crawlable HTML resume assembled from the same content sources as the rest of the site.
 */
export const ResumePage = () => (
    <SectionWrapper id="resume">
        <PageBreadcrumb
            className="mb-8"
            items={[
                { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                { label: "Resume", path: ROUTES.RESUME },
            ]}
        />

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="text-primary">{ABOUT_ME.headline}</p>
                <h1 className="mt-2 font-bold text-4xl">{ABOUT_ME.name}</h1>
            </div>
            <a
                className={cn(buttonVariants({ variant: "outline" }))}
                href={ROUTES.RESUME_PDF}
                rel="noopener noreferrer"
            >
                <Download className="size-4" />
                Download PDF resume
            </a>
        </div>

        <section className="mb-10">
            <h2 className="mb-3 font-semibold text-xl">Professional summary</h2>
            <p className="max-w-3xl text-muted-foreground">{ABOUT_ME.description[0]}</p>
        </section>

        <section className="mb-10">
            <h2 className="mb-4 font-semibold text-xl">Experience</h2>
            <ol className="space-y-6">
                {EXPERIENCE_DETAILS.map((experience) => (
                    <li key={experience.slug}>
                        <Link
                            className="font-medium hover:text-primary"
                            href={ROUTES.EXPERIENCE_DETAIL(experience.slug)}
                        >
                            {experience.title} · {experience.company}
                        </Link>
                        <p className="text-muted-foreground text-sm">{experience.duration}</p>
                        <p className="mt-2 text-muted-foreground">
                            {getExperienceSummary(experience.description)}
                        </p>
                    </li>
                ))}
            </ol>
        </section>

        <section className="mb-10">
            <h2 className="mb-4 font-semibold text-xl">Projects</h2>
            <ul className="space-y-3">
                {PROJECTS.slice(0, 5).map((project) => (
                    <li key={project.id}>
                        <Link className="font-medium hover:text-primary" href={ROUTES.PROJECT(project.id)}>
                            {project.title}
                        </Link>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>

        <section className="mb-10">
            <h2 className="mb-4 font-semibold text-xl">Technical skills</h2>
            <div className="space-y-3">
                {SKILLS.map((category) => (
                    <p key={category.title}>
                        <span className="font-medium">{category.title}: </span>
                        <span className="text-muted-foreground">
                            {category.skills.map((skill) => skill.name).join(" · ")}
                        </span>
                    </p>
                ))}
            </div>
        </section>

        <section>
            <h2 className="mb-4 font-semibold text-xl">Education</h2>
            <ul className="space-y-3">
                {EDUCATION_DETAILS.map((education) => (
                    <li key={education.id}>
                        <p className="font-medium">{education.degree}</p>
                        <p className="text-muted-foreground text-sm">
                            {education.institution} · {education.duration}
                        </p>
                    </li>
                ))}
            </ul>
        </section>

        <p className="mt-10 text-muted-foreground text-sm">
            {siteConfig.contactEmail} · {siteConfig.social.github.replace("https://", "")} ·{" "}
            {siteConfig.location}
        </p>
    </SectionWrapper>
);

import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionSeperator, SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { ABOUT_ME } from "@/features/about/constants/about.constants";
import { ContactSection } from "@/features/contact/components/contact-section";
import { EXPERIENCE_DETAILS } from "@/features/experience/constants/experience.constants";
import { SKILLS } from "@/features/skills/constants/skills.constants";

/**
 * Detailed personal profile for Diwash Bhattarai.
 */
export const AboutPage = () => {
    const focusSkills = SKILLS.flatMap((category) => category.skills.map((skill) => skill.name)).slice(0, 12);

    return (
        <>
            <SectionWrapper id="about">
                <PageBreadcrumb
                    className="mb-8"
                    items={[
                        { label: "Home", href: ROUTES.HOME, path: ROUTES.HOME },
                        { label: "About", path: ROUTES.ABOUT },
                    ]}
                />

                <p className="text-primary">{ABOUT_ME.headline}</p>
                <h1 className="mt-2 font-bold text-4xl">{ABOUT_ME.name}</h1>
                <p className="mt-4 text-muted-foreground">
                    {ABOUT_ME.title}. I specialize in React, Next.js, Node.js, NestJS, and TypeScript, with a
                    focus on clean architecture, performance, and developer experience.
                </p>

                <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
                    {ABOUT_ME.description.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                </div>

                <div className="mt-12 grid gap-10">
                    <BlurFade delay={0.08}>
                        <h2 className="mb-3 font-semibold text-xl">Technical focus</h2>
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
                    </BlurFade>

                    <BlurFade delay={0.12}>
                        <h2 className="mb-3 font-semibold text-xl">Recent roles</h2>
                        <ul className="space-y-3">
                            {EXPERIENCE_DETAILS.slice(0, 3).map((experience) => (
                                <li key={experience.slug}>
                                    <Link
                                        className="font-medium text-foreground transition-colors hover:text-primary"
                                        href={ROUTES.EXPERIENCE_DETAIL(experience.slug)}
                                    >
                                        {experience.title} at {experience.company}
                                    </Link>
                                    <p className="text-muted-foreground text-sm">{experience.duration}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <SectionViewAllButton href={ROUTES.EXPERIENCE} label="View full experience" />
                        </div>
                    </BlurFade>
                </div>

                <p className="mt-12 text-muted-foreground text-sm">
                    {siteConfig.name} · {ABOUT_ME.headline} · {siteConfig.location}
                </p>
            </SectionWrapper>
            <SectionSeperator />
            <ContactSection />
        </>
    );
};

import Image from "next/image";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { ROUTES } from "@/configs/routes";
import { WRITING_LINKS } from "@/features/blogs/constants/writing-links.constants";
import { EXPERIENCE_DETAILS } from "@/features/experience/constants/experience.constants";
import { SKILLS, SKILLS_INTRO } from "@/features/skills/constants/skills.constants";

const SKILLS_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

const getExperienceByCompany = (company: string) =>
    EXPERIENCE_DETAILS.find((experience) => experience.company === company);

/**
 * Complete technical stack organized by category.
 */
export const SkillsPage = () => {
    const plexBit = getExperienceByCompany("Plex Bit Infosystems");
    const upachaar = getExperienceByCompany("Upachaar Nepal");
    const factDigi = getExperienceByCompany("Fact Digi");
    const ksw = getExperienceByCompany("KSW Techzone");

    return (
        <SectionWrapper id="skills">
            <PageBreadcrumb
                className="mb-8"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { label: "Skills", path: ROUTES.SKILLS },
                ]}
            />
            <BlurFade delay={0.04}>
                <h1 className="mb-4 font-bold text-3xl">Technical stack</h1>
                <div className="mb-10 space-y-4 text-muted-foreground leading-relaxed">
                    {SKILLS_INTRO.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>
            </BlurFade>

            <BlurFade delay={0.08}>
                <section className="mb-12 space-y-4 text-muted-foreground leading-relaxed">
                    <h2 className="font-semibold text-2xl text-foreground">
                        How these technologies are used
                    </h2>
                    <p>
                        At{" "}
                        <Link
                            className={SKILLS_LINK_CLASS}
                            href={plexBit ? ROUTES.EXPERIENCE_DETAIL(plexBit.slug) : ROUTES.EXPERIENCE}
                        >
                            Plex Bit Infosystems
                        </Link>
                        , React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query, React Hook
                        Form, Zod, and Stripe are how products such as{" "}
                        <Link className={SKILLS_LINK_CLASS} href={ROUTES.PROJECT("gymgrow")}>
                            GymGrow
                        </Link>
                        ,{" "}
                        <Link className={SKILLS_LINK_CLASS} href={ROUTES.PROJECT("coach-hq")}>
                            Coach HQ
                        </Link>
                        , and{" "}
                        <Link className={SKILLS_LINK_CLASS} href={ROUTES.PROJECT("striide")}>
                            Striide
                        </Link>{" "}
                        actually ship.
                    </p>
                    <p>
                        At{" "}
                        <Link
                            className={SKILLS_LINK_CLASS}
                            href={upachaar ? ROUTES.EXPERIENCE_DETAIL(upachaar.slug) : ROUTES.EXPERIENCE}
                        >
                            Upachaar Nepal
                        </Link>
                        , the same frontend layer sat on Node.js, NestJS, Express, MongoDB, PostgreSQL, Redis,
                        Kafka, Docker, and WebRTC for healthcare portals and APIs. Earlier,{" "}
                        <Link
                            className={SKILLS_LINK_CLASS}
                            href={factDigi ? ROUTES.EXPERIENCE_DETAIL(factDigi.slug) : ROUTES.EXPERIENCE}
                        >
                            Fact Digi
                        </Link>{" "}
                        used React, Next.js, GitHub Actions, Docker, and AWS EC2, and{" "}
                        <Link
                            className={SKILLS_LINK_CLASS}
                            href={ksw ? ROUTES.EXPERIENCE_DETAIL(ksw.slug) : ROUTES.EXPERIENCE}
                        >
                            KSW Techzone
                        </Link>{" "}
                        used HTML, CSS, JavaScript, React, and responsive design.
                    </p>
                </section>
            </BlurFade>

            <div className="space-y-12">
                {SKILLS.map((category, index) => (
                    <BlurFade delay={0.1 + index * 0.06} key={category.title}>
                        <section>
                            <div className="mb-3 flex items-center gap-3">
                                <category.icon className="size-5 text-primary" />
                                <h2 className="font-medium text-xl tracking-tight">{category.title}</h2>
                            </div>
                            <p className="mb-6 text-muted-foreground leading-relaxed">
                                {category.description}
                            </p>
                            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {category.skills.map((skill) => (
                                    <li
                                        className="flex flex-col items-center justify-center rounded-lg border border-input bg-muted/50 p-4"
                                        key={skill.name}
                                    >
                                        <div className="relative mb-2 size-10">
                                            <Image
                                                alt=""
                                                className="object-contain"
                                                fill
                                                sizes="40px"
                                                src={skill.icon || "/placeholder.svg"}
                                            />
                                        </div>
                                        <span className="text-center text-secondary-foreground text-sm">
                                            {skill.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </BlurFade>
                ))}
            </div>

            <BlurFade delay={0.32}>
                <section className="mt-12 space-y-4">
                    <h2 className="font-semibold text-2xl">Where to see this stack in context</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Skills without products are just a list. The{" "}
                        <Link className={SKILLS_LINK_CLASS} href={ROUTES.PROJECTS}>
                            projects
                        </Link>{" "}
                        and{" "}
                        <Link className={SKILLS_LINK_CLASS} href={ROUTES.EXPERIENCE}>
                            experience
                        </Link>{" "}
                        pages show the same tools in shipped systems. I also publish{" "}
                        <Link className={SKILLS_LINK_CLASS} href={ROUTES.PROJECTS_STARTERS}>
                            starter templates
                        </Link>{" "}
                        for Next.js, TanStack Start, and Node.js / Express. Academic background is on{" "}
                        <Link className={SKILLS_LINK_CLASS} href={ROUTES.EDUCATION}>
                            education
                        </Link>
                        .
                    </p>
                    <ul className="space-y-2">
                        {EXPERIENCE_DETAILS.map((experience) => (
                            <li key={experience.slug}>
                                <Link
                                    className={SKILLS_LINK_CLASS}
                                    href={ROUTES.EXPERIENCE_DETAIL(experience.slug)}
                                >
                                    {experience.title} at {experience.company}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h3 className="pt-4 font-medium text-lg">Related writing</h3>
                    <ul className="space-y-2">
                        {[
                            WRITING_LINKS.reactDeveloper,
                            WRITING_LINKS.nextSeo,
                            WRITING_LINKS.backendNode,
                            WRITING_LINKS.scaleApis,
                        ].map((article) => (
                            <li key={article.href}>
                                <Link className={SKILLS_LINK_CLASS} href={article.href}>
                                    {article.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-2">
                        <SectionViewAllButton href={ROUTES.ABOUT} label="About Diwash Bhattarai" />
                    </div>
                </section>
            </BlurFade>
        </SectionWrapper>
    );
};

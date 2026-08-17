import { GraduationCap } from "lucide-react";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { HomepageLink } from "@/components/shared/portfolio-home-note";
import { SectionCard, SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { ROUTES } from "@/configs/routes";
import { WRITING_LINKS } from "@/features/blogs/constants/writing-links.constants";
import {
    EDUCATION_CAREER_CONNECTION,
    EDUCATION_DETAILS,
    EDUCATION_OVERVIEW,
} from "@/features/education/constants/education.constants";

const EDUCATION_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

/**
 * Education history with coursework and descriptions.
 */
export const EducationPage = () => (
    <SectionWrapper id="education">
        <PageBreadcrumb
            className="mb-8"
            items={[
                { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                { label: "Education", path: ROUTES.EDUCATION },
            ]}
        />
        <BlurFade delay={0.04}>
            <h1 className="mb-4 font-bold text-3xl">Education</h1>
            <div className="mb-10 space-y-4 text-muted-foreground leading-relaxed">
                {EDUCATION_OVERVIEW.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
            </div>
        </BlurFade>

        <BlurFade delay={0.08}>
            <section className="mb-10">
                <h2 className="mb-4 font-semibold text-2xl">Degrees and programs</h2>
                <p className="mb-8 max-w-3xl text-muted-foreground leading-relaxed">
                    Each card is a stage in that path. Open an institution for program context, focus areas,
                    and how that stage connected to later work as a software developer.
                </p>
                <div className="grid gap-8">
                    {EDUCATION_DETAILS.map((education) => (
                        <SectionCard
                            current={education.current}
                            description={education.description}
                            Icon={GraduationCap}
                            key={education.id}
                            skills={education.skills}
                            subtitle={`${education.degree} · ${education.duration}`}
                            title={
                                <Link
                                    className="transition-colors hover:text-primary"
                                    href={ROUTES.EDUCATION_DETAIL(education.id)}
                                >
                                    {education.institution}
                                </Link>
                            }
                            website={education.links?.[0]?.url}
                        />
                    ))}
                </div>
            </section>
        </BlurFade>

        <BlurFade delay={0.12}>
            <section className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <h2 className="font-semibold text-2xl text-foreground">
                    How this education supports software development work
                </h2>
                {EDUCATION_CAREER_CONNECTION.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                <p>
                    For the professional side of the same story, see <HomepageLink />,{" "}
                    <Link className={EDUCATION_LINK_CLASS} href={ROUTES.EXPERIENCE}>
                        full-stack development experience
                    </Link>
                    , the{" "}
                    <Link className={EDUCATION_LINK_CLASS} href={ROUTES.SKILLS}>
                        React, Next.js, and Node.js skills
                    </Link>
                    , and{" "}
                    <Link className={EDUCATION_LINK_CLASS} href={ROUTES.PROJECTS}>
                        Next.js projects
                    </Link>
                    . I also wrote{" "}
                    <Link className={EDUCATION_LINK_CLASS} href={WRITING_LINKS.fullStackNepal.href}>
                        {WRITING_LINKS.fullStackNepal.label}
                    </Link>
                    .
                </p>
                <div className="pt-2">
                    <SectionViewAllButton href={ROUTES.ABOUT} label="About Diwash Bhattarai" />
                </div>
            </section>
        </BlurFade>
    </SectionWrapper>
);

import { Briefcase, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

import BlurFade from "@/components/animations/blur-fade";
import { BlinkingCircle } from "@/components/shared/blinking-circle";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/configs/routes";
import { ExperienceProjectCards } from "@/features/experience/components/experience-project-cards";
import { getExperienceBySlug } from "@/features/experience/constants/experience.constants";
import { cn } from "@/lib/utils";

interface ExperienceDetailPageProps {
    slug: string;
}

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
            </div>

            <Separator className="my-10" />

            <BlurFade delay={0.1}>
                <section className="mt-10">
                    <h2 className="mb-3 font-semibold text-2xl">Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{experience.description}</p>
                </section>
            </BlurFade>

            <BlurFade delay={0.12}>
                <section className="mt-10 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-2xl">Technologies</h2>
                        <SectionViewAllButton href={ROUTES.SKILLS} label="View the full technical stack" />
                    </div>
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

            <ExperienceProjectCards projects={experience.projects} />

            <BlurFade delay={0.16}>
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
        </SectionWrapper>
    );
};

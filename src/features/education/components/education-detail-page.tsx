import { ExternalLink, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/configs/routes";
import { WRITING_LINKS } from "@/features/blogs/constants/writing-links.constants";
import { EDUCATION_DETAILS, getEducationById } from "@/features/education/constants/education.constants";
import { cn } from "@/lib/utils";

const EDUCATION_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

interface EducationDetailPageProps {
    educationId: string;
}

/**
 * Detailed education page for a single institution.
 *
 * @param educationId - Route parameter identifying the education record.
 */
export const EducationDetailPage = ({ educationId }: EducationDetailPageProps) => {
    const education = getEducationById(educationId);

    if (!education) {
        notFound();
    }

    return (
        <SectionWrapper id="education-detail">
            <PageBreadcrumb
                className="mb-12"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { href: ROUTES.EDUCATION, label: "Education", path: ROUTES.EDUCATION },
                    { label: education.institution, path: ROUTES.EDUCATION_DETAIL(education.id) },
                ]}
            />

            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <BlurFade delay={0.06}>
                    <div className="flex items-center gap-4">
                        <div className="shrink-0 rounded-full bg-primary/10 p-4">
                            <GraduationCap className="size-8 text-primary" />
                        </div>
                        <div>
                            <p className="text-primary">
                                {education.degree} · {education.duration}
                            </p>
                            <h1 className="mt-2 font-bold text-4xl">{education.institution}</h1>
                            <p className="mt-2 text-muted-foreground">{education.location}</p>
                        </div>
                    </div>
                </BlurFade>

                {education.links && education.links.length > 0 ? (
                    <BlurFade delay={0.08}>
                        <div className="flex flex-wrap gap-3">
                            {education.links.map((link) => (
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
                        </div>
                    </BlurFade>
                ) : null}
            </div>

            <Separator className="my-10" />

            <BlurFade delay={0.1}>
                <div
                    className="relative mb-12 w-full overflow-hidden rounded-xl border"
                    style={{ aspectRatio: `${education.image.width} / ${education.image.height}` }}
                >
                    <Image
                        alt={education.institution}
                        className="object-cover object-center"
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        src={education.image}
                    />
                </div>
            </BlurFade>

            <BlurFade delay={0.12}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{education.overview}</p>
                    {education.affiliation ? (
                        <p className="mt-4 text-muted-foreground">{education.affiliation}</p>
                    ) : null}
                </section>
            </BlurFade>

            <BlurFade delay={0.14}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Program and degree context</h2>
                    <p className="text-muted-foreground leading-relaxed">{education.programContext}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{education.description}</p>
                </section>
            </BlurFade>

            <BlurFade delay={0.14}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Highlights</h2>
                    <ul className="space-y-4">
                        {education.highlights.map((highlight) => (
                            <li className="text-muted-foreground" key={highlight}>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </section>
            </BlurFade>

            {education.programs && education.programs.length > 0 ? (
                <BlurFade delay={0.16}>
                    <section className="mb-12">
                        <h2 className="mb-4 font-bold text-2xl">Programs</h2>
                        <ul className="flex flex-wrap gap-2">
                            {education.programs.map((program) => (
                                <li
                                    className="rounded-sm bg-primary/10 px-3 py-1 text-primary text-sm"
                                    key={program}
                                >
                                    {program}
                                </li>
                            ))}
                        </ul>
                    </section>
                </BlurFade>
            ) : null}

            <BlurFade delay={0.18}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Focus areas and technical knowledge</h2>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                        Study and practice at {education.institution} concentrated on{" "}
                        {education.skills.slice(0, -1).join(", ")}
                        {education.skills.length > 1 ? ", and " : ""}
                        {education.skills.at(-1)}.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        {education.skills.map((skill) => (
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

            <BlurFade delay={0.2}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">How this stage connected to my career</h2>
                    <p className="text-muted-foreground leading-relaxed">{education.conclusion}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        Related pages:{" "}
                        <Link className={EDUCATION_LINK_CLASS} href={ROUTES.HOME}>
                            Diwash Bhattarai&apos;s homepage
                        </Link>
                        ,{" "}
                        <Link className={EDUCATION_LINK_CLASS} href={ROUTES.EDUCATION}>
                            all education
                        </Link>
                        ,{" "}
                        <Link className={EDUCATION_LINK_CLASS} href={ROUTES.EXPERIENCE}>
                            full-stack development experience
                        </Link>
                        ,{" "}
                        <Link className={EDUCATION_LINK_CLASS} href={ROUTES.SKILLS}>
                            React, Next.js, and Node.js skills
                        </Link>
                        , and{" "}
                        <Link className={EDUCATION_LINK_CLASS} href={WRITING_LINKS.fullStackNepal.href}>
                            {WRITING_LINKS.fullStackNepal.label}
                        </Link>
                        .
                    </p>
                    {EDUCATION_DETAILS.filter((item) => item.id !== education.id).length > 0 ? (
                        <ul className="mt-4 space-y-2">
                            {EDUCATION_DETAILS.filter((item) => item.id !== education.id).map((item) => (
                                <li key={item.id}>
                                    <Link
                                        className={EDUCATION_LINK_CLASS}
                                        href={ROUTES.EDUCATION_DETAIL(item.id)}
                                    >
                                        {item.institution}
                                    </Link>
                                    <span className="text-muted-foreground"> · {item.shortDegree}</span>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </section>
            </BlurFade>
        </SectionWrapper>
    );
};

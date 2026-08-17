import { GraduationCap } from "lucide-react";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionCard, SectionWrapper } from "@/components/shared/section-items";
import { ROUTES } from "@/configs/routes";
import { EDUCATION_DETAILS } from "@/features/education/constants/education.constants";

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
            <p className="mb-8 max-w-2xl text-muted-foreground">
                Academic background supporting Diwash Bhattarai&apos;s work as a full stack software
                developer.
            </p>
        </BlurFade>
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
    </SectionWrapper>
);

import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { SectionHeading } from "@/components/shared/section-heading";
import { ROUTES } from "@/configs/routes";
import { EDUCATION_DETAILS } from "@/features/education/constants/education.constants";

/**
 * Compact education entries for the homepage.
 */
export const HomeEducation = () => (
    <SectionHeading
        actionHref={ROUTES.EDUCATION}
        actionLabel="View education"
        id="education"
        title="Education"
    >
        <ul className="space-y-4">
            {EDUCATION_DETAILS.map((education, index) => (
                <li key={education.id}>
                    <BlurFade delay={0.04 + index * 0.05}>
                        <Link
                            className="font-medium transition-colors hover:text-primary"
                            href={ROUTES.EDUCATION_DETAIL(education.id)}
                        >
                            {education.shortDegree}
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            {education.institution} · {education.duration}
                        </p>
                    </BlurFade>
                </li>
            ))}
        </ul>
    </SectionHeading>
);

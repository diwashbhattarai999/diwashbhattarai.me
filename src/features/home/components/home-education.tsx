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
            {EDUCATION_DETAILS.map((education) => (
                <li key={education.institution}>
                    <p className="font-medium">{education.shortDegree}</p>
                    <p className="text-muted-foreground text-sm">
                        {education.institution} · {education.duration}
                    </p>
                </li>
            ))}
        </ul>
    </SectionHeading>
);

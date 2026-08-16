import { SectionHeading } from "@/components/shared/section-heading";
import { ROUTES } from "@/configs/routes";
import { ExperienceList } from "@/features/experience/components/experience-list";

/**
 * Compact professional history summary for the homepage.
 */
export const HomeExperience = () => (
    <SectionHeading
        actionHref={ROUTES.EXPERIENCE}
        actionLabel="View all experience"
        id="experience"
        title="Experience"
    >
        <ExperienceList compact />
    </SectionHeading>
);

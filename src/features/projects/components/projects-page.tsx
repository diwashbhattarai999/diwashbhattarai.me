import { SectionSeperator } from "@/components/shared/section-items";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { StartersSection } from "@/features/projects/components/starters-section";

/**
 * Full projects listing plus open-source starters.
 */
export const ProjectsPage = () => (
    <>
        <ProjectsSection />
        <SectionSeperator />
        <StartersSection />
    </>
);

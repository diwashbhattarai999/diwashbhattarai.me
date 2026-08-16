import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { ROUTES } from "@/configs/routes";
import { ExperienceList } from "@/features/experience/components/experience-list";

/**
 * Full professional history listing.
 */
export const ExperiencePage = () => (
    <SectionWrapper id="experience">
        <PageBreadcrumb
            className="mb-8"
            items={[
                { label: "Home", href: ROUTES.HOME, path: ROUTES.HOME },
                { label: "Experience", path: ROUTES.EXPERIENCE },
            ]}
        />
        <h1 className="mb-8 font-bold text-3xl">Experience</h1>
        <ExperienceList />
    </SectionWrapper>
);

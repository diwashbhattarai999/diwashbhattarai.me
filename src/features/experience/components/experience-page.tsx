import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { HomepageLink } from "@/components/shared/portfolio-home-note";
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
                { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                { label: "Experience", path: ROUTES.EXPERIENCE },
            ]}
        />
        <BlurFade delay={0.04}>
            <h1 className="mb-4 font-bold text-3xl">Experience</h1>
            <p className="mb-8 max-w-3xl text-muted-foreground leading-relaxed">
                Full-stack software development roles in Nepal, from internships through current product work.
                The shorter career overview lives on <HomepageLink />.
            </p>
        </BlurFade>
        <ExperienceList />
    </SectionWrapper>
);

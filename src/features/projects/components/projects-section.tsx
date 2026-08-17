import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionSubTitle, SectionTitle, SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { ROUTES } from "@/configs/routes";
import { PROJECTS } from "@/features/projects/constants/project.constants";

import { ProjectsList } from "./projects-list";

interface ProjectsSectionProps {
    limit?: number;
    showViewAll?: boolean;
}

/**
 * Featured or full project listing. The hover preview is isolated in a client island.
 *
 * @param limit - When set, shows a homepage preview without listing-page chrome.
 * @param showViewAll - Renders a link to the full projects page.
 */
export const ProjectsSection = ({ showViewAll = false, limit }: ProjectsSectionProps) => {
    const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
    const isPreview = Boolean(limit);

    return (
        <SectionWrapper id="projects">
            {isPreview ? null : (
                <PageBreadcrumb
                    className="mb-8"
                    items={[
                        { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                        { label: "Projects", path: ROUTES.PROJECTS },
                    ]}
                />
            )}

            <div className="mb-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <SectionTitle as={isPreview ? "h2" : "h1"}>
                        {isPreview ? "Featured Projects" : "All Projects"}
                    </SectionTitle>
                    {showViewAll ? (
                        <BlurFade delay={0.08}>
                            <SectionViewAllButton href={ROUTES.PROJECTS} label="View all projects" />
                        </BlurFade>
                    ) : null}
                </div>
                {isPreview ? null : (
                    <SectionSubTitle>Here are some of the projects I have worked on.</SectionSubTitle>
                )}
            </div>
            <ProjectsList headingLevel={isPreview ? "h3" : "h2"} projects={displayedProjects} />
        </SectionWrapper>
    );
};

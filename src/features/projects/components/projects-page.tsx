import type { Metadata } from "next";

import { ProjectsSection } from "@/features/projects/components/projects-section";

export const projectsPageMetadata: Metadata = {
    title: "Projects | Diwash Bhattarai",
    description: "Here's a list of projects I've worked on.",
    keywords: [
        "Diwash Bhattarai Projects",
        "Web Development Projects",
        "React Projects",
        "Next.js Projects",
        "Full Stack Projects",
        "Portfolio Projects",
        "Frontend Projects",
        "Backend Projects",
        "Modern Web Applications",
    ],
    robots: "index, follow",
};

/**
 * Full projects listing page.
 */
export const ProjectsPage = () => <ProjectsSection />;

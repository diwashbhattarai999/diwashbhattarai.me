import type { Metadata } from "next";

import { ROUTES } from "@/configs/routes";
import { ProjectsPage } from "@/features/projects/components/projects-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
    description:
        "Selected software projects by Diwash Bhattarai, including GymGrow, Coach HQ, Striide, and other production web applications.",
    path: ROUTES.PROJECTS,
    title: "Projects | Diwash Bhattarai",
});

const Page = () => <ProjectsPage />;

export default Page;

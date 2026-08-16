import type { Metadata } from "next";

import { ProjectsPage, projectsPageMetadata } from "@/features/projects/components/projects-page";

export const metadata: Metadata = projectsPageMetadata;

const Page = () => <ProjectsPage />;

export default Page;

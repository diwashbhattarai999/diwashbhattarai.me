import type { Metadata } from "next";

import { ROUTES } from "@/configs/routes";
import { ProjectsPage } from "@/features/projects/components/projects-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
    description:
        "Selected software projects by Diwash Bhattarai, plus open-source starters for Next.js, TanStack Start, and Node.js / Express.",
    path: ROUTES.PROJECTS,
    title: "Projects | Diwash Bhattarai",
});

const Page = () => <ProjectsPage />;

export default Page;

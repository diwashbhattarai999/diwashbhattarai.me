import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ROUTES } from "@/configs/routes";
import { ProjectDetailPage } from "@/features/projects/components/project-detail-page";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import { createPageMetadata } from "@/lib/site-metadata";

interface ProjectRouteProps {
    params: Promise<{ projectId: string }>;
}

export const generateStaticParams = () => PROJECTS.map((project) => ({ projectId: project.id }));

export const generateMetadata = async ({ params }: ProjectRouteProps): Promise<Metadata> => {
    const { projectId } = await params;
    const project = PROJECTS.find((item) => item.id === projectId);

    if (!project) {
        return {};
    }

    return createPageMetadata({
        title: `${project.title} | Projects`,
        description: project.description,
        path: ROUTES.PROJECT(projectId),
        image: project.image.src,
    });
};

export default async function Page({ params }: ProjectRouteProps) {
    const { projectId } = await params;
    const project = PROJECTS.find((item) => item.id === projectId);

    if (!project) {
        notFound();
    }

    return <ProjectDetailPage projectId={projectId} />;
}

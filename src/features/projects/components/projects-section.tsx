"use client";

import React, { useCallback, useState } from "react";

import BlurFade from "@/components/animations/blur-fade";
import {
    SectionSeperator,
    SectionSubTitle,
    SectionTitle,
    SectionWrapper,
} from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";
import { ROUTES } from "@/configs/routes";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import type { Project } from "@/features/projects/types/project.types";

import { ProjectCard } from "./project-card";
import { ProjectHoverPreview } from "./project-overlay";

interface ProjectsSectionProps {
    limit?: number;
    showViewAll?: boolean;
}

interface HoverState {
    anchor: HTMLElement;
    project: Project;
}

export const ProjectsSection = ({ showViewAll = false, limit }: ProjectsSectionProps) => {
    const [hovered, setHovered] = useState<HoverState | null>(null);
    const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
    const isPreview = Boolean(limit);

    const handleHover = useCallback(
        (id: string | null, anchor: HTMLElement | null) => {
            if (!(id && anchor)) {
                setHovered(null);
                return;
            }

            const project = displayedProjects.find((item) => item.id === id);
            if (!project) {
                return;
            }

            setHovered({ anchor, project });
        },
        [displayedProjects]
    );

    return (
        <SectionWrapper id="projects">
            <ProjectHoverPreview anchor={hovered?.anchor ?? null} project={hovered?.project ?? null} />
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <SectionTitle as={isPreview ? "h2" : "h1"}>
                        {isPreview ? "Featured Projects" : "All Projects"}
                    </SectionTitle>
                    {showViewAll ? (
                        <SectionViewAllButton href={ROUTES.PROJECTS} label="View all projects" />
                    ) : null}
                </div>
                {!isPreview && (
                    <SectionSubTitle>Here are some of the projects I have worked on.</SectionSubTitle>
                )}
            </div>
            <BlurFade delay={0.1}>
                <div className="space-y-0">
                    {displayedProjects.map((project, index) => (
                        <React.Fragment key={project.id}>
                            <ProjectCard
                                headingLevel={isPreview ? "h3" : "h2"}
                                index={index}
                                isHovered={hovered?.project.id === project.id}
                                key={project.id}
                                onHover={handleHover}
                                project={project}
                            />
                            <SectionSeperator />
                        </React.Fragment>
                    ))}
                </div>
            </BlurFade>
        </SectionWrapper>
    );
};

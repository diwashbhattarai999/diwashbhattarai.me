"use client";

import React, { useState } from "react";

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

import { ProjectCard } from "./project-card";

interface ProjectsSectionProps {
    limit?: number;
    showViewAll?: boolean;
}

export const ProjectsSection = ({ showViewAll = false, limit }: ProjectsSectionProps) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

    return (
        <SectionWrapper id="projects">
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <SectionTitle>{limit ? "Featured Projects" : "All Projects"}</SectionTitle>
                    {showViewAll ? (
                        <SectionViewAllButton href={ROUTES.PROJECTS} label="View all projects" />
                    ) : null}
                </div>
                {!limit && <SectionSubTitle>Here are some of the projects I have worked on.</SectionSubTitle>}
            </div>
            <BlurFade delay={0.1}>
                <div className="space-y-0">
                    {displayedProjects.map((project, index) => (
                        <React.Fragment key={project.id}>
                            <ProjectCard
                                index={index}
                                isHovered={hoveredId === project.id}
                                key={project.id}
                                onHover={setHoveredId}
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

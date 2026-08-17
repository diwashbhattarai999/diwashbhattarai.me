"use client";

import { Fragment, useCallback, useState } from "react";

import { SectionSeperator } from "@/components/shared/section-items";
import type { Project } from "@/features/projects/types/project.types";

import { ProjectCard } from "./project-card";
import { ProjectHoverPreview } from "./project-overlay";

interface ProjectsListProps {
    headingLevel: "h2" | "h3";
    projects: readonly Project[];
}

interface HoverState {
    anchor: HTMLElement;
    project: Project;
}

/**
 * Client island for desktop hover previews over an otherwise static project list.
 *
 * @param headingLevel - Heading level for each project title.
 * @param projects - Projects to render.
 */
export const ProjectsList = ({ projects, headingLevel }: ProjectsListProps) => {
    const [hovered, setHovered] = useState<HoverState | null>(null);

    const handleHover = useCallback(
        (id: string | null, anchor: HTMLElement | null) => {
            if (!(id && anchor)) {
                setHovered(null);
                return;
            }

            const project = projects.find((item) => item.id === id);
            if (!project) {
                return;
            }

            setHovered({ anchor, project });
        },
        [projects]
    );

    return (
        <div className="animate-blur-fade space-y-0" style={{ animationDelay: "0.14s" }}>
            <ProjectHoverPreview anchor={hovered?.anchor ?? null} project={hovered?.project ?? null} />
            {projects.map((project, index) => (
                <Fragment key={project.id}>
                    <ProjectCard
                        headingLevel={headingLevel}
                        index={index}
                        isHovered={hovered?.project.id === project.id}
                        onHover={handleHover}
                        project={project}
                    />
                    <SectionSeperator />
                </Fragment>
            ))}
        </div>
    );
};

"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import BlurFade from "@/components/animations/blur-fade";
import {
    SectionSeperator,
    SectionSubTitle,
    SectionTitle,
    SectionWrapper,
} from "@/components/shared/section-items";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { PROJECTS } from "@/features/projects/constants/project.constants";

import { ProjectCard } from "./project-card";

interface ProjectsSectionProps {
    showViewAll?: boolean;
    limit?: number;
}

export const ProjectsSection = ({ showViewAll = false, limit }: ProjectsSectionProps) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

    return (
        <SectionWrapper id="projects">
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <SectionTitle>{limit ? "Featured Projects" : "All Projects"}</SectionTitle>
                    {showViewAll && (
                        <Button asChild variant="outline">
                            <Link className="flex items-center" href={ROUTES.PROJECTS}>
                                View All{" "}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    )}
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

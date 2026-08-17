import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

import { ROUTES } from "@/configs/routes";
import type { Project } from "@/features/projects/types/project.types";
import { cn } from "@/lib/utils";

import { ExternalLinkButton } from "./external-link-button";
import { ProjectTags } from "./project-tags";

interface ProjectCardProps {
    headingLevel?: "h2" | "h3";
    index: number;
    isHovered: boolean;
    onHover: (id: string | null, anchor: HTMLElement | null) => void;
    project: Project;
}

export const ProjectCard = ({
    project,
    onHover,
    isHovered,
    index,
    headingLevel: Heading = "h3",
}: ProjectCardProps) => {
    const handleMouseEnter = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            onHover(project.id, event.currentTarget);
        },
        [onHover, project.id]
    );

    const handleMouseLeave = useCallback(() => {
        onHover(null, null);
    }, [onHover]);

    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "group relative flex cursor-pointer flex-col items-start justify-between border-border/40 border-b py-8",
                isHovered ? "z-10" : "z-0"
            )}
            initial={{ opacity: 0, y: 20 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 0.5 }}
        >
            <div className="relative flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-6">
                <Link href={ROUTES.PROJECT(project.id)}>
                    <Image
                        alt={project.title}
                        className="mb-4 h-auto w-full rounded-xl bg-muted/20 md:hidden"
                        height={project.image.height}
                        sizes="100vw"
                        src={project.image}
                        width={project.image.width}
                    />

                    <Heading
                        className={cn(
                            "text-nowrap font-bold text-xl transition-colors duration-300",
                            isHovered ? "text-primary" : "text-foreground group-hover:text-primary"
                        )}
                    >
                        {project.title}
                    </Heading>

                    <p className="line-clamp-2 md:hidden">{project.description}</p>
                </Link>
                <ProjectTags limit={8} tags={project.tags} />

                <div className="mt-6 flex gap-3 md:hidden">
                    {project.githubUrl && (
                        <ExternalLinkButton href={project.githubUrl} icon={Github} label="View Code" />
                    )}
                    {project.liveUrl && (
                        <ExternalLinkButton href={project.liveUrl} icon={ExternalLink} label="Live Demo" />
                    )}
                </div>

                <span className="absolute top-1/2 right-0 -z-10 hidden -translate-y-1/2 text-7xl text-muted-foreground/5 md:inline">
                    {index < 9 ? "0" : ""}
                    {index + 1}
                </span>
            </div>
        </motion.div>
    );
};

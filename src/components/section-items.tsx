import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import BlurFade from "./animations/blur-fade";
import BlurFadeText from "./animations/blur-fade-text";
import { BlinkingCircle } from "./blinking-circle";

export const SectionTitle = ({ children, className }: { children: string; className?: string }) => (
    <div className={cn("relative font-bold", className)}>
        <BlurFadeText className="text-3xl" delay={0.08} text={children} />

        <span className="pointer-events-none absolute top-1/2 left-0 z-[-1] -translate-y-1/2 select-none text-nowrap text-6xl text-muted/20 md:text-[7rem]">
            {children}
        </span>
    </div>
);

export const SectionSubTitle = ({ children, className }: { children: string; className?: string }) => (
    <BlurFadeText className={cn("text-primary", className)} delay={0.1} text={children} />
);

interface ISectionProps {
    children: React.ReactNode;
    className?: string;
    id: string;
    title?: string;
}

export const SectionWrapper: React.FC<ISectionProps> = ({ id, title, children, className }) => (
    <section className={cn("border-border/40 border-t px-4 py-12", className)} id={id}>
        {title && <SectionTitle className="mb-8">{title}</SectionTitle>}
        {children}
    </section>
);

export const SectionSeperator = ({ className }: { className?: string }) => (
    <div className={cn("border-input border-b border-dashed", className)} />
);

interface ProjectItem {
    link?: string;
    name: string;
}

interface ISectionCardProps {
    current?: boolean;
    description: string;
    Icon: LucideIcon;
    projects?: ProjectItem[];
    skills: string[];
    subtitle: React.ReactNode;
    title: string;
    website?: string;
}

export const SectionCard: React.FC<ISectionCardProps> = ({
    title,
    subtitle,
    description,
    skills,
    Icon,
    projects,
    website,
    current,
}) => {
    return (
        <BlurFade delay={0.1}>
            <Card className="relative bg-card/50 backdrop-blur-md">
                <div className="line-glow" />
                <div className="line-glow right-0 left-auto" />
                <CardHeader className="flex flex-row items-start gap-4">
                    <div className="relative rounded-full bg-primary/10 p-2">
                        <Icon className="size-6 text-primary" />
                        {current && (
                            <div className="absolute right-0.5 bottom-0.5">
                                <BlinkingCircle />
                            </div>
                        )}
                    </div>

                    <div>
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <p className="text-primary">{subtitle}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    {/** biome-ignore lint/security/noDangerouslySetInnerHtml: needed for the description */}
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: description }} />

                    {/* Render skills */}
                    <div className="mt-4 flex flex-wrap gap-4 text-primary text-sm">
                        {skills.map((skill, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                            <span className="inline-block rounded-sm bg-primary/10 px-3 py-1" key={index}>
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Render projects if available */}
                    {projects && projects.length > 0 && (
                        <div className="mt-4">
                            <h4 className="font-bold">Projects:</h4>
                            <ul className="flex list-disc flex-wrap gap-8 pl-4">
                                {projects.map((project, index) => {
                                    // Support both string and object format for backward compatibility
                                    if (typeof project === "string") {
                                        return (
                                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                                            <li className="text-muted-foreground" key={index}>
                                                {project}
                                            </li>
                                        );
                                    }
                                    if (project && typeof project === "object" && "name" in project) {
                                        return (
                                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                                            <li className="text-muted-foreground" key={index}>
                                                {project.link ? (
                                                    <a
                                                        className="text-primary hover:underline"
                                                        href={project.link}
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                    >
                                                        {project.name}
                                                    </a>
                                                ) : (
                                                    project.name
                                                )}
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    )}

                    {/* Render website */}
                    {website && (
                        <div className="mt-4">
                            <a
                                className="text-primary hover:underline"
                                href={website}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Visit Website
                            </a>
                        </div>
                    )}
                </CardContent>
            </Card>
        </BlurFade>
    );
};

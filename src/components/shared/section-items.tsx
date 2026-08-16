import { type LucideIcon, MoveRight } from "lucide-react";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import BlurFadeText from "@/components/animations/blur-fade-text";
import { BlinkingCircle } from "@/components/shared/blinking-circle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/configs/routes";
import { cn } from "@/lib/utils";

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
    projectId?: string;
}

interface ISectionCardProps {
    current?: boolean;
    description: string;
    Icon: LucideIcon;
    projects?: ProjectItem[];
    skills: string[];
    subtitle: React.ReactNode;
    title: React.ReactNode;
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
                            <BlinkingCircle
                                className="absolute right-0.5 bottom-0.5"
                                label="Current role"
                                size="sm"
                            />
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

                    {projects && projects.length > 0 && (
                        <div className="mt-4 space-y-2.5">
                            <h4 className="font-bold">Projects:</h4>
                            <ul className="flex list-disc flex-wrap gap-x-8 gap-y-4 pl-4">
                                {projects.map((project) => {
                                    let projectLabel: React.ReactNode = project.name;

                                    if (project.link) {
                                        projectLabel = (
                                            <a
                                                className="text-primary hover:underline"
                                                href={project.link}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                {project.name}
                                            </a>
                                        );
                                    } else if (project.projectId) {
                                        projectLabel = (
                                            <Link
                                                className="text-primary hover:underline"
                                                href={ROUTES.PROJECT(project.projectId)}
                                            >
                                                {project.name}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <li className="text-muted-foreground" key={project.name}>
                                            {projectLabel}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    {/* Render website */}
                    {website && (
                        <div className="mt-6">
                            <a
                                className="group flex items-center gap-2 text-primary hover:underline"
                                href={website}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Visit Website
                                <MoveRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    )}
                </CardContent>
            </Card>
        </BlurFade>
    );
};

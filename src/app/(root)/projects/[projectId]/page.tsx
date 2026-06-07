import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlurFade from "@/components/animations/blur-fade";
import BlurFadeText from "@/components/animations/blur-fade-text";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { PROJECTS } from "@/data/project";
import { cn } from "@/lib/utils";

const BreadcrumbNavigation = ({ title, className }: { title: string; className?: string }) => (
    <Breadcrumb className={className}>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="/projects">Projects</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
);

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
    const { projectId } = await params;

    const project = PROJECTS.find(({ id }) => id === projectId);
    if (!project) notFound();

    return (
        <div className="px-6 py-8">
            <BlurFade delay={0.06}>
                <BreadcrumbNavigation className="mb-8" title={project.title} />
            </BlurFade>

            {/* Project Header */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <BlurFadeText className="font-bold text-4xl md:text-5xl" delay={0.08} text={project.title} />
                <BlurFade delay={0.08}>
                    <div className="flex gap-3">
                        <a
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "h-auto rounded-full py-1.5"
                            )}
                            href={project.liveUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <ExternalLink size={14} />
                            <span>Live URL</span>
                        </a>
                        <a
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "h-auto rounded-full py-1.5"
                            )}
                            href={project.githubUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Github size={14} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </BlurFade>
            </div>

            {/* Project Image */}
            <BlurFade delay={0.1}>
                <div className="relative mb-12 aspect-video overflow-hidden rounded-xl border">
                    <Image
                        alt={project.title}
                        className="object-cover object-top"
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        src={project.image || "/placeholder.svg"}
                    />
                </div>
            </BlurFade>

            {/* Overview Section */}
            <BlurFade delay={0.12}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Overview</h2>
                    <p className="mb-4 text-muted-foreground">{project.overview}</p>
                    <p className="text-muted-foreground">{project.poweredBy}</p>
                </section>
            </BlurFade>

            {/* Technologies Section */}
            <BlurFade delay={0.14}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Technologies</h2>
                    <ul className="space-y-2">
                        {project.technologies.map((tech, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                            <li className="flex items-center gap-2" key={index}>
                                <span className="text-teal-400">•</span>
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </BlurFade>

            {/* Features Section */}
            <BlurFade delay={0.16}>
                <section className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Features</h2>
                    <ul className="space-y-4">
                        {project.features.map((feature, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                            <li className="text-muted-foreground" key={index}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            </BlurFade>

            {/* Development and Challenges Section */}
            <section className="mb-12">
                <h2 className="mb-4 font-bold text-2xl">Development and Challenges</h2>
                <p className="mb-8 text-muted-foreground">{project.developmentChallenges}</p>

                {/* Project Screenshots */}
                <div className="space-y-8">
                    {project.screenshots?.map((screenshot, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                        <div className="space-y-2" key={index}>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800">
                                <Image
                                    alt={screenshot.alt}
                                    className="object-cover"
                                    fill
                                    sizes="(min-width: 1024px) 1024px, 100vw"
                                    src={screenshot.src || "/placeholder.svg"}
                                />
                            </div>
                            <p className="text-center text-sm text-zinc-400">{screenshot.caption}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
                <h2 className="mb-4 font-bold text-2xl">Conclusion</h2>
                <p className="text-muted-foreground">{project.conclusion}</p>
            </section>
        </div>
    );
}

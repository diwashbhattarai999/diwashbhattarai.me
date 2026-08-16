import type { StaticImageData } from "next/image";

export interface ExperienceProject {
    description?: string;
    image?: StaticImageData;
    link?: string;
    name: string;
    projectId?: string;
    tags?: readonly string[];
}

export interface ExperienceDetail {
    company: string;
    current: boolean;
    description: string;
    duration: string;
    logo: string;
    projects: ExperienceProject[];
    skills: string[];
    slug: string;
    title: string;
    website: string;
}

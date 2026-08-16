import type { StaticImageData } from "next/image";

export interface ProjectLink {
    label: string;
    url: string;
}

export interface ProjectScreenshot {
    alt: string;
    caption: string;
    src: StaticImageData | string;
}

export interface Project {
    conclusion: string;
    description: string;
    developmentChallenges?: string;
    features: string[];
    githubUrl?: string;
    id: string;
    image: StaticImageData;
    liveUrl: string;
    liveUrls?: ProjectLink[];
    overview: string;
    poweredBy?: string;
    screenshots?: ProjectScreenshot[];
    tags: string[];
    technologies: string[];
    title: string;
}

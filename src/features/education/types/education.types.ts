import type { StaticImageData } from "next/image";

export interface EducationLink {
    label: string;
    url: string;
}

export interface EducationDetail {
    affiliation?: string;
    conclusion: string;
    current?: boolean;
    degree: string;
    description: string;
    duration: string;
    highlights: string[];
    id: string;
    image: StaticImageData;
    institution: string;
    links?: EducationLink[];
    location: string;
    overview: string;
    programContext: string;
    programs?: string[];
    shortDegree: string;
    skills: string[];
}

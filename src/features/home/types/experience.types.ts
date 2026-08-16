export interface ExperienceProject {
    link?: string;
    name: string;
}

export interface ExperienceDetail {
    company: string;
    current: boolean;
    description: string;
    duration: string;
    logo: string;
    projects: ExperienceProject[];
    skills: string[];
    title: string;
    website: string;
}

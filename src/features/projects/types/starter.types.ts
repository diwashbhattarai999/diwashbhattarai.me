import type { WritingLink } from "@/features/blogs/constants/writing-links.constants";

export interface StarterRepo {
    description: string;
    githubUrl: string;
    id: string;
    liveUrl?: string;
    relatedWriting?: readonly WritingLink[];
    skills: string[];
    title: string;
}

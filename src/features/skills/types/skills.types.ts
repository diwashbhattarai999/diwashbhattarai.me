import type { LucideIcon } from "lucide-react";

export interface Skill {
    icon: string;
    name: string;
}

export interface SkillCategory {
    description: string;
    icon: LucideIcon;
    skills: Skill[];
    title: string;
}

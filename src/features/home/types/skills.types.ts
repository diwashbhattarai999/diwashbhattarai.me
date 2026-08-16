import type { LucideIcon } from "lucide-react";

export interface Skill {
    icon: string;
    name: string;
}

export interface SkillCategory {
    icon: LucideIcon;
    skills: Skill[];
    title: string;
}

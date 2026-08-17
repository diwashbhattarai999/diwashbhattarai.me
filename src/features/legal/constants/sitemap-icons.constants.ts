import type { LucideIcon } from "lucide-react";
import { Blocks, BookOpen, Briefcase, FolderKanban, GraduationCap, Home, Scale } from "lucide-react";

export const SITEMAP_GROUP_ICONS: Record<string, LucideIcon> = {
    Education: GraduationCap,
    Experience: Briefcase,
    Legal: Scale,
    Main: Home,
    Projects: FolderKanban,
    Starters: Blocks,
    Writing: BookOpen,
};

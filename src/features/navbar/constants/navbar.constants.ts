import { BookOpen, Briefcase, FolderKanban, Home, User } from "lucide-react";

import { ROUTES } from "@/configs/routes";
import type { NavbarItem } from "@/features/navbar/types/navbar.types";

export const NAV_ITEMS: readonly NavbarItem[] = [
    { icon: Home, name: "Home", path: ROUTES.HOME },
    { icon: User, name: "About", path: ROUTES.ABOUT },
    { icon: FolderKanban, name: "Projects", path: ROUTES.PROJECTS },
    { icon: Briefcase, name: "Experience", path: ROUTES.EXPERIENCE },
    { icon: BookOpen, name: "Blog", path: ROUTES.BLOGS },
];

export const NAV_ACTIONS: readonly NavbarItem[] = [];

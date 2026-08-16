import { BookOpen, Briefcase, FolderKanban, Home, User } from "lucide-react";

import { ROUTES } from "@/configs/routes";
import type { NavbarItem } from "@/features/navbar/types/navbar.types";

export const NAV_ITEMS: readonly NavbarItem[] = [
    { name: "Home", path: ROUTES.HOME, icon: Home },
    { name: "About", path: ROUTES.ABOUT, icon: User },
    { name: "Projects", path: ROUTES.PROJECTS, icon: FolderKanban },
    { name: "Experience", path: ROUTES.EXPERIENCE, icon: Briefcase },
    { name: "Blog", path: ROUTES.BLOGS, icon: BookOpen },
];

export const NAV_ACTIONS: readonly NavbarItem[] = [];

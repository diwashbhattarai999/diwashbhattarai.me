import { BookOpen, FolderKanban, Home } from "lucide-react";

import { ROUTES } from "@/configs/routes";
import type { NavbarItem } from "@/features/navbar/types/navbar.types";

export const NAV_ITEMS: readonly NavbarItem[] = [
    { name: "Home", path: ROUTES.HOME, icon: Home },
    { name: "Projects", path: ROUTES.PROJECTS, icon: FolderKanban },
    { name: "Blogs", path: ROUTES.BLOGS, icon: BookOpen },
];

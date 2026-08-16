import type { LucideIcon } from "lucide-react";

export interface NavbarItem {
    readonly icon: LucideIcon;
    readonly name: string;
    readonly path: string;
}

export interface NavItemProps {
    className?: string;
    icon: LucideIcon;
    name: string;
    path: string;
}

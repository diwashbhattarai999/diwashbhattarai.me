import type { LucideIcon } from "lucide-react";

export const ExternalLinkButton = ({
    href,
    icon: Icon,
    label,
}: {
    href: string;
    icon: LucideIcon;
    label: string;
}) => (
    <a
        className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 font-medium text-foreground text-sm backdrop-blur-sm transition-all hover:bg-background hover:text-primary"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
    >
        <Icon className="size-4" />
        {label}
    </a>
);

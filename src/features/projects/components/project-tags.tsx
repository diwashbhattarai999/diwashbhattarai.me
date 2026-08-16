import { cn } from "@/lib/utils";

export const ProjectTags = ({
    tags,
    limit,
    className,
}: {
    tags: string[];
    limit?: number;
    className?: string;
}) => {
    const displayedTags = tags.slice(0, limit);
    return (
        <div className={cn("flex flex-wrap gap-2", className)}>
            {displayedTags.map((tag, index) => (
                <span
                    className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs"
                    // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                    key={index}
                >
                    {tag}
                </span>
            ))}
            {limit && tags.length > (limit || 0) && (
                <span className="rounded-full bg-primary/5 px-3 py-1 font-medium text-primary/70 text-xs">
                    +{tags.length - (limit || 0)}
                </span>
            )}
        </div>
    );
};

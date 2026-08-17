import { cn } from "@/lib/utils";

interface SeparatorProps extends React.ComponentProps<"div"> {
    decorative?: boolean;
    orientation?: "horizontal" | "vertical";
}

/**
 * Lightweight visual divider that does not require a client Radix primitive.
 *
 * @param decorative - When true, the divider is ignored by assistive tech.
 * @param orientation - Horizontal rule or vertical rule.
 */
const Separator = ({
    className,
    orientation = "horizontal",
    decorative = true,
    ...props
}: SeparatorProps) => (
    <div
        aria-hidden={decorative ? true : undefined}
        className={cn(
            "shrink-0 bg-border",
            orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
            className
        )}
        role={decorative ? "none" : "separator"}
        {...props}
    />
);

export { Separator };

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const blinkingCircleSizeVariants = cva("relative inline-flex shrink-0", {
    defaultVariants: {
        size: "md",
    },
    variants: {
        size: {
            lg: "size-3.5",
            md: "size-2.5",
            sm: "size-1.5",
        },
    },
});

const BLINKING_CIRCLE_COLORS = {
    blue: {
        ping: "bg-blue-500",
        solid: "bg-blue-600",
    },
    green: {
        ping: "bg-green-500",
        solid: "bg-green-600",
    },
    red: {
        ping: "bg-red-500",
        solid: "bg-red-600",
    },
    yellow: {
        ping: "bg-yellow-500",
        solid: "bg-yellow-600",
    },
} as const;

type BlinkingCircleColor = keyof typeof BLINKING_CIRCLE_COLORS;

interface BlinkingCircleProps extends VariantProps<typeof blinkingCircleSizeVariants> {
    className?: string;
    color?: BlinkingCircleColor;
    label?: string;
}

/**
 * Pulsing status indicator used for current roles and live state.
 *
 * @param size - Dot diameter.
 * @param color - Ping and solid color pair.
 * @param label - Accessible status label.
 * @param className - Optional wrapper classes.
 */
export const BlinkingCircle = ({
    size,
    color = "green",
    label = "Current role",
    className,
}: BlinkingCircleProps) => {
    const palette = BLINKING_CIRCLE_COLORS[color];

    return (
        <span className={cn(blinkingCircleSizeVariants({ size }), className)}>
            <span className={cn("absolute inset-0 animate-ping rounded-full", palette.ping)} />
            <span className={cn("relative inline-flex size-full rounded-full", palette.solid)} />
            <span className="sr-only">{label}</span>
        </span>
    );
};

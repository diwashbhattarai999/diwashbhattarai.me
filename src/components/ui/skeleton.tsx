import type React from "react";

import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
    <div className={cn("animate-pulse rounded-md bg-foreground/10", className)} {...props} />
);

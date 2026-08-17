"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import useIsMounted from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";

/**
 * A component that allows the user to toggle between light and dark themes.
 *
 * @returns The theme toggle component.
 */
export const ThemeToggle = ({ className, iconClassName }: { className?: string; iconClassName?: string }) => {
    const { setTheme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    const handleSetTheme = useCallback(() => {
        setTheme(isDark ? "light" : "dark");
    }, [isDark, setTheme]);

    const { isMounted } = useIsMounted();
    if (!isMounted) {
        return null;
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        className={cn("relative", className)}
                        onClick={handleSetTheme}
                        size="icon"
                        variant="ghost"
                    >
                        <Sun
                            aria-hidden
                            className={cn(
                                "size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                                iconClassName
                            )}
                        />
                        <MoonStar
                            aria-hidden
                            className={cn(
                                "absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                                iconClassName
                            )}
                        />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>{isDark ? "Switch to light mode" : "Switch to dark mode"}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

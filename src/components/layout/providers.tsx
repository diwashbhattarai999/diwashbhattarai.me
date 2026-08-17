"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/layout/theme-provider";

interface ProvidersProps {
    children: ReactNode;
}

/**
 * Root client providers required for theming.
 *
 * @param children - Application tree to wrap.
 */
export const Providers = ({ children }: ProvidersProps) => (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange enableSystem>
        {children}
    </ThemeProvider>
);

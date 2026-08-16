"use client";

import type { ReactNode } from "react";

import { TanstackQueryProvider } from "@/components/layout/tanstack-provider";
import { ThemeProvider } from "@/components/layout/theme-provider";

interface ProvidersProps {
    children: ReactNode;
}

/**
 * Root client providers for theme and server-state caching.
 *
 * @param children - Application tree to wrap.
 */
export const Providers = ({ children }: ProvidersProps) => (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange enableSystem>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </ThemeProvider>
);

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

/**
 * The `ThemeProvider` component is a provider component that wraps the
 * @param children The children to render
 * @returns The JSX element
 */
export const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
);

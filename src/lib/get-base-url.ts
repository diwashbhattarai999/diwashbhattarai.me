import { env } from "@/env/client";

const TRAILING_SLASH_PATTERN = /\/$/;

/**
 * Resolves the public site URL without a trailing slash.
 *
 * @returns The application origin.
 */
export const getBaseUrl = (): string => env.NEXT_PUBLIC_APP_URL.replace(TRAILING_SLASH_PATTERN, "");

/**
 * Builds a canonical absolute URL for a pathname.
 *
 * @param path - Site-relative pathname.
 * @returns Absolute canonical URL.
 */
export const getCanonicalUrl = (path: string): string => {
    const origin = getBaseUrl();

    if (path === "/") {
        return origin;
    }

    return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
};

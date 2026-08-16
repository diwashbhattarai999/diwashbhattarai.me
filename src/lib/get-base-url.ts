import { env } from "@/env/client";

/**
 * Resolves the public site URL.
 *
 * @returns The application base URL.
 */
export const getBaseUrl = (): string => env.NEXT_PUBLIC_APP_URL;

import type { MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/get-base-url";

/**
 * Generates the sitemap metadata for search engines.
 *
 * @returns The sitemap configuration object.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${getBaseUrl()}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.7,
        },
    ];
}

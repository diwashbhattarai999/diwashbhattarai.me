import type { MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/get-base-url";

/**
 * Generates the robots.txt metadata for search engine crawlers.
 *
 * @returns The robots.txt configuration object.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                allow: "/",
                userAgent: "*",
            },
        ],
        sitemap: `${getBaseUrl()}/sitemap.xml`,
    };
}

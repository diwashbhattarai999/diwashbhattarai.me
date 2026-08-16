import type { MetadataRoute } from "next";

import { siteConfig } from "@/configs/site";

/**
 * Progressive Web App manifest metadata.
 *
 * @returns The PWA manifest object.
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.title,
        short_name: siteConfig.shortTitle,
        description: siteConfig.description,
        start_url: "/",
        display: siteConfig.pwa.display,
        background_color: siteConfig.pwa.backgroundColor,
        theme_color: siteConfig.pwa.themeColor,
        icons: siteConfig.pwa.icons,
    };
}

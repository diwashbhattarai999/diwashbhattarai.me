import type { MetadataRoute } from "next";

import { siteConfig } from "@/configs/site";

/**
 * Progressive Web App manifest metadata.
 *
 * @returns The PWA manifest object.
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: siteConfig.pwa.backgroundColor,
        description: siteConfig.description,
        display: siteConfig.pwa.display,
        icons: siteConfig.pwa.icons,
        name: siteConfig.title,
        short_name: siteConfig.shortTitle,
        start_url: "/",
        theme_color: siteConfig.pwa.themeColor,
    };
}

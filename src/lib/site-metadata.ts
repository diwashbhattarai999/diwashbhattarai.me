import type { Metadata } from "next";

import { siteConfig } from "@/configs/site";

/**
 * Builds the root Next.js metadata object from site configuration.
 *
 * @returns Application metadata for SEO and social previews.
 */
export const getSiteMetadata = (): Metadata => ({
    title: siteConfig.title,
    metadataBase: new URL(siteConfig.url),
    icons: [{ rel: "icon", url: "/favicon.png" }],
    alternates: {
        canonical: "/",
    },
    authors: [...siteConfig.authors],
    description: siteConfig.description,
    openGraph: {
        title: "Diwash Bhattarai | Full Stack Developer",
        description:
            "I build modern, fast, and scalable web applications using the latest web technologies. Explore my portfolio to see my work and expertise.",
        images: [
            {
                url: siteConfig.seo.openGraph.image,
                alt: siteConfig.seo.openGraph.imageAlt,
                width: siteConfig.seo.openGraph.imageWidth,
                height: siteConfig.seo.openGraph.imageHeight,
            },
        ],
    },
    keywords: [...siteConfig.seo.keywords],
});

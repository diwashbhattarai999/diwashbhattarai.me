import type { Metadata } from "next";

import { siteConfig } from "@/configs/site";
import { getCanonicalUrl } from "@/lib/get-base-url";
import type { PageMetadataInput } from "@/types/site";

/**
 * Builds root layout metadata. Child routes override title, description, and canonical.
 *
 * @returns Application-wide metadata defaults.
 */
export const getSiteMetadata = (): Metadata => ({
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    icons: [{ rel: "icon", url: "/favicon.png" }],
    authors: [...siteConfig.authors],
    description: siteConfig.description,
    keywords: [...siteConfig.seo.keywords],
    openGraph: {
        type: "website",
        siteName: siteConfig.name,
        locale: "en_US",
        images: [
            {
                url: siteConfig.seo.openGraph.image,
                alt: siteConfig.seo.openGraph.imageAlt,
                width: siteConfig.seo.openGraph.imageWidth,
                height: siteConfig.seo.openGraph.imageHeight,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
});

/**
 * Builds unique metadata for an indexable page.
 *
 * @param input - Title, description, path, and optional article fields.
 * @returns Next.js metadata including canonical and Open Graph tags.
 */
export const createPageMetadata = ({
    title,
    description,
    path,
    image,
    type = "website",
    publishedTime,
}: PageMetadataInput): Metadata => {
    const url = getCanonicalUrl(path);
    const ogImage = image ?? siteConfig.seo.openGraph.image;

    return {
        title: {
            absolute: title,
        },
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            type,
            images: [
                {
                    url: ogImage,
                    alt: title,
                    width: siteConfig.seo.openGraph.imageWidth,
                    height: siteConfig.seo.openGraph.imageHeight,
                },
            ],
            ...(publishedTime ? { publishedTime } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
};

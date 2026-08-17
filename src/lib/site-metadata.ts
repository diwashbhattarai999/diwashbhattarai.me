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
    authors: [...siteConfig.authors],
    description: siteConfig.description,
    icons: [{ rel: "icon", url: "/favicon.png" }],
    keywords: [...siteConfig.seo.keywords],
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        images: [
            {
                alt: siteConfig.seo.openGraph.imageAlt,
                height: siteConfig.seo.openGraph.imageHeight,
                url: siteConfig.seo.openGraph.image,
                width: siteConfig.seo.openGraph.imageWidth,
            },
        ],
        locale: "en_US",
        siteName: siteConfig.name,
        type: "website",
    },
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
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
        alternates: {
            canonical: url,
        },
        description,
        openGraph: {
            description,
            images: [
                {
                    alt: title,
                    height: siteConfig.seo.openGraph.imageHeight,
                    url: ogImage,
                    width: siteConfig.seo.openGraph.imageWidth,
                },
            ],
            siteName: siteConfig.name,
            title,
            type,
            url,
            ...(publishedTime ? { publishedTime } : {}),
        },
        title: {
            absolute: title,
        },
        twitter: {
            card: "summary_large_image",
            description,
            title,
        },
    };
};

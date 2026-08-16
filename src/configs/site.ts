import type { MetadataRoute } from "next";

import { env } from "@/env/client";
import type { SiteConfig, ThemeColors } from "@/types/site";

const PWA_MANIFEST_ICONS: MetadataRoute.Manifest["icons"] = [
    {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
    },
    {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
    },
];

/**
 * Site-wide configuration for metadata, PWA, and social links.
 */
export const siteConfig: SiteConfig = {
    title: "Diwash Bhattarai | Portfolio",
    shortTitle: "Diwash Bhattarai",
    description:
        "I am Diwash Bhattarai, a Full Stack Web Developer specializing in modern, responsive, and high-performance web applications.",
    url: env.NEXT_PUBLIC_APP_URL,
    contactEmail: "diwashb999@gmail.com",
    authors: [
        { name: "Diwash Bhattarai", url: env.NEXT_PUBLIC_APP_URL },
        { name: "दिवस भट्टराई", url: "https://github.com/diwashbhattarai999" },
    ],
    seo: {
        keywords: [
            "Diwash Bhattarai",
            "Full Stack Developer",
            "Web Development",
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Frontend",
            "Backend",
            "portfolio",
        ],
        openGraph: {
            type: "website",
            image: "/og-image.png",
            imageWidth: 1200,
            imageHeight: 630,
            imageAlt: "Diwash Bhattarai Portfolio",
        },
    },
    pwa: {
        display: "standalone",
        backgroundColor: "#25252e",
        themeColor: "#5e608f",
        icons: PWA_MANIFEST_ICONS,
    },
    social: {
        github: "https://github.com/diwashbhattarai999",
        linkedin: "https://www.linkedin.com/in/diwashb",
        instagram: "https://www.instagram.com/diwash81/",
        email: "mailto:diwashb999@gmail.com",
        resume: "https://drive.google.com/file/d/1dlgquCAYdXZ14LpVLHtSKFDKoqlQE1WJ/view?usp=sharing",
    },
};

/**
 * Theme colors used in metadata and the document head.
 */
export const META_THEME_COLORS: ThemeColors = {
    light: "#ffffff",
    dark: "#09090b",
} as const;

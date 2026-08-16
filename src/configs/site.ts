import type { MetadataRoute } from "next";

import { env } from "@/env/client";
import type { SiteConfig, ThemeColors } from "@/types/site";

const TRAILING_SLASH_PATTERN = /\/$/;
const SITE_ORIGIN = env.NEXT_PUBLIC_APP_URL.replace(TRAILING_SLASH_PATTERN, "");

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
    name: "Diwash Bhattarai",
    title: "Diwash Bhattarai | Full Stack Software Developer in Nepal",
    shortTitle: "Diwash Bhattarai",
    jobTitle: "Full Stack Software Developer",
    location: "Nepal",
    description:
        "Diwash Bhattarai is a full stack software developer from Nepal specializing in React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, and scalable web applications.",
    url: SITE_ORIGIN,
    contactEmail: "diwashb999@gmail.com",
    knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "REST APIs",
        "Microservices",
        "Software Architecture",
    ],
    authors: [
        { name: "Diwash Bhattarai", url: SITE_ORIGIN },
        { name: "दिवस भट्टराई", url: "https://github.com/diwashbhattarai999" },
    ],
    seo: {
        keywords: [
            "Diwash Bhattarai",
            "Full Stack Software Developer",
            "Software Developer",
            "Software Engineer",
            "Software Developer in Nepal",
            "React",
            "Next.js",
            "Node.js",
            "NestJS",
            "TypeScript",
            "PostgreSQL",
        ],
        openGraph: {
            type: "website",
            image: "/og-image.png",
            imageWidth: 1200,
            imageHeight: 630,
            imageAlt: "Diwash Bhattarai, Full Stack Software Developer",
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

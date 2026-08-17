import type { MetadataRoute } from "next";

import { env } from "@/env/client";
import type { SiteConfig, ThemeColors } from "@/types/site";

const TRAILING_SLASH_PATTERN = /\/$/;
const SITE_ORIGIN = env.NEXT_PUBLIC_APP_URL.replace(TRAILING_SLASH_PATTERN, "");

const PWA_MANIFEST_ICONS: MetadataRoute.Manifest["icons"] = [
    {
        sizes: "192x192",
        src: "/android-chrome-192x192.png",
        type: "image/png",
    },
    {
        sizes: "512x512",
        src: "/android-chrome-512x512.png",
        type: "image/png",
    },
];

/**
 * Site-wide configuration for metadata, PWA, and social links.
 */
export const siteConfig: SiteConfig = {
    authors: [
        { name: "Diwash Bhattarai", url: SITE_ORIGIN },
        { name: "दिवस भट्टराई", url: "https://github.com/diwashbhattarai999" },
    ],
    contactEmail: "diwashb999@gmail.com",
    description:
        "Diwash Bhattarai is a full stack software developer from Nepal specializing in React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, and scalable web applications.",
    jobTitle: "Full Stack Software Developer",
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
    location: "Nepal",
    name: "Diwash Bhattarai",
    pwa: {
        backgroundColor: "#25252e",
        display: "standalone",
        icons: PWA_MANIFEST_ICONS,
        themeColor: "#5e608f",
    },
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
            image: "/og-image.png",
            imageAlt: "Diwash Bhattarai, Full Stack Software Developer",
            imageHeight: 630,
            imageWidth: 1200,
            type: "website",
        },
    },
    shortTitle: "Diwash Bhattarai",
    social: {
        email: "mailto:diwashb999@gmail.com",
        github: "https://github.com/diwashbhattarai999",
        instagram: "https://www.instagram.com/diwash81/",
        linkedin: "https://www.linkedin.com/in/diwashb",
        resume: "https://drive.google.com/file/d/1dlgquCAYdXZ14LpVLHtSKFDKoqlQE1WJ/view?usp=sharing",
    },
    title: "Diwash Bhattarai | Full Stack Software Developer in Nepal",
    url: SITE_ORIGIN,
};

/**
 * Theme colors used in metadata and the document head.
 */
export const META_THEME_COLORS: ThemeColors = {
    dark: "#09090b",
    light: "#ffffff",
} as const;

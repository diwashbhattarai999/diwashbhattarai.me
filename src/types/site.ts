import type { MetadataRoute } from "next";

export interface SiteSeoConfig {
    keywords: string[];
    openGraph: {
        type: "website";
        image: string;
        imageWidth: number;
        imageHeight: number;
        imageAlt: string;
    };
}

export interface SiteConfig {
    authors: readonly {
        name: string;
        url: string;
    }[];
    contactEmail: string;
    description: string;
    pwa: {
        display: MetadataRoute.Manifest["display"];
        backgroundColor: string;
        themeColor: string;
        icons: MetadataRoute.Manifest["icons"];
    };
    seo: SiteSeoConfig;
    shortTitle: string;
    social: {
        github: string;
        linkedin: string;
        instagram: string;
        email: string;
        resume: string;
    };
    title: string;
    url: string;
}

export interface ThemeColors {
    dark: string;
    light: string;
}

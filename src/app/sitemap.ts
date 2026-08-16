import type { MetadataRoute } from "next";

import { ROUTES } from "@/configs/routes";
import { EXPERIENCE_DETAILS } from "@/features/experience/constants/experience.constants";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import { getBaseUrl } from "@/lib/get-base-url";
import { getAllPosts } from "@/lib/mdx";

/**
 * Generates the sitemap for all indexable portfolio routes.
 *
 * @returns Sitemap entries for search engines.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const origin = getBaseUrl();
    const lastModified = new Date();

    const staticRoutes = [
        { path: ROUTES.HOME, changeFrequency: "weekly" as const, priority: 1 },
        { path: ROUTES.ABOUT, changeFrequency: "monthly" as const, priority: 0.8 },
        { path: ROUTES.EXPERIENCE, changeFrequency: "monthly" as const, priority: 0.8 },
        { path: ROUTES.PROJECTS, changeFrequency: "weekly" as const, priority: 0.9 },
        { path: ROUTES.BLOGS, changeFrequency: "weekly" as const, priority: 0.7 },
        { path: ROUTES.SKILLS, changeFrequency: "monthly" as const, priority: 0.6 },
        { path: ROUTES.EDUCATION, changeFrequency: "yearly" as const, priority: 0.5 },
        { path: ROUTES.RESUME, changeFrequency: "monthly" as const, priority: 0.7 },
    ];

    const experienceRoutes = EXPERIENCE_DETAILS.map((experience) => ({
        url: `${origin}${ROUTES.EXPERIENCE_DETAIL(experience.slug)}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const projectRoutes = PROJECTS.map((project) => ({
        url: `${origin}${ROUTES.PROJECT(project.id)}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const blogRoutes = getAllPosts().map((post) => ({
        url: `${origin}${ROUTES.BLOG(post.slug)}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly" as const,
        priority: 0.6,
    }));

    return [
        ...staticRoutes.map((route) => ({
            url: route.path === ROUTES.HOME ? origin : `${origin}${route.path}`,
            lastModified,
            changeFrequency: route.changeFrequency,
            priority: route.priority,
        })),
        ...experienceRoutes,
        ...projectRoutes,
        ...blogRoutes,
    ];
}

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
        { changeFrequency: "weekly" as const, path: ROUTES.HOME, priority: 1 },
        { changeFrequency: "monthly" as const, path: ROUTES.ABOUT, priority: 0.8 },
        { changeFrequency: "monthly" as const, path: ROUTES.EXPERIENCE, priority: 0.8 },
        { changeFrequency: "weekly" as const, path: ROUTES.PROJECTS, priority: 0.9 },
        { changeFrequency: "weekly" as const, path: ROUTES.BLOGS, priority: 0.7 },
        { changeFrequency: "monthly" as const, path: ROUTES.SKILLS, priority: 0.6 },
        { changeFrequency: "yearly" as const, path: ROUTES.EDUCATION, priority: 0.5 },
        { changeFrequency: "monthly" as const, path: ROUTES.RESUME, priority: 0.7 },
    ];

    const experienceRoutes = EXPERIENCE_DETAILS.map((experience) => ({
        changeFrequency: "monthly" as const,
        lastModified,
        priority: 0.7,
        url: `${origin}${ROUTES.EXPERIENCE_DETAIL(experience.slug)}`,
    }));

    const projectRoutes = PROJECTS.map((project) => ({
        changeFrequency: "monthly" as const,
        lastModified,
        priority: 0.7,
        url: `${origin}${ROUTES.PROJECT(project.id)}`,
    }));

    const blogRoutes = getAllPosts().map((post) => ({
        changeFrequency: "yearly" as const,
        lastModified: new Date(post.date),
        priority: 0.6,
        url: `${origin}${ROUTES.BLOG(post.slug)}`,
    }));

    return [
        ...staticRoutes.map((route) => ({
            changeFrequency: route.changeFrequency,
            lastModified,
            priority: route.priority,
            url: route.path === ROUTES.HOME ? origin : `${origin}${route.path}`,
        })),
        ...experienceRoutes,
        ...projectRoutes,
        ...blogRoutes,
    ];
}

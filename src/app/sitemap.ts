import type { MetadataRoute } from "next";

import { ROUTES } from "@/configs/routes";
import { EDUCATION_DETAILS } from "@/features/education/constants/education.constants";
import { EXPERIENCE_DETAILS } from "@/features/experience/constants/experience.constants";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import { getCanonicalUrl } from "@/lib/get-base-url";
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
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
        { changeFrequency: "yearly" as const, path: ROUTES.PRIVACY_POLICY, priority: 0.3 },
        { changeFrequency: "yearly" as const, path: ROUTES.TERMS, priority: 0.3 },
    ];

    const educationRoutes = EDUCATION_DETAILS.map((education) => ({
        changeFrequency: "yearly" as const,
        lastModified,
        priority: 0.5,
        url: getCanonicalUrl(ROUTES.EDUCATION_DETAIL(education.id)),
    }));

    const experienceRoutes = EXPERIENCE_DETAILS.map((experience) => ({
        changeFrequency: "monthly" as const,
        lastModified,
        priority: 0.7,
        url: getCanonicalUrl(ROUTES.EXPERIENCE_DETAIL(experience.slug)),
    }));

    const projectRoutes = PROJECTS.map((project) => ({
        changeFrequency: "monthly" as const,
        lastModified,
        priority: 0.7,
        url: getCanonicalUrl(ROUTES.PROJECT(project.id)),
    }));

    const blogRoutes = getAllPosts().map((post) => ({
        changeFrequency: "yearly" as const,
        lastModified: new Date(post.date),
        priority: 0.6,
        url: getCanonicalUrl(ROUTES.BLOG(post.slug)),
    }));

    const staticSitemapRoutes = staticRoutes.map((route) => ({
        changeFrequency: route.changeFrequency,
        lastModified,
        priority: route.priority,
        url: getCanonicalUrl(route.path),
    }));

    return [...staticSitemapRoutes, ...educationRoutes, ...experienceRoutes, ...projectRoutes, ...blogRoutes];
}

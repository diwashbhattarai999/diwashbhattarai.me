import { ROUTES } from "@/configs/routes";
import { EDUCATION_DETAILS } from "@/features/education/constants/education.constants";
import { EXPERIENCE_DETAILS } from "@/features/experience/constants/experience.constants";
import type { SitemapGroup } from "@/features/legal/types/legal.types";
import { PROJECTS } from "@/features/projects/constants/project.constants";
import { getAllPosts } from "@/lib/mdx";

/**
 * Builds grouped links for the human-readable sitemap page.
 *
 * @returns Sitemap sections covering main pages, work, writing, and legal pages.
 */
export const getHtmlSitemapGroups = (): SitemapGroup[] => [
    {
        links: [
            { href: ROUTES.HOME, label: "Home" },
            { href: ROUTES.ABOUT, label: "About" },
            { href: ROUTES.SKILLS, label: "Skills" },
            { href: ROUTES.RESUME, label: "Resume" },
        ],
        title: "Main",
    },
    {
        links: [
            { href: ROUTES.PROJECTS, label: "All projects" },
            ...PROJECTS.map((project) => ({
                href: ROUTES.PROJECT(project.id),
                label: project.title,
            })),
        ],
        title: "Projects",
    },
    {
        links: [{ href: ROUTES.PROJECTS_STARTERS, label: "Starters and templates" }],
        title: "Starters",
    },
    {
        links: [
            { href: ROUTES.EXPERIENCE, label: "All experience" },
            ...EXPERIENCE_DETAILS.map((experience) => ({
                href: ROUTES.EXPERIENCE_DETAIL(experience.slug),
                label: `${experience.title} at ${experience.company}`,
            })),
        ],
        title: "Experience",
    },
    {
        links: [
            { href: ROUTES.EDUCATION, label: "All education" },
            ...EDUCATION_DETAILS.map((education) => ({
                href: ROUTES.EDUCATION_DETAIL(education.id),
                label: education.institution,
            })),
        ],
        title: "Education",
    },
    {
        links: [
            { href: ROUTES.BLOGS, label: "All posts" },
            ...getAllPosts().map((post) => ({
                href: ROUTES.BLOG(post.slug),
                label: post.title,
            })),
        ],
        title: "Writing",
    },
    {
        links: [
            { href: ROUTES.PRIVACY_POLICY, label: "Privacy Policy" },
            { href: ROUTES.TERMS, label: "Terms and Conditions" },
            { href: ROUTES.SITEMAP, label: "Sitemap" },
        ],
        title: "Legal",
    },
];

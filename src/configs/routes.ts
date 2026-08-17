export const ROUTES = {
    ABOUT: "/about",
    BLOG: (slug: string) => `/blogs/${slug}`,
    BLOGS: "/blogs",
    EDUCATION: "/education",
    EXPERIENCE: "/experience",
    EXPERIENCE_DETAIL: (slug: string) => `/experience/${slug}`,
    HOME: "/",
    PROJECT: (projectId: string) => `/projects/${projectId}`,
    PROJECTS: "/projects",
    RESUME: "/resume",
    RESUME_PDF: "/resume.pdf",
    SKILLS: "/skills",
} as const;

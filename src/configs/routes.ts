export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    EXPERIENCE: "/experience",
    EXPERIENCE_DETAIL: (slug: string) => `/experience/${slug}`,
    EDUCATION: "/education",
    SKILLS: "/skills",
    PROJECTS: "/projects",
    PROJECT: (projectId: string) => `/projects/${projectId}`,
    BLOGS: "/blogs",
    BLOG: (slug: string) => `/blogs/${slug}`,
    RESUME: "/resume",
    RESUME_PDF: "/resume.pdf",
} as const;

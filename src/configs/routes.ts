export const ROUTES = {
    HOME: "/",
    PROJECTS: "/projects",
    PROJECT: (projectId: string) => `/projects/${projectId}`,
    BLOGS: "/blogs",
    BLOG: (slug: string) => `/blogs/${slug}`,
} as const;

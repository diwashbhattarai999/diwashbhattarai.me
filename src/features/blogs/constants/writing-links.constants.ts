import { ROUTES } from "@/configs/routes";

export interface WritingLink {
    href: string;
    label: string;
}

export const WRITING_LINKS = {
    backendNode: {
        href: ROUTES.BLOG("How-to-become-a-backend-developer-with-nodejs"),
        label: "How to become a backend developer with Node.js",
    },
    fullStackNepal: {
        href: ROUTES.BLOG("How-to-become-a-full-stack-developer-in-nepal"),
        label: "How to become a full stack developer in Nepal",
    },
    khaltiNext: {
        href: ROUTES.BLOG("Integrating-khalti-in-nextjs"),
        label: "Integrating Khalti checkout in Next.js",
    },
    multiTenantPostgres: {
        href: ROUTES.BLOG("Modeling-multi-tenant-data-in-postgresql"),
        label: "Modeling multi-tenant data in PostgreSQL",
    },
    nextSeo: {
        href: ROUTES.BLOG("How-to-build-seo-friendly-apps-with-nextjs"),
        label: "How to build SEO-friendly apps with Next.js",
    },
    permissionDashboards: {
        href: ROUTES.BLOG("Building-permission-driven-dashboards-in-nextjs"),
        label: "Building permission-driven dashboards in Next.js",
    },
    reactDeveloper: {
        href: ROUTES.BLOG("How-to-become-a-react-developer"),
        label: "How to become a React developer",
    },
    scaleApis: {
        href: ROUTES.BLOG("How-to-scale-apis-with-nodejs"),
        label: "How to scale APIs with Node.js",
    },
    tanstackDocker: {
        href: ROUTES.BLOG("Dockerizing-tanstack-start-app"),
        label: "Dockerizing a TanStack Start app",
    },
    tanstackStructure: {
        href: ROUTES.BLOG("Structuring-production-grade-tanstack-start-app"),
        label: "Structuring a production-grade TanStack Start app",
    },
} as const satisfies Record<string, WritingLink>;

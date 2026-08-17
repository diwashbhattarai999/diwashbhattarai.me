import { WRITING_LINKS } from "@/features/blogs/constants/writing-links.constants";
import type { StarterRepo } from "@/features/projects/types/starter.types";

export const STARTER_REPOS: StarterRepo[] = [
    {
        description:
            "A production-oriented Next.js starter with TypeScript, Tailwind CSS 4, shadcn/ui, TanStack Query, i18n, multi-theme support, and a feature-based architecture — so you can ship features, not boilerplate.",
        githubUrl: "https://github.com/diwashbhattarai999/nextjs-frontend-starter",
        id: "nextjs-frontend-starter",
        liveUrl: "https://next-starter.diwashb.com.np",
        relatedWriting: [WRITING_LINKS.nextSeo, WRITING_LINKS.permissionDashboards],
        skills: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "TanStack Query",
            "Zustand",
            "Zod",
            "next-intl",
            "Docker",
            "GitHub Actions",
        ],
        title: "Next.js Frontend Starter",
    },
    {
        description:
            "A TanStack Start starter for full stack React apps. The production folder shape and Docker multi-stage build for this stack are documented on the blog.",
        githubUrl: "https://github.com/diwashbhattarai999/tanstack-start-starter",
        id: "tanstack-start-starter",
        relatedWriting: [WRITING_LINKS.tanstackStructure, WRITING_LINKS.tanstackDocker],
        skills: ["TanStack Start", "React", "TypeScript"],
        title: "TanStack Start Starter",
    },
    {
        description:
            "A production-ready Node.js + Express backend template in TypeScript, with MongoDB, Zod validation, logging, rate limiting, English/Nepali i18n, and Prometheus metrics.",
        githubUrl: "https://github.com/diwashbhattarai999/node-express-template",
        id: "node-express-template",
        relatedWriting: [WRITING_LINKS.backendNode, WRITING_LINKS.scaleApis],
        skills: ["Node.js", "Express", "TypeScript", "MongoDB", "Zod", "i18next", "Winston", "Prometheus"],
        title: "Node.js Express Template",
    },
];

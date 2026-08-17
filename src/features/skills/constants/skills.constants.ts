import { Code, Database, Layout, Server } from "lucide-react";

import CSS from "@/assets/icons/css.svg";
import Docker from "@/assets/icons/docker.svg";
import Express from "@/assets/icons/express.svg";
import Figma from "@/assets/icons/figma.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Git from "@/assets/icons/git.svg";
import GitHub from "@/assets/icons/github.svg";
import GithubActions from "@/assets/icons/github-actions.svg";
import HTML from "@/assets/icons/html.svg";
import JS from "@/assets/icons/js.svg";
import Kafka from "@/assets/icons/kafka.svg";
import Linux from "@/assets/icons/linux.svg";
import Microservices from "@/assets/icons/microservices.svg";
import MongoDB from "@/assets/icons/mongodb.svg";
import Nest from "@/assets/icons/nestjs.svg";
import Next from "@/assets/icons/next.svg";
import Node from "@/assets/icons/node.svg";
import NPM from "@/assets/icons/npm.svg";
import Postgres from "@/assets/icons/postgresql.svg";
import Postman from "@/assets/icons/postman.svg";
import PWA from "@/assets/icons/pwa.svg";
import React from "@/assets/icons/react.svg";
import Redis from "@/assets/icons/redis.svg";
import Redux from "@/assets/icons/redux.svg";
import Responsive from "@/assets/icons/responsive.svg";
import Rest from "@/assets/icons/rest.svg";
import SASS from "@/assets/icons/sass.svg";
import Shadcn from "@/assets/icons/shadcn.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import TanstackQuery from "@/assets/icons/tanstack-query.svg";
import TS from "@/assets/icons/ts.svg";
import VSCode from "@/assets/icons/vscode.svg";
import WebRTC from "@/assets/icons/webrtc.svg";
import Zod from "@/assets/icons/zod.svg";
import type { SkillCategory } from "@/features/skills/types/skills.types";

export const SKILLS: SkillCategory[] = [
    {
        description:
            "This is the client-side stack I use as a React and Next.js developer. HTML, CSS, JavaScript, and TypeScript sit under React and Next.js apps with Tailwind CSS and Shadcn UI. Redux Toolkit, TanStack Query, React Hook Form, and Zod show up on permission-driven dashboards. SASS, responsive design, and PWA work sit alongside that product UI. I used this layer at Plex Bit Infosystems, Upachaar Nepal, Fact Digi, and KSW Techzone.",
        icon: Layout,
        skills: [
            { icon: HTML, name: "HTML" },
            { icon: CSS, name: "CSS" },
            { icon: JS, name: "JavaScript" },
            { icon: TS, name: "TypeScript" },
            { icon: React, name: "React" },
            { icon: Next, name: "Next.js" },
            { icon: Redux, name: "Redux Toolkit" },
            { icon: TanstackQuery, name: "TanStack Query" },
            { icon: React, name: "React Hook Form" },
            { icon: Zod, name: "Zod" },
            { icon: Shadcn, name: "Shadcn UI" },
            { icon: Tailwind, name: "Tailwind CSS" },
            { icon: SASS, name: "SASS" },
            { icon: Responsive, name: "Responsive Design" },
            { icon: PWA, name: "PWA" },
        ],
        title: "Frontend",
    },
    {
        description:
            "Backend work here is Node.js with Express.js and NestJS, plus REST APIs and microservices. At Upachaar Nepal I used this stack for healthcare services, including Apache Kafka and Redis for event-driven communication and WebRTC for video consulting. Node.js also appears on later full stack product work at Plex Bit Infosystems.",
        icon: Server,
        skills: [
            { icon: Node, name: "Node.js" },
            { icon: Express, name: "Express.js" },
            { icon: Nest, name: "NestJS" },
            { icon: Kafka, name: "Apache Kafka" },
            { icon: WebRTC, name: "WebRTC" },
            { icon: Rest, name: "REST APIs" },
            { icon: Microservices, name: "Microservices Architecture" },
        ],
        title: "Backend",
    },
    {
        description:
            "PostgreSQL and MongoDB are the primary datastores from Upachaar Nepal healthcare services. Redis supported event-driven flows with Kafka. Firebase is part of that same platform skill set. These databases are how product data, sessions, and async work actually persist — not only how the UI is rendered.",
        icon: Database,
        skills: [
            { icon: MongoDB, name: "MongoDB" },
            { icon: Postgres, name: "PostgreSQL" },
            { icon: Firebase, name: "Firebase" },
            { icon: Redis, name: "Redis" },
        ],
        title: "Database",
    },
    {
        description:
            "Git and GitHub are the daily version control workflow. At Fact Digi I used GitHub Actions, Docker, Nginx, and AWS EC2 to ship frontend apps. Linux, VS Code, Postman, and npm are the rest of the local and API toolchain. Figma is how UI collaboration happens. At Upachaar Nepal, npm and GitHub Packages were also how reusable UI libraries were published.",
        icon: Code,
        skills: [
            { icon: Linux, name: "Linux" },
            { icon: Git, name: "Git" },
            { icon: GitHub, name: "GitHub" },
            { icon: GithubActions, name: "GitHub Actions" },
            { icon: Docker, name: "Docker" },
            { icon: VSCode, name: "VS Code" },
            { icon: Postman, name: "Postman" },
            { icon: NPM, name: "NPM" },
            { icon: Figma, name: "Figma" },
        ],
        title: "Tools & Others",
    },
];

export const SKILLS_INTRO = [
    "This is the technical stack I use as a full stack software developer in Nepal. It is grouped the way I actually work: frontend product UI, backend services, data stores, and the tools that wrap shipping and collaboration.",
    "I do not treat these names as a bingo card. React, Next.js, Node.js, NestJS, TypeScript, and PostgreSQL are the core of recent production work at Plex Bit Infosystems and Upachaar Nepal. The rest of the list is what those products needed — payments, caching, CI/CD, or UI primitives.",
] as const;

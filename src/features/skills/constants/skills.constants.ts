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

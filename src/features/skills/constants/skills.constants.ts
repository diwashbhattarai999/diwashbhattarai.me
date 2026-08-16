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
        title: "Frontend",
        icon: Layout,
        skills: [
            { name: "HTML", icon: HTML },
            { name: "CSS", icon: CSS },
            { name: "JavaScript", icon: JS },
            { name: "TypeScript", icon: TS },
            { name: "React", icon: React },
            { name: "Next.js", icon: Next },
            { name: "Redux Toolkit", icon: Redux },
            { name: "TanStack Query", icon: TanstackQuery },
            { name: "React Hook Form", icon: React },
            { name: "Zod", icon: Zod },
            { name: "Shadcn UI", icon: Shadcn },
            { name: "Tailwind CSS", icon: Tailwind },
            { name: "SASS", icon: SASS },
            { name: "Responsive Design", icon: Responsive },
            { name: "PWA", icon: PWA },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        skills: [
            { name: "Node.js", icon: Node },
            { name: "Express.js", icon: Express },
            { name: "NestJS", icon: Nest },
            { name: "Apache Kafka", icon: Kafka },
            { name: "WebRTC", icon: WebRTC },
            { name: "REST APIs", icon: Rest },
            { name: "Microservices Architecture", icon: Microservices },
        ],
    },
    {
        title: "Database",
        icon: Database,
        skills: [
            { name: "MongoDB", icon: MongoDB },
            { name: "PostgreSQL", icon: Postgres },
            { name: "Firebase", icon: Firebase },
            { name: "Redis", icon: Redis },
        ],
    },
    {
        title: "Tools & Others",
        icon: Code,
        skills: [
            { name: "Linux", icon: Linux },
            { name: "Git", icon: Git },
            { name: "GitHub", icon: GitHub },
            { name: "GitHub Actions", icon: GithubActions },
            { name: "Docker", icon: Docker },
            { name: "VS Code", icon: VSCode },
            { name: "Postman", icon: Postman },
            { name: "NPM", icon: NPM },
            { name: "Figma", icon: Figma },
        ],
    },
];

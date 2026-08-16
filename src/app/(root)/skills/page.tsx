import { ROUTES } from "@/configs/routes";
import { SkillsPage } from "@/features/skills/components/skills-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Skills | Diwash Bhattarai",
    description:
        "Technical stack of Diwash Bhattarai: React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, and related tools.",
    path: ROUTES.SKILLS,
});

export default function Page() {
    return <SkillsPage />;
}

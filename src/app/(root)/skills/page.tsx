import { ROUTES } from "@/configs/routes";
import { SkillsPage } from "@/features/skills/components/skills-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    description:
        "Technical stack of Diwash Bhattarai: React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, and related tools.",
    path: ROUTES.SKILLS,
    title: "Skills | Diwash Bhattarai",
});

export default function Page() {
    return <SkillsPage />;
}

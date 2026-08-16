import { ROUTES } from "@/configs/routes";
import { AboutPage } from "@/features/about/components/about-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "About Diwash Bhattarai | Full Stack Software Developer",
    description:
        "Learn about Diwash Bhattarai, a full stack software developer in Nepal specializing in React, Next.js, Node.js, NestJS, and TypeScript.",
    path: ROUTES.ABOUT,
});

export default function Page() {
    return <AboutPage />;
}

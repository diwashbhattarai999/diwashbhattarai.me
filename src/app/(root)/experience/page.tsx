import { ROUTES } from "@/configs/routes";
import { ExperiencePage } from "@/features/experience/components/experience-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    description:
        "Professional experience of Diwash Bhattarai as a full stack software developer, including Plex Bit Infosystems, Upachaar Nepal, Fact Digi, and KSW Techzone.",
    path: ROUTES.EXPERIENCE,
    title: "Experience | Diwash Bhattarai",
});

export default function Page() {
    return <ExperiencePage />;
}

import { ROUTES } from "@/configs/routes";
import { ResumePage } from "@/features/resume/components/resume-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Resume | Diwash Bhattarai",
    description:
        "Resume of Diwash Bhattarai, full stack software developer in Nepal. Experience, projects, technical skills, and education.",
    path: ROUTES.RESUME,
});

export default function Page() {
    return <ResumePage />;
}

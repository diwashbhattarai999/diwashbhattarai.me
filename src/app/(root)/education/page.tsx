import { ROUTES } from "@/configs/routes";
import { EducationPage } from "@/features/education/components/education-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: "Education | Diwash Bhattarai",
    description:
        "Education of Diwash Bhattarai, including a B.Sc. CSIT from Bhaktapur Multiple Campus and prior studies in Nepal.",
    path: ROUTES.EDUCATION,
});

export default function Page() {
    return <EducationPage />;
}

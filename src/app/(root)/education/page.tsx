import { ROUTES } from "@/configs/routes";
import { EducationPage } from "@/features/education/components/education-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    description:
        "Education of Diwash Bhattarai, including a B.Sc. CSIT from Bhaktapur Multiple Campus and prior studies in Nepal.",
    path: ROUTES.EDUCATION,
    title: "Education | Diwash Bhattarai",
});

export default function Page() {
    return <EducationPage />;
}

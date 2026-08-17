import type { Metadata } from "next";

import { ROUTES } from "@/configs/routes";
import { EducationDetailPage } from "@/features/education/components/education-detail-page";
import { EDUCATION_DETAILS, getEducationById } from "@/features/education/constants/education.constants";
import { createPageMetadata } from "@/lib/site-metadata";

interface EducationRouteProps {
    params: Promise<{ educationId: string }>;
}

export const generateStaticParams = () =>
    EDUCATION_DETAILS.map((education) => ({ educationId: education.id }));

export const generateMetadata = async ({ params }: EducationRouteProps): Promise<Metadata> => {
    const { educationId } = await params;
    const education = getEducationById(educationId);

    if (!education) {
        return {};
    }

    return createPageMetadata({
        description: education.description,
        image: education.image.src,
        path: ROUTES.EDUCATION_DETAIL(educationId),
        title: `${education.institution} | Education`,
    });
};

export default async function Page({ params }: EducationRouteProps) {
    const { educationId } = await params;

    return <EducationDetailPage educationId={educationId} />;
}

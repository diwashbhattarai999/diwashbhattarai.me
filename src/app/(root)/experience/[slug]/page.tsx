import type { Metadata } from "next";

import { ROUTES } from "@/configs/routes";
import { ExperienceDetailPage } from "@/features/experience/components/experience-detail-page";
import {
    EXPERIENCE_DETAILS,
    getExperienceBySlug,
    getExperienceSummary,
} from "@/features/experience/constants/experience.constants";
import { createPageMetadata } from "@/lib/site-metadata";

interface ExperienceRouteProps {
    params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => EXPERIENCE_DETAILS.map((experience) => ({ slug: experience.slug }));

export const generateMetadata = async ({ params }: ExperienceRouteProps): Promise<Metadata> => {
    const { slug } = await params;
    const experience = getExperienceBySlug(slug);

    if (!experience) {
        return {};
    }

    return createPageMetadata({
        description: getExperienceSummary(experience.description),
        path: ROUTES.EXPERIENCE_DETAIL(slug),
        title: `${experience.title} at ${experience.company} | Diwash Bhattarai`,
    });
};

export default async function Page({ params }: ExperienceRouteProps) {
    const { slug } = await params;

    return <ExperienceDetailPage slug={slug} />;
}

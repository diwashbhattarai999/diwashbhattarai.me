import { Briefcase } from "lucide-react";
import Link from "next/link";

import { SectionCard } from "@/components/shared/section-items";
import { ROUTES } from "@/configs/routes";
import {
    EXPERIENCE_DETAILS,
    getExperienceSummary,
} from "@/features/experience/constants/experience.constants";
import type { ExperienceDetail } from "@/features/experience/types/experience.types";

const COMPACT_SKILL_LIMIT = 4;

interface ExperienceListProps {
    compact?: boolean;
    limit?: number;
}

/**
 * Experience cards for listing surfaces.
 *
 * @param compact - When true, shows summary text and fewer skills only.
 * @param limit - Optional number of roles to show.
 */
export const ExperienceList = ({ limit, compact = false }: ExperienceListProps) => {
    const items = limit ? EXPERIENCE_DETAILS.slice(0, limit) : EXPERIENCE_DETAILS;

    return (
        <div className={compact ? "grid gap-4" : "grid gap-8"}>
            {items.map((experience) => (
                <ExperienceCard compact={compact} experience={experience} key={experience.slug} />
            ))}
        </div>
    );
};

interface ExperienceCardProps {
    compact?: boolean;
    experience: ExperienceDetail;
}

/**
 * Single role card with optional compact homepage presentation.
 *
 * @param experience - Experience record from the shared data source.
 * @param compact - When true, omits projects and website links.
 */
const ExperienceCard = ({ experience, compact = false }: ExperienceCardProps) => {
    const description = compact ? getExperienceSummary(experience.description) : experience.description;
    const skills = compact ? experience.skills.slice(0, COMPACT_SKILL_LIMIT) : experience.skills;

    return (
        <SectionCard
            current={experience.current}
            description={description}
            Icon={Briefcase}
            projects={compact ? undefined : experience.projects}
            skills={skills}
            subtitle={`${experience.company} · ${experience.duration}`}
            title={
                <Link
                    className="transition-colors hover:text-primary"
                    href={ROUTES.EXPERIENCE_DETAIL(experience.slug)}
                >
                    {experience.title}
                </Link>
            }
            website={compact ? undefined : experience.website}
        />
    );
};

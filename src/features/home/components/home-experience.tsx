import { Briefcase } from "lucide-react";

import { SectionCard, SectionWrapper } from "@/components/shared/section-items";
import { EXPERIENCE_DETAILS } from "@/features/home/constants/experience.constants";

export const HomeExperience = () => (
    <SectionWrapper id="experience" title="Experience">
        <div className="grid gap-8">
            {EXPERIENCE_DETAILS.map((exp, index) => (
                <SectionCard
                    current={exp.current}
                    description={exp.description}
                    Icon={Briefcase}
                    // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                    key={index}
                    projects={exp.projects}
                    skills={exp.skills}
                    subtitle={`${exp.company} · ${exp.duration}`}
                    title={exp.title}
                    website={exp.website}
                />
            ))}
        </div>
    </SectionWrapper>
);

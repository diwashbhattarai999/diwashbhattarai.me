import { Briefcase } from "lucide-react";

import { SectionCard, SectionWrapper } from "@/components/section-items";
import { EXPERIENCE_DETAILS } from "@/data/experience";

interface ProjectItem {
    link?: string;
    name: string;
}

export const Experience = () => (
    <SectionWrapper id="experience" title="Experience">
        <div className="grid gap-8">
            {EXPERIENCE_DETAILS.map((exp, index) => (
                <SectionCard
                    current={exp.current}
                    description={exp.description}
                    Icon={Briefcase}
                    // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                    key={index}
                    projects={exp.projects as ProjectItem[]}
                    skills={exp.skills}
                    subtitle={`${exp.company} · ${exp.duration}`}
                    title={exp.title}
                    website={exp.website}
                />
            ))}
        </div>
    </SectionWrapper>
);

import { GraduationCap } from "lucide-react";

import { SectionCard, SectionWrapper } from "@/components/section-items";
import { EDUCATION_DETAILS } from "@/data/education";

export const Education = () => (
    <SectionWrapper id="education" title="Education">
        <div className="grid gap-8">
            {EDUCATION_DETAILS.map((edu, index) => (
                <SectionCard
                    current={edu.current}
                    description={edu.description}
                    Icon={GraduationCap}
                    // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                    key={index}
                    skills={edu.skills}
                    subtitle={`${edu.degree} · ${edu.duration}`}
                    title={edu.institution}
                />
            ))}
        </div>
    </SectionWrapper>
);

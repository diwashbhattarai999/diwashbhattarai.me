import { Briefcase } from 'lucide-react';

import { Section, SectionCard } from '@/components/section-items';
import { EXPERIENCE_DETAILS } from '@/data/experience';

export const Experience = () => {
  return (
    <Section title='Experience'>
      <div className='space-y-8'>
        {EXPERIENCE_DETAILS.map((exp, index) => (
          <SectionCard
            Icon={Briefcase}
            description={exp.description}
            key={index}
            projects={exp.projects}
            skills={exp.skills}
            subtitle={`${exp.company} · ${exp.duration}`}
            title={exp.title}
            website={exp.website}
          />
        ))}
      </div>
    </Section>
  );
};

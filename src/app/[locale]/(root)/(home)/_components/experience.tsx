import { Briefcase } from 'lucide-react';

import { SectionCard, SectionWrapper } from '@/components/section-items';
import { EXPERIENCE_DETAILS } from '@/data/experience';

type ProjectItem = { name: string; link?: string };

export const Experience = () => {
  return (
    <SectionWrapper id='experience' title='Experience'>
      <div className='grid gap-8'>
        {EXPERIENCE_DETAILS.map((exp, index) => (
          <SectionCard
            Icon={Briefcase}
            current={exp.current}
            description={exp.description}
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
};

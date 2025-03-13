import { GraduationCap } from 'lucide-react';

import { Section, SectionCard } from '@/components/section-items';
import { EDUCATION_DETAILS } from '@/data/education';

export const Education = () => {
  return (
    <Section title='Education'>
      <div className='grid gap-8'>
        {EDUCATION_DETAILS.map((edu, index) => (
          <SectionCard
            Icon={GraduationCap}
            description={edu.description}
            key={index}
            skills={edu.skills}
            subtitle={`${edu.degree} · ${edu.duration}`}
            title={edu.institution}
          />
        ))}
      </div>
    </Section>
  );
};

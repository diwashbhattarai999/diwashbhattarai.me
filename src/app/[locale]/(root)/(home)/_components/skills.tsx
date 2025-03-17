import { SectionWrapper } from '@/components/section-items';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/data/skills';

export function Skills() {
  return (
    <SectionWrapper id='skills' title='Skills'>
      <div className='grid gap-8 md:grid-cols-2'>
        {SKILLS.map((category, index) => (
          <Card className='relative' key={index}>
            <div className='line-glow' />
            <div className='line-glow right-0 left-auto' />
            <CardHeader className='flex flex-row items-center gap-4 pb-2'>
              <div className='text-primary'>
                <category.icon className='size-6' />
              </div>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    className='bg-muted text-foreground rounded-full px-3 py-1 text-sm'
                    key={skillIndex}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

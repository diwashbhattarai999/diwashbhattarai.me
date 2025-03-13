import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/data/skills';

export function Skills() {
  return (
    <section className='border-border/40 border-t py-12' id='skills'>
      <h2 className='mb-8 text-3xl font-bold'>Skills</h2>

      <div className='grid gap-8 md:grid-cols-2'>
        {SKILLS.map((category, index) => (
          <Card className='subtle-glow' key={index}>
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
    </section>
  );
}

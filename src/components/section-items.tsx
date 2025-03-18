import { LucideIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import BlurFade from './animations/blur-fade';
import BlurFadeText from './animations/blur-fade-text';

export const SectionTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <div className={cn('relative font-bold', className)}>
    {/* <h2 className='relative z-10 text-3xl'>{children}</h2> */}
    <BlurFadeText
      className='relative z-10 text-3xl'
      delay={0.08}
      text={children}
    />

    <span className='text-muted/20 pointer-events-none absolute top-1/2 left-0 z-0 -translate-y-1/2 text-6xl text-nowrap select-none md:text-[7rem]'>
      {children}
    </span>
  </div>
);

export const SectionSubTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <BlurFadeText
    className={cn('text-primary', className)}
    delay={0.1}
    text={children}
  />
);

interface ISectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<ISectionProps> = ({
  id,
  title,
  children,
  className,
}) => {
  return (
    <section
      className={cn('border-border/40 border-t px-4 py-12', className)}
      id={id}
    >
      {title && <SectionTitle className='mb-8'>{title}</SectionTitle>}
      {children}
    </section>
  );
};

export const SectionSeperator = ({ className }: { className?: string }) => {
  return (
    <div className={cn('border-input border-b border-dashed', className)} />
  );
};

interface ISectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  projects?: string[];
  website?: string;
  Icon: LucideIcon;
}

export const SectionCard: React.FC<ISectionCardProps> = ({
  title,
  subtitle,
  description,
  skills,
  projects,
  website,
  Icon,
}) => {
  return (
    <BlurFade delay={0.1}>
      <Card className='bg-card/50 relative backdrop-blur-md'>
        <div className='line-glow' />
        <div className='line-glow right-0 left-auto' />
        <CardHeader className='flex flex-row items-start gap-4'>
          <div className='bg-primary/10 rounded-full p-3'>
            <Icon className='text-primary h-6 w-6' />
          </div>
          <div>
            <CardTitle className='text-lg'>{title}</CardTitle>
            <p className='text-primary'>{subtitle}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>{description}</p>

          {/* Render skills */}
          <div className='text-muted-foreground mt-4 flex flex-wrap gap-4 text-sm'>
            {skills.map((skill, index) => (
              <span
                className='bg-muted inline-block rounded-sm px-3 py-1'
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Render projects if available */}
          {projects && projects.length > 0 && (
            <div className='mt-4'>
              <h4 className='font-bold'>Projects:</h4>
              <ul className='flex list-disc flex-wrap gap-8 pl-4'>
                {projects.map((project, index) => (
                  <li className='text-muted-foreground' key={index}>
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Render website */}
          {website && (
            <div className='mt-4'>
              <a
                className='text-primary hover:underline'
                href={website}
                rel='noopener noreferrer'
                target='_blank'
              >
                Visit Website
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </BlurFade>
  );
};

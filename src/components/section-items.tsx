import { LucideIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const SectionTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => <h2 className={cn('text-3xl font-bold', className)}>{children}</h2>;

interface ISectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <section className='border-border/40 border-t py-12'>
      <SectionTitle className='mb-8'>{title}</SectionTitle>
      {children}
    </section>
  );
};

interface ISectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  projects?: string[]; // Added projects as an optional prop
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
    <Card className='subtle-glow'>
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
        <div className='text-muted-foreground mt-4 text-sm'>
          {skills.map((skill, index) => (
            <span
              className='bg-muted mr-4 inline-block rounded-sm px-3 py-1'
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
  );
};

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, ExternalLink, Github, LucideIcon } from 'lucide-react';

import { SectionTitle, SectionWrapper } from '@/components/section-items';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PROJECTS } from '@/data/project';

const ProjectTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className='mb-4 flex flex-wrap gap-2'>
      {tags.map((tag, tagIndex) => (
        <span
          className='text-primary bg-primary/10 rounded-full px-2 py-1 text-xs'
          key={tagIndex}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

const ExternalLinkLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) => (
  <a
    className='text-foreground/60 hover:text-primary hover:bg-muted flex items-center justify-center gap-1 rounded-md px-3 py-1 transition-colors'
    href={href}
    rel='noopener noreferrer'
    target='_blank'
  >
    <Icon className='mb-1 size-4' />
    {label}
  </a>
);

const ProjectLinks = ({ demo, github }: { github: string; demo: string }) => {
  return (
    <CardFooter className='flex justify-between'>
      <ExternalLinkLink href={github} icon={Github} label='Code' />
      <ExternalLinkLink href={demo} icon={ExternalLink} label='Demo' />
    </CardFooter>
  );
};

interface IProjectsProps {
  showViewAll?: boolean;
  limit?: number;
}

export const Projects = ({ showViewAll = false, limit }: IProjectsProps) => {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <SectionWrapper id='projects'>
      <div className='mb-8 flex items-center justify-between'>
        <SectionTitle>Projects</SectionTitle>
        {showViewAll && (
          <Button asChild variant='outline'>
            <Link href='/projects'>
              View All
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        )}
      </div>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {displayedProjects.map(project => (
          <Card className='overflow-hidden pt-0' key={project.id}>
            <Link
              className='relative block h-48 w-full overflow-hidden'
              href={`/projects/${project.id}`}
            >
              <Image
                fill
                alt={project.title}
                className='object-cover object-top transition-transform duration-500 hover:scale-105'
                src={project.image || '/placeholder.svg'}
              />
            </Link>
            <CardHeader className='pb-2'>
              <Link href={`/projects/${project.id}`}>
                <CardTitle className='hover:text-primary transition-colors'>
                  {project.title}
                </CardTitle>
              </Link>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className='pb-2'>
              <ProjectTags tags={project.tags} />
            </CardContent>

            <ProjectLinks demo={project.demo} github={project.github} />
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

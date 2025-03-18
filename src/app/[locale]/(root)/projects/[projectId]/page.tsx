import Image from 'next/image';
import { notFound } from 'next/navigation';

import { ExternalLink, Github } from 'lucide-react';

import BlurFade from '@/components/animations/blur-fade';
import BlurFadeText from '@/components/animations/blur-fade-text';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { PROJECTS } from '@/data/project';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const BreadcrumbNavigation = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => (
  <Breadcrumb className={className}>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href='/projects'>Projects</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>{title}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const project = PROJECTS.find(({ id }) => id === projectId);
  if (!project) notFound();

  return (
    <div className='px-6 py-8'>
      <BlurFade delay={0.06}>
        <BreadcrumbNavigation className='mb-8' title={project.title} />
      </BlurFade>

      {/* Project Header */}
      <div className='mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center'>
        <BlurFadeText
          className='text-4xl font-bold md:text-5xl'
          delay={0.08}
          text={project.title}
        />
        <BlurFade delay={0.08}>
          <div className='flex gap-3'>
            <a
              href={project.liveUrl}
              rel='noopener noreferrer'
              target='_blank'
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-auto rounded-full py-1.5'
              )}
            >
              <ExternalLink size={14} />
              <span>Live URL</span>
            </a>
            <a
              href={project.githubUrl}
              rel='noopener noreferrer'
              target='_blank'
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-auto rounded-full py-1.5'
              )}
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </BlurFade>
      </div>

      {/* Project Image */}
      <BlurFade delay={0.1}>
        <div className='relative mb-12 aspect-video overflow-hidden rounded-xl border'>
          <Image
            fill
            alt={project.title}
            className='object-cover object-top'
            src={project.image || '/placeholder.svg'}
          />
        </div>
      </BlurFade>

      {/* Overview Section */}
      <BlurFade delay={0.12}>
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>Overview</h2>
          <p className='mb-4 text-zinc-300'>{project.overview}</p>
          <p className='text-zinc-300'>{project.poweredBy}</p>
        </section>
      </BlurFade>

      {/* Technologies Section */}
      <BlurFade delay={0.14}>
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>Technologies</h2>
          <ul className='space-y-2'>
            {project.technologies.map((tech, index) => (
              <li className='flex items-center gap-2' key={index}>
                <span className='text-teal-400'>•</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </section>
      </BlurFade>

      {/* Features Section */}
      <BlurFade delay={0.16}>
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>Features</h2>
          <ul className='space-y-4'>
            {project.features.map((feature, index) => (
              <li className='text-zinc-300' key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </BlurFade>

      {/* Development and Challenges Section */}
      <section className='mb-12'>
        <h2 className='mb-4 text-2xl font-bold'>Development and Challenges</h2>
        <p className='mb-8 text-zinc-300'>{project.developmentChallenges}</p>

        {/* Project Screenshots */}
        <div className='space-y-8'>
          {project.screenshots?.map((screenshot, index) => (
            <div className='space-y-2' key={index}>
              <div className='relative aspect-video overflow-hidden rounded-xl border border-zinc-800'>
                <Image
                  fill
                  alt={screenshot.alt}
                  className='object-cover'
                  src={screenshot.src || '/placeholder.svg'}
                />
              </div>
              <p className='text-center text-sm text-zinc-400'>
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className='mb-12'>
        <h2 className='mb-4 text-2xl font-bold'>Conclusion</h2>
        <p className='text-zinc-300'>{project.conclusion}</p>
      </section>
    </div>
  );
}

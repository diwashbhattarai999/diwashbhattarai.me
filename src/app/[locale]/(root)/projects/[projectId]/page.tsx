import Image from 'next/image';
import { notFound } from 'next/navigation';

import { ExternalLink, Github, LucideIcon } from 'lucide-react';

import { SectionWrapper } from '@/components/section-items';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PROJECTS } from '@/data/project';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface IProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export async function generateMetadata({ params }: IProjectPageProps) {
  const { projectId } = await params;
  const project = PROJECTS.find(({ id }) => id === projectId);

  return project
    ? {
        title: `${project.title} | Diwash Bhattarai`,
        description: project.description,
      }
    : {
        title: 'Project Not Found | Diwash Bhattarai',
        description: 'The requested project could not be found.',
      };
}

const ProjectPage: React.FC<IProjectPageProps> = async ({ params }) => {
  const { projectId } = await params;

  const project = PROJECTS.find(({ id }) => id === projectId);
  if (!project) notFound();

  return (
    <SectionWrapper className='space-y-8' id='project'>
      <BreadcrumbNavigation title={project.title} />

      <h1 className='mb-4 text-4xl font-bold'>{project.title}</h1>

      <TagList tags={project.tags} />

      <ProjectImage
        demo={project.demo}
        github={project.github}
        image={project.image.src}
        title={project.title}
      />

      <ProjectDetails project={project} />
    </SectionWrapper>
  );
};

const BreadcrumbNavigation = ({ title }: { title: string }) => (
  <Breadcrumb>
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

const TagList = ({ tags }: { tags: string[] }) => (
  <div className='mb-6 flex flex-wrap gap-2'>
    {tags.map((tag, index) => (
      <span
        className='text-primary bg-primary/10 rounded-full px-3 py-1'
        key={index}
      >
        {tag}
      </span>
    ))}
  </div>
);

const ProjectImage = ({
  image,
  title,
  demo,
  github,
}: {
  image: string;
  title: string;
  demo: string;
  github: string;
}) => (
  <div className='border-border group relative mb-8 h-[500px] w-full overflow-hidden rounded-lg border transition duration-500'>
    <Image
      fill
      alt={title}
      className='object-cover object-top'
      src={image || '/placeholder.svg'}
    />
    <div className='invisible absolute right-2 bottom-2 flex flex-wrap gap-4 group-hover:visible'>
      <ProjectLink
        href={demo}
        icon={ExternalLink}
        label='Live Demo'
        variant='default'
      />
      <ProjectLink
        href={github}
        icon={Github}
        label='View Code'
        variant='outline'
      />
    </div>
  </div>
);

const ProjectLink = ({
  href,
  label,
  icon: Icon,
  variant,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  variant: 'default' | 'outline';
}) => (
  <a
    className={cn(buttonVariants({ variant }))}
    href={href}
    rel='noopener noreferrer'
    target='_blank'
  >
    <Icon className='mr-2 h-4 w-4' />
    {label}
  </a>
);

const ProjectDetails = ({ project }: { project: (typeof PROJECTS)[0] }) => (
  <div className='grid gap-8 md:grid-cols-3'>
    <div className='flex flex-col gap-6 md:col-span-2'>
      {/* Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
      </Card>

      {/* Key Features Card */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='text-muted-foreground list-disc space-y-2 pl-5'>
            {project.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>

    {/* Project Details Card */}
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <ProjectInfo
            label='Project Type'
            value={`${project.tags[0]} Application`}
          />

          <ProjectInfo label='Technologies'>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag: string, index: number) => (
                <span
                  className='bg-secondary text-foreground rounded-full px-2 py-1 text-sm'
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </ProjectInfo>
        </CardContent>

        <CardFooter>
          <ProjectInfo label='Links'>
            <a
              className='text-primary flex items-center hover:underline'
              href={project.demo}
              rel='noopener noreferrer'
              target='_blank'
            >
              <ExternalLink className='mr-2 h-4 w-4' />
              Live Demo
            </a>
            <a
              className='text-primary flex items-center hover:underline'
              href={project.github}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Github className='mr-2 h-4 w-4' />
              GitHub Repository
            </a>
          </ProjectInfo>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const ProjectInfo = ({
  label,
  value,
  children,
  className,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={cn('flex flex-col gap-1', className)}>
    <h4 className='font-medium'>{label}</h4>
    {value ? <p className='text-muted-foreground'>{value}</p> : children}
  </div>
);

export default ProjectPage;

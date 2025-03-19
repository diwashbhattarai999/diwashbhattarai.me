import React from 'react';
import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { IProject } from '@/data/project';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { Link } from '@/i18n/routing';

import { ExternalLinkButton } from './external-link-button';
import { ProjectOverlay } from './project-overlay';
import { ProjectTags } from './project-tags';

export const ProjectCard = ({
  project,
  onHover,
  isHovered,
}: {
  project: IProject;
  onHover: (id: string | null) => void;
  isHovered: boolean;
}) => {
  const isMobile = useIsMobile();
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<'top' | 'bottom'>('top');

  // Check if the card's position
  React.useEffect(() => {
    if (cardRef.current) {
      const { top, bottom } = cardRef.current.getBoundingClientRect();

      const offset = 20;

      if (top < 0) {
        setPosition('top');
      } else if (bottom > window.innerHeight - offset) {
        setPosition('bottom');
      }
    }
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='group border-border/40 relative flex cursor-pointer flex-col items-start justify-between border-b py-8'
      initial={{ opacity: 0, y: 20 }}
      ref={cardRef}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-6'>
        <Link href={`/projects/${project.id}`}>
          <div className='mb-4 h-64 w-full overflow-hidden rounded-xl md:hidden'>
            <Image
              alt={project.title}
              className='size-full object-cover object-top'
              height={800}
              src={project.image || '/placeholder.svg'}
              width={800}
            />
          </div>

          <h3 className='group-hover:text-primary text-xl font-bold text-nowrap transition-colors'>
            {project.title}
          </h3>

          <p className='line-clamp-2 md:hidden'>{project.description}</p>
        </Link>
        <ProjectTags limit={8} tags={project.tags} />

        <div className='mt-6 flex gap-3 md:hidden'>
          <ExternalLinkButton
            href={project.githubUrl || '#'}
            icon={Github}
            label='View Code'
          />
          <ExternalLinkButton
            href={project.liveUrl || '#'}
            icon={ExternalLink}
            label='Live Demo'
          />
        </div>
      </div>

      {/* Overlay should be inside the hovered ProjectCard */}
      <AnimatePresence>
        {!isMobile && isHovered && (
          <ProjectOverlay position={position} project={project} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

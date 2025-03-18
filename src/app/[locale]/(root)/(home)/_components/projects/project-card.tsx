import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

import { IProject } from '@/data/project';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from '@/i18n/routing';

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

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='group border-border/40 flex cursor-pointer flex-col items-start justify-between border-b py-8'
      initial={{ opacity: 0, y: 20 }}
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
        </Link>
        <ProjectTags limit={8} tags={project.tags} />
      </div>

      {/* Overlay should be inside the hovered ProjectCard */}
      <AnimatePresence>
        {!isMobile && isHovered && <ProjectOverlay project={project} />}
      </AnimatePresence>
    </motion.div>
  );
};

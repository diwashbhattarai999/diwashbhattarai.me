import Image from 'next/image';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { IProject } from '@/data/project';

import { ExternalLinkButton } from './external-link-button';
import { ProjectTags } from './project-tags';

export const ProjectOverlay = ({ project }: { project: IProject }) => (
  <motion.div
    animate={{ opacity: 1, y: -100, scale: 1 }}
    className='bg-card/95 border-border absolute z-50 mt-2 w-full max-w-[90vw] overflow-hidden rounded-xl border shadow-2xl backdrop-blur-md'
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    initial={{ opacity: 0, y: 0, scale: 0.95, x: 100 }}
    style={{ maxWidth: '90vw' }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  >
    <div className='grid grid-cols-1 gap-8 p-8 xl:grid-cols-2'>
      <div className='flex flex-col justify-between space-y-4'>
        <h3 className='text-foreground text-2xl font-bold'>{project.title}</h3>
        <p className='text-foreground/80 line-clamp-4'>{project.description}</p>
        <ProjectTags limit={6} tags={project.tags} />
        <div className='mt-6 flex gap-3'>
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
      <div className='relative h-[300px] overflow-hidden rounded-xl'>
        <Image
          fill
          alt={project.title}
          className='object-cover object-top transition-all duration-700'
          src={project.image || '/placeholder.svg'}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
      </div>
    </div>
  </motion.div>
);

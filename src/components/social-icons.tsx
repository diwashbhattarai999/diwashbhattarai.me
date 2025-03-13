import React from 'react';

import { FileText, Github, Instagram, Linkedin, Mail } from 'lucide-react';

import { cn } from '@/lib/utils';

const ICONS = [
  {
    Icon: Github,
    link: 'https://github.com/diwashbhattarai999',
    title: 'GitHub',
  },
  {
    Icon: Linkedin,
    link: 'https://www.linkedin.com/in/diwashb',
    title: 'LinkedIn',
  },
  {
    Icon: Instagram,
    link: 'https://www.instagram.com/diwash81/',
    title: 'Instagram',
  },
  {
    Icon: Mail,
    link: 'mailto:diwashb999@gmail.com',
    title: 'Email',
  },
  {
    Icon: FileText,
    link: 'https://drive.google.com/file/d/18-BRysi8R89r9jLVONKHL_k4m7KwAk8f/view?usp=drive_link',
    title: 'Resume',
  },
];

export const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex space-x-4', className)}>
      {ICONS.map(({ Icon, link, title }, index) => (
        <a
          className='text-foreground/60 hover:text-primary transition-colors'
          href={link}
          key={index}
          rel='noopener noreferrer'
          target={link.startsWith('mailto') ? '_self' : '_blank'}
        >
          <Icon className='h-5 w-5' />
          <span className='sr-only'>{title}</span>
        </a>
      ))}
    </div>
  );
};

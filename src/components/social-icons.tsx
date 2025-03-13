import React from 'react';

import { SOCIALS_LINKS } from '@/data/social-links';
import { cn } from '@/lib/utils';

export const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-2', className)}>
      {SOCIALS_LINKS.map(({ Icon, link, title }, index) => (
        <a
          className='text-foreground/60 hover:text-primary hover:bg-muted rounded-full p-2 transition-colors'
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

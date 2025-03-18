import React from 'react';

import { SOCIALS_LINKS } from '@/data/social-links';
import { cn } from '@/lib/utils';

import BlurFade from './animations/blur-fade';

export const SocialIcons = ({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) => {
  return (
    <BlurFade className={cn('flex gap-2', className)} delay={0.1}>
      {SOCIALS_LINKS.map(({ Icon, link, title }, index) => (
        <a
          className='text-foreground/60 hover:text-primary hover:bg-muted rounded-full p-2 transition-colors'
          href={link}
          key={index}
          rel='noopener noreferrer'
          target={link.startsWith('mailto') ? '_self' : '_blank'}
        >
          <Icon className={cn('size-5', iconClassName)} />
          <span className='sr-only'>{title}</span>
        </a>
      ))}
    </BlurFade>
  );
};

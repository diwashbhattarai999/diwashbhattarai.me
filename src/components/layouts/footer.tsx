import { SOCIALS_LINKS } from '@/data/social-links';

export const Footer = () => {
  return (
    <footer className='border-border/40 border-t py-8'>
      <div className='flex w-full flex-col items-center justify-center gap-1 px-4 md:flex-row md:justify-between md:gap-4'>
        <p className='text-muted-foreground text-sm'>
          © {new Date().getFullYear()} Diwash Bhattarai. All rights reserved.
        </p>

        <div className='flex gap-2'>
          {SOCIALS_LINKS.map(({ Icon, link, title }, index) => (
            <a
              className='text-foreground/60 hover:text-primary hover:bg-muted rounded-full p-2 transition-colors'
              href={link}
              key={index}
              rel='noopener noreferrer'
              target={link.startsWith('mailto') ? '_self' : '_blank'}
            >
              <Icon className='size-4' />
              <span className='sr-only'>{title}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

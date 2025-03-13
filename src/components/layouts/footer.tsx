import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='border-border/40 border-t py-8'>
      <div className='container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center'>
        <p className='text-muted-foreground text-sm'>
          © {new Date().getFullYear()} Diwash Bhattarai. All rights reserved.
        </p>
        <div className='flex space-x-4'>
          <a
            className='text-foreground/60 hover:text-primary transition-colors'
            href='https://github.com/diwashbhattarai999'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Github className='h-4 w-4' />
            <span className='sr-only'>GitHub</span>
          </a>
          <a
            className='text-foreground/60 hover:text-primary transition-colors'
            href='https://www.linkedin.com/in/diwash-bhattarai-b4744a1b9/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Linkedin className='h-4 w-4' />
            <span className='sr-only'>LinkedIn</span>
          </a>
          <a
            className='text-foreground/60 hover:text-primary transition-colors'
            href='https://twitter.com/diwash_999'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Twitter className='h-4 w-4' />
            <span className='sr-only'>Twitter</span>
          </a>
          <a
            className='text-foreground/60 hover:text-primary transition-colors'
            href='mailto:diwashb999@gmail.com'
          >
            <Mail className='h-4 w-4' />
            <span className='sr-only'>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

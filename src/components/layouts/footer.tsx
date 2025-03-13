import { SocialIcons } from '../social-icons';

export const Footer = () => {
  return (
    <footer className='border-border/40 border-t py-8'>
      <div className='container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between'>
        <p className='text-muted-foreground text-sm'>
          © {new Date().getFullYear()} Diwash Bhattarai. All rights reserved.
        </p>

        <SocialIcons />
      </div>
    </footer>
  );
};

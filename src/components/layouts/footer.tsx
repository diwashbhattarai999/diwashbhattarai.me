import { SocialIcons } from '../social-icons';

export const Footer = () => {
  return (
    <footer className='border-border/40 border-t py-8'>
      <div className='flex w-full flex-col items-center justify-center gap-1 px-4 md:flex-row md:justify-between md:gap-4'>
        <p className='text-muted-foreground text-sm'>
          © {new Date().getFullYear()} Diwash Bhattarai. All rights reserved.
        </p>

        <SocialIcons iconClassName='size-4' />
      </div>
    </footer>
  );
};

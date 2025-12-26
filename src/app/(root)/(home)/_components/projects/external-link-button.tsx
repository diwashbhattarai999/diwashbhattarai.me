import { LucideIcon } from 'lucide-react';

export const ExternalLinkButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) => (
  <a
    className='bg-background/90 text-foreground hover:text-primary hover:bg-background flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all'
    href={href}
    rel='noopener noreferrer'
    target='_blank'
  >
    <Icon className='size-4' />
    {label}
  </a>
);

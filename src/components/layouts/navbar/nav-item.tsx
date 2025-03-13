import Link from 'next/link';

import { usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface NavItemProps {
  name: string;
  path: string;
  className?: string;
}

export const NavItem = ({ name, path, className }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      key={path}
      className={cn(
        'hover:text-primary hover:bg-muted/50 rounded-md px-4 py-1 transition-colors',
        pathname === path ? 'text-primary bg-muted/50' : 'text-foreground/60',
        className
      )}
    >
      {name}
    </Link>
  );
};

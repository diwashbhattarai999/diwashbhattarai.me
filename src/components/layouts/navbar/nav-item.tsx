import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LucideIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface NavItemProps {
  name: string;
  icon: LucideIcon;
  path: string;
  className?: string;
}

export const NavItem = ({
  name,
  icon: Icon,
  path,
  className,
}: NavItemProps) => {
  const pathname = usePathname();
  const isActive = path === '/' ? pathname === path : pathname.startsWith(path);

  return (
    <>
      <Link
        href={path}
        key={path}
        className={cn(
          'hover:text-primary hover:bg-muted hidden rounded-md px-4 py-1 transition-colors md:inline',
          isActive ? 'text-primary bg-muted' : 'text-foreground/60',
          className
        )}
      >
        {name}
      </Link>

      {/* Mobile */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className='md:hidden'>
            <Link
              className='hover:bg-muted text-foreground/80 hover:text-secondary-foreground relative cursor-default rounded-md p-2.5 transition-colors'
              href={path}
              key={path}
            >
              <Icon className='size-4' />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

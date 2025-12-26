import Link from 'next/link';

import { cn } from '@/lib/utils';

export const Logo = ({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) => {
  return (
    <Link className={cn('flex items-center space-x-2', className)} href='/'>
      <span className={cn('text-3xl font-bold', textClassName)}>DB.</span>
    </Link>
  );
};

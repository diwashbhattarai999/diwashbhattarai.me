import React from 'react';

import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      className={cn('mr-6 flex items-center space-x-2', className)}
      href='/'
    >
      <span className='text-3xl font-bold'>DB.</span>
    </Link>
  );
};

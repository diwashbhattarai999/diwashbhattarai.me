import React from 'react';

import { Link } from '@/i18n/routing';

export const Logo = () => {
  return (
    <Link className='mr-6 flex items-center space-x-2' href='/'>
      <span className='text-3xl font-bold'>DB.</span>
    </Link>
  );
};

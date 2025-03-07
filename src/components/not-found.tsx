import React from 'react';
import Link from 'next/link';

import { Search } from 'lucide-react';

import { buttonVariants } from './ui/button';

export const NotFoundComponent = () => {
  return (
    <div className='bg-background flex h-screen w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-xl text-center'>
        <Search className='text-accent-foreground mx-auto h-12 w-12' />
        <h1 className='text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>
          404 Not Found
        </h1>
        <p className='text-muted-foreground mt-4'>
          {`It looks like you've found a missing page! No worries—it’s not you, it’s us. We're just a bunch of code monkeys and we make mistakes too.`}
        </p>
        <div className='mt-6'>
          <Link
            className={buttonVariants({ variant: 'default', size: 'lg' })}
            href='/'
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

export default function PostLoading() {
  return (
    <div className='flex flex-col gap-5 px-5 py-10'>
      {/* Back to blogs link */}
      <div className='mb-4 inline-flex items-center gap-2 md:mb-8'>
        <Skeleton className='h-4 w-4 rounded-full' />
        <Skeleton className='h-4 w-24 rounded-md' />
      </div>

      {/* Title */}
      <Skeleton className='h-8 w-3/4 rounded-md sm:h-10' />

      {/* Author and Date */}
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-3'>
          <Skeleton className='size-6 rounded-full' />
          <Skeleton className='h-4 w-20 rounded-md' />
        </div>
        <Skeleton className='h-4 w-32 rounded-md' />
      </div>

      {/* Cover Image */}
      <div className='mt-4 flex flex-col gap-6'>
        <Skeleton className='h-[400px] w-full rounded-xl' />

        {/* Tags */}
        <div className='flex flex-wrap gap-2'>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton className='h-6 w-16 rounded-full' key={index} />
          ))}
        </div>
      </div>

      {/* Content */}
      {Array.from({ length: 2 }).map((_, index) => (
        <div className='mt-8 w-full space-y-4' key={index}>
          <Skeleton className='h-4 w-full rounded-md' />
          <Skeleton className='h-4 w-3/4 rounded-md' />
          <Skeleton className='h-4 w-2/3 rounded-md' />
          <Skeleton className='h-4 w-1/2 rounded-md' />
          <Skeleton className='h-4 w-3/4 rounded-md' />
          <Skeleton className='h-4 w-full rounded-md' />
        </div>
      ))}
    </div>
  );
}

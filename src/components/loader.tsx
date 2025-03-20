import React from 'react';

export const Loader = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <div className='flex flex-row gap-2'>
        <div className='bg-primary size-3 animate-bounce rounded-full'></div>
        <div className='bg-primary size-3 animate-bounce rounded-full [animation-delay:-.3s]'></div>
        <div className='bg-primary size-3 animate-bounce rounded-full [animation-delay:-.5s]'></div>
      </div>
    </div>
  );
};

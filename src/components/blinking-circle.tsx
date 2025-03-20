import React from 'react';

export const BlinkingCircle = () => {
  return (
    <div className='relative flex items-center'>
      <span className='absolute inline-flex size-2.5 animate-ping rounded-full bg-green-500'></span>
      <span className='relative inline-flex size-2.5 rounded-full bg-green-600'></span>
      <span className='sr-only'>Online</span>
    </div>
  );
};

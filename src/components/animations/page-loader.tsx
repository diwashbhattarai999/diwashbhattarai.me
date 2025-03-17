'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion, type Variants } from 'framer-motion';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const firstName = 'Diwash';
  const lastName = 'Bhattarai';

  useEffect(() => {
    // Animate progress from 0 to 100 during loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 4; // Increment by 4% each time
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 40); // Update every 40ms to complete in ~1 second

    // Set the main loading timeout
    const loadingTimeout = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);

      // Small delay before exit to ensure progress reaches 100%
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }, 1000); // Slightly shorter to account for exit animation

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Letter animation variants
  const letterVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: (i: number) => ({
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.02 * i,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Container animation variants
  const containerVariants: Variants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        when: 'afterChildren',
      },
    },
  };

  return (
    <AnimatePresence mode='wait'>
      {isLoading && (
        <motion.div
          className='bg-background fixed inset-0 z-50 flex items-center justify-center overflow-hidden'
          exit='exit'
          variants={containerVariants}
        >
          {/* Main content container */}
          <div className='relative z-10 flex flex-col items-center justify-center space-y-2'>
            {/* First name */}
            <div className='flex overflow-hidden'>
              {firstName.split('').map((letter, i) => (
                <motion.span
                  animate='visible'
                  className='text-primary text-8xl font-light md:text-6xl'
                  custom={i}
                  exit='exit'
                  initial='hidden'
                  key={`first-${i}`}
                  variants={letterVariants}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Last name */}
            <div className='flex overflow-hidden'>
              {lastName.split('').map((letter, i) => (
                <motion.span
                  animate='visible'
                  className='text-primary text-8xl font-bold md:text-6xl'
                  custom={i + firstName.length} // Continue the stagger from first name
                  exit='exit'
                  initial='hidden'
                  key={`last-${i}`}
                  variants={letterVariants}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <motion.div
              className='bg-primary/20 mt-8 h-0.5 w-48 overflow-hidden'
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.4 },
              }}
              exit={{
                opacity: 0,
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className='bg-primary h-full'
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;

'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import useIsMounted from '@/hooks/use-is-mounted';

/**
 * A component that allows the user to toggle between light and dark themes.
 * @returns The theme toggle component.
 */
export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const { isMounted } = useIsMounted();
  if (!isMounted) return null;

  return (
    <Button
      className='relative overflow-hidden'
      size='icon'
      variant='ghost'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <AnimatePresence mode='wait'>
        {isDark ? (
          <motion.div
            animate={{ rotate: 0, scale: 1 }}
            className='absolute'
            exit={{ rotate: -90, scale: 0 }}
            initial={{ rotate: 90, scale: 0 }}
            key='dark'
            transition={{ duration: 0.1, ease: 'easeInOut' }}
          >
            <Moon className='size-5' />
          </motion.div>
        ) : (
          <motion.div
            animate={{ rotate: 0, scale: 1 }}
            className='absolute'
            exit={{ rotate: 90, scale: 0 }}
            initial={{ rotate: -90, scale: 0 }}
            key='light'
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Sun className='size-5' />
          </motion.div>
        )}
      </AnimatePresence>
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

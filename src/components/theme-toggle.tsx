'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { AnimatePresence, motion } from 'framer-motion';
import { MoonStar, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import useIsMounted from '@/hooks/use-is-mounted';
import { cn } from '@/lib/utils';

/**
 * A component that allows the user to toggle between light and dark themes.
 * @returns The theme toggle component.
 */
export const ThemeToggle = ({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const { isMounted } = useIsMounted();
  if (!isMounted) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn('relative', className)}
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
                  <MoonStar className={cn('size-5', iconClassName)} />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ rotate: 0, scale: 1 }}
                  className='absolute'
                  exit={{ rotate: 90, scale: 0 }}
                  initial={{ rotate: -90, scale: 0 }}
                  key='light'
                  transition={{ duration: 0.1, ease: 'easeInOut' }}
                >
                  <Sun className={cn('size-5', iconClassName)} />
                </motion.div>
              )}
            </AnimatePresence>
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

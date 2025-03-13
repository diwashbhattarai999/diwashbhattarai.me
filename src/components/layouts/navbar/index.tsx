'use client';

import { useEffect, useState } from 'react';

import { motion, useScroll } from 'framer-motion';

import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { navItems } from '@/data/navbar';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

import { NavItem } from './nav-item';

export const Navbar = () => {
  const [floating, setFloating] = useState(false);
  const { scrollY } = useScroll();

  // Floating Navbar on Scroll (Large Screens Only)
  useEffect(() => {
    const updateFloating = () => setFloating(scrollY.get() > 50);
    const unsubscribe = scrollY.onChange(updateFloating);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      {/* Desktop Navbar (Large Screens) */}
      <nav
        className={cn(
          'z-40 hidden items-center gap-6 px-6 py-3 md:flex',
          floating
            ? 'bg-background/80 border-border/40 fixed top-4 left-1/2 -translate-x-1/2 rounded-full border shadow-lg backdrop-blur-md'
            : 'bg-background border-border/40 w-full border-b shadow'
        )}
      >
        <Logo />

        <div className='flex flex-1 items-center justify-center space-x-6 font-medium'>
          {navItems.map(item => (
            <NavItem key={item.path} name={item.name} path={item.path} />
          ))}
        </div>

        <ThemeToggle />
      </nav>

      <div className='my-5 flex items-center justify-between md:hidden'>
        <Logo />
        <ThemeToggle />
      </div>

      {/* Floating Bottom Navbar (Small Screens) */}
      <motion.nav
        animate={{ opacity: floating ? 1 : 0, y: floating ? 0 : 20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={cn(
          'bg-background/80 border-border/40 fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border px-4 py-2 shadow-lg backdrop-blur-md md:hidden'
        )}
        initial={{
          opacity: floating ? 0 : 1,
          y: floating ? 20 : 0,
          display: floating ? 'block' : 'none',
        }}
      >
        {navItems.map(item => (
          <TooltipProvider key={item.path}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className='hover:bg-muted text-foreground/80 hover:text-secondary-foreground relative cursor-default rounded-md p-2.5 transition-colors'
                  href={item.path}
                  key={item.path}
                >
                  <item.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        <ThemeToggle />
      </motion.nav>
    </>
  );
};

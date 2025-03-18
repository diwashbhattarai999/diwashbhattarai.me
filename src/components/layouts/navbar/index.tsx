'use client';

import { useEffect, useState } from 'react';

import { motion, useScroll } from 'framer-motion';

import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';
import { navItems } from '@/data/navbar';
import { cn } from '@/lib/utils';

import { NavItem } from './nav-item';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', latest => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      animate={{
        opacity: 1,
        scale: scrolled ? 0.95 : 1,
      }}
      className={cn('flex justify-between gap-10 px-6 py-3 md:gap-16', {
        'bg-background/80 border-border fixed top-5 left-1/2 z-40 h-[4rem] -translate-x-1/2 rounded-full border shadow-lg backdrop-blur md:h-auto':
          scrolled,
      })}
    >
      <Logo
        textClassName={cn({
          'text-xl md:text-3xl': scrolled,
        })}
      />

      <Separator
        orientation='vertical'
        className={cn('md:hidden', {
          hidden: !scrolled,
        })}
      />

      <nav
        className={cn(
          'flex flex-1 items-center justify-center gap-3 font-medium sm:gap-6',
          { 'hidden md:flex': !scrolled }
        )}
      >
        {navItems.map(item => (
          <NavItem
            icon={item.icon}
            key={item.path}
            name={item.name}
            path={item.path}
          />
        ))}
      </nav>

      <Separator
        orientation='vertical'
        className={cn('md:hidden', {
          hidden: !scrolled,
        })}
      />

      <ThemeToggle />
    </motion.header>
  );
};

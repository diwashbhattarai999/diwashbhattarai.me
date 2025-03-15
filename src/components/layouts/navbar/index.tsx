'use client';

import { useEffect, useState } from 'react';

import { motion, useScroll } from 'framer-motion';

import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
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
      className={cn(
        'bg-background flex items-center justify-between gap-6 px-6 py-3 md:gap-16',
        {
          'bg-background/80 border-border fixed top-5 left-1/2 z-40 -translate-x-1/2 rounded-full border shadow-lg backdrop-blur':
            scrolled,
        }
      )}
    >
      <Logo
        className={cn({
          'hidden md:block': scrolled,
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

      <ThemeToggle />
    </motion.header>
  );
};

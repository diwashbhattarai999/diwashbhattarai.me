'use client';

import { useState } from 'react';

import { Menu } from 'lucide-react';

import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { navItems } from '@/data/navbar';

import MobileMenu from './mobile-menu';
import { NavItem } from './nav-item';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className='bg-secondary/95 supports-[backdrop-filter]:bg-secondary/60 sticky top-0 z-40 w-full backdrop-blur'>
      <div className='flex h-16 items-center justify-between gap-12'>
        <div className='flex w-full items-center justify-between'>
          <Logo />

          {/* Desktop View */}
          <nav className='hidden items-center space-x-6 font-medium md:flex'>
            {navItems.map(item => (
              <NavItem key={item.path} name={item.name} path={item.path} />
            ))}
          </nav>

          {/* Mobile View */}
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        <div className='flex items-center gap-6 md:gap-0'>
          <ThemeToggle />

          {/* Hamburger Icon for Mobile */}
          <div className='md:hidden'>
            <Menu onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

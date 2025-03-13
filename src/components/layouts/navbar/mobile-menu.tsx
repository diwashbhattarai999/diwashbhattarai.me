import React from 'react';
import ReactDOM from 'react-dom';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

import { Logo } from '@/components/logo';
import { SocialIcons } from '@/components/social-icons';
import { navItems } from '@/data/navbar';
import useLockBody from '@/hooks/use-lock-body';

import { NavItem } from './nav-item';

interface IMobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isMenuOpen, toggleMenu }: IMobileMenuProps) => {
  useLockBody({
    autoLock: isMenuOpen,
  });

  return ReactDOM.createPortal(
    <motion.div
      animate={{ x: isMenuOpen ? 0 : '100%' }}
      className='bg-background/90 fixed top-0 right-0 z-50 flex h-screen w-[90%] flex-col rounded-l-2xl border px-8 py-20 backdrop-blur-xl md:hidden'
      exit={{ x: '100%' }}
      initial={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <X
        className='absolute top-5 right-5 scale-105 -rotate-[5deg]'
        onClick={toggleMenu}
      />

      <div className='ml-4'>
        <Logo />
      </div>

      <div className='mt-10 flex flex-col space-y-4'>
        {navItems.map(item => (
          <NavItem
            className='py-3'
            key={item.path}
            name={item.name}
            path={item.path}
          />
        ))}
      </div>

      <SocialIcons className='ml-4 flex-1 items-end space-x-4' />
    </motion.div>,
    document.body // Portal will render the menu inside the body of the DOM
  );
};

export default MobileMenu;

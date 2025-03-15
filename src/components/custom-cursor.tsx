'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, Variants } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorTrailRef = useRef<HTMLDivElement[]>([]);
  const trailLength = 5;

  useEffect(() => {
    // Initialize trail elements
    cursorTrailRef.current = Array(trailLength)
      .fill(null)
      .map(() => document.createElement('div'));
    cursorTrailRef.current.forEach((el, i) => {
      el.className =
        'fixed top-0 left-0 rounded-full pointer-events-none z-40 hidden md:block opacity-0 bg-primary';
      el.style.height = `${12 - i * 2}px`;
      el.style.width = `${12 - i * 2}px`;
      el.style.transition = `opacity 0.3s ease, transform 0.1s ease-out`;
      document.body.appendChild(el);
    });

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    const mouseEnterLink = () => setCursorVariant('hover');
    const mouseLeaveLink = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Add hover effect for links and buttons
    const links = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );
    links.forEach(link => {
      link.addEventListener('mouseenter', mouseEnterLink);
      link.addEventListener('mouseleave', mouseLeaveLink);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);

      links.forEach(link => {
        link.removeEventListener('mouseenter', mouseEnterLink);
        link.removeEventListener('mouseleave', mouseLeaveLink);
      });

      cursorTrailRef.current.forEach(el => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, []);

  // Update trail positions with delay
  useEffect(() => {
    const updateTrailPositions = () => {
      cursorTrailRef.current.forEach((el, i) => {
        if (el) {
          setTimeout(() => {
            el.style.opacity = '0.3';
            el.style.transform = `translate(${mousePosition.x - el.offsetWidth / 2}px, ${mousePosition.y - el.offsetHeight / 2}px)`;
          }, i * 40);
        }
      });
    };

    updateTrailPositions();
  }, [mousePosition]);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'color-mix(in oklab, var(--primary) 10%, transparent)',
      border: '1px solid color-mix(in oklab, var(--primary) 30%, transparent)',
      mixBlendMode: 'normal',
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 60,
      width: 60,
      backgroundColor: 'color-mix(in oklab, var(--primary) 80%, transparent)',
      border: '1px solid color-mix(in oklab, var(--primary) 50%, transparent)',
      mixBlendMode: 'multiply',
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'color-mix(in oklab, var(--primary) 30%, transparent)',
      border: '1px solid color-mix(in oklab, var(--primary) 60%, transparent)',
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  };

  return (
    <motion.div
      animate={cursorVariant}
      className='pointer-events-none fixed top-0 left-0 z-50 hidden rounded-full md:block'
      variants={variants}
    />
  );
};

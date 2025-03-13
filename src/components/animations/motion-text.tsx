'use client';

import { motion } from 'framer-motion';

interface IMotionTextProps {
  children: string;
  delayOffset: number;
  className: string;
}

export const MotionText = ({
  children,
  delayOffset = 0,
  className,
}: IMotionTextProps) => {
  const text = children;
  const letters = Array.from(text).map(letter =>
    letter === ' ' ? '\u00A0' : letter
  );

  return (
    <motion.div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          animate={{ y: 0, opacity: 1 }}
          className='inline-flex'
          initial={{ y: 10, opacity: 0 }}
          key={index}
          transition={{
            delay: index * 0.03 + delayOffset,
            type: 'spring',
            damping: 15,
            stiffness: 400,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

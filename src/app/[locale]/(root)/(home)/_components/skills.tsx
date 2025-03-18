'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { SectionWrapper } from '@/components/section-items';
import { SKILLS } from '@/data/skills';

export function Skills() {
  return (
    <SectionWrapper id='skills' title='Skills'>
      <div className='space-y-12'>
        {SKILLS.map((category, index) => (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className='space-y-4'
            initial={{ opacity: 0, y: 20 }}
            key={index}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className='flex items-center gap-3'>
              <div className='text-primary'>
                <category.icon className='size-5' />
              </div>
              <h3 className='text-xl font-medium tracking-tight'>
                {category.title}
              </h3>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className='border-input bg-muted/50 hover:border-primary/20 hover:bg-primary/5 flex flex-col items-center justify-center rounded-lg border p-4 transition-colors'
                  initial={{ opacity: 0, y: 10 }}
                  key={skillIndex}
                  whileHover={{ y: -5 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.05,
                  }}
                >
                  <div className='mb-2 size-10'>
                    <Image
                      alt={skill.name}
                      className='size-full object-contain'
                      src={skill.icon || '/placeholder.svg'}
                    />
                  </div>
                  <span className='text-secondary-foreground text-center text-sm'>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

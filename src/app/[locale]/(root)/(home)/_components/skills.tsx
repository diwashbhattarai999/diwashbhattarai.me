'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { SectionWrapper } from '@/components/section-items';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/data/skills';

export function Skills() {
  return (
    <SectionWrapper id='skills' title='Skills'>
      <div className='grid gap-8 md:grid-cols-2'>
        {SKILLS.map((category, index) => (
          <Card className='relative' key={index}>
            <div className='line-glow' />
            <div className='line-glow right-0 left-auto' />
            <CardHeader className='flex flex-row items-center gap-4 pb-2'>
              <div className='text-primary'>
                <category.icon className='size-6' />
              </div>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    animate={{ opacity: 1, y: 0 }}
                    className='bg-muted text-foreground flex items-center gap-1.5 rounded-full px-3 py-1 text-sm'
                    initial={{ opacity: 0, y: 20 }}
                    key={skillIndex}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      alt={skill.name}
                      height={16}
                      src={skill.icon}
                      width={16}
                    />
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

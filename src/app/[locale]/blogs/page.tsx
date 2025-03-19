'use client';

import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Send } from 'lucide-react';

const DESCRIPTION_ITEMS = [
  {
    icon: <MessageSquare className='text-primary h-6 w-6' />,
    title: 'Insightful Articles',
    description:
      'In-depth topics for developers, designers, and tech enthusiasts.',
  },
  {
    icon: <Calendar className='text-primary h-6 w-6' />,
    title: 'Regular Updates',
    description: 'New content published consistently, keeping you informed.',
  },
  {
    icon: <Send className='text-primary h-6 w-6' />,
    title: 'Community Driven',
    description:
      'We value your feedback and shape content based on your needs.',
  },
];

export default function BlogsPage() {
  return (
    <div className='relative container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center'>
      {/* Soft glowing background elements */}
      <div className='bg-primary/10 absolute -top-10 left-10 -z-10 h-48 w-48 rounded-full blur-[100px] sm:h-64 sm:w-64' />
      <div className='bg-accent/10 absolute right-10 bottom-10 -z-10 h-48 w-48 rounded-full blur-[100px] sm:h-64 sm:w-64' />

      {/* Main Header */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className='flex flex-col items-center'
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Icon with subtle animation */}
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          className='bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-lg'
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <MessageSquare className='text-primary h-10 w-10' />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className='from-primary to-primary/50 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl'
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Blog Coming Soon
        </motion.h1>

        {/* Subheading */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className='text-muted-foreground mx-auto mb-8 max-w-lg text-sm sm:text-lg'
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {`We're crafting valuable content to share with you. Stay tuned for insightful articles, tutorials, and updates.`}
        </motion.p>
      </motion.div>

      {/* Feature Cards Section */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className='grid max-w-4xl gap-8 md:grid-cols-3'
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {DESCRIPTION_ITEMS.map((item, index) => (
          <motion.div
            animate={{ opacity: 1 }}
            className='border-border/40 bg-card/30 group hover:bg-primary/10 flex flex-col items-center rounded-xl border p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl'
            initial={{ opacity: 0 }}
            key={index}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          >
            <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-all group-hover:scale-105'>
              {item.icon}
            </div>
            <h3 className='mb-2 text-lg font-medium'>{item.title}</h3>
            <p className='text-muted-foreground text-sm'>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

import { Metadata } from 'next';

import { getBaseUrl } from '@/utils/helpers';

export const siteConfig: Metadata = {
  title: 'Diwash Bhattarai | Portfolio',
  metadataBase: new URL(getBaseUrl()),
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
  alternates: {
    canonical: '/',
  },
  authors: [
    { name: 'Diwash Bhattarai', url: 'https://diwashb.com.np' },
    { name: 'दिवस भट्टराई', url: 'https://github.com/diwashbhattarai999' },
  ],
  description:
    'I am Diwash Bhattarai, a Full Stack Web Developer specializing in modern, responsive, and high-performance web applications.',

  openGraph: {
    title: 'Diwash Bhattarai | Full Stack Developer',
    description:
      'I build modern, fast, and scalable web applications using the latest web technologies. Explore my portfolio to see my work and expertise.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Diwash Bhattarai Portfolio',
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    'Diwash Bhattarai',
    'Full Stack Developer',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Frontend',
    'Backend',
    'reactjs',
    'nextjs',
    'node',
    'express',
    'firebase',
    'postgresql',
    'vercel',
    'react',
    'db-portfolio',
    'diwash-portfolio',
    'portfolio',
    'react-icons',
    'cn',
    'clsx',
    'sonner',
    'framer-motion',
    'motion',
    'animation',
    'postcss',
    'prettier',
    'react-dom',
    'tailwindcss',
    'tailwindcss-animate',
    'ui/ux',
    'js',
    'javascript',
    'typescript',
    'eslint',
    'html',
    'css',
  ],
} as const;

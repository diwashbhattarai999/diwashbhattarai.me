import React from 'react';
import { Metadata } from 'next';

import { Projects } from '../(home)/_components/projects';

export const metadata: Metadata = {
  title: 'Projects | Diwash Bhattarai',
  description: "Here's a list of projects I've worked on.",
  keywords: [
    'Diwash Bhattarai Projects',
    'Web Development Projects',
    'React Projects',
    'Next.js Projects',
    'Full Stack Projects',
    'Portfolio Projects',
    'Frontend Projects',
    'Backend Projects',
    'Modern Web Applications',
  ],
  robots: 'index, follow',
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

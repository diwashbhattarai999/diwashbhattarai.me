import React from 'react';
import { Metadata } from 'next';

import { Projects } from '../(home)/_components/projects';

export const metadata: Metadata = {
  title: 'Projects | Diwash Bhattarai',
  description: "Here's a list of projects I've worked on.",
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

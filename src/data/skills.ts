import { Code, Database, Layout, LucideIcon, Server } from 'lucide-react';

import CSS from '@/assets/skills/css.svg';
// import Docker from '@/assets/skills/docker.svg';
import Express from '@/assets/skills/express.svg';
import Figma from '@/assets/skills/figma.svg';
import Firebase from '@/assets/skills/firebase.svg';
import Git from '@/assets/skills/git.svg';
import GitHub from '@/assets/skills/github.svg';
import HTML from '@/assets/skills/html.svg';
import JS from '@/assets/skills/js.svg';
// import Linux from '@/assets/skills/linux.svg';
import MongoDB from '@/assets/skills/mongodb.svg';
// import MySQL from '@/assets/skills/mysql.svg';
import Next from '@/assets/skills/next.svg';
import Node from '@/assets/skills/node.svg';
import NPM from '@/assets/skills/npm.svg';
// import PostgreSQL from '@/assets/skills/postgresql.svg';
import Postman from '@/assets/skills/postman.svg';
import PWA from '@/assets/skills/pwa.svg';
import React from '@/assets/skills/react.svg';
import Redux from '@/assets/skills/redux.svg';
import Responsive from '@/assets/skills/responsive.svg';
import Rest from '@/assets/skills/rest.svg';
import SASS from '@/assets/skills/sass.svg';
import Tailwind from '@/assets/skills/tailwind.svg';
import TanstackQuery from '@/assets/skills/tanstack-query.svg';
import TS from '@/assets/skills/ts.svg';
import VSCode from '@/assets/skills/vscode.svg';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML', icon: HTML },
      { name: 'CSS', icon: CSS },
      { name: 'JavaScript', icon: JS },
      { name: 'TypeScript', icon: TS },
      { name: 'React', icon: React },
      { name: 'Next.js', icon: Next },
      { name: 'Redux', icon: Redux },
      { name: 'Tailwind CSS', icon: Tailwind },
      { name: 'SASS', icon: SASS },
      { name: 'Tanstack Query', icon: TanstackQuery },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Node },
      { name: 'Express', icon: Express },
      { name: 'Next.js', icon: Next },
      { name: 'REST API', icon: Rest },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: MongoDB },
      // { name: 'MySQL', icon: MySQL },
      // { name: 'PostgreSQL', icon: PostgreSQL },
      { name: 'Firebase', icon: Firebase },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Code,
    skills: [
      // { name: 'Linux', icon: Linux },
      // { name: 'Docker', icon: Docker },
      { name: 'Git', icon: Git },
      { name: 'GitHub', icon: GitHub },
      { name: 'VS Code', icon: VSCode },
      { name: 'Postman', icon: Postman },
      { name: 'Figma', icon: Figma },
      { name: 'NPM', icon: NPM },
      { name: 'Responsive Design', icon: Responsive },
      { name: 'PWA', icon: PWA },
    ],
  },
];

import { SectionSeperator } from '@/components/section-items';

import { Contact } from './_components/contact';
import { Education } from './_components/education';
import { Experience } from './_components/experience';
import { Hero } from './_components/hero';
import { Projects } from './_components/projects';
import { Skills } from './_components/skills';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SectionSeperator />
      <Experience />
      <SectionSeperator />
      <Education />
      <SectionSeperator />
      <Projects showViewAll limit={3} />
      <SectionSeperator />
      <Skills />
      <SectionSeperator />
      <Contact />
    </>
  );
};

export default HomePage;

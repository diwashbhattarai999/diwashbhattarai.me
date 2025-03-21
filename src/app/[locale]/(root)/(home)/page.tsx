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
      {/* Background circles */}
      <div className='bg-primary/20 fixed -top-10 -left-10 z-0 size-72 rounded-full blur-[20rem]' />
      <div className='bg-primary/20 fixed -right-10 -bottom-10 z-0 size-72 rounded-full blur-[20rem]' />

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

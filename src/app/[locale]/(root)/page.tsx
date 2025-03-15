import { CustomCursor } from '@/components/custom-cursor';
import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';

import { Contact } from './_components/contact';
import { Education } from './_components/education';
import { Experience } from './_components/experience';
import { Hero } from './_components/hero';
import { Projects } from './_components/projects';
import { Skills } from './_components/skills';

const HomePage = () => {
  return (
    <main className='bg-background relative'>
      <CustomCursor />

      <div className='flex min-h-screen flex-col'>
        <div className='max-container border-x border-dashed'>
          <Navbar />
        </div>

        {/* Seperator */}
        <div className='border-b border-dashed' />

        <div className='max-container size-full flex-1 border-x border-dashed'>
          <Hero />

          {/* Seperator */}
          <div className='border-b border-dashed' />

          <Experience />

          {/* Seperator */}
          <div className='border-b border-dashed' />

          <Education />

          {/* Seperator */}
          <div className='border-b border-dashed' />

          <Projects showViewAll limit={3} />

          {/* Seperator  */}
          <div className='border-b border-dashed' />

          <Skills />

          {/* Seperator  */}
          <div className='border-b border-dashed' />

          <Contact />
        </div>

        {/* Seperator */}
        <div className='border-b border-dashed' />

        <div className='max-container border-x border-dashed'>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

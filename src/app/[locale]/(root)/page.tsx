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
      <div className='flex min-h-screen flex-col'>
        <div className='max-container border-x'>
          <Navbar />
        </div>

        {/* Seperator */}
        <div className='border-b' />

        <div className='max-container size-full flex-1 border-x'>
          <Hero />

          {/* Seperator */}
          <div className='border-b' />

          <Experience />

          {/* Seperator */}
          <div className='border-b' />

          <Education />

          {/* Seperator */}
          <div className='border-b' />

          <Projects showViewAll limit={3} />

          {/* Seperator  */}
          <div className='border-b' />

          <Skills />

          {/* Seperator  */}
          <div className='border-b' />

          <Contact />
        </div>

        {/* Seperator */}
        <div className='border-b' />

        <div className='max-container border-x'>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

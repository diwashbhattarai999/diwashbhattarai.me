import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';

import { Hero } from './_components/hero';

const HomePage = () => {
  return (
    <main className='bg-secondary'>
      <div className='flex min-h-screen flex-col'>
        <div className='max-container border-x'>
          <Navbar />
        </div>

        {/* Seperator */}
        <div className='border-b' />

        <div className='max-container size-full flex-1 border-x'>
          <Hero />
          {/* <Education />
        <Experience />
        <Projects showViewAll limit={3} />
        <Skills />
        <Contact /> */}
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

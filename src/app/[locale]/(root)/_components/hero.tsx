import Image from 'next/image';

import ProfileImg from '@/assets/profile.png';
import { SocialIcons } from '@/components/social-icons';

export function Hero() {
  return (
    <section className='hero-glow py-12 md:py-16'>
      <div className='flex flex-col items-start gap-8 md:flex-row'>
        <div className='relative flex-shrink-0'>
          <div className='from-primary/30 via-primary/20 to-primary/30 absolute -inset-1 rounded-full bg-gradient-to-r blur-sm'></div>
          <Image
            alt='Diwash Bhattarai'
            className='border-border relative rounded-full border'
            height={150}
            src={ProfileImg}
            width={150}
          />
        </div>
        <div>
          <h1 className='mb-2 text-4xl font-bold'>Diwash Bhattarai</h1>
          <h2 className='text-primary mb-6 text-xl'>Full Stack Developer</h2>

          <div className='max-w-2xl'>
            <p className='text-muted-foreground mb-6 leading-relaxed'>
              A passionate full-stack developer with expertise in React,
              Node.js, and modern web technologies. I specialize in building
              responsive, user-friendly web applications with clean code and
              optimal performance. With a strong foundation in both frontend and
              backend development, I create seamless digital experiences that
              solve real-world problems.
            </p>

            <p className='text-muted-foreground mb-8 leading-relaxed'>
              Currently, I am working as a freelance developer, building web
              applications for clients across various industries. My current
              projects include e-commerce platforms, content management systems,
              and interactive web applications using React, Next.js, Node.js,
              and MongoDB.
            </p>

            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

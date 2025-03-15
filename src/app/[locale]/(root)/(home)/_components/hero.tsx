import Image from 'next/image';

import { SectionWrapper } from '@/components/section-items';
import { SocialIcons } from '@/components/social-icons';
import { ABOUT_ME } from '@/data/about';

export function Hero() {
  return (
    <SectionWrapper className='md:py-16' id='hero'>
      <div className='flex flex-col items-start gap-8 md:flex-row'>
        {/* Profile Image Section */}
        <div className='relative flex-shrink-0'>
          <div className='from-primary/30 via-primary/20 to-primary/30 absolute -inset-1 rounded-full bg-gradient-to-r blur-sm'></div>
          <Image
            alt={ABOUT_ME.name}
            className='border-border relative rounded-full border'
            height={150}
            src={ABOUT_ME.profileImage}
            width={150}
          />
        </div>

        {/* Text Section */}
        <div className='relative'>
          <h1 className='mb-2 text-4xl font-bold'>{ABOUT_ME.name}</h1>
          <h2 className='text-primary mb-6 text-xl'>{ABOUT_ME.title}</h2>

          <div className='max-w-2xl'>
            {ABOUT_ME.description.map((text, index) => (
              <p
                className='text-muted-foreground mb-6 leading-relaxed'
                key={index}
              >
                {text}
              </p>
            ))}

            {/* Social Icons */}
            <SocialIcons />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

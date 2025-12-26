import BlurFade from '@/components/animations/blur-fade';
import BlurFadeText from '@/components/animations/blur-fade-text';
import { SectionWrapper } from '@/components/section-items';
import { SocialIcons } from '@/components/social-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ABOUT_ME } from '@/data/about';

const BLUR_FADE_DELAY = 0.04;

export function Hero() {
  return (
    <SectionWrapper className='md:py-16' id='hero'>
      <div className='flex flex-col items-start gap-8 md:flex-row'>
        {/* Profile Image Section */}
        <div className='relative flex-shrink-0'>
          <div className='from-primary/30 via-primary/20 to-primary/30 absolute -inset-1 rounded-full bg-gradient-to-r blur-sm' />

          <BlurFade>
            <Avatar className='size-36 border'>
              <AvatarImage
                alt={ABOUT_ME.name}
                className='object-cover'
                src={ABOUT_ME.profileImage.src}
              />
              <AvatarFallback>{ABOUT_ME.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>

        {/* Text Section */}
        <div className='relative'>
          <BlurFadeText
            className='mb-2 text-4xl font-bold'
            delay={BLUR_FADE_DELAY}
            text={ABOUT_ME.name}
            yOffset={8}
          />
          <BlurFadeText
            className='text-primary mb-6 text-xl'
            delay={BLUR_FADE_DELAY}
            text={ABOUT_ME.title}
          />

          <div className='max-w-2xl'>
            {ABOUT_ME.description.map((text, index) => {
              // Highlight important phrases
              const highlights = [
                'full-stack developer',
                '2 years of experience',
                'React, Next.js, Node.js',
                'Upachaar Nepal',
                'RESTful APIs and microservices',
                'mentoring interns',
              ];


              let highlightedText = text;
              highlights.forEach((phrase) => {
                highlightedText = highlightedText.replace(
                  phrase,
                  `<span class="font-semibold text-primary">${phrase}</span>`
                );
              });

              return (
                <BlurFadeText
                  className='text-muted-foreground mb-6 leading-relaxed'
                  delay={BLUR_FADE_DELAY * (index + 1)}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: highlightedText }}
                />
              );
            })}

            {/* Social Icons */}
            <SocialIcons />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

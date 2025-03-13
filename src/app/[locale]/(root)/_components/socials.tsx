import Link from 'next/link';

import { Linkedin } from 'lucide-react';

import { MotionDiv } from '@/components/animations/motion-div';

const CONTACTS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/diwash-bhattarai/',
    icon: <Linkedin size={24} />,
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/diwash007',
    icon: <Linkedin size={24} />,
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/diwash007',
    icon: <Linkedin size={24} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/diwash007',
    icon: <Linkedin size={24} />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/diwash007',
    icon: <Linkedin size={24} />,
  },
];

const Social = () => {
  return (
    <MotionDiv
      className='-mt-12 flex items-center justify-start gap-2'
      delayOffset={0}
    >
      <ul className='flex gap-4'>
        {CONTACTS.map(contact => {
          return (
            <li key={contact.name}>
              <Link href={contact.url} rel='noreferrer' target='_blank'>
                <div className='bg-primary hover:bg-accent size-6 rounded-full p-2 duration-300 hover:scale-110'>
                  {contact.icon}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </MotionDiv>
  );
};

export default Social;

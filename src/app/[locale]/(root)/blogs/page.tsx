import { Metadata } from 'next';

import BlurFade from '@/components/animations/blur-fade';
import {
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/section-items';
import { getAllPosts } from '@/lib/mdx';

import { BlogCard } from '../(home)/_components/blogs/blog-card';

export const metadata: Metadata = {
  title: 'Blogs | Diwash Bhattarai',
  description:
    'Explore my blog for insights, tutorials, and thoughts on web development, React, Next.js, and modern web technologies.',

  keywords: [
    'Diwash Bhattarai Blogs',
    'Web Development Blog',
    'React Blog',
    'Next.js Blog',
    'Frontend Blog',
    'Backend Blog',
    'JavaScript Blog',
    'TypeScript Blog',
    'Web Development Tutorials',
    'Modern Web Technologies',
    'Programming Insights',
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SectionWrapper id='blogs'>
      <SectionTitle>Blogs</SectionTitle>
      <SectionSubTitle className='mt-2 mb-8'>
        Insights, tutorials, and thoughts on web development
      </SectionSubTitle>

      <div className='space-y-12'>
        {posts.map((post, index) => (
          <BlurFade delay={0.1 + index * 0.1} key={post.slug}>
            <BlogCard post={post} />
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}

import AuthorProfileImage from '@/assets/profile.png';
import BlurFade from '@/components/animations/blur-fade';
import {
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/section-items';

import { BlogCard } from '../(home)/_components/blogs/blog-card';

// Sample blog data
const BLOG_POSTS = [
  {
    id: '1',
    title: 'Building Responsive Layouts with Modern CSS Grid',
    excerpt:
      'Learn how to create complex, responsive layouts using CSS Grid. This comprehensive guide covers everything from basic grid concepts to advanced techniques for creating magazine-style layouts.',
    coverImage: '/placeholder.svg?height=600&width=800',
    date: 'March 15, 2024',
    author: 'Diwash Bhattarai',
    authorProfile: AuthorProfileImage,
    category: 'CSS',
    readTime: '8 min read',
    commentCount: 12,
  },
  {
    id: '2',
    title: 'State Management in React: Context API vs. Redux',
    excerpt:
      "Comparing two popular state management solutions in React. We'll explore when to use Context API for simpler applications and when Redux makes more sense for complex state requirements.",
    coverImage: '/placeholder.svg?height=600&width=800',
    date: 'February 28, 2024',
    author: 'Diwash Bhattarai',
    authorProfile: AuthorProfileImage,
    category: 'React',
    readTime: '10 min read',
    commentCount: 24,
  },
  {
    id: '3',
    title: 'Optimizing Next.js Applications for Performance',
    excerpt:
      'Discover practical techniques to improve the performance of your Next.js applications. From image optimization to code splitting, learn how to create lightning-fast user experiences.',
    coverImage: '/placeholder.svg?height=600&width=800',
    date: 'January 12, 2024',
    author: 'Diwash Bhattarai',
    authorProfile: AuthorProfileImage,
    category: 'Next.js',
    readTime: '12 min read',
    commentCount: 18,
  },
  {
    id: '4',
    title: 'Creating Accessible UI Components from Scratch',
    excerpt:
      'A deep dive into building UI components with accessibility in mind. Learn how to create components that are usable by everyone, including people with disabilities.',
    coverImage: '/placeholder.svg?height=600&width=800',
    date: 'December 5, 2023',
    author: 'Diwash Bhattarai',
    authorProfile: AuthorProfileImage,
    category: 'Accessibility',
    readTime: '15 min read',
    commentCount: 9,
  },
];

export default function BlogsPage() {
  return (
    <SectionWrapper id='blogs'>
      <SectionTitle>Blogs</SectionTitle>
      <SectionSubTitle className='mb-8'>
        Insights, tutorials, and thoughts on web development
      </SectionSubTitle>

      <div className='space-y-12'>
        {BLOG_POSTS.map((post, index) => (
          <BlurFade delay={0.1 + index * 0.1} key={post.id}>
            <BlogCard post={post} />
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}

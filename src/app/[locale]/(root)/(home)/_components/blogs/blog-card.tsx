import Image from 'next/image';

import { ArrowRight, Calendar, Clock } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { AvatarFallback } from '@radix-ui/react-avatar';

interface IBlogCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    author: string;
    profile: string;
    tags: string[];
    description: string;
    coverImage: string;
    excerpt: string;
    readTime: string;
    category: string;
  };
}

export const BlogCard = ({ post }: IBlogCardProps) => {
  return (
    <Card className='group bg-card/20 relative overflow-hidden rounded-xl border p-0 backdrop-blur-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr]'>
        {/* Image Section */}
        <div className='relative rounded-md md:h-72'>
          <Image
            alt={post.title}
            className='size-full object-cover object-top'
            height={500}
            src={post.coverImage || '/placeholder.svg'}
            width={500}
          />

          <div className='to-card/80 absolute inset-0 size-full bg-gradient-to-b from-transparent'></div>
        </div>

        {/* Content Section */}
        <div className='flex flex-col justify-between gap-5 px-6 py-4'>
          <CardHeader className='gap-4 p-0'>
            <div className='text-muted-foreground flex items-center gap-4 text-sm'>
              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                <span>{post.date}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Clock className='h-4 w-4' />
                <span>{post.readTime}</span>
              </div>
            </div>

            <Link href={`/blogs/${post.slug}`}>
              <CardTitle className='hover:text-primary text-2xl leading-tight font-bold tracking-tight transition-colors'>
                {post.title}
              </CardTitle>
            </Link>

            <div className='flex flex-wrap gap-2'>
              {post.tags.slice(0, 3).map(tag => (
                <Badge className='text-xs font-medium' key={tag}>
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge className='text-xs font-medium'>
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardHeader>

          <CardContent className='p-0'>
            <CardDescription className='line-clamp-3 text-base md:line-clamp-4'>
              {post.description}
            </CardDescription>
          </CardContent>

          <CardFooter className='mt-6 flex items-center justify-between px-0'>
            <div className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage
                  alt={post.author}
                  className='object-cover'
                  src={post.profile}
                />
                <AvatarFallback>
                  {post.author.charAt(0).toUpperCase() +
                    post.author.charAt(1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className='text-sm font-medium'>{post.author}</span>
            </div>

            <Button
              asChild
              className='group/button hover:bg-primary/10'
              variant='ghost'
            >
              <Link
                className='flex items-center gap-1'
                href={`/blogs/${post.slug}`}
              >
                Read More
                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1' />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

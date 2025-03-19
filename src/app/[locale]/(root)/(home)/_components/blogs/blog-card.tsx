import Image, { StaticImageData } from 'next/image';

import { ArrowRight, Calendar, Clock, MessageSquare } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { AvatarFallback } from '@radix-ui/react-avatar';

interface IBlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    author: string;
    authorProfile: StaticImageData;
    category: string;
    readTime: string;
    commentCount: number;
  };
}

export const BlogCard = ({ post }: IBlogCardProps) => {
  return (
    <Card className='group bg-card/30 hover:border-primary/20 hover:shadow-primary/5 relative overflow-hidden rounded-xl border p-0 transition-all duration-300 hover:shadow-lg'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr]'>
        {/* Image Section */}
        <div className='relative h-64 overflow-hidden md:h-full'>
          <Image
            fill
            alt={post.title}
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            src={post.coverImage || '/placeholder.svg'}
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t md:from-black/60 md:to-transparent' />
          <Badge className='bg-primary/90 hover:bg-primary absolute top-4 left-4'>
            {post.category}
          </Badge>
        </div>

        {/* Content Section */}
        <div className='flex flex-col justify-between p-6 md:p-8'>
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
              <div className='flex items-center gap-1'>
                <MessageSquare className='h-4 w-4' />
                <span>{post.commentCount} comments</span>
              </div>
            </div>

            <Link href={`/blogs/${post.id}`}>
              <CardTitle className='group-hover:text-primary text-2xl leading-tight font-bold tracking-tight transition-colors md:text-3xl'>
                {post.title}
              </CardTitle>
            </Link>

            <CardDescription className='line-clamp-3 text-base md:line-clamp-4'>
              {post.excerpt}
            </CardDescription>
          </CardHeader>

          <CardFooter className='mt-6 flex items-center justify-between px-0'>
            <div className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage alt={post.author} src={post.authorProfile.src} />
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
                href={`/blogs/${post.id}`}
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

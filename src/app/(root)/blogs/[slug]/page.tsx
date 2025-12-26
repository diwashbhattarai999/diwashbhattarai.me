import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { ArrowLeft } from 'lucide-react';

import BlurFade from '@/components/animations/blur-fade';
import BlurFadeText from '@/components/animations/blur-fade-text';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/ui/codeblock';
import { getPostBySlug } from '@/lib/mdx';

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, frontMatter } = await getPostBySlug(slug);

  return (
    <div className='flex flex-col gap-5 px-5 py-10'>
      {/* Back to blogs link */}
      <BlurFade>
        <Link
          className='text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-2 transition-colors md:mb-8'
          href='/blogs'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to all blogs
        </Link>
      </BlurFade>

      {/* Title */}
      {/* <h1 className='text-4xl leading-tight font-bold'>{frontMatter.title}</h1> */}
      <BlurFadeText
        className='text-3xl leading-tight font-bold sm:text-4xl'
        delay={0.04}
        text={frontMatter.title}
        yOffset={8}
      />

      <BlurFade delay={0.08}>
        <div className='flex items-center gap-4'>
          {/* Author */}
          <div className='flex items-center gap-3'>
            <Image
              alt={frontMatter.author}
              className='size-6 rounded-full object-cover object-top'
              height={100}
              src={frontMatter.profile}
              width={100}
            />
            <span className='text-muted-foreground font-medium'>
              {frontMatter.author}
            </span>
          </div>

          {/* Date & time */}
          <p className='text-muted-foreground text-sm'>
            {frontMatter.date} • {frontMatter.readTime}
          </p>
        </div>
      </BlurFade>

      <div className='mt-4 flex flex-col gap-6'>
        <BlurFade delay={0.12}>
          {/* Cover Image */}
          {frontMatter.coverImage && (
            <div className='relative h-[400px] overflow-hidden rounded-xl'>
              <Image
                alt={frontMatter.title}
                className='size-full object-cover'
                height={800}
                src={frontMatter.coverImage}
                width={1200}
              />
            </div>
          )}
        </BlurFade>

        {/* Tags */}
        <BlurFade delay={0.16}>
          {frontMatter.tags && (
            <div className='flex flex-wrap gap-2'>
              {frontMatter.tags.map((tag: string) => (
                <Badge className='text-sm' key={tag} variant='outline'>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </BlurFade>
      </div>

      <BlurFade delay={0.2}>
        <article className='prose xl:prose-lg dark:prose-invert prose-hr:border-input mt-8 w-full md:max-w-none'>
          <MDXRemote components={{ CodeBlock }} source={content} />
        </article>
      </BlurFade>
    </div>
  );
}

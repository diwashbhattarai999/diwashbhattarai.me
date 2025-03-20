import { serialize } from 'next-mdx-remote/serialize';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { IBlogPost } from '@/data/blogs';

const CONTENT_DIR = path.join(process.cwd(), 'contents');

export const getAllPosts = () => {
  const files = fs.readdirSync(CONTENT_DIR);

  return files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(CONTENT_DIR, filename),
      'utf-8'
    );
    const { data } = matter(fileContent);

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      author: data.author,
      profile: data.profile,
      tags: data.tags,
      description: data.description,
      coverImage: data.coverImage,
      readTime: data.readTime,
      category: data.category,
      excerpt: data.excerpt,
    } as IBlogPost;
  });
};

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  const mdxSource = await serialize(content);

  return { source: mdxSource, frontMatter: data, content };
};

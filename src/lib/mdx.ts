import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import type { BlogPost } from "@/features/blogs/types/blogs.types";

const CONTENT_DIR = path.join(process.cwd(), "contents");

/**
 * Reads all MDX posts from the contents directory.
 *
 * @returns Blog post front matter for the listing page.
 */
export const getAllPosts = (): BlogPost[] => {
    const files = fs.readdirSync(CONTENT_DIR);

    return files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
        const { data } = matter(fileContent);

        return {
            slug: filename.replace(".mdx", ""),
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
        } as BlogPost;
    });
};

/**
 * Loads a single MDX post by slug.
 *
 * @param slug - Filename without the `.mdx` extension.
 * @returns Serialized source, front matter, and raw markdown content.
 */
export const getPostBySlug = async (slug: string) => {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    const mdxSource = await serialize(content);

    return { source: mdxSource, frontMatter: data, content };
};

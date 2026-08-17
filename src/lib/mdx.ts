import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import type { BlogPost } from "@/features/blogs/types/blogs.types";

const CONTENT_DIR = path.join(process.cwd(), "contents");

const toBlogPost = (filename: string, data: Record<string, unknown>): BlogPost =>
    ({
        author: data.author,
        category: data.category,
        coverImage: data.coverImage,
        date: data.date,
        description: data.description,
        excerpt: data.excerpt,
        profile: data.profile,
        readTime: data.readTime,
        slug: filename.replace(".mdx", ""),
        tags: data.tags,
        title: data.title,
    }) as BlogPost;

/**
 * Reads all MDX posts from the contents directory, newest first.
 *
 * @returns Blog post front matter for listing pages.
 */
export const getAllPosts = (): BlogPost[] => {
    const files = fs.readdirSync(CONTENT_DIR).filter((filename) => filename.endsWith(".mdx"));

    return files
        .map((filename) => {
            const fileContent = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
            const { data } = matter(fileContent);

            return toBlogPost(filename, data);
        })
        .sort((left, right) => Date.parse(right.date) - Date.parse(left.date));
};

/**
 * Loads a single MDX post by slug.
 *
 * @param slug - Filename without the `.mdx` extension.
 * @returns Serialized source, front matter, and raw markdown content, or null.
 */
export const getPostBySlug = async (slug: string) => {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);
    const mdxSource = await serialize(content, { blockJS: false });

    return { content, frontMatter: data, source: mdxSource };
};

const RELATED_POST_LIMIT = 3;

/**
 * Finds related posts by shared tags and category, newest first as a tiebreaker.
 *
 * @param slug - Current post slug to exclude.
 * @param tags - Tags from the current post.
 * @param category - Category from the current post.
 * @param limit - Maximum number of related posts to return.
 * @returns Related blog posts for the detail page.
 */
export const getRelatedPosts = (
    slug: string,
    tags: readonly string[] = [],
    category?: string,
    limit = RELATED_POST_LIMIT
): BlogPost[] => {
    const tagSet = new Set(tags.map((tag) => tag.toLowerCase()));

    return getAllPosts()
        .filter((post) => post.slug !== slug)
        .map((post) => {
            const sharedTags = (post.tags ?? []).filter((tag) => tagSet.has(tag.toLowerCase())).length;
            const sameCategory = category && post.category === category ? 1 : 0;

            return {
                post,
                score: sharedTags * 2 + sameCategory,
            };
        })
        .sort((left, right) => {
            if (right.score !== left.score) {
                return right.score - left.score;
            }

            return Date.parse(right.post.date) - Date.parse(left.post.date);
        })
        .slice(0, limit)
        .map(({ post }) => post);
};

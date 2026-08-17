import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ROUTES } from "@/configs/routes";
import { BlogDetailPage } from "@/features/blogs/components/blog-detail-page";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { createPageMetadata } from "@/lib/site-metadata";

interface BlogRouteProps {
    params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: BlogRouteProps): Promise<Metadata> => {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {};
    }

    const { frontMatter } = post;
    const documentTitle = typeof frontMatter.seoTitle === "string" ? frontMatter.seoTitle : frontMatter.title;

    return createPageMetadata({
        description: frontMatter.description ?? frontMatter.excerpt,
        image: frontMatter.coverImage,
        path: ROUTES.BLOG(slug),
        publishedTime: frontMatter.date,
        title: `${documentTitle} | Blog`,
        type: "article",
    });
};

export default async function Page({ params }: BlogRouteProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogDetailPage slug={slug} />;
}

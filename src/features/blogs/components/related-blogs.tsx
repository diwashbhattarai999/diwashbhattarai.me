import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import BlurFade from "@/components/animations/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/configs/routes";
import type { BlogPost } from "@/features/blogs/types/blogs.types";

interface RelatedBlogCardProps {
    post: BlogPost;
}

/**
 * Compact horizontal card used in the related posts list on blog detail pages.
 *
 * @param post - Related blog post metadata.
 */
export const RelatedBlogCard = ({ post }: RelatedBlogCardProps) => (
    <Link
        className="group block rounded-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        href={ROUTES.BLOG(post.slug)}
    >
        <Card className="overflow-hidden border bg-card/20 p-0 transition-colors hover:border-primary/30 hover:bg-card/40">
            <div className="flex gap-4 p-3 sm:gap-5 sm:p-4">
                <div className="relative aspect-3/2 w-28 shrink-0 overflow-hidden rounded-lg bg-muted/20 sm:w-36 md:w-44">
                    <Image
                        alt={post.title}
                        className="object-cover object-left"
                        fill
                        sizes="176px"
                        src={post.coverImage || "/placeholder.svg"}
                    />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 py-0.5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-xs">
                        <span className="inline-flex items-center gap-1">
                            <Calendar className="size-3.5" />
                            {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Clock className="size-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    <CardTitle className="line-clamp-2 font-semibold text-base leading-snug transition-colors group-hover:text-primary sm:text-lg">
                        {post.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-2 text-sm">{post.description}</CardDescription>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                            <Badge className="px-2 py-0 text-[11px]" key={tag} variant="secondary-outline">
                                {tag}
                            </Badge>
                        ))}
                        <span className="ml-auto inline-flex items-center gap-1 text-primary text-xs">
                            Read
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    </Link>
);

interface RelatedBlogsProps {
    posts: BlogPost[];
}

/**
 * Related articles list shown at the end of a blog detail page.
 *
 * @param posts - Related posts to render.
 */
export const RelatedBlogs = ({ posts }: RelatedBlogsProps) => {
    if (posts.length === 0) {
        return null;
    }

    return (
        <section className="border-border/40 border-t pt-12">
            <BlurFade delay={0.08}>
                <h2 className="mb-6 font-bold text-2xl">Related articles</h2>
            </BlurFade>
            <div className="flex flex-col gap-3">
                {posts.map((post, index) => (
                    <BlurFade delay={0.1 + index * 0.06} key={post.slug}>
                        <RelatedBlogCard post={post} />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
};

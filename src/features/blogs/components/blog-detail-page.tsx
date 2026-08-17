import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlurFade from "@/components/animations/blur-fade";
import { JsonLd } from "@/components/shared/json-ld";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { HomepageLink } from "@/components/shared/portfolio-home-note";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/codeblock";
import { ROUTES } from "@/configs/routes";
import { RelatedBlogs } from "@/features/blogs/components/related-blogs";
import { RelatedPortfolioLinks } from "@/features/blogs/components/related-portfolio-links";
import { getRelatedPortfolioLinks } from "@/features/blogs/utils/get-related-portfolio-links";
import { getArticleJsonLd } from "@/lib/json-ld";
import { getPostBySlug, getRelatedPosts } from "@/lib/mdx";

interface BlogDetailPageProps {
    slug: string;
}

/**
 * Individual blog post rendered from MDX.
 *
 * @param slug - MDX filename without extension.
 */
export const BlogDetailPage = async ({ slug }: BlogDetailPageProps) => {
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const { content, frontMatter } = post;
    const tags = frontMatter.tags ?? [];
    const relatedPosts = getRelatedPosts(slug, tags, frontMatter.category);
    const relatedPortfolioLinks = getRelatedPortfolioLinks(slug, tags, frontMatter.category);

    return (
        <div className="flex min-w-0 flex-col gap-5 px-5 py-10">
            <JsonLd
                data={getArticleJsonLd({
                    datePublished: frontMatter.date,
                    description: frontMatter.description ?? frontMatter.excerpt,
                    headline: frontMatter.title,
                    image: frontMatter.coverImage,
                    path: ROUTES.BLOG(slug),
                })}
            />

            <PageBreadcrumb
                className="mb-5"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { href: ROUTES.BLOGS, label: "Blog", path: ROUTES.BLOGS },
                    { label: frontMatter.title, path: ROUTES.BLOG(slug) },
                ]}
            />

            {/* <BlurFade>
                <Link
                    className="mb-4 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground md:mb-8"
                    href={ROUTES.BLOGS}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to all articles
                </Link>
            </BlurFade> */}

            <h1
                className="animate-blur-fade font-bold text-3xl leading-tight sm:text-4xl"
                style={{ animationDelay: "0.04s" }}
            >
                {frontMatter.title}
            </h1>

            <BlurFade delay={0.08}>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <Image
                            alt={frontMatter.author}
                            className="size-6 rounded-full object-cover object-top"
                            height={100}
                            src={frontMatter.profile}
                            width={100}
                        />
                        <HomepageLink className="font-medium text-muted-foreground">
                            {frontMatter.author}
                        </HomepageLink>
                    </div>

                    <p className="text-muted-foreground text-sm">
                        {frontMatter.date} • {frontMatter.readTime}
                    </p>
                </div>
            </BlurFade>

            <div className="mt-4 flex min-w-0 flex-col gap-6">
                <BlurFade className="min-w-0" delay={0.12}>
                    {frontMatter.coverImage && (
                        <div className="relative aspect-3/2 max-h-160 w-full min-w-0 max-w-full overflow-hidden rounded-xl bg-muted/20">
                            <Image
                                alt={frontMatter.title}
                                className="h-auto max-w-full object-cover"
                                height={800}
                                priority
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                src={frontMatter.coverImage}
                                width={1200}
                            />
                        </div>
                    )}
                </BlurFade>

                <BlurFade delay={0.16}>
                    {frontMatter.tags && (
                        <div className="flex flex-wrap gap-2">
                            {frontMatter.tags.map((tag: string) => (
                                <Badge
                                    className="rounded-full px-3 text-sm"
                                    key={tag}
                                    variant="secondary-outline"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </BlurFade>
            </div>

            <BlurFade delay={0.2}>
                <article className="prose xl:prose-lg dark:prose-invert prose-code:wrap-break-word [&_pre]:wrap-break-word mt-8 w-full min-w-0 max-w-full prose-pre:max-w-full overflow-x-auto prose-pre:overflow-x-auto prose-hr:border-input md:max-w-none [&_pre]:whitespace-pre-wrap">
                    <MDXRemote components={{ CodeBlock }} options={{ blockJS: false }} source={content} />
                </article>
            </BlurFade>

            <RelatedPortfolioLinks links={relatedPortfolioLinks} />
            <RelatedBlogs posts={relatedPosts} />
        </div>
    );
};

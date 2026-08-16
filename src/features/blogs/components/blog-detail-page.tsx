import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlurFade from "@/components/animations/blur-fade";
import BlurFadeText from "@/components/animations/blur-fade-text";
import { JsonLd } from "@/components/shared/json-ld";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/codeblock";
import { ROUTES } from "@/configs/routes";
import { getArticleJsonLd } from "@/lib/json-ld";
import { getPostBySlug } from "@/lib/mdx";

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

    return (
        <div className="flex flex-col gap-5 px-5 py-10">
            <JsonLd
                data={getArticleJsonLd({
                    headline: frontMatter.title,
                    description: frontMatter.description ?? frontMatter.excerpt,
                    image: frontMatter.coverImage,
                    datePublished: frontMatter.date,
                    path: ROUTES.BLOG(slug),
                })}
            />

            <PageBreadcrumb
                className="mb-5"
                items={[
                    { label: "Home", href: ROUTES.HOME, path: ROUTES.HOME },
                    { label: "Blog", href: ROUTES.BLOGS, path: ROUTES.BLOGS },
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

            <BlurFadeText
                className="font-bold text-3xl leading-tight sm:text-4xl"
                delay={0.04}
                text={frontMatter.title}
                yOffset={8}
            />

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
                        <span className="font-medium text-muted-foreground">{frontMatter.author}</span>
                    </div>

                    <p className="text-muted-foreground text-sm">
                        {frontMatter.date} • {frontMatter.readTime}
                    </p>
                </div>
            </BlurFade>

            <div className="mt-4 flex flex-col gap-6">
                <BlurFade delay={0.12}>
                    {frontMatter.coverImage && (
                        <div className="aspect-3/2 max-h-160 w-full overflow-hidden rounded-xl bg-muted/20">
                            <Image
                                alt={frontMatter.title}
                                className="h-auto w-full object-cover"
                                height={800}
                                priority
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
                <article className="prose xl:prose-lg dark:prose-invert mt-8 w-full prose-hr:border-input md:max-w-none">
                    <MDXRemote components={{ CodeBlock }} options={{ blockJS: false }} source={content} />
                </article>
            </BlurFade>
        </div>
    );
};

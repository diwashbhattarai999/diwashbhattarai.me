import BlurFade from "@/components/animations/blur-fade";
import { SectionHeading } from "@/components/shared/section-heading";
import { ROUTES } from "@/configs/routes";
import { BlogCard } from "@/features/blogs/components/blog-card";
import { getAllPosts } from "@/lib/mdx";

const FEATURED_ARTICLE_COUNT = 2;

/**
 * Latest technical articles for the homepage.
 */
export const HomeArticles = () => {
    const posts = getAllPosts().slice(0, FEATURED_ARTICLE_COUNT);

    if (posts.length === 0) {
        return null;
    }

    return (
        <SectionHeading
            actionHref={ROUTES.BLOGS}
            actionLabel="Read articles on React and Next.js"
            id="articles"
            title="Latest articles"
        >
            <div className="space-y-8">
                {posts.map((post, index) => (
                    <BlurFade delay={0.08 + index * 0.08} key={post.slug}>
                        <BlogCard linkAuthorToHome={false} post={post} />
                    </BlurFade>
                ))}
            </div>
        </SectionHeading>
    );
};

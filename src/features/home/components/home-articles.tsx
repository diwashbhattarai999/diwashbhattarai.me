import BlurFade from "@/components/animations/blur-fade";
import { SectionHeading } from "@/components/shared/section-heading";
import { ROUTES } from "@/configs/routes";
import { BlogCard } from "@/features/blogs/components/blog-card";
import type { BlogPost } from "@/features/blogs/types/blogs.types";
import { getAllPosts } from "@/lib/mdx";

const FEATURED_ARTICLE_COUNT = 2;

/** Always surface this post on the homepage alongside the newest article. */
const PINNED_FEATURED_SLUG = "How-to-become-a-full-stack-developer-in-nepal";

/**
 * Builds the homepage article list: newest posts, with a pinned career article included.
 *
 * @returns Featured posts newest-first, capped at {@link FEATURED_ARTICLE_COUNT}.
 */
const getFeaturedHomePosts = (): BlogPost[] => {
    const allPosts = getAllPosts();
    const pinned = allPosts.find((post) => post.slug === PINNED_FEATURED_SLUG);
    const remainingSlots = pinned ? FEATURED_ARTICLE_COUNT - 1 : FEATURED_ARTICLE_COUNT;
    const latest = allPosts.filter((post) => post.slug !== PINNED_FEATURED_SLUG).slice(0, remainingSlots);

    return [...latest, ...(pinned ? [pinned] : [])].sort(
        (left, right) => Date.parse(right.date) - Date.parse(left.date)
    );
};

/**
 * Latest technical articles for the homepage.
 */
export const HomeArticles = () => {
    const posts = getFeaturedHomePosts();

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

import BlurFade from "@/components/animations/blur-fade";
import { SectionSubTitle, SectionTitle, SectionWrapper } from "@/components/shared/section-items";
import { BlogCard } from "@/features/blogs/components/blog-card";
import { getAllPosts } from "@/lib/mdx";

/**
 * Blog listing with MDX-backed posts.
 */
export const BlogsPage = () => {
    const posts = getAllPosts();

    return (
        <SectionWrapper id="blogs">
            <SectionTitle>Blogs</SectionTitle>
            <SectionSubTitle className="mt-2 mb-8">
                Insights, tutorials, and thoughts on web development
            </SectionSubTitle>

            <div className="space-y-12">
                {posts.map((post, index) => (
                    <BlurFade delay={0.1 + index * 0.1} key={post.slug}>
                        <BlogCard post={post} />
                    </BlurFade>
                ))}
            </div>
        </SectionWrapper>
    );
};

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionSubTitle, SectionWrapper } from "@/components/shared/section-items";
import { ROUTES } from "@/configs/routes";
import { BlogCard } from "@/features/blogs/components/blog-card";
import { getAllPosts } from "@/lib/mdx";

/**
 * Blog listing with MDX-backed posts.
 */
export const BlogsPage = () => {
    const posts = getAllPosts();

    return (
        <SectionWrapper id="blogs">
            <PageBreadcrumb
                className="mb-8"
                items={[
                    { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                    { label: "Blog", path: ROUTES.BLOGS },
                ]}
            />
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-bold text-3xl">Blog</h1>
                    <SectionSubTitle className="mt-2 mb-8">
                        Insights, tutorials, and thoughts on web development
                    </SectionSubTitle>
                </div>

                {/* Total posts count */}
                <div className="font-medium text-lg text-muted-foreground">{posts.length} total posts</div>
            </div>

            <div className="space-y-8">
                {posts.map((post, index) => (
                    <BlurFade delay={0.1 + index * 0.1} key={post.slug}>
                        <BlogCard post={post} />
                    </BlurFade>
                ))}
            </div>
        </SectionWrapper>
    );
};

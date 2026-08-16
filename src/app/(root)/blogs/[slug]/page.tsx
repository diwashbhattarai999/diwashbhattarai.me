import { BlogDetailPage } from "@/features/blogs/components/blog-detail-page";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return <BlogDetailPage slug={slug} />;
}

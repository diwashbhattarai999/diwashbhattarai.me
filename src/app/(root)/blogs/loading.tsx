import { SectionWrapper } from "@/components/shared/section-items";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogCardSkeleton } from "@/features/blogs/components/blog-card-skeleton";

export default function BlogsLoading() {
    return (
        <SectionWrapper id="blogs">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="mt-2 mb-8 h-4 w-64" />

            <div className="space-y-12">
                {Array.from({ length: 3 }).map((_, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: index is unique
                    <BlogCardSkeleton key={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}

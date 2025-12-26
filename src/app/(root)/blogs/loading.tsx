import { SectionWrapper } from '@/components/section-items';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const BlogCardSkeleton = () => {
  return (
    <Card className='group bg-card/20 relative overflow-hidden rounded-xl border p-0 backdrop-blur-md'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr]'>
        {/* Image Section */}
        <Skeleton className='size-full h-72 rounded-b-none md:h-full md:rounded-r-none' />

        {/* Content Section */}
        <div className='flex flex-col justify-between gap-5 px-6 py-4'>
          <CardHeader className='gap-4 p-0'>
            <div className='text-muted-foreground flex items-center gap-4 text-sm'>
              <Skeleton className='h-4 w-24' />
              <Skeleton className='h-4 w-24' />
            </div>

            <Skeleton className='h-8 w-3/4' />

            <div className='flex flex-wrap gap-2'>
              <Skeleton className='h-6 w-16' />
              <Skeleton className='h-6 w-16' />
              <Skeleton className='h-6 w-16' />
            </div>
          </CardHeader>

          <CardContent className='p-0'>
            <Skeleton className='h-16 w-full' />
          </CardContent>

          <CardFooter className='mt-6 flex items-center justify-between px-0'>
            <div className='flex items-center gap-2'>
              <Skeleton className='h-10 w-10 rounded-full' />
              <Skeleton className='h-4 w-24' />
            </div>

            <Skeleton className='h-10 w-24' />
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default function BlogsLoading() {
  return (
    <SectionWrapper id='blogs'>
      <Skeleton className='h-8 w-48' />
      <Skeleton className='mt-2 mb-8 h-4 w-64' />

      <div className='space-y-12'>
        {Array.from({ length: 3 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

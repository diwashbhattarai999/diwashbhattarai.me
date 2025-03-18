import { cn } from '@/lib/utils';

export const ProjectTags = ({
  tags,
  limit,
  className,
}: {
  tags: string[];
  limit?: number;
  className?: string;
}) => {
  const displayedTags = tags.slice(0, limit);
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {displayedTags.map((tag, index) => (
        <span
          className='bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium'
          key={index}
        >
          {tag}
        </span>
      ))}
      {limit && tags.length > (limit || 0) && (
        <span className='bg-primary/5 text-primary/70 rounded-full px-3 py-1 text-xs font-medium'>
          +{tags.length - (limit || 0)}
        </span>
      )}
    </div>
  );
};

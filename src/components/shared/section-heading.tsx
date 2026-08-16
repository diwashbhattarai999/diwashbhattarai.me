import { SectionTitle, SectionWrapper } from "@/components/shared/section-items";
import { SectionViewAllButton } from "@/components/shared/section-view-all-button";

interface SectionHeadingProps {
    actionHref?: string;
    actionLabel?: string;
    children: React.ReactNode;
    className?: string;
    id: string;
    title: string;
}

/**
 * Section wrapper with an optional shared view-all action button.
 */
export const SectionHeading = ({
    id,
    title,
    actionHref,
    actionLabel,
    children,
    className,
}: SectionHeadingProps) => (
    <SectionWrapper className={className} id={id}>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionTitle>{title}</SectionTitle>
            {actionHref && actionLabel ? (
                <SectionViewAllButton href={actionHref} label={actionLabel} />
            ) : null}
        </div>
        {children}
    </SectionWrapper>
);

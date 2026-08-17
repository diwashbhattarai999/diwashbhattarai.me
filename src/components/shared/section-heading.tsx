import BlurFade from "@/components/animations/blur-fade";
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
                <BlurFade delay={0.08}>
                    <SectionViewAllButton href={actionHref} label={actionLabel} />
                </BlurFade>
            ) : null}
        </div>
        <BlurFade delay={0.1}>{children}</BlurFade>
    </SectionWrapper>
);

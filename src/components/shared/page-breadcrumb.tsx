import Link from "next/link";
import { Fragment } from "react";

import { JsonLd } from "@/components/shared/json-ld";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/utils";

export interface PageBreadcrumbItem {
    href?: string;
    label: string;
    path: string;
}

interface PageBreadcrumbProps {
    className?: string;
    items: readonly PageBreadcrumbItem[];
}

/**
 * Visible breadcrumbs plus matching BreadcrumbList structured data.
 *
 * @param items - Ordered trail including the current page.
 */
export const PageBreadcrumb = ({ items, className }: PageBreadcrumbProps) => {
    const lastIndex = items.length - 1;

    return (
        <>
            <JsonLd
                data={getBreadcrumbJsonLd(
                    items.map((item) => ({
                        name: item.label,
                        path: item.path,
                    }))
                )}
            />
            <Breadcrumb className={cn(className)}>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <Fragment key={item.path}>
                            <BreadcrumbItem>
                                {index < lastIndex && item.href ? (
                                    <BreadcrumbLink asChild>
                                        <Link href={item.href}>{item.label}</Link>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < lastIndex ? <BreadcrumbSeparator /> : null}
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
};

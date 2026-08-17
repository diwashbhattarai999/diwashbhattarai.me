import type { Metadata } from "next";

import { ROUTES } from "@/configs/routes";
import { BlogsPage } from "@/features/blogs/components/blogs-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
    description:
        "Technical articles by Diwash Bhattarai on CSS, frontend engineering, and modern web development.",
    path: ROUTES.BLOGS,
    title: "Blog | Diwash Bhattarai",
});

export default function Page() {
    return <BlogsPage />;
}

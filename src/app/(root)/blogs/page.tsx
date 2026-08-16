import type { Metadata } from "next";

import { BlogsPage } from "@/features/blogs/components/blogs-page";

export const metadata: Metadata = {
    title: "Blogs | Diwash Bhattarai",
    description:
        "Explore my blog for insights, tutorials, and thoughts on web development, React, Next.js, and modern web technologies.",
    keywords: [
        "Diwash Bhattarai Blogs",
        "Web Development Blog",
        "React Blog",
        "Next.js Blog",
        "Frontend Blog",
        "Backend Blog",
        "JavaScript Blog",
        "TypeScript Blog",
        "Web Development Tutorials",
        "Modern Web Technologies",
        "Programming Insights",
    ],
};

export default function Page() {
    return <BlogsPage />;
}

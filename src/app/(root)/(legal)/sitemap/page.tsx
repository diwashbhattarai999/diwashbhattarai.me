import { ROUTES } from "@/configs/routes";
import { HtmlSitemapPage } from "@/features/legal/components/html-sitemap-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    description: "A complete list of pages on Diwash Bhattarai's portfolio website.",
    path: ROUTES.SITEMAP,
    title: "Sitemap | Diwash Bhattarai",
});

export default function Page() {
    return <HtmlSitemapPage />;
}

import { siteConfig } from "@/configs/site";
import { getCanonicalUrl } from "@/lib/get-base-url";

interface BreadcrumbItem {
    name: string;
    path: string;
}

interface ArticleJsonLdInput {
    datePublished: string;
    description: string;
    headline: string;
    image?: string;
    path: string;
}

/**
 * Person JSON-LD for Diwash Bhattarai.
 *
 * @returns Schema.org Person graph node.
 */
export const getPersonJsonLd = () => ({
    "@id": `${getCanonicalUrl("/")}/#person`,
    "@type": "Person",
    address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
    },
    email: siteConfig.contactEmail,
    image: getCanonicalUrl("/profile.webp"),
    jobTitle: siteConfig.jobTitle,
    knowsAbout: [...siteConfig.knowsAbout],
    name: siteConfig.name,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.instagram],
    url: getCanonicalUrl("/"),
});

/**
 * WebSite JSON-LD for the portfolio origin.
 *
 * @returns Schema.org WebSite graph node.
 */
export const getWebSiteJsonLd = () => ({
    "@id": `${getCanonicalUrl("/")}/#website`,
    "@type": "WebSite",
    description: siteConfig.description,
    inLanguage: "en",
    name: siteConfig.name,
    publisher: {
        "@id": `${getCanonicalUrl("/")}/#person`,
    },
    url: getCanonicalUrl("/"),
});

/**
 * Combined graph for the site layout.
 *
 * @returns JSON-LD @graph payload.
 */
export const getSiteJsonLd = () => ({
    "@context": "https://schema.org",
    "@graph": [getPersonJsonLd(), getWebSiteJsonLd()],
});

/**
 * BreadcrumbList JSON-LD for nested pages.
 *
 * @param items - Ordered breadcrumb entries.
 * @returns Schema.org BreadcrumbList.
 */
export const getBreadcrumbJsonLd = (items: readonly BreadcrumbItem[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        item: getCanonicalUrl(item.path),
        name: item.name,
        position: index + 1,
    })),
});

/**
 * BlogPosting JSON-LD for an article.
 *
 * @param input - Article fields from MDX front matter.
 * @returns Schema.org BlogPosting.
 */
export const getArticleJsonLd = ({
    headline,
    description,
    image,
    datePublished,
    path,
}: ArticleJsonLdInput) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: {
        "@id": `${getCanonicalUrl("/")}/#person`,
    },
    dateModified: datePublished,
    datePublished,
    description,
    headline,
    image: image ? getCanonicalUrl(image) : getCanonicalUrl(siteConfig.seo.openGraph.image),
    mainEntityOfPage: getCanonicalUrl(path),
    publisher: {
        "@id": `${getCanonicalUrl("/")}/#person`,
    },
});

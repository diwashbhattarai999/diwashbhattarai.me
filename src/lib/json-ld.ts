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
    "@type": "Person",
    "@id": `${getCanonicalUrl("/")}/#person`,
    name: siteConfig.name,
    url: getCanonicalUrl("/"),
    image: getCanonicalUrl("/profile.png"),
    jobTitle: siteConfig.jobTitle,
    email: siteConfig.contactEmail,
    address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.instagram],
    knowsAbout: [...siteConfig.knowsAbout],
});

/**
 * WebSite JSON-LD for the portfolio origin.
 *
 * @returns Schema.org WebSite graph node.
 */
export const getWebSiteJsonLd = () => ({
    "@type": "WebSite",
    "@id": `${getCanonicalUrl("/")}/#website`,
    name: siteConfig.name,
    url: getCanonicalUrl("/"),
    description: siteConfig.description,
    publisher: {
        "@id": `${getCanonicalUrl("/")}/#person`,
    },
    inLanguage: "en",
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
        position: index + 1,
        name: item.name,
        item: getCanonicalUrl(item.path),
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
    headline,
    description,
    image: image ? getCanonicalUrl(image) : getCanonicalUrl(siteConfig.seo.openGraph.image),
    datePublished,
    dateModified: datePublished,
    author: {
        "@id": `${getCanonicalUrl("/")}/#person`,
    },
    publisher: {
        "@id": `${getCanonicalUrl("/")}/#person`,
    },
    mainEntityOfPage: getCanonicalUrl(path),
});

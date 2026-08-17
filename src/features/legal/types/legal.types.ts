export interface LegalSection {
    content: string[];
    title: string;
}

export interface LegalDocument {
    description: string;
    lastUpdated: string;
    sections: LegalSection[];
    title: string;
}

export interface SitemapLink {
    href: string;
    label: string;
}

export interface SitemapGroup {
    links: SitemapLink[];
    title: string;
}

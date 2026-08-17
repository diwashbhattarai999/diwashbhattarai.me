import ProfileImg from "@/assets/images/profile2.webp";

export const ABOUT_ME = {
    name: "Diwash Bhattarai",
    initials: "DB",
    title: "Full Stack Software Developer in Nepal",
    headline: "Full Stack Software Developer",
    location: "Nepal",
    description: [
        "A full-stack software developer with over 3.5 years of experience building scalable, production-ready web applications. I specialize in React, Next.js, Node.js, NestJS, and TypeScript, with a strong focus on clean architecture, performance, and developer experience. Open to full-time software engineering roles and collaboration.",
        "Currently shipping multi-tenant platforms and Stripe-powered products at Plex Bit Infosystems across sports, fitness, travel, ecommerce, and finance. Previously at Upachaar Nepal, I built healthcare portals, RESTful APIs, and microservices while publishing reusable UI components and mentoring interns.",
    ],
    profileImage: ProfileImg,
} as const;

/** Phrases emphasized in the homepage hero for scannability. */
export const HERO_HIGHLIGHT_PHRASES = [
    "full-stack software developer",
    "3.5 years of experience",
    "React, Next.js, Node.js, NestJS, and TypeScript",
    "full-time software engineering roles",
    "Plex Bit Infosystems",
    "Upachaar Nepal",
    "RESTful APIs",
    "mentoring interns",
] as const;

/**
 * Wraps known hero phrases in primary-colored emphasis spans.
 *
 * @param text - Plain paragraph copy.
 * @returns HTML string with highlighted phrases.
 */
export const highlightHeroText = (text: string): string => {
    let highlightedText = text;

    for (const phrase of HERO_HIGHLIGHT_PHRASES) {
        highlightedText = highlightedText.replaceAll(
            phrase,
            `<span class="font-semibold text-primary">${phrase}</span>`
        );
    }

    return highlightedText;
};

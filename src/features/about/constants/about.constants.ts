import ProfileImg from "@/assets/images/profile2.webp";

export const ABOUT_ME = {
    description: [
        "A full-stack software developer with over 3.5 years of experience building scalable, production-ready web applications. I specialize in React, Next.js, Node.js, NestJS, and TypeScript, with a strong focus on clean architecture, performance, and developer experience. Open to full-time software engineering roles and collaboration.",
        "Currently shipping multi-tenant platforms and Stripe-powered products at Plex Bit Infosystems across sports, fitness, travel, ecommerce, and finance. Previously at Upachaar Nepal, I built healthcare portals, RESTful APIs, and microservices while publishing reusable UI components and mentoring interns.",
    ],
    headline: "Full Stack Software Developer",
    initials: "DB",
    location: "Nepal",
    name: "Diwash Bhattarai",
    profileImage: ProfileImg,
    title: "Full Stack Software Developer in Nepal",
} as const;

export const ABOUT_INTRODUCTION = [
    "I am Diwash Bhattarai, a software developer based in Nepal. I work as a full stack software engineer on production web applications — the public sites people land on, the dashboards teams run day to day, and the APIs that keep those products in sync.",
    "Most of my recent work is as a React and Next.js developer on the frontend, with Node.js and NestJS on the backend. I care about typed TypeScript codebases, permission-aware interfaces, and shipping features that stay maintainable after launch.",
] as const;

export const ABOUT_BACKGROUND = [
    "I studied B.Sc. CSIT at Bhaktapur Multiple Campus, a constituent campus of Tribhuvan University, after a science-focused 10+2 at Xavier International College and school-level studies at Advanced English Boarding School. That path is where programming, data structures, databases, and software engineering became the academic base for professional work.",
    "I started in industry as a frontend developer intern at KSW Techzone, then as a junior frontend developer at Fact Digi. From June 2024 to December 2025 I was a full stack software developer at Upachaar Nepal, building healthcare portals and backend services. Since January 2026 I have been a full stack software developer at Plex Bit Infosystems, shipping multi-tenant and Stripe-connected products across sports, fitness, travel, ecommerce, and finance.",
] as const;

export const ABOUT_EXPERTISE = [
    {
        body: "React and Next.js applications with TypeScript, Tailwind CSS, and Shadcn UI. This includes marketing sites, multi-tenant dashboards, and role-based product surfaces such as GymGrow, Coach HQ, Striide, and the UpachaarNepal portals.",
        title: "Product frontend",
    },
    {
        body: "Node.js, Express, and NestJS services with REST APIs, PostgreSQL, MongoDB, Redis, and Apache Kafka. At Upachaar Nepal this included microservices, event-driven communication, and tests around backend reliability.",
        title: "APIs and backend systems",
    },
    {
        body: "Payments, tenancy, and operations tooling — Stripe Express on gym and coaching products, Khalti on healthcare checkout, and permission models that keep admin, operator, and customer apps aligned.",
        title: "Payments and multi-tenant products",
    },
] as const;

export const ABOUT_APPROACH =
    "I prefer clean architecture, explicit types, and developer experience that makes later changes cheaper. That shows up as reusable UI published to npm and GitHub Packages at Upachaar Nepal, CI/CD with GitHub Actions and Docker from Fact Digi, and mentoring interns on React, Git workflows, and system design. I am interested in performance, maintainable frontend architecture, and backend services that stay understandable as they grow.";

export const ABOUT_CAREER_FOCUS =
    "I am open to full-time software engineering roles and collaboration. The work I want to keep doing is full stack product development: React and Next.js on the client, Node.js and NestJS on the server, and the data layer in PostgreSQL or MongoDB. In practice that means platforms like gym operations, coaching subscriptions, healthcare networks, and client marketing sites — software that has to work for real operators, not only for a demo.";

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

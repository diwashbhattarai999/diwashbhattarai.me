import type { ExperienceDetail } from "@/features/experience/types/experience.types";

const SUMMARY_SENTENCE_PATTERN = /^[^.!?]+[.!?]/;

export const EXPERIENCE_DETAILS: ExperienceDetail[] = [
    {
        company: "Plex Bit Infosystems",
        current: true,
        description:
            "Built and shipped production web platforms for sports, fitness, travel, ecommerce, and finance clients using React, Next.js, TypeScript, and Tailwind CSS. Designed GymGrow as a multi-tenant gym management system covering memberships, class scheduling, programming, finances, and Stripe Express payouts. Delivered Coach HQ and Striide as permission-driven coaching platforms with content workflows, subscriptions, and monetization. Launched marketing sites and dashboards for Euro Tours, Finance 360, and Luxe, and redesigned the Plex Bit homepage.",
        duration: "Jan 2026 - Present",
        logo: "/company/plexbit.png",
        projects: [
            { link: "https://gymgrow.ai", name: "GymGrow", projectId: "gymgrow" },
            { link: "https://uat-coachhq.pbinfosystems.com", name: "Coach HQ", projectId: "coach-hq" },
            { link: "https://striide.app", name: "Striide", projectId: "striide" },
            { link: "https://v2.pbinfosystems.com", name: "Plex Bit Website", projectId: "plexbit-website" },
            { link: "https://luxe.pbinfosystems.com", name: "Luxe", projectId: "luxe" },
            { link: "https://eurotourstravel.com", name: "Euro Tours Travel", projectId: "euro-tours" },
            {
                link: "https://finance360degree.com",
                name: "Finance 360 Degree",
                projectId: "finance-360",
            },
        ],
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "TanStack Query",
            "React Hook Form",
            "Zod",
            "Node.js",
            "Stripe",
            "Role-based Access",
        ],
        slug: "full-stack-software-developer-plexbit",
        title: "Full Stack Software Developer",
        website: "https://pbinfosystems.com",
    },
    {
        company: "Upachaar Nepal",
        current: false,
        description:
            "Built and scaled large healthcare platforms serving patients, doctors, clinics, pharmacies, diagnostics, and admins using React, TypeScript, Tailwind CSS, and modern frontend architecture. Designed and developed RESTful APIs and distributed microservices using Node.js, Express, NestJS, MongoDB, and PostgreSQL. Implemented event-driven microservice communication using Apache Kafka and Redis. Published reusable UI component libraries to npm and GitHub Packages. Mentored interns on React, Git workflows, clean architecture, and system design. Implemented unit and integration tests to ensure performance, reliability, and maintainability of backend services.",
        duration: "Jun 2024 - Dec 2025",
        logo: "/company/upchaar-nepal.png",
        projects: [
            {
                link: "https://upchaarnepal.com",
                name: "Patient Portal",
                projectId: "upchaar-patient-portal",
            },
            {
                link: "https://doctor.upchaarnepal.com",
                name: "Doctor Portal",
                projectId: "upchaar-doctor-portal",
            },
            {
                link: "https://clinic.upchaarnepal.com",
                name: "Clinic Portal",
                projectId: "upchaar-clinic-portal",
            },
            {
                link: "https://pharmacy.upchaarnepal.com",
                name: "Pharmacy Portal",
                projectId: "upchaar-pharmacy-portal",
            },
            {
                link: "https://diagnostic.upchaarnepal.com",
                name: "Diagnostic Portal",
                projectId: "upchaar-diagnostic-portal",
            },
            {
                name: "Admin Portal",
                projectId: "upchaar-admin-portal",
            },
            {
                name: "Logger System",
                projectId: "upchaar-logger-system",
            },
        ],
        skills: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Redux Toolkit",
            "React Query",
            "Node.js",
            "NestJS",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "Apache Kafka",
            "Redis",
            "Microservices",
            "Docker",
            "PM2",
            "GCP",
            "WebRTC",
            "Khalti Payment Gateway",
        ],
        slug: "full-stack-software-developer-upachaar-nepal",
        title: "Full Stack Software Developer",
        website: "https://upchaarnepal.com",
    },
    {
        company: "Fact Digi",
        current: false,
        description:
            "Designed and developed responsive and SEO-optimized frontends for platforms like AI Color Analysis, Themjo Traders, Service Provider App, and the Company Website using React, Next.js, TypeScript, and Tailwind CSS. Integrated REST APIs with error boundaries and suspense. Implemented CI/CD pipelines using GitHub Actions and deployed apps using Docker and Nginx to AWS EC2.",
        duration: "Jan 2024 - Jun 2024",
        logo: "/company/fact-digi.png",
        projects: [
            { name: "Service Provider Application" },
            { link: "https://factdigi.com", name: "Company Website" },
            { link: "http://13.233.7.146", name: "Themjon Traders" },
            { name: "Korean Color Analysis" },
        ],
        skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Shadcn UI",
            "GitHub Actions",
            "Docker",
            "Nginx",
            "AWS EC2",
        ],
        slug: "junior-frontend-developer-fact-digi",
        title: "Junior Frontend Developer",
        website: "https://factdigi.com",
    },
    {
        company: "KSW Techzone",
        current: false,
        description:
            "Contributed to the frontend development of e-commerce platforms, booking applications, and portfolio websites. Enhanced existing design systems and applications to ensure a consistent user experience across all platforms. Collaborated with the team to implement frontend functionalities based on project requirements. Worked on improving UI/UX aspects and applied responsive design principles effectively.",
        duration: "Nov 2023 - Jan 2024",
        logo: "/company/ksw.png",
        projects: [
            { name: "E-commerce Platform" },
            { name: "Booking Application" },
            { link: "https://kswtechzone.com.np/", name: "Portfolio Website" },
        ],
        skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
        slug: "frontend-developer-intern-ksw-techzone",
        title: "Frontend Developer Intern",
        website: "https://kswtechzone.com.np/",
    },
];

/**
 * Returns the first sentence of an experience description for summary cards.
 *
 * @param description - Full experience description.
 * @returns Opening sentence used on the homepage.
 */
export const getExperienceSummary = (description: string): string => {
    const match = description.match(SUMMARY_SENTENCE_PATTERN);

    return match ? match[0].trim() : description;
};

/**
 * Finds an experience entry by slug.
 *
 * @param slug - Stable URL slug.
 * @returns Matching experience or undefined.
 */
export const getExperienceBySlug = (slug: string): ExperienceDetail | undefined =>
    EXPERIENCE_DETAILS.find((experience) => experience.slug === slug);

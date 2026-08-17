import { siteConfig } from "@/configs/site";
import type { LegalDocument } from "@/features/legal/types/legal.types";

export const TERMS_AND_CONDITIONS: LegalDocument = {
    description:
        "Terms for using this personal portfolio website, including content ownership, third-party links, and limitations of liability.",
    lastUpdated: "August 17, 2026",
    sections: [
        {
            content: [
                "By using this website you agree to these terms. If you do not agree, please do not use the site.",
                `The site is provided by ${siteConfig.name} to share professional work, writing, and contact details.`,
            ],
            title: "Agreement",
        },
        {
            content: [
                "This is a personal portfolio. Content describes projects, experience, education, and skills. It is not legal, financial, or professional advice, and it is not an offer of employment unless we agree to that separately in writing.",
                "Project case studies may describe client or company work. Names, screenshots, and live URLs are shown for portfolio context. They do not transfer ownership of those products to visitors.",
            ],
            title: "What this site is",
        },
        {
            content: [
                `Unless noted otherwise, the original writing, layout, and presentation of this portfolio belong to ${siteConfig.name}.`,
                "You may share links to pages on this site. You may not copy substantial portions of the content, code samples, or images and present them as your own without permission.",
                "Trademarks, logos, and product names belonging to employers or clients remain their property.",
            ],
            title: "Intellectual property",
        },
        {
            content: [
                "Do not attempt to disrupt, scrape in an abusive way, or gain unauthorized access to the site or related services.",
                "Do not use contact forms, email, or booking tools to send spam, malware, or unlawful content.",
            ],
            title: "Acceptable use",
        },
        {
            content: [
                "Pages may link to live project URLs, GitHub, social profiles, calendars, and other websites. Those destinations have their own terms. I am not responsible for their content or availability.",
                "Booking a call through Cal.com is subject to Cal.com's terms in addition to these.",
            ],
            title: "External links and third-party tools",
        },
        {
            content: [
                "The site is provided as is. I work to keep information accurate, but project details, dates, and live demos can change. Some demos may be unavailable, password-protected, or hosted on third-party domains.",
                "I do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
            ],
            title: "No warranty",
        },
        {
            content: [
                "To the fullest extent permitted by law, I am not liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on its content.",
            ],
            title: "Limitation of liability",
        },
        {
            content: [
                "These terms may be updated from time to time. Continued use of the site after a change means you accept the revised terms. The last updated date at the top of the page reflects the current version.",
            ],
            title: "Changes",
        },
        {
            content: [`For questions about these terms, email ${siteConfig.contactEmail}.`],
            title: "Contact",
        },
    ],
    title: "Terms and Conditions",
};

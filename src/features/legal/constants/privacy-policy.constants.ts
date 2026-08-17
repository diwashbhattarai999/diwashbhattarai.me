import { siteConfig } from "@/configs/site";
import type { LegalDocument } from "@/features/legal/types/legal.types";

export const PRIVACY_POLICY: LegalDocument = {
    description:
        "How this personal portfolio website collects, uses, and protects information when you visit or get in touch.",
    lastUpdated: "August 17, 2026",
    sections: [
        {
            content: [
                `This website is the personal portfolio of ${siteConfig.name}, a ${siteConfig.jobTitle} based in ${siteConfig.location}. It is operated as an individual site, not as a company product or SaaS platform.`,
                `Questions about this policy can be sent to ${siteConfig.contactEmail}.`,
            ],
            title: "Who this site belongs to",
        },
        {
            content: [
                "You can browse projects, experience, education, and writing without creating an account. This site does not run a user login or store a personal profile for visitors.",
                "If you email me or book a call, I receive the details you choose to share — typically your name, email address, and the content of your message or booking.",
                "The site may store a theme preference (light or dark) in your browser so the interface stays consistent on later visits. That value stays on your device.",
                "Hosting and delivery providers may collect standard technical logs such as IP address, browser type, referring URL, and request timestamps to keep the site available and secure.",
            ],
            title: "Information this site collects",
        },
        {
            content: [
                "Contact details are used only to reply to inquiries, schedule calls, and follow up on work you asked about.",
                "Technical logs are used to operate, protect, and troubleshoot the website.",
                "Information is not sold, rented, or shared for advertising.",
            ],
            title: "How that information is used",
        },
        {
            content: [
                "Call booking is handled through Cal.com. When you open the calendar or book a time, Cal.com processes the information you submit under its own privacy policy.",
                "The site is hosted on infrastructure that may include a content delivery network. Those providers process technical data as needed to serve pages.",
                "Links to GitHub, LinkedIn, Instagram, and other external sites are not covered by this policy. Their privacy practices apply once you leave this website.",
            ],
            title: "Third-party services",
        },
        {
            content: [
                "This site uses local browser storage for theme preference. It does not use advertising cookies or sell browsing data to third parties.",
                "You can clear cookies and local storage in your browser at any time. Doing so may reset appearance settings.",
            ],
            title: "Cookies and local storage",
        },
        {
            content: [
                "Email and booking correspondence is kept only as long as needed to respond and, if relevant, continue a professional conversation.",
                "Server logs are retained according to the hosting provider's standard operations.",
            ],
            title: "Retention",
        },
        {
            content: [
                "You can contact me to ask what personal information I hold from a message or booking, to request a correction, or to ask that it be deleted, subject to any legal obligation to keep records.",
                "You can also stop further contact by saying so in an email.",
            ],
            title: "Your choices",
        },
        {
            content: [
                "This policy may be updated when the site's features or legal requirements change. The last updated date at the top of the page will change when that happens.",
            ],
            title: "Changes",
        },
    ],
    title: "Privacy Policy",
};

import { ROUTES } from "@/configs/routes";

export const FOOTER_NAV_LINKS = [
    { href: ROUTES.HOME, label: "Home" },
    { href: ROUTES.ABOUT, label: "About" },
    { href: ROUTES.EXPERIENCE, label: "Experience" },
    { href: ROUTES.EDUCATION, label: "Education" },
    { href: ROUTES.SKILLS, label: "Skills" },
    { href: ROUTES.PROJECTS, label: "Projects" },
    { href: ROUTES.BLOGS, label: "Blog" },
] as const;

export const FOOTER_LEGAL_LINKS = [
    { href: ROUTES.PRIVACY_POLICY, label: "Privacy Policy" },
    { href: ROUTES.TERMS, label: "Terms and Conditions" },
    { href: ROUTES.SITEMAP, label: "Sitemap" },
] as const;

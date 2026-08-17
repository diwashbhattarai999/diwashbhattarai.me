import { ROUTES } from "@/configs/routes";

export const FOOTER_LEGAL_LINKS = [
    { href: ROUTES.PRIVACY_POLICY, label: "Privacy Policy" },
    { href: ROUTES.TERMS, label: "Terms and Conditions" },
    { href: ROUTES.SITEMAP, label: "Sitemap" },
] as const;

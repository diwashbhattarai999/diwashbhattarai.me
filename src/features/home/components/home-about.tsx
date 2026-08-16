import { SectionHeading } from "@/components/shared/section-heading";
import { ROUTES } from "@/configs/routes";
import { ABOUT_ME } from "@/features/about/constants/about.constants";

/**
 * Short personal summary that links to the full about page.
 */
export const HomeAbout = () => (
    <SectionHeading actionHref={ROUTES.ABOUT} actionLabel="About Diwash Bhattarai" id="about" title="About">
        <p className="max-w-3xl text-muted-foreground leading-relaxed">{ABOUT_ME.description[1]}</p>
    </SectionHeading>
);

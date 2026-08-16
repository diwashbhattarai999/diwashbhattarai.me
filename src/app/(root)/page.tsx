import { SectionSeperator } from "@/components/shared/section-items";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { ContactSection } from "@/features/contact/components/contact-section";
import { HomeAbout } from "@/features/home/components/home-about";
import { HomeArticles } from "@/features/home/components/home-articles";
import { HomeEducation } from "@/features/home/components/home-education";
import { HomeExperience } from "@/features/home/components/home-experience";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomeSkills } from "@/features/home/components/home-skills";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: ROUTES.HOME,
});

export default function HomePage() {
    return (
        <>
            <div className="fixed -top-10 -left-10 z-0 size-72 rounded-full bg-primary/20 blur-[20rem]" />
            <div className="fixed -right-10 -bottom-10 z-0 size-72 rounded-full bg-primary/20 blur-[20rem]" />

            <HomeHero />
            <SectionSeperator />
            <ProjectsSection limit={3} showViewAll />
            <SectionSeperator />
            <HomeExperience />
            <SectionSeperator />
            <HomeSkills />
            <SectionSeperator />
            <HomeAbout />
            <SectionSeperator />
            <HomeEducation />
            <SectionSeperator />
            <HomeArticles />
            <SectionSeperator />
            <ContactSection />
        </>
    );
}

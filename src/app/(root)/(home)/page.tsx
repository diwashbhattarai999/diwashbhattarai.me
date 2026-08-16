import { SectionSeperator } from "@/components/shared/section-items";
import { HomeContact } from "@/features/home/components/home-contact";
import { HomeEducation } from "@/features/home/components/home-education";
import { HomeExperience } from "@/features/home/components/home-experience";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomeSkills } from "@/features/home/components/home-skills";
import { ProjectsSection } from "@/features/projects/components/projects-section";

export default function HomePage() {
    return (
        <>
            <div className="fixed -top-10 -left-10 z-0 size-72 rounded-full bg-primary/20 blur-[20rem]" />
            <div className="fixed -right-10 -bottom-10 z-0 size-72 rounded-full bg-primary/20 blur-[20rem]" />

            <HomeHero />
            <SectionSeperator />
            <HomeExperience />
            <SectionSeperator />
            <HomeEducation />
            <SectionSeperator />
            <ProjectsSection limit={3} showViewAll />
            <SectionSeperator />
            <HomeSkills />
            <SectionSeperator />
            <HomeContact />
        </>
    );
}

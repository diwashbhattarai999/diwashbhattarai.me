import BlurFade from "@/components/animations/blur-fade";
import { SectionHeading } from "@/components/shared/section-heading";
import { ROUTES } from "@/configs/routes";
import { SKILLS } from "@/features/skills/constants/skills.constants";

const PREVIEW_LIMIT = 6;

/**
 * Category-level technical expertise summary for the homepage.
 */
export function HomeSkills() {
    return (
        <SectionHeading
            actionHref={ROUTES.SKILLS}
            actionLabel="View my React, Next.js, and Node.js stack"
            id="skills"
            title="Technical expertise"
        >
            <div className="grid gap-6 sm:grid-cols-2">
                {SKILLS.map((category, index) => (
                    <BlurFade delay={0.04 + index * 0.05} key={category.title}>
                        <h3 className="mb-2 font-medium">{category.title}</h3>
                        <p className="text-muted-foreground text-sm">
                            {category.skills
                                .slice(0, PREVIEW_LIMIT)
                                .map((skill) => skill.name)
                                .join(" · ")}
                        </p>
                    </BlurFade>
                ))}
            </div>
        </SectionHeading>
    );
}

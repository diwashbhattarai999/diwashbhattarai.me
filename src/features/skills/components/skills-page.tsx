import Image from "next/image";

import BlurFade from "@/components/animations/blur-fade";
import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";
import { SectionWrapper } from "@/components/shared/section-items";
import { ROUTES } from "@/configs/routes";
import { SKILLS } from "@/features/skills/constants/skills.constants";

/**
 * Complete technical stack organized by category.
 */
export const SkillsPage = () => (
    <SectionWrapper id="skills">
        <PageBreadcrumb
            className="mb-8"
            items={[
                { href: ROUTES.HOME, label: "Home", path: ROUTES.HOME },
                { label: "Skills", path: ROUTES.SKILLS },
            ]}
        />
        <BlurFade delay={0.04}>
            <h1 className="mb-4 font-bold text-3xl">Technical stack</h1>
            <p className="mb-10 max-w-2xl text-muted-foreground">
                Technologies Diwash Bhattarai uses to design and ship full stack web applications, from React
                and Next.js to Node.js, NestJS, and PostgreSQL.
            </p>
        </BlurFade>
        <div className="space-y-12">
            {SKILLS.map((category, index) => (
                <BlurFade delay={0.1 + index * 0.06} key={category.title}>
                    <section>
                        <div className="mb-4 flex items-center gap-3">
                            <category.icon className="size-5 text-primary" />
                            <h2 className="font-medium text-xl tracking-tight">{category.title}</h2>
                        </div>
                        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {category.skills.map((skill) => (
                                <li
                                    className="flex flex-col items-center justify-center rounded-lg border border-input bg-muted/50 p-4"
                                    key={skill.name}
                                >
                                    <div className="relative mb-2 size-10">
                                        <Image
                                            alt=""
                                            className="object-contain"
                                            fill
                                            sizes="40px"
                                            src={skill.icon || "/placeholder.svg"}
                                        />
                                    </div>
                                    <span className="text-center text-secondary-foreground text-sm">
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </BlurFade>
            ))}
        </div>
    </SectionWrapper>
);

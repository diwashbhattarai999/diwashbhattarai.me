import Image from "next/image";

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
                { label: "Home", href: ROUTES.HOME, path: ROUTES.HOME },
                { label: "Skills", path: ROUTES.SKILLS },
            ]}
        />
        <h1 className="mb-4 font-bold text-3xl">Technical stack</h1>
        <p className="mb-10 max-w-2xl text-muted-foreground">
            Technologies Diwash Bhattarai uses to design and ship full stack web applications, from React and
            Next.js to Node.js, NestJS, and PostgreSQL.
        </p>
        <div className="space-y-12">
            {SKILLS.map((category) => (
                <section key={category.title}>
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
                                <div className="mb-2 size-10">
                                    <Image
                                        alt=""
                                        className="size-full object-contain"
                                        height={40}
                                        src={skill.icon || "/placeholder.svg"}
                                        width={40}
                                    />
                                </div>
                                <span className="text-center text-secondary-foreground text-sm">
                                    {skill.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    </SectionWrapper>
);

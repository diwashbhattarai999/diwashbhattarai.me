import Image from "next/image";
import Link from "next/link";

import { SectionWrapper } from "@/components/shared/section-items";
import { SocialIcons } from "@/components/shared/social-icons";
import { ROUTES } from "@/configs/routes";
import { ABOUT_ME, highlightHeroText } from "@/features/about/constants/about.constants";

const BLUR_FADE_DELAY = 0.04;
const HERO_LINK_CLASS = "text-primary underline-offset-4 hover:underline";

/**
 * Recruiter-first hero with highlighted positioning copy and social links.
 */
export function HomeHero() {
    return (
        <SectionWrapper className="md:py-16" id="hero">
            <div className="flex flex-col items-start gap-8 md:flex-row">
                <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary/30 via-primary/20 to-primary/30 blur-sm" />

                    <div className="relative size-36 animate-blur-fade overflow-hidden rounded-full border">
                        <Image
                            alt={`${ABOUT_ME.name}, ${ABOUT_ME.headline}`}
                            className="object-cover"
                            fill
                            priority
                            sizes="144px"
                            src={ABOUT_ME.profileImage}
                        />
                    </div>
                </div>

                <div className="relative">
                    <h1
                        className="mb-2 animate-blur-fade font-bold text-4xl"
                        style={{ animationDelay: `${BLUR_FADE_DELAY}s` }}
                    >
                        {ABOUT_ME.name}
                    </h1>
                    <p
                        className="mb-6 animate-blur-fade text-primary text-xl"
                        style={{ animationDelay: `${BLUR_FADE_DELAY}s` }}
                    >
                        {ABOUT_ME.headline}
                    </p>

                    <div className="max-w-2xl">
                        {ABOUT_ME.description.map((text, index) => (
                            <p
                                className="mb-6 animate-blur-fade text-muted-foreground leading-relaxed"
                                // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled highlight markup from constants
                                dangerouslySetInnerHTML={{ __html: highlightHeroText(text) }}
                                key={text.slice(0, 40)}
                                style={{ animationDelay: `${BLUR_FADE_DELAY * (index + 2)}s` }}
                            />
                        ))}

                        <p
                            className="mb-6 animate-blur-fade text-muted-foreground leading-relaxed"
                            style={{ animationDelay: `${BLUR_FADE_DELAY * 4}s` }}
                        >
                            Longer write-ups live on{" "}
                            <Link className={HERO_LINK_CLASS} href={ROUTES.ABOUT}>
                                the about page
                            </Link>
                            ,{" "}
                            <Link className={HERO_LINK_CLASS} href={ROUTES.EXPERIENCE}>
                                full-stack development experience
                            </Link>
                            ,{" "}
                            <Link className={HERO_LINK_CLASS} href={ROUTES.PROJECTS}>
                                Next.js and full stack projects
                            </Link>
                            ,{" "}
                            <Link className={HERO_LINK_CLASS} href={ROUTES.SKILLS}>
                                React, Next.js, and Node.js skills
                            </Link>
                            ,{" "}
                            <Link className={HERO_LINK_CLASS} href={ROUTES.EDUCATION}>
                                CSIT education
                            </Link>
                            , and{" "}
                            <Link className={HERO_LINK_CLASS} href={ROUTES.BLOGS}>
                                articles on React and Next.js
                            </Link>
                            .
                        </p>

                        <SocialIcons />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

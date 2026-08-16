import BlurFade from "@/components/animations/blur-fade";
import BlurFadeText from "@/components/animations/blur-fade-text";
import { SectionWrapper } from "@/components/shared/section-items";
import { SocialIcons } from "@/components/shared/social-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ABOUT_ME, highlightHeroText } from "@/features/about/constants/about.constants";

const BLUR_FADE_DELAY = 0.04;

/**
 * Recruiter-first hero with highlighted positioning copy and social links.
 */
export function HomeHero() {
    return (
        <SectionWrapper className="md:py-16" id="hero">
            <div className="flex flex-col items-start gap-8 md:flex-row">
                <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary/30 via-primary/20 to-primary/30 blur-sm" />

                    <BlurFade>
                        <Avatar className="size-36 border">
                            <AvatarImage
                                alt={`${ABOUT_ME.name}, ${ABOUT_ME.headline}`}
                                className="object-cover"
                                src={ABOUT_ME.profileImage.src}
                            />
                            <AvatarFallback>{ABOUT_ME.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>

                <div className="relative">
                    <h1>
                        <BlurFadeText
                            className="mb-2 font-bold text-4xl"
                            delay={BLUR_FADE_DELAY}
                            text={ABOUT_ME.name}
                            yOffset={8}
                        />
                    </h1>
                    <p>
                        <BlurFadeText
                            className="mb-6 text-primary text-xl"
                            delay={BLUR_FADE_DELAY}
                            text={ABOUT_ME.headline}
                        />
                    </p>

                    <div className="max-w-2xl">
                        {ABOUT_ME.description.map((text, index) => (
                            <BlurFadeText
                                className="mb-6 text-muted-foreground leading-relaxed"
                                // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled highlight markup from constants
                                dangerouslySetInnerHTML={{ __html: highlightHeroText(text) }}
                                delay={BLUR_FADE_DELAY * (index + 2)}
                                key={text.slice(0, 40)}
                            />
                        ))}

                        <SocialIcons />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

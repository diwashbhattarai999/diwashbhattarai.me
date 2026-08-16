import { SectionWrapper } from "@/components/shared/section-items";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/configs/site";
import { BookingCalendar } from "@/features/contact/components/booking-calendar";

/**
 * Shared contact card with email, social links, and a deferred booking calendar.
 */
export const ContactSection = () => (
    <SectionWrapper id="contact" title="Contact">
        <Card className="bg-card/50 backdrop-blur-md">
            <CardHeader>
                <CardTitle>Let&apos;s work together</CardTitle>
                <CardDescription>
                    Email{" "}
                    <a className="text-primary hover:underline" href={siteConfig.social.email}>
                        {siteConfig.contactEmail}
                    </a>{" "}
                    or book a call using the calendar below to book a call with me at a time that works for
                    you.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* <SocialIcons /> */}
                <BookingCalendar />
            </CardContent>
        </Card>
    </SectionWrapper>
);

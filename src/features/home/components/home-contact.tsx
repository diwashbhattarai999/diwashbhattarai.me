import { LetsConnectButton } from "@/components/shared/lets-connect-btn";
import { SectionWrapper } from "@/components/shared/section-items";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HomeContact() {
    return (
        <SectionWrapper id="contact" title="Contact">
            <Card className="bg-card/50 backdrop-blur-md">
                <CardHeader>
                    <CardTitle>Book a Call</CardTitle>
                    <CardDescription>
                        Use the calendar below to book a call with me at a time that works for you.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LetsConnectButton link="diwash-bhattarai/let-s-connect" namespace="let-s-connect" />
                </CardContent>
            </Card>
        </SectionWrapper>
    );
}

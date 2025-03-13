import { LetsConnectButton } from '@/components/lets-connect-btn';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Contact() {
  return (
    <section className='border-border/40 border-t py-12' id='contact'>
      <h2 className='mb-8 text-3xl font-bold'>Contact</h2>

      <Card className='subtle-glow'>
        <CardHeader>
          <CardTitle>Book a Call</CardTitle>
          <CardDescription>
            Use the calendar below to book a call with me at a time that works
            for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LetsConnectButton
            link='diwash-bhattarai/let-s-connect'
            namespace='let-s-connect'
          />
        </CardContent>
      </Card>
    </section>
  );
}

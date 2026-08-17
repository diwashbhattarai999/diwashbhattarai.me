import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import { Providers } from "@/components/layout/providers";
import { JsonLd } from "@/components/shared/json-ld";
import { getSiteJsonLd } from "@/lib/json-ld";
import { getSiteMetadata } from "@/lib/site-metadata";

import "@/styles/globals.css";

const leagueSpartan = League_Spartan({
    display: "swap",
    subsets: ["latin"],
});

export const metadata: Metadata = getSiteMetadata();

interface LocaleLayoutProps {
    children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${leagueSpartan.className} antialiased`}>
                <SpeedInsights />
                <JsonLd data={getSiteJsonLd()} />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

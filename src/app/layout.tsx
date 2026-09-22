import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Script from "next/script";

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
                <Script id="google-tag-manager" strategy="beforeInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNBF5VZ5');`}
                </Script>
                <noscript>
                    <iframe
                        height="0"
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KNBF5VZ5"
                        style={{ display: "none", visibility: "hidden" }}
                        title="Google Tag Manager"
                        width="0"
                    />
                </noscript>
                <SpeedInsights />
                <JsonLd data={getSiteJsonLd()} />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

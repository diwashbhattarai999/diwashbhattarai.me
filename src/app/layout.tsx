import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { Toaster } from "sonner";

import { Providers } from "@/components/layout/providers";
import { JsonLd } from "@/components/shared/json-ld";
import { getSiteJsonLd } from "@/lib/json-ld";
import { getSiteMetadata } from "@/lib/site-metadata";

import "@/styles/globals.css";

const robotoFlex = League_Spartan({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = getSiteMetadata();

interface LocaleLayoutProps {
    children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${robotoFlex.className} antialiased`}>
                <JsonLd data={getSiteJsonLd()} />
                <Providers>
                    {children}
                    <Toaster position="bottom-right" richColors />
                </Providers>
            </body>
        </html>
    );
}

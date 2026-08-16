import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { Toaster } from "sonner";

import { Providers } from "@/components/layout/providers";
import { getSiteMetadata } from "@/lib/site-metadata";

import "@/styles/globals.css";

const robotoFlex = League_Spartan({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = getSiteMetadata();

interface LocaleLayoutProps {
    children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${robotoFlex.className} antialiased`}>
                <Providers>
                    {children}
                    <Toaster position="bottom-right" richColors />
                </Providers>
            </body>
        </html>
    );
}

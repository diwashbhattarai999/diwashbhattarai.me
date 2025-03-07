import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Toaster } from 'sonner';

import { TanstackQueryProvider } from '@/components/providers/tanstack-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { siteConfig } from '@/configs';
import { routing, TLocales } from '@/i18n/routing';

import '@/styles/globals.css';

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto',
  subsets: ['latin'],
});

/** The `metadata` object is used to provide metadata to the client */
export const metadata: Metadata = siteConfig;

/**
 * The `LocaleLayout` component is a layout component that wraps all of the pages
 */
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: TLocales }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  /** Fetch the messages for the current locale to be used by the `NextIntlClientProvider` */
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={`${robotoFlex.variable} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute='class'
          defaultTheme='light'
        >
          <NextIntlClientProvider messages={messages}>
            <TanstackQueryProvider>
              {children}
              <Toaster richColors position='bottom-right' />
            </TanstackQueryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

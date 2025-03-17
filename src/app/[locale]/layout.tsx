import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Toaster } from 'sonner';

import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';
import { TanstackQueryProvider } from '@/components/providers/tanstack-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { SectionSeperator } from '@/components/section-items';
import { siteConfig } from '@/configs';
import { routing, TLocales } from '@/i18n/routing';

import '@/styles/globals.css';

const robotoFlex = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
      <body className={`${robotoFlex.className} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute='class'
          defaultTheme='dark'
        >
          <NextIntlClientProvider messages={messages}>
            <TanstackQueryProvider>
              {/* <PageLoader /> */}

              <main className='bg-background relative flex h-full min-h-screen flex-col overflow-hidden'>
                {/* <CustomCursor /> */}
                {/* Navbar */}
                <div className='max-container h-full'>
                  <div className='border-input mx-2 h-full border-x border-dashed'>
                    <Navbar />
                  </div>
                </div>

                <SectionSeperator />

                {/* Main */}
                <div className='max-container size-full flex-1'>
                  <div className='border-input mx-2 border-x border-dashed'>
                    {children}
                  </div>
                </div>

                <SectionSeperator />

                {/* Footer */}
                <div className='max-container'>
                  <div className='border-input mx-2 border-x border-dashed'>
                    <Footer />
                  </div>
                </div>
              </main>
              <Toaster richColors position='bottom-right' />
            </TanstackQueryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

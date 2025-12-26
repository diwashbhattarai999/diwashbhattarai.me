import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

import { Toaster } from 'sonner';

import { TanstackQueryProvider } from '@/components/providers/tanstack-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { siteConfig } from '@/configs';

import '@/styles/globals.css';

const robotoFlex = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = siteConfig;

interface LocaleLayoutProps {
  children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body className={`${robotoFlex.className} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute='class'
          defaultTheme='dark'
        >
          <TanstackQueryProvider>
            {children}
            <Toaster richColors position='bottom-right' />
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

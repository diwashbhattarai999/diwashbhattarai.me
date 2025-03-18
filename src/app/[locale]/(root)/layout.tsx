import { CustomCursor } from '@/components/custom-cursor';
import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';
import { SectionSeperator } from '@/components/section-items';

/**
 * The `RootLayout` component is a layout component that wraps the all root pages.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <PageLoader /> */}

      <main className='relative flex h-full min-h-screen flex-col overflow-hidden'>
        <CustomCursor />
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
    </>
  );
}

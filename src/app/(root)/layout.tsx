import { CustomCursor } from "@/components/shared/custom-cursor";
import { SectionSeperator } from "@/components/shared/section-items";
import { SiteFooter } from "@/features/footer/components/site-footer";
import { SiteNavbar } from "@/features/navbar/components/site-navbar";

/**
 * Layout wrapper for public site pages.
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative flex h-full min-h-screen flex-col overflow-hidden">
            <CustomCursor />
            <div className="max-container h-full">
                <div className="mx-2 h-full border-input border-x border-dashed">
                    <SiteNavbar />
                </div>
            </div>

            <SectionSeperator />

            <div className="max-container flex size-full flex-1">
                <div className="mx-2 flex-1 border-input border-x border-dashed">{children}</div>
            </div>

            <SectionSeperator />

            <div className="max-container">
                <div className="mx-2 border-input border-x border-dashed">
                    <SiteFooter />
                </div>
            </div>
        </main>
    );
}

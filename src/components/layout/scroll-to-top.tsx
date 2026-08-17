"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

/**
 * Resets document scroll to the top on client-side route changes.
 *
 * Next.js scrolls the new page segment into view, which sits below the persistent
 * navbar and leaves Home slightly offset. Hash URLs are left unchanged.
 */
export const ScrollToTop = () => {
    const pathname = usePathname();

    useLayoutEffect(() => {
        if (window.history.scrollRestoration !== "manual") {
            window.history.scrollRestoration = "manual";
        }

        if (pathname && window.location.hash) {
            return;
        }

        window.scrollTo({ left: 0, top: 0 });
    }, [pathname]);

    useEffect(() => {
        if (pathname && window.location.hash) {
            return;
        }

        const resetScroll = () => {
            window.scrollTo({ left: 0, top: 0 });
        };

        resetScroll();

        const frameId = window.requestAnimationFrame(resetScroll);
        const timeoutId = window.setTimeout(resetScroll, 0);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.clearTimeout(timeoutId);
        };
    }, [pathname]);

    return null;
};

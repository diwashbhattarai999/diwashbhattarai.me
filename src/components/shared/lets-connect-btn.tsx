import { getCalApi } from "@calcom/embed-react";

interface OpenCalModalOptions {
    link: string;
    namespace: string;
}

/**
 * Loads the Cal.com embed API and opens the booking modal.
 *
 * @param options - Cal.com event link and namespace.
 */
export const openCalModal = async ({ link, namespace }: OpenCalModalOptions): Promise<void> => {
    const cal = await getCalApi({ namespace });

    cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    cal("modal", {
        calLink: link,
        config: { layout: "month_view" },
    });
};

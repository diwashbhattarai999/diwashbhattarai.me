"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const CAL_LINK = "diwash-bhattarai/let-s-connect";
const CAL_NAMESPACE = "let-s-connect";

/**
 * Opens the Cal.com booking modal on the same click that loads the embed.
 */
export const BookingCalendar = () => {
    const [isOpening, setIsOpening] = useState(false);

    const handleBookCall = async () => {
        setIsOpening(true);

        try {
            const { openCalModal } = await import("@/components/shared/lets-connect-btn");
            await openCalModal({ link: CAL_LINK, namespace: CAL_NAMESPACE });
        } catch (error) {
            console.error("Failed to open calendar", error);
        } finally {
            setIsOpening(false);
        }
    };

    return (
        <Button disabled={isOpening} onClick={handleBookCall} type="button">
            {isOpening ? "Opening calendar…" : "Book a call"}
        </Button>
    );
};

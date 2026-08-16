"use client";

import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";

const LetsConnectButton = dynamic(
    () => import("@/components/shared/lets-connect-btn").then((module) => module.LetsConnectButton),
    {
        ssr: false,
        loading: () => (
            <Button disabled type="button">
                Loading calendar
            </Button>
        ),
    }
);

/**
 * Defers the Cal.com embed until the contact section is interactive.
 */
export const BookingCalendar = () => (
    <LetsConnectButton link="diwash-bhattarai/let-s-connect" namespace="let-s-connect">
        Book a call
    </LetsConnectButton>
);

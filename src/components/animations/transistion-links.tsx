"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({ children, href, ...props }) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const body = document.querySelector("body");

        body?.classList.add("page-transition");

        await sleep(500);
        router.push(href);
        await sleep(500);

        body?.classList.remove("page-transition");
    };

    return (
        <Link {...props} href={href} onClick={(e) => handleTransition(e)}>
            {children}
        </Link>
    );
};

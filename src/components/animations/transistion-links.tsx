'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';

import { useRouter } from '@/i18n/routing';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector('body');

    body?.classList.add('page-transition');

    await sleep(500);
    router.push(href);
    await sleep(500);

    body?.classList.remove('page-transition');
  };

  return (
    <Link {...props} href={href} onClick={e => void handleTransition(e)}>
      {children}
    </Link>
  );
};

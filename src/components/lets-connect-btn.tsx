'use client';

import { useEffect, useState } from 'react';

import { getCalApi } from '@calcom/embed-react';

import { Button } from './ui/button';

interface LetsConnectButtonProps {
  children?: React.ReactNode;
  namespace: string;
  link: string;
  config?: string;
  className?: string;
}

export const LetsConnectButton: React.FC<LetsConnectButtonProps> = ({
  children,
  namespace,
  link,
  config = '{"layout":"month_view"}',
  className,
}) => {
  const [isCalApiReady, setIsCalApiReady] = useState(false);

  useEffect(() => {
    // Initialize Cal.com API
    getCalApi({ namespace })
      .then(cal => {
        cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
        setIsCalApiReady(true);
      })
      .catch(error => {
        console.error('Failed to initialize Cal.com API', error);
      });
  }, [namespace]);

  return (
    <Button
      className={className}
      data-cal-config={config}
      data-cal-link={link}
      data-cal-namespace={namespace}
      disabled={!isCalApiReady}
    >
      {isCalApiReady ? children || `Let's Connect` : `Loading...`}
    </Button>
  );
};

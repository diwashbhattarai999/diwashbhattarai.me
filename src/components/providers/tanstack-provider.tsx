'use client';

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// The `QueryClient` is a global instance that will be used to cache
const queryClient = new QueryClient();

/**
 * The `TanstackQueryProvider` component is a provider component that wraps the
 * @param children The children to render
 * @returns The JSX element
 */
export const TanstackQueryProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

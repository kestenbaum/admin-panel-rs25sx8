import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ProviderProps {
  children: React.ReactNode;
}

export const queryClient: QueryClient = new QueryClient();
export function Provider({ children }: ProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

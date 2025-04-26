"use client";

import { QueryClient } from "@tanstack/react-query";

// Create a client that persists between renders/components
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});
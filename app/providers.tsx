"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
// import { Toaster } from "@/components/ui/feedback/toaster";
// import { Toaster as Sonner } from "@/components/ui/feedback/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <Toaster />
      <Sonner /> */}
    </QueryClientProvider>
  );
}

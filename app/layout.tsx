import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/interactive/tooltip";
import "@/index.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Kalika AI",
  description: "AI deployment and consulting services",
  icons: {
    icon: '/square-light.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TooltipProvider>
            {children}
            <Analytics />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

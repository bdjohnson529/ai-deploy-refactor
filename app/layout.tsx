import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/interactive/tooltip";
import "@/index.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "AI Deploy Impact",
  description: "AI deployment and consulting services",
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
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

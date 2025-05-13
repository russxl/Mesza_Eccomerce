import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/components/hooks/use-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/images/mesza-logo.png",
    shortcut: "/images/mesza-logo.png",
  },
  title: "Mesza Standing Desk | Ergonomic Adjustable Desks for Home and Office",
  description:
    "Upgrade your workspace with Mesza Standing Desks — premium ergonomic and adjustable desks designed for comfort, productivity, and better posture. Perfect for home offices and workstations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <EdgeStoreProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={inter.className}>
            <Providers>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <ToastProvider>
                  {children}
                  <Toaster />
                </ToastProvider>
              </ThemeProvider>
            </Providers>
          </body>
        </html>
      </EdgeStoreProvider>
    </ClerkProvider>
  );
}

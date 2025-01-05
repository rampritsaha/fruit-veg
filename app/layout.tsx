import { AuthProvider } from "@/components/auth-provider";
import { CartProvider } from "@/components/cart-provider";
import { Header } from "@/components/header";
import { MobileTabs } from "@/components/mobile-tabs";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Market - Premium Produce Delivered",
  description: "Fresh, organic produce delivered to your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ClerkLoaded>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <AuthProvider>
                <CartProvider>
                  <main className="h-full">{children}</main>
                  <Toaster />
                </CartProvider>
              </AuthProvider>
            </ThemeProvider>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}

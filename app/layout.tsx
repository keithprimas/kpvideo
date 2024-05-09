import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meeteor",
  description: "A video conferencing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: 'iconButton',
          socialButtonsPlacement: 'top'
        },
        variables: {
          colorBackground: '#bdbdea',
          colorText: '#000',
          fontSize: '16px',
          colorPrimary: '#fff',
          colorInputBackground: '#fff'
        }
      }}>
          <body className={`${inter.className} bg-blue-1`}>{children}<Toaster /></body>
      </ClerkProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
        variables: {
          colorBackground: '#ffb981',
          colorText: '#000',
          fontSize: '16px',
          colorPrimary: '#8e4307',
          colorInputBackground: '#ffe2ca'
        }
      }}>
          <body className={`${inter.className} bg-orange-1`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}

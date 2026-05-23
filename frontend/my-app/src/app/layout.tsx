import type { Metadata } from "next";
import { Anton, Hanken_Grotesk } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import { SiteShell } from "@/shared/layout/SiteShell";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${hanken.variable} ${geistSans.variable} ${geistMono.variable} h-full dark`}
    >
      <body className="flex min-h-full flex-col bg-background text-on-surface antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

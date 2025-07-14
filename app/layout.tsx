import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "next blog project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'h-full'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200 flex flex-col min-h-full`}
      >
        <Header />
        <main className={'my-10 grow'}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

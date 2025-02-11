import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import React from "react";
import localFont from "next/font/local";
import ThemeProvider  from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";
const inter = localfont({
  src:"./fonts/inter.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900"
});
const spaceGrotesk = localFont({
  src: "./fonts/spaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});
export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "Better Version of Stack Overflowcl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider attribute = "class" defaultTheme = "systemn" enableSystem>
          <Navbar/>
          {children}
        </ThemeProvider>
      
      </body>
    </html>
  );
}

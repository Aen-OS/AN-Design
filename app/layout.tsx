import type { Metadata } from "next";
import { Manrope, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AN Studios - Web Development & Design Agency",
  description: "Web Development & Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="wireframe">
      <body
        className={`${manrope.variable} ${dmSans.variable} antialiased bg-base-200`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  metadataBase: new URL("https://joshua-gnzls.vercel.app"),
  keywords: [
    "Joshua Andre Gonzales",
    "Joshua Gnzls",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "AI Projects",
  ],
  title: {
    default: "Joshua Andre Gonzales | Software Developer",
    template: "%s | Joshua Andre Gonzales",
  },
  description:
    "Portfolio of Joshua Andre Gonzales, a software developer specializing in full-stack web development, AI projects, and innovative web applications.",
  openGraph: {
    title: "Joshua Andre Gonzales | Software Developer",
    description:
      "Portfolio of Joshua Andre Gonzales, a software developer specializing in full-stack web development and AI projects.",
    url: "https://joshua-gnzls.vercel.app",
    siteName: "Joshua Andre Gonzales Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#f8f5f0] ${inter.variable} ${raleway.variable} font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joshuagnzls.com"),
  keywords: [
    "Joshua Andre Gonzales",
    "Joshua Gonzales",
    "Joshua Gnzls",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "AI Projects",
  ],
  title: {
    default: "Joshua Andre Gonzales | Software Engineer | Full-Stack Developer",
    template: "%s | Joshua Andre Gonzales",
  },
  description:
    "Portfolio of Joshua Andre Gonzales, a software developer specializing in full-stack web development, AI projects, and innovative web applications.",
  openGraph: {
    title: "Joshua Andre Gonzales | Web Developer",
    description:
      "Portfolio of Joshua Andre Gonzales, a software developer specializing in full-stack web development and AI projects.",
    url: "https://www.joshuagnzls.com",
    siteName: "Joshua Andre Gonzales",
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
      <body className={`flex h-screen ${inter.className}`}>
        <SideNav />
        <section className="main-section w-full overflow-y-auto">
          <div className="">{children}</div>
          <Analytics />
        </section>
      </body>
    </html>
  );
}

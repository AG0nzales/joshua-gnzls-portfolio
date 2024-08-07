import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://joshua-gnzls.vercel.app"),
  keywords: [
    "Joshua Andre Gonzales",
    "Joshua Gnzls",
    "Joshua Andre Gonzales",
    "joshua andre gonzales",
  ],
  title: {
    default: "Joshua Andre Gonzales",
    template: "%s | Joshua Andre Gonzales",
  },
  description: "Joshua Andre Gonzales",
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

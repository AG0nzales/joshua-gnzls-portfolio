import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Gnzls",
  description: "Joshua Andre Gonzales Portfolio",
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
        </section>
      </body>
    </html>
  );
}

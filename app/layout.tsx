import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/sections/footer";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SheBuilds Bangalore — A Community for Women Who Build",
  description:
    "A community-led ecosystem for women in tech, design, and startups. Join workshops, build projects, find mentorship, and grow your career.",
  openGraph: {
    title: "SheBuilds Bangalore",
    description:
      "A community-led ecosystem for women who build in tech, design, startups, and beyond.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

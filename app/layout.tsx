import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SheBuilds Bangalore",
  description:
    "A community-led ecosystem for women who build in tech, design, startups, and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

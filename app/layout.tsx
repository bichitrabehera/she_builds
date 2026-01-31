import type { Metadata } from "next";
import { B612 } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SheBuilds Bangalore",
  description:
    "A community-led ecosystem for women who build in tech, design, startups, and beyond.",
};

const b612 = B612({
  subsets: ["latin"],
  weight: ["400", "700"], // add what you need
  style: ["normal", "italic"], // optional
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

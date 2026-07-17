import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivana Alawi — Actress, Vlogger, CEO of Ivana Skin",
  description:
    "A tribute and portfolio site for Filipina actress, vlogger, and Ivana Skin founder Ivana Alawi. Latest vlogs, Instagram feed, and skincare showcase.",
  keywords: [
    "Ivana Alawi",
    "Ivana Skin",
    "Filipina actress",
    "vlogger",
    "beauty",
    "skincare",
  ],
  openGraph: {
    title: "Ivana Alawi — Actress, Vlogger, CEO of Ivana Skin",
    description:
      "Latest vlogs, Instagram feed, and the Ivana Skin lineup — all in one place.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivana Alawi",
    description:
      "Actress, vlogger, and CEO of Ivana Skin. Explore her latest vlogs and skincare line.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ivory text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

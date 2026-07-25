import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://suwetha-portfolio.example.com"; // Placeholder canonical URL — replace with real domain when deployed

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Suwetha S T | AI & Data Science Portfolio",
  description:
    "Portfolio of Suwetha S T showcasing AI & Data Science projects, backend development, machine learning, software engineering, and data analytics work.",
  keywords: [
    "Suwetha S T",
    "AI Data Science Portfolio",
    "Software Developer",
    "Backend Developer",
    "Data Analytics",
    "Machine Learning",
  ],
  authors: [{ name: "Suwetha S T" }],
  alternates: {
    canonical: SITE_URL, // Placeholder — update once the site is deployed
  },
  openGraph: {
    title: "Suwetha S T | AI & Data Science Portfolio",
    description:
      "Portfolio of Suwetha S T showcasing AI & Data Science projects, backend development, machine learning, software engineering, and data analytics work.",
    url: SITE_URL,
    siteName: "Suwetha S T Portfolio",
    images: [
      {
        url: "/images/og-placeholder.svg", // Placeholder OG image — replace with a real 1200x630 screenshot
        width: 1200,
        height: 630,
        alt: "Suwetha S T — AI & Data Science Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwetha S T | AI & Data Science Portfolio",
    description:
      "Portfolio of Suwetha S T showcasing AI & Data Science, backend development, and data analytics work.",
    images: ["/images/og-placeholder.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ink text-paper font-body antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

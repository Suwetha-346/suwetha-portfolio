import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Providers } from "./providers";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suwetha S T | DevHQ Personal Portfolio",
  description:
    "Personal Portfolio of Suwetha S T, B.Tech Artificial Intelligence and Data Science Undergraduate. Explore projects, certifications, and experience.",
  openGraph: {
    title: "Suwetha S T | DevHQ Personal Portfolio",
    description: "Explore my AI & Data Science projects, academic achievements, and certifications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-bg dark:bg-[#0a0a0f] text-slate-800 dark:text-white font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200 min-h-screen relative overflow-x-hidden transition-colors duration-500">
        <Providers>
          <ScrollProgressBar />
          <CustomCursor />
          <ParticleBackground />
          <Preloader />
          <header className="fixed top-0 left-0 w-full p-6 z-40 flex items-center justify-between pointer-events-none">
            <div className="pointer-events-auto">
              <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-slate-900 dark:text-white drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity">
                Suwetha <span className="text-purple-600 dark:text-purple-400">S T</span>
              </h1>
            </div>
          </header>
          <Navbar />
          {children}
          <Chatbot />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

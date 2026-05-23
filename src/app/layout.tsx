import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleCanvas from "@/components/Background/ParticleCanvas";
import CommandMenu from "@/components/CommandMenu/CommandMenu";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio Nirada",
  description: "",
  metadataBase: new URL(""),
  openGraph: {
    title: "Portfolio Nirada",
    description: "",
    url: "",
    siteName: "Nirada Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Nirada",
    description: "",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} dark`}>
      <body className={styles.body}>
        {/* Scroll Progress Bar at very top */}
        <ScrollProgress />

        {/* Canvas background nodes */}
        <ParticleCanvas />

        {/* Custom interactive cursor */}
        <CustomCursor />

        {/* Keyboard shortcut Command Menu */}
        <CommandMenu />

        {/* Floating sticky Navigation */}
        <Navbar />

        {/* Body content wrapper */}
        <main className={styles.main}>
          {children}
        </main>

        {/* Unified bottom footer */}
        <Footer />
      </body>
    </html>
  );
}

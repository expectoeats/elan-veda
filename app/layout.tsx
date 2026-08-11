import type { Metadata, Viewport } from "next";
import ClientShell from "@/components/ClientShell";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1A6D3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aarogya India — Ayurvedic Wellness & Natural Healthcare",
  description:
    "India's trusted Ayurvedic wellness brand. Amla Juice, Shilajit, Aloe Vera, Jamun Karela, Charcoal Products & 50+ natural formulations. 100% Natural · ISO Certified.",
  keywords: ["ayurvedic medicines", "amla juice", "shilajit", "aloe vera", "jamun karela", "charcoal", "natural skincare", "aarogya india"],
  robots: { index: true, follow: true },
};

const FONTS =
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' rx='6' fill='%231A6D3A'/><path d='M12 12L20 28L28 12' stroke='%23DAA520' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/><path d='M16 12L20 21L24 12' stroke='rgba(255,255,255,0.6)' stroke-width='1.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>" />
      </head>
      <body>
        {children}
        <ClientShell />
      </body>
    </html>
  );
}

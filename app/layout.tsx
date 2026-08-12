import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0E3B2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "VedaPure - Modern Ayurveda for Real Results. Scientifically Tested.",
  description:
    "India's trusted Ayurvedic wellness brand. Himalayan Shilajit, Sugar Management, Gym & Fitness, Heart Health and 50+ scientifically tested formulations. Free doctor consultation.",
  keywords: [
    "ayurvedic medicines",
    "shilajit",
    "sugar management",
    "gym fitness ayurveda",
    "heart health",
    "liver health",
    "vedapure",
  ],
  robots: { index: true, follow: true },
};

const FONTS =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' rx='8' fill='%230E3B2E'/><path d='M20 8C14 14 12 20 20 32C28 20 26 14 20 8Z' fill='%23D48C11'/></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

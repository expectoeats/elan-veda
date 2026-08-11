import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:       "#F0F7F2",
        "canvas-tint":"#E5F2EA",
        "canvas-card":"#FFFFFF",
        "canvas-deep":"#D4E8DC",

        "brand-green-dark":  "#1A6D3A",
        "brand-green":       "#228B4A",
        "brand-green-mid":   "#2E9F58",
        "brand-green-light": "#4CAF78",
        "brand-green-pale":  "#D4EDDA",

        "text-dark":   "#1A1A1A",
        "text-body":   "#333333",
        "text-muted":  "#666666",
        "text-light":  "#888888",

        "gold-dark":   "#8B6914",
        gold:          "#B8860B",
        "gold-light":  "#DAA520",

        "red-dark":    "#A0322C",
        red:           "#C0392B",

        "nav-bg":      "#008566",
      },
      fontFamily: {
        poppins: ['"Poppins"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"Poppins"', "system-ui", "-apple-system", "sans-serif"],
        body:    ['"Poppins"', "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "20px",
      },
      boxShadow: {
        "card": "0 2px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 28px rgba(26,109,58,0.15)",
        "green": "0 4px 16px rgba(34,139,74,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

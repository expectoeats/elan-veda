import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF8F5",
        surface: "#FFFFFF",
        "surface-border": "#EAE5DC",

        brand: "#0E3B2E",
        "brand-light": "#155743",
        accent: "#D48C11",
        "accent-light": "#F0A82D",

        ink: "#1A2421",
        muted: "#5B6B65",

        "badge-green-bg": "#E8F5E9",
        "badge-green-text": "#128807",
        "badge-red-bg": "#FFEBEE",
        "badge-red-text": "#D32F2F",

        "search-border": "#E2DCD1",
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 20px rgba(14, 59, 46, 0.06)",
        "card-hover": "0px 8px 28px rgba(14, 59, 46, 0.12)",
        cta: "0px 6px 18px rgba(14, 59, 46, 0.22)",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};

export default config;

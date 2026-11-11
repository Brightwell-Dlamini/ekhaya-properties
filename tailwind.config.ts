import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1A1A1A",
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#999999",
          400: "#666666",
          500: "#4D4D4D",
          600: "#333333",
          700: "#262626",
          800: "#1A1A1A",
          900: "#0D0D0D",
        },
        sand: {
          DEFAULT: "#F5F2EB",
          50: "#FDFCFA",
          100: "#F5F2EB",
          200: "#EBE6DB",
          300: "#D9D0C0",
          400: "#C4B8A3",
        },
        copper: {
          DEFAULT: "#D35400",
          50: "#FEF3E9",
          100: "#FCE4CC",
          200: "#F8C499",
          300: "#F4A366",
          400: "#E87D33",
          500: "#D35400",
          600: "#B34700",
          700: "#8F3900",
          800: "#6B2B00",
          900: "#471C00",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

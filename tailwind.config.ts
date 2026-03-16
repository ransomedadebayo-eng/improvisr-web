import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0D1221",
          800: "#141E33",
          700: "#1A2540",
          600: "#1E2D4D",
          500: "#243756",
        },
        accent: "#FF9430",
        gold: "#F5B542",
        teal: "#4ECDC4",
        muted: "#A0AEC0",
        "muted-light": "#CBD5E0",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14161F",
        muted: "#565971",
        blue: "#2454E0",
        violet: "#7C3AED",
        surface: "#FAFAF9",
        card: "#FFFFFF",
        subtle: "#F1F2F8"
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(20, 22, 31, 0.05), 0 2px 6px -1px rgba(20, 22, 31, 0.03)",
        card: "0 10px 30px -5px rgba(20, 22, 31, 0.06), 0 2px 8px -2px rgba(20, 22, 31, 0.04)",
        glow: "0 0 35px -5px rgba(36, 84, 224, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14161F",
        muted: "#565971",
        blue: "#2454E0",
        violet: "#7C3AED"
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

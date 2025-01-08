import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-bold': ['var(--font-serif-bold)', 'serif'],
        'serif-reg': ['var(--font-serif-reg)', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "#131213",
        "secondary": "#1f1e1f",
        "text-primary": "#fdf3f9"

      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.39, 0.21, 0.82, 0.51)',
      },
    },
  },
  plugins: [],
};
export default config;

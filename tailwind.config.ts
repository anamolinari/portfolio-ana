import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "var(--shadow-custom)",
        project: "var(--shadow-project)",
        lab: "var(--shadow-lab)",
      },
      darkMode: "class",
      letterSpacing: {
        "-tight": "-0.02em",
      },
      colors: {
        background: "var(--background)",
        button: "var(--button)",
        card: "var(--card)",
        subtle: "var(--subtle)",
        link: "var(--link)",

        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-subtle)",
        contrast: "var(--text-contrast)",

        border: {
          primary: "var(--border-primary)",
          opaque: "var(--border-opaque)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

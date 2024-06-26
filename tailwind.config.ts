import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          1: '#2b2a2a'
        },
        blue: {
          1: '#000033',
          2: '#020264',
          3: '#bdbdea',
          4: '#3A3AE5',
        },
        sky: {
          1: '#c9ddff',
        },
        box: {
          1: '#AE5EFF',
          2: '#5effae',
          3: '#f5813e',
          4: '#C891FF',
        },
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
        clerk: "url('/images/background.png')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
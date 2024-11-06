import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#f2faf6", 
          primary: {
            DEFAULT: "#0E793C",
            foreground: "#000000",
          },
          focus: "#45D483",
        },
      },
      dark: {
        colors: {
          background: "#0c0d0c", 
          primary: {
            DEFAULT: "#0E793C",
            foreground: "#000000",
          },
          focus: "#095028",
        },
      },
    },
  })],
};

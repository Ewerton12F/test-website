/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: "var(--font-dmsd)",
        jost: "var(--font-jost)",
        oswald: "var(--font-oswald)",
        lexend: "var(--font-lexend)",
      },
      colors: {
        primary: "#02142E",
        secondary: "#FFC759",
        "old-paper": "#FFF4DE",
      },
    },
  },
  plugins: [],
};

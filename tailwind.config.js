/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#02142E',
            'secondary': '#FFC759',
            'old-paper': '#FFF4DE',
        },
        fontFamily: {
            DM: ['DM Serif Display', 'serif'],
            Jost: ['Jost', 'sans-serif'],
            Oswald: ['Oswald', 'sans-serif'],
            Lexend: ['Lexend', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

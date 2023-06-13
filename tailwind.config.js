/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: 'var(--font-dmsd)',
        jost: 'var(--font-jost)',
        oswald: 'var(--font-oswald)',
        lexend: 'var(--font-lexend)',
        quattrocento: 'var(--font-quattrocento)'
      },
      colors: {
        primary: '#02142E',
        pshadow: '#182C47',
        secondary: '#FFC759',
        'old-paper': '#FFE1A6',
        zap: '#25D366'
      }
    }
  },
  plugins: []
};

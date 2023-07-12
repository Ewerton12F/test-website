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
        cardo: 'var(--font-cardo)',
        jost: 'var(--font-jost)',
        oswald: 'var(--font-oswald)',
        lexend: 'var(--font-lexend)',
        quattrocento: 'var(--font-quattrocento)'
      },
      colors: {
        primary: '#020E52',
        pshadow: '#020E52',
        secondary: '#FFCA42',
        paper: '#F2D6AE',
        zap: '#25D366'
      },
      animation: {
        text: 'text 5s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    }
  },
  plugins: []
};

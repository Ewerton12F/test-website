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
        dm: 'var(--font-dm)',
        cardo: 'var(--font-cardo)',
        jost: 'var(--font-jost)',
        oswald: 'var(--font-oswald)',
        lexend: 'var(--font-lexend)',
        quattrocento: 'var(--font-quattrocento)',
        volk: 'var(--font-volk)'
      },
      colors: {
        primary: '#1B3764',
        grayblue: '#4D6080',
        graybluedark: '#071B3B',
        pshadow: '#F6F8FC',
        secondary: '#FFCA42',
        secondarydark: '#FFB700',
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
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
  },
  plugins: []
};

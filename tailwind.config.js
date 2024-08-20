/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        maincolor: '#F55E36',
        bgcolor: '#212121',
        lightcolor: '#FDFBFB'
      },
      fontFamily: {
        montserrat: 'var(--montserrat)',
        opensans: 'var(--opensans)',
        lato: 'var(--lato)',
      },
      fontSize: {
        'xxs': '0.4rem', // Adicionando tamanhos personalizados
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '1': '0.25rem', // Adicionando espaçamento personalizado
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
      },
    },
  },
  plugins: [],
};

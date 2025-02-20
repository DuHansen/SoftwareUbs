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
    },
  },
  plugins: [],
};




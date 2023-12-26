/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '45': '-45deg',
      },
      colors:{
        'salmon': '#E7C192',
        'transparent': 'rgb(0,0,0,0)',
        'half-transparent':'rgb(0,0,0,0.8)';
      },
      transitionProperty: {
        'width':'width'
      }  
    },
  },
  plugins: [],
}


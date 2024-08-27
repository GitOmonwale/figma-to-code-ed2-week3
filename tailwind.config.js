/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem',
      },
      colors: {
        lightGray: '#F3F4F6',
        gray: '#D1D5DB',
        darkGray: '#6B7280',
        dark: '#1D1D1D',
        yellow: '#F2D604',
        lightGreen:'#01B13026',
        green: '#01B130',
        lightRed:'#CB010124',
        red: '#CB0101',
        lightBlue:'#006EFF0F',
        blue: '#006EFF',
        darkBlue: '#0065EA'
      },
      fontFamily:{
        'mona-sans': ['mona-sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode:"class",
}
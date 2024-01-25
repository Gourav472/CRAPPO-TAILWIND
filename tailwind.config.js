/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Gilroy': ('Gilroy-font'),
        'inter': "'Inter', sans-serif",
        'Konexy-Personal-Use':('Konexy-font'),
        'Jost': "'Jost', sans-serif",
        'Rubik': "'Rubik', sans-serif",
      },
      boxShadow: {
        '5xl':'0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
        '3xl': ' 0px 0px 18.571px 0px #E5E9F6',
        '4xl': ' 0px 4px 20px 0px rgba(96, 34, 234, 0.20)',
        '6xl': '12.114px 48.457px 60.571px 0px rgba(229, 233, 246, 0.40)',
        '7xl': '0px 0px 50px 5px rgba(39, 0, 124, 0.50)',
        '8xl': ' 0px 40px 80.571px 0px #E5E9F6',
        '9xl': ' 0px 0px 80.571px 0px #E5E9F6',
      },
    },
  },
  plugins: [],
}


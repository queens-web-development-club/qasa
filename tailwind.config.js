/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      }
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'red-dark': '#E03F23',
      'red-light': '#E75E4B',
      'beige': '#FDF5EA',
      'blue-light': '#99BBCC',
      'blue-dark': '#7698B3'
    }
  },
  plugins: [],
  darkMode: 'class',
}

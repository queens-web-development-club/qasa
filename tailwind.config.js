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
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        fadeOut: "fadeOut 2s ease-out backwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
      fontFamily: {
        LeagueSpartan: ['League Spartan', 'sans-serif'],
        DMSans: ['DM Sans', 'sans']
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

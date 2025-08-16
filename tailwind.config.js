/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexenddeca: ["Lexend Deca", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "theme-color-light": "#9165A0",
        "theme-color-dark": "#660C7C",
        "theme-color-dark-purple": "#461058",
        'custom-gray': "#494949",
        "black": '#000000',
      },
      fontSize: {
        "32xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  
};

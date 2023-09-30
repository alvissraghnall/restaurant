const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, .7)",
        dimBlue: "rgba(9, 151, 124, .1)",
        golden: "#DCCA87",
        blaque: "#0C0C0C",
        crimson: "#F5EFDB",
        yarg: "#545454",

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        cormorant: ['Cormorant Upright', ...defaultTheme.fontFamily.serif],
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.serif]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "798px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxl: "2000px"
    },
  },
  plugins: [],
}

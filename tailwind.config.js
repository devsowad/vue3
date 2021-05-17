module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#7654b1",
        secondary: "#444",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

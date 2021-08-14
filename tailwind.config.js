module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blackDisplay: "#414050",
        blackBody: "#5E5E6B",
        blue: {
          100: "#FFFFFF",
          200: "#F1F4F8",
          300: "#F1EFFF",
          400: "#92CBFF",
          500: "#6F8FFF",
          500.5: "#7D70FE",
          600: "#4F3DFE",
          700: "#21407C",
          800: "#0B0A1F",
          800.5: "#90929E",
          800.1: "#A7A7AF",
        },
      },
      fontFamily: {
        display: ["Red Hat Display", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

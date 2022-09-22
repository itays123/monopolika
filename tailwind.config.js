const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        productCardText: "",
      },
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      cyan: colors.cyan,
      pink: colors.pink,
      slate: colors.slate,
      orange: colors.orange,
      emerald: colors.emerald,
    },
  },
  plugins: [],
};

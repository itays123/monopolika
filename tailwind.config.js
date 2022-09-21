const colors = require("tailwindcss/colors");

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
    },
    colors: {
      cyan: colors.cyan,
      pink: colors.pink,
      slate: colors.slate,
    },
  },
  plugins: [],
};

const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    path.join(__dirname, "./packages/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "./.storybook/preview.tsx"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

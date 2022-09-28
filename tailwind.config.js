/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./packages/**/*.ts",
    "./packages/**/*.tsx",
    "./.storybook/preview.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#47E9FF",
        light: "#f5f5f5",
        dark: "#0D0D0D",
      },
    },
  },
  plugins: [],
};

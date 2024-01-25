/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070608",
        text: "#f0edf1",
        primary: "#6b0b23",
        secondary: "#8a1342",
        accent: "#e43b4f",
      }
    },
  },
  plugins: [],
}


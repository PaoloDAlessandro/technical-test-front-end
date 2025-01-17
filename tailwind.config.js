/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        grey: "#cfcec9",
        green: "#43D991",
        error: "#FA5D42",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

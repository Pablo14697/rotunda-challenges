/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        84: "21rem",
        140: "35rem",
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};

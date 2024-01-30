/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        bglogin: "#605BFF",
        navtext: "#9A9AA9",
      },
      fontFamily: {
        mono: ["Montserrat", "sans-serif"],
        lato: ["lato", "sans-serif"],
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

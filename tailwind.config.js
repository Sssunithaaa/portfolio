/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1e0121",
        secondary: "#f5e4f7",
        tertiary: "#2b072e",
        bluee: "151030",
        lightbluee: "050816",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        waves: "url('/src/assets/waves.jpg')",
      },
    },
  },
  plugins: [],
};

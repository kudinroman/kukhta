/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        200: "#d2d2d2",
        300: "#808080",
        400: "#505050",
        // ...
        900: "#1a202c",
      },

      // ...
    },
    fontFamily: {
      cormorant: [
        "Cormorant Garamond",
        "Roboto",
        "Open Sans",
        "Abhaya Libre",
        "serif",
      ],
      openSans: [
        "Open Sans",
        "ROBOTO",
        "Open Sans",
        "Abhaya Libre",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};

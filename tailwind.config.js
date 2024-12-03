/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c11912",
      },

      fontFamily: {
        poppins: ["Proppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem"
        },
      }
    },
  },
  plugins: [],
}


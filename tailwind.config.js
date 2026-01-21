/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        navy: "#0a192f",
        slate: "#8892b0",
        lightSlate: "#ccd6f6",
        accent: "#64ffda",
      },
    },
  },
  plugins: [],
}


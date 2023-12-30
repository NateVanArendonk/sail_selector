/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
],
  theme: {
    extend: {
      colors: {
        'primary-color': '#22577a',
        'second-color': '#38a3a5',
        'third-color': '#57cc99',
      }
    },
  },
  plugins: [],
}

// require("tw-elements-react/dist/plugin.cjs")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary : '#3C5EAB',
        secondary : '#29253C',
        secondaryTwo: '#d85f02',
        tertiary  : '#E46C0A'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
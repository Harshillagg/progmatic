const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#0e7490',
        light: '#F6F5F3',
        dark: '#0A0A0A',
      }
    }
  },
  plugins: [flowbite.plugin()]
}

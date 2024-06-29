const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: '#0e7490',
        light: '#F6F5F3',
        dark: '#0A0A0A',
        gold: '#FFD700',
        livenow: "#6DC956",
        secondary: "#1E1F25",
      }
    }
  },
  plugins: [flowbite.plugin()]
}

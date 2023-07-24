/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'ui-serif'],
    },
    extend: {
      colors: {
        'green': '#2a977d',
        'grey-light': '#eaeaea',
      },
    },
  },
  plugins: [],
}
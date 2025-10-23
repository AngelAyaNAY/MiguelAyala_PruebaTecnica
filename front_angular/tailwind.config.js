/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ['"Zen Dots"', 'sans-serif'],
        saira: ['"Saira"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'onyx': "#403F4C",
        'raisin-black': "#2C2B3C",
        'gunmetal': "#1B2432",
        'rich-black': "#121420",
        'indian-red': "#B76D68"
      }
    },
  },
  plugins: [],
}